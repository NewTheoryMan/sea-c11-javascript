function oldestLivingFather(people){
    var OPFather = _.pluck(people, 'father'); //checks if a person object is a father value of another perons object in the people array
    var OPAge = 0; //will be used to store the greatest age value out of all the people objects. In so doing, we ignore/rule out those who do not have an age value (dead)
    var OPName = ''; //will be used to store the name value of the oldest person object fromt he people array

    
    _.each(people, function(person) { //designates that objects from the people array are called person
            if (person.age) { //uses the age value from person objects as an argument
                if (person.age > OPAge) { //argues that a person object's age value should be grater than the given OPAge value (this will end up looping to find the highest age value?)
                    OPAge = person.age; // based off the arguement, this equates OPAge to be equal to the gratest person object's age value from the people array 
                    OPName = person.name; //based off the argument, this equates OPName to be the name value of the person object with the greatest age value
                }
            }
    });
}
oldestLivingFather(people)