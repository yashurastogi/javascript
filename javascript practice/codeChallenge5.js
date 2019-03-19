/* 
create and compare BMI of john and marry
BMI = mass/weight^2
1. create object with firstname, last name, mass, weight
2. create method BMI and calculate BMI
3. store BMI in object and call it
4. compare BMI of two and print who has highest BMI
*/
var calBMI =
{
    calculateBMI: function()
{
    this.BMI = this.mass/this.height;
    
}
};   
var john = 
{
firstname: 'John',
lastname: 'Smith',
mass : 60,
height :160,

/*calBMI : function()
{
    this.BMI = this.mass/(this.height);
  }
*/
};
var marry = 
{
firstname: 'Marry',
lastname: 'Smith',
mass :80,
height: 140,
//nh:calBMI.calculateBMI.call(marry),
//kj:566
/*calBMI: function()
{
this.BMI = this.mass/ (this.height^2);
}*/
};

var x=calBMI.calculateBMI.call(john);
console.log(marry);
console.log(x);
