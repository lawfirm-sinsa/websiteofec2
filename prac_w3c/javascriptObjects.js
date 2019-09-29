var car = {type:'fiat', model:'500', color:'red'};
console.log(car);
var person = {
    firstname : 'hoseong',
    lastname : 'cheon',
    age : 36,
    job : 'lawywer',
    married : 'yes',
    fullname : function() {
        return this.firstname + ' ' +this.lastname;
    }
};
console.log(person);
person.name = 'logan';
person.body = 'lon';
person['age'] = 24;
console.log(person);
var name2 = person.fullname();
console.log(name2);

