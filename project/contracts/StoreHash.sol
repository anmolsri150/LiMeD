pragma solidity >= 0.4 .22 < 0.7 .0;
pragma experimental ABIEncoderV2;

contract Hospital {
    uint256 public index;
    struct hospital {
        uint256 id;
        string name;
        string streetAddress;
        string contact;
        address addr;
    }
    mapping(address => hospital) hospitals;
    mapping(address => bool) isHospital;
    address[] public hospitalList;

    modifier onlyHospital() {
        require(isHospital[msg.sender], "Only Hospitals can do that.");
        _;
    }

    function addHospital(string memory _name, string memory _address, string memory _contact, address _addr) public {
        require(!isHospital[_addr], "Already a Hospital");
        hospitalList.push(_addr);
        index = index + 1;
        isHospital[_addr] = true;
        hospitals[_addr] = hospital(index, _name, _address, _contact, _addr);
    }

    function getHospitalById(uint256 _id) public view returns(uint256 id, string memory name, string memory streetAddress, string memory contact, address addr) {
        uint256 i = 0;
        for (; i < hospitalList.length; i++) {
            if (hospitals[hospitalList[i]].id == _id) {
                break;
            }
        }
        require(hospitals[hospitalList[i]].id == _id, "Hospital ID doesn't exists");
        hospital memory tmp = hospitals[hospitalList[i]];
        return (tmp.id, tmp.name, tmp.streetAddress, tmp.contact, tmp.addr);
    }

    function getHospitalByAddress(address _address) public view returns(uint256 id, string memory name, string memory streetAddress, string memory contact, address addr) {
        require(isHospital[_address], "Hospital doesn't exist");
        hospital memory tmp = hospitals[_address];
        return (tmp.id, tmp.name, tmp.streetAddress, tmp.contact, tmp.addr);
    }

}

contract Patient is Hospital {
    uint256 public pindex = 0;

    struct Records {
        string name;
        string category;
        string description;
        string status;
        string date;
        string ipfs;
    }

    struct patient {
        uint256 id;
        address addr;
        string name;
        string phone;
        string gender;
        string dob;
        string bloodgroup;
        Records[] records;
    }

    address[] private patientList;
    mapping(address => mapping(address => bool)) isAuth;
    mapping(address => patient) patients;
    mapping(address => bool) isPatient;


    function addRecord(address _addr, string memory _name, string memory _category, string memory _date, string memory _ipfs, string memory _desc, string memory _stat) public onlyHospital {
        require(isPatient[_addr], "User Not registered");
        patients[_addr].records.push(Records(_name, _category, _desc, _stat, _date, _ipfs));
    }

    function addPatient(string memory _name, string memory _phone, string memory _gender, string memory _dob, string memory _bloodgroup, address _addr) public onlyHospital {
        require(!isPatient[_addr], "Already Patient account exists");
        patientList.push(_addr);
        pindex = pindex + 1;
        isPatient[_addr] = true;
        isAuth[_addr][_addr] = true;
        patients[_addr].id = pindex;
        patients[_addr].name = _name;
        patients[_addr].phone = _phone;
        patients[_addr].gender = _gender;
        patients[_addr].dob = _dob;
        patients[_addr].bloodgroup = _bloodgroup;
        patients[_addr].addr = _addr;
    }

    function getPatientDetails(address _addr) public view returns(string memory _name, string memory _phone, string memory _gender, string memory _dob, string memory _bloodgroup) {
        if (!isHospital[msg.sender]) {
            require(isPatient[_addr], "No Patients found with the given address");
            require(isAuth[_addr][msg.sender], "No permission to get Records");
        }
        patient memory tmp = patients[_addr];
        return (tmp.name, tmp.phone, tmp.gender, tmp.dob, tmp.bloodgroup);
    }

    function getPatientRecords(address _addr) public view returns(string[] memory _name, string[] memory _category, string[] memory _description, string[] memory _status, string[] memory _date, string[] memory ipfs) {
        if (!isHospital[msg.sender]) {
            require(isAuth[_addr][msg.sender], "No permission to get Records");
            require(isPatient[_addr], "patient not signed in to our network");
        }
        require(patients[_addr].records.length > 0, "patient record doesn't exist");
        string[] memory name = new string[](patients[_addr].records.length);
        string[] memory category = new string[](patients[_addr].records.length);
        string[] memory description = new string[](patients[_addr].records.length);
        string[] memory status = new string[](patients[_addr].records.length);
        string[] memory date = new string[](patients[_addr].records.length);
        string[] memory IPFS = new string[](patients[_addr].records.length);
        for (uint256 i = 0; i < patients[_addr].records.length; i++) {
            name[i] = patients[_addr].records[i].name;
            category[i] = patients[_addr].records[i].category;
            description[i] = patients[_addr].records[i].description;
            status[i] = patients[_addr].records[i].status;
            date[i] = patients[_addr].records[i].date;
            IPFS[i] = patients[_addr].records[i].ipfs;
        }
        return (name, category, description, status, date, IPFS);
    }

    function addAuth(address _addr) public returns(bool success) {
        require(!isAuth[msg.sender][_addr], "Already Authorised");
        require(msg.sender != _addr, "Cant add yourself");
        isAuth[msg.sender][_addr] = true;
        return true;
    }

    function revokeAuth(address _addr) public returns(bool success) {
        require(msg.sender != _addr, "Cant remove yourself");
        require(isAuth[msg.sender][_addr], "Already Not Authorised");
        isAuth[msg.sender][_addr] = false;
        return true;
    }
}
