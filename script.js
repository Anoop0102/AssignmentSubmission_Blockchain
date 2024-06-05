/*
window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await ethereum.request({ method: 'eth_requestAccounts' });
            // Acccounts now exposed
        } catch (error) {
            console.error("User denied account access");
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    const abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_usn",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_question1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_question2",
                    "type": "string"
                }
            ],
            "name": "addResume",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getResume",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "usn",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "question1",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "question2",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Resume.ResumeData",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const address = '0x085b75A6492b145479B8779CB4e0c3d23B7433F0'; // Replace with your contract address

    const contract = new web3.eth.Contract(abi, address);

    document.getElementById('resumeForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const usn = document.getElementById('usn').value;
        const question1 = document.getElementById('question1').value;
        const question2 = document.getElementById('question2').value;

        const accounts = await web3.eth.getAccounts();
        const senderAddress = "0x689F1b62582824ede1941b983e9a875c30B86476";
//editing from here
    try {
        const receipt = await contract.methods.addResume(name, usn, question1, question2)
            .send({ from: senderAddress, gas: 3000000 });

        if (receipt.status) {
            alert('Resume uploaded successfully!');
        } else {
            alert('Error uploading resume. Transaction failed.');
        }
    } catch (error) {
        console.error('Error uploading resume:', error);
        alert('Error uploading resume. Please check the console for details.');
    }

    });
});

*/
window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error("User denied account access");
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    const abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_usn",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_question1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_question2",
                    "type": "string"
                }
            ],
            "name": "uploadAssignment",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getAssignment",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "usn",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "question1",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "question2",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Assignment.AssignmentData",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const address = '0x9F113C2E48e05304E3A02F1974776aF28d0d6aC6'; // Replace with your contract address

    const contract = new web3.eth.Contract(abi, address);

    document.getElementById('assignmentForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const usn = document.getElementById('usn').value;
        const question1 = document.getElementById('question1').value;
        const question2 = document.getElementById('question2').value;

        const accounts = await web3.eth.getAccounts();
        const senderAddress = '0x2abBEf3CE13e4851EB0895E93b737F5bBcc42AbB';

        try {
            const receipt = await contract.methods.uploadAssignment(name, usn, question1, question2).send({ from: senderAddress, gas: 3000000 });

            if (receipt.status) {
                alert('Assignment uploaded successfully!');
            } else {
                alert('Error uploading assignment. Transaction failed.');
            }
        } catch (error) {
            console.error('Error uploading assignment:', error);
            alert('Error uploading assignment. Please check the console for details.');
        }
    });
});
