/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName, lastName, age, married = false){
  if(firstName === undefined){
    firstName = 'Anonymous'
  }else if(lastName === undefined){
    lastName = 'Person'
  }

  
  
  const person = {

    firstName,
    lastName,
    age,
    married,

    goingOn:  function(){
      return this.age + 1
    },

    ageUp: function(){
      person.age++
    },

    getFullName: function(){
      return this.firstName + ' ' + this.lastName
    },

    marry: function(suitor){
      this.married = true;
      suitor.married = true;
      this.spouseName = suitor.firstName + ' ' + suitor.lastName;
      suitor.spouseName = this.firstName + ' ' + this.lastName
    },

    divorce: function(suitor){
      this.married = false;
      suitor.married = false;
      delete this.spouseName;
      delete suitor.spouseName;

      
    }
    


  };


 
  




  return person
}







/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
