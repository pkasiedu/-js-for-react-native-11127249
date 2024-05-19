function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage
const originalNames = ["Ebgert", "Jeff", "Charles", "Christian", "Ama"];
const modifiedNames = ["EBGERT", "jeff", "CHARLES", "christian", "AMA"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);