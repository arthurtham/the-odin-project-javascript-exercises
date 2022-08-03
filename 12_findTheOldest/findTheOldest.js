const findTheOldest = function(people) {
    let ages = people.map(person => {
        return (person.yearOfDeath) ? (
            person.yearOfDeath - person.yearOfBirth
        ) : (
            new Date(Date.now()).getFullYear() - person.yearOfBirth
        );
    })
    let maxAge = Math.max(...ages);
    let maxAgeIndex = ages.indexOf(maxAge);
    //console.log(people[maxAgeIndex]);
    return people[maxAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
