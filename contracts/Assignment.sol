/*pragma solidity ^0.8.0;

contract Resume {
    struct ResumeData {
        string name;
        string usn;
        string question1;
        string question2;
    }

    mapping(address => ResumeData) public resumes;

    event ResumeUploaded(
        address indexed user,
        string name,
        string usn,
        string question1,
        string question2
    );

    function addResume(
        string memory _name,
        string memory _usn,
        string memory _question1,
        string memory _question2
    ) public returns (bool) {
        resumes[msg.sender] = ResumeData(_name, _usn, _question1, _question2);
        emit ResumeUploaded(msg.sender, _name, _usn, _question1, _question2);
        return true; // Indicate success
    }

    function getResume(address _user) public view returns (ResumeData memory) {
        return resumes[_user];
    }
}
*/
pragma solidity ^0.8.0;

contract Assignment {
    struct AssignmentData {
        string name;
        string usn;
        string question1;
        string question2;
    }

    mapping(address => AssignmentData) public assignments;

    event AssignmentUploaded(
        address indexed user,
        string name,
        string usn,
        string question1,
        string question2
    );

    function uploadAssignment(
        string memory _name,
        string memory _usn,
        string memory _question1,
        string memory _question2
    ) public returns (bool) {
        assignments[msg.sender] = AssignmentData(_name, _usn, _question1, _question2);
        emit AssignmentUploaded(msg.sender, _name, _usn, _question1, _question2);
        return true; // Indicate success
    }

    function getAssignment(address _user) public view returns (AssignmentData memory) {
        return assignments[_user];
    }
}

