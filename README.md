# LiMeD
[View Live](https://limed-gecko.web.app/)

## The problem LiMeD solves
While the most developed countries in the world saw failing medical facilities, Taiwan was preparing itself for a major outbreak for 17 years (since the SARS outbreak). The preparation included using medical and travel records of citizens and categorizing high-risk personnel. This led to the free and safe movement of other citizens and provided medical assistance in time. As of today, Taiwan has 15K Cases and around 700 deaths.

This can be proof of concept that enough data with the right authorities can be leveraged to help people.

We propose a Blockchain-based Medical system where an individual and authority have access to medical history. Hospitals can add the records when a patient is admitted and individuals can share their data with limited access with others.

The report of the patient is attached to a shared NFT based storage, for which the access key is encrypted over the NuCypher Network, and special privileges are given to medical authorities, the person. For maintaining a user or a client-side profile we leverage portis over a mobile or web app where a person can view their records, and request a limited period view-access to someone else’s records which will be queried using an endpoint provided by The Graph.

People shall receive an incentive to update their medical profile, and in return, their records can be treated as NFT’s to get Medical Treatment (via Smart Contract). Also, this will lead to the study of individual and community health and changes with time.

In the future, this can be extended to Universal Health Care and provide better facilities to people. This shall also reduce the time of treatments as the ailments of the person are already known and the side effects of any medication can be predicted.

## Challenges we ran into
Implementation of encryption and role-based access system. (Using NuCypher for handling role-based access)
Granting access to users for a specified time duration.
Structuring a person's medical data.
Querying data stored in different formats
Change in Medical record storage format. For Eg Newer format for 3D scans like MRI or CT.

## Technologies we used
IPFS Portis Filecoin
