pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;

contract ownable {
    address public owner;
    mapping(address=>bool) isAdmin;
    event OwnerChanged(address indexed _from,address indexed _to);
    constructor() public{
        owner=msg.sender;
    }

    modifier onlyOwner(){
        require(owner == msg.sender,"Only Owner has permission to do that action");
        _;
    }

    function setOwner(address _owner) public onlyOwner returns(bool success){
        require(msg.sender!=_owner,"Already Your the owner");
        owner = _owner;
        emit OwnerChanged(msg.sender, _owner);
        return true;
    }
}

contract Hospital is ownable {
    uint256 public index;
    mapping(address=>bool) isHospital;
    struct hospital {
        uint256 id;
        string hname;
        string haddress;
        string hcontact;
        address addr;
        bool isApproved;
    }
    mapping(address=>hospital) hospitals;
    address[] public hospitalList;

    modifier onlyHospital(){
        require(isHospital[msg.sender],"Only Hospitals can add patient");
        _;
    }


    modifier onlyHospitalRecord(){
        require(isHospital[msg.sender],"Only Hospitals can add record");
        _;
    }

    function addHospital(string memory _hname,string memory _haddress,string memory _hcontact,address _addr) public{
        require(!isHospital[_addr],"Already a Hospital");
        hospitalList.push(_addr);
        index = index + 1;
        isHospital[_addr]=true;
        hospitals[_addr]=hospital(index,_hname,_haddress,_hcontact,_addr,true);
    }

    function getHospitalById(uint256 _id) public view returns(uint256 id,string memory hname,string memory haddress , string memory hcontact ,address addr , bool isApproved)  {
        uint256 i=0;
        for(;i<hospitalList.length;i++){
            if(hospitals[hospitalList[i]].id==_id){
                break;
            }
        }
        require(hospitals[hospitalList[i]].id==_id,"Hospital ID doesn't exists");
        hospital memory tmp = hospitals[hospitalList[i]];
        return (tmp.id,tmp.hname,tmp.haddress,tmp.hcontact,tmp.addr,tmp.isApproved);
    }

    function getHospitalByAddress(address _address) public view returns(uint256 id,string memory hname,string memory haddress , string memory hcontact ,address addr , bool isApproved) {
        require(hospitals[_address].isApproved,"Hospital is not Approved or doesn't exist");
        hospital memory tmp = hospitals[_address];
        return (tmp.id,tmp.hname,tmp.haddress,tmp.hcontact,tmp.addr,tmp.isApproved);
    }

}

contract Patient is Hospital{

    uint256 public pindex=0;

    struct Records {
    string hname;
    string reason;
    string admittedOn;
    string dischargedOn;
    string ipfs;
    }

    struct patient{
        uint256 id;
        string name;
        string phone;
        string gender;
        string dob;
        string bloodgroup;
        Records[] records;
        address addr;
    }

    address[] private patientList;
    mapping(address=>mapping(address=>bool)) isAuth;
    mapping(address=>patient) patients;
    mapping(address=>bool) isPatient;


    function addRecord(address _addr,string memory _hname,string memory _reason,string memory _admittedOn,string memory _dischargedOn,string memory _ipfs) public onlyHospitalRecord {
        require(isPatient[_addr],"User Not registered");
        patients[_addr].records.push(Records(_hname,_reason,_admittedOn,_dischargedOn,_ipfs));

    }

    function addPatient(string memory _name,string memory _phone,string memory _gender,string memory _dob,string memory _bloodgroup, address _addr) public onlyHospital {
        require(!isPatient[_addr],"Already Patient account exists");
        patientList.push(_addr);
        pindex = pindex + 1;
        isPatient[_addr]=true;
        isAuth[_addr][_addr]=true;
        patients[_addr].id=pindex;
        patients[_addr].name=_name;
        patients[_addr].phone=_phone;
        patients[_addr].gender=_gender;
        patients[_addr].dob=_dob;
        patients[_addr].bloodgroup=_bloodgroup;
        patients[_addr].addr=_addr;
    }

    function getPatientDetails(address _addr) public view returns(string memory _name,string memory _phone,string memory _gender,string memory _dob,string memory _bloodgroup) {
        if (!isHospital[msg.sender]) {
            require(isAuth[_addr][msg.sender],"No permission to get Records");
            require(isPatient[_addr],"No Patients found at the given address");
        }
        patient memory tmp = patients[_addr];
        return (tmp.name,tmp.phone,tmp.gender,tmp.dob,tmp.bloodgroup);
    }

    function getPatientRecords(address _addr) public view returns(string[] memory _hname,string[] memory _reason,string[] memory _admittedOn,string[] memory _dischargedOn,string[] memory ipfs){
        if (!isHospital[msg.sender]) {
            require(isAuth[_addr][msg.sender],"No permission to get Records");
            require(isPatient[_addr],"patient not signed in to our network");
        }
        require(patients[_addr].records.length>0,"patient record doesn't exist");
        string[] memory Hname = new string[](patients[_addr].records.length);
        string[] memory Reason = new string[](patients[_addr].records.length);
        string[] memory AdmOn = new string[](patients[_addr].records.length);
        string[] memory DisOn = new string[](patients[_addr].records.length);
        string[] memory IPFS = new string[](patients[_addr].records.length);
        for(uint256 i=0;i<patients[_addr].records.length;i++){
            Hname[i]=patients[_addr].records[i].hname;
            Reason[i]=patients[_addr].records[i].reason;
            AdmOn[i]=patients[_addr].records[i].admittedOn;
            DisOn[i]=patients[_addr].records[i].dischargedOn;
            IPFS[i]=patients[_addr].records[i].ipfs;
        }
        return(Hname,Reason,AdmOn,DisOn,IPFS);
    }

    function addAuth(address _addr) public returns(bool success) {
        require(!isAuth[msg.sender][_addr],"Already Authorised");
        require(msg.sender!=_addr,"Cant add yourself");
        isAuth[msg.sender][_addr] = true;
        return true;
    }

    function revokeAuth(address _addr) public returns(bool success) {
        require(msg.sender!=_addr,"Cant remove yourself");
        require(isAuth[msg.sender][_addr],"Already Not Authorised");
        isAuth[msg.sender][_addr] = false;
        return true;
    }
}
