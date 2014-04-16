    var oldestAge = 0,
    oldestPersonsName = '';
    _.each(people, function(person) {
            if (person.age) {
                if (person.age > oldestAge) {
                    oldestAge = person.age;
                    oldestPersonsName = person.name;
                }
            }
    });   
return(oldestPersonsName);