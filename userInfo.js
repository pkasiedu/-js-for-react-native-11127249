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
const originalNames = ["Ebgert", "Jeff", "Charles", "Christian", "Aman"];
const modifiedNames = ["EBGERT", "JEFF", "charles", "christian", "AMAN"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
