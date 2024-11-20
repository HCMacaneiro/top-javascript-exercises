const findTheOldest = function(arr) {
    arr.sort((a, b) => {
        if ("yearOfDeath" in a && !("yearOfDeath" in b)) {
            const currentYear = new Date().getFullYear();
            const oldest = a.yearOfBirth - a.yearOfDeath;
            const youngest = b.yearOfBirth - currentYear;
            return oldest - youngest;
        }
        else if ("yearOfDeath" in b && !("yearOfDeath" in a)) {
            const currentYear = new Date().getFullYear();
            const oldest = a.yearOfBirth - currentYear;
            const youngest = b.yearOfBirth - b.yearOfDeath;
            return oldest - youngest;
        }
        const oldest = a.yearOfBirth - a.yearOfDeath;
        const youngest = b.yearOfBirth - b.yearOfDeath;
        return oldest - youngest;
    })

    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
