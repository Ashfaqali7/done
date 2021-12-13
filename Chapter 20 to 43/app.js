// chapter 21 - 25

// Question 1

// var firstName = prompt("Enter Your Frist Name");
// var lastName = prompt("Enter Your Name");
// var fullName = firstName+lastName;
// console.log("Asalamualakum",fullName);

//Question 2

// var arr = prompt("Enter your Favorite Phone Model");
// var length = arr.length;
// console.log(arr);
// console.log(length);


//Question 3


// var country = "pakistan";
// var indexOfN = country.indexOf("n");
// console.log("String :",country);
// console.log("Index of 'n'",indexOfN);

//Question 5

// var firstName = prompt("Enter Your Frist Name");
// var lastName = prompt("Enter Your Name");
// var fullName = firstName.concat(lastName);
// console.log("Asalamualakum",fullName);

//Question 6


//var city = "Hayderabad";

//document.write(newCity);

//Quastion 7


// var message = "Ali and Sami are best friends. They play Circket and football together";
// message = message.replace("and","&");
// document.write(message);


//Question 8

// var value = "472";
// console.log("value :",value);
// console.log("type : String")
// var valueType = parseInt("472");
// console.log("value ",valueType);
// console.log("type : Number");


//Question 9

// var fName = prompt("Enter name");
// var upperCase = fName.toUpperCase();
// console.log(upperCase);

//Question 10

// var lName = prompt("Enter name ");
// var lowerCase = lName.toLowerCase();
// console.log(lowerCase);


//Question 11

// var num = 35.36;
// console.log("Number :",num);
// var stringValue = num.toString();
// stringValue = "35.36";
// newValue = Math.trunc(stringValue);
// console.log("Result :",newValue);


//Question 13

//You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array. After searching, prompt the user whether the given
//item is found in the list or not.
//Note: Perform case insensitive search. Whether the user
//enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability. Example:

// chp 38 to 44

//Question 1

// function myValue(a,b){
    
//     var Result = Math.pow(a,b);
//     console.log(Result);
// }
// myValue(2,5);

//Question 2

// function leapYear(year){
//     switch(year){
//         case "2012":
//             console.log("leapYear");
//             break;
//         case "2016":
//             console.log("leapYear");
//             break;
//         case "2020":
//             console.log("leapYear");
//             break;
//             default:
//                 console.log("Not leapYear");    
//     }
// }
// leapYear(prompt());

//Question 3

// function triangle(a,b,c){
//     var S = (a+b+c)/2;
//     var area = Math.sqrt(S*((S-a)(S-b)(S-c)));
//     console.log(area);
// }
// triangle(4,5,7);



//  Chapter 26 to 30 

// Question 1 

/*
var pint = +prompt();
var c = Math.round(pint);
document.write("Number :",pint,"<br>");
document.write("Round off value : ",c ,"<br>");
var d =Math.floor(pint);
document.write("Floor value :",d,"<br>");
var e =Math.ceil(pint);
document.write("ceil value : ",e);
*/


// Question 2
/*var pint = +prompt("Enter Negative decimal number");
var c = Math.round(pint);
document.write("Number :",pint,"<br>");
document.write("Round off value : ",c ,"<br>");
var d =Math.floor(pint);
document.write("Floor value :",d,"<br>");
var e =Math.ceil(pint);
document.write("ceil value : ",e);
*/

// Question 3

/*
var value = +prompt();
var x = Math.abs(value);
document.write("The absolute value of ",value," is ",x);
*/

// Question 4

/*var diceRoll = Math.floor( Math.random() * 6 );
document.write('You rolled a ' + diceRoll);
*/

// Question 5

/*var coin = Math.floor( Math.random() * 2 );
document.write('You rolled a ' + coin);
*/

// Question 6

/*var f_100 = Math.floor( Math.random() * 100 );
document.write('Random number between 1 and 100 : ' + f_100);
*/

// Question 7



//Question 8

/*var num = Math.ceil(Math.random() * 10);
console.log(num);
var gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   alert('congratulate the number Matched');
  else
   alert('Not matched, the number was '+gnum);*/



   //chapter 31 t0 34


// Qustion no 1

// var currentDate = new Date();
// console.log(currentDate);



//Qustion no 2


// var currentDate = new Date();
// var months = ["january", "febuary", "March","Aprail","may", "June","July","Aujust","september", "octuber","November","December"];
// var month = currentDate.getMonth()
// console.log("Current Month : ",  months[month]);




//Qustion no 3

// var currentDate = new Date();
// var day = currentDate.getDay();

// var days = ["Sun","Mon", "Tues", "Wed", "Thus", "Fri", "sat",];
// console.log(days[day]);
 
 
// Qustion 4

// var currentDate = new Date();
//  var day = currentDate.getDay();

//  var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thusday", "Friday","saturday"];
//  if (day == 0 || day == 6) {
//    console.log("Its a Fun Day");
//  }


//Questio 5

// var months = new Date();
// var month = months.getMonth();
// if (month < 16 ) {
//   document.write("First fifteendays of the month" );
// } else {
//   document.write("Last days of the month" );
// }


//Questio 6

// var year = new Date();
// document.write(year);

// var newsecond = year.getTime();
// document.write(" Elapsed milisecond since january 1,1970 : ", newsecond);

// var minute = newsecond / 60 / 60 ;
// document.write("<br> Elapsed Minute d since january 1,1970 :",minute);


//Question 7


// var day = new Date();
// var din = day.getHours();
// if (din <= 12) {
//     alert("its AM");
// } else {
//    alert("its PM");
// }

//Question 13

// var currentDate = new Date();
// var currentDateTime = currentDate.getTime();
// var birthDay = prompt("Enter your age");
// var userBirth = new Date(birthDay);
// var age_year = userBirth.getFullYear();
// var userBirthDayTime = userBirth.getTime();
// var avg = currentDateTime - userBirthDayTime;
// var age = avg / (1000 * 60 * 60 * 24 * 365);
// document.write("Your age is ", age);
// document.write("<br/> Your Birth year is ", age_year);



//Question 8

// var laterDate = new Date ("12-31-2020");
// document.write(laterDate);


//Question 12

// var curent = new Date();
// document.write(curent);
// curent.setHours(curent.getHours() - 1);
// document.write("one hour ago "," ",curent);

// Chapter 35 to 38 starts

// Question No 1

// function currentDate(){
//     var date = new Date();
//     document.write(date);
// }

// currentDate(); 

// Question No 2

// function fullName(){
//     var firstName = prompt("Enter your First Name");
//     var lasttName = prompt("Enter your First Name");
//     document.write(firstName + " " + lasttName);

// }

// fullName();


// Question No 3

// function addition(){
//     var a = +prompt("Enter first number");
//     var b = +prompt("Enter second number");
//     return a + b;
// }

// var newadd = addition();
// document.write(newadd);

// Question No 4

// function calculator(num1, num2, operetor) {
//     if (operetor == "+") {
//        return num1 + num2;
//     }
//     else if (operetor == "-") {
//        return num1 - num2;
//     }
//     else if (operetor == "*") {
//        return num1 * num2;
//     }
//     else if (operetor == "%") {
//        return num1 % num2;
//     }
//     else if (operetor == "/") {
//        return num1 / num2;
//     }
// }
// var newcalculator = calculator(+prompt("Enter a number"),  +prompt("Enter a number"), prompt("Enter opretion (+,-,/,%,*)"));
// document.write(newcalculator);


// Question 5

// function square (a){
//     return a * a;
// }
// var newnum = square(10);
// document.write(newnum);


// Question 6

// function factorial(){
//     var num = +prompt("Please enter a  Number");
//     var f = 1;
//     for (var i = 1; i <= num; ++i ) {
//         f = f * i;
       
//     }

//     document.write("Factoria is ", f);  
// }
// factorial();


// Question 7

// function assendingOrder(starting,ending) {
//     for (var i = starting; i <= ending; i++){
//         document.write(i, "<Br/>");
//     }
  

// }
// assendingOrder(+prompt("Please enter astarting number"), +prompt("Please enter aends number"));

// Question 8

// function calculateHypotenuse(base, perpendicular) {
   

//        // var squre = base * base + perpendicular * perpendicular;
//        var hypo = (base * base) + (perpendicular * perpendicular);
       
 
    
//     document.write(hypo);
// }
// calculateHypotenuse(+prompt("first number"), +prompt("Second number"));



// Question 9


//i. Arguments as value

// function areaTri(a,b){
//     var area = a * b;
//     return area;



// }

// var newArea = areaTri(18,12);
// document.write( newArea);



//ii. Arguments as variable

// function area (height, width) {
//     var area = height * width;
//     return area;
// }
// var newArea = area (+prompt("Please Enter height"), +prompt("Please Enter a width"));
// document.write(newArea);


// program to check if the string is palindrome or not

// function checkPalindrome(str) {
 
//    var lenght = string.length;

   
//     for (let i = 0; i < lenght/ 2; i++) {

        
//         if (string[i] !== string[lenght - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }


// var string = prompt('Enter a string: ');

// var value = checkPalindrome(string);

// console.log(value);



// Question no 11


//  var newname = 'the quick brown fox';
//  var newarr = newname.split(" ");

//  for (var i = 0; i < newarr.length;i++) {
//  newarr[i] = newarr[i].charAt(0).toUpperCase() + newarr[i].slice(1);     
//  }


// var newname2 = newarr.join(" ");


//  document.write(newname2);



//Question number 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));


//Question 13

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('JSResourceS.com', 'o'));


// Q No 14

// function calcCircumference(radius) {
//   var cercumtances = 2 * 3.14 * radius;
//   return cercumtances;
// }

// var circumtance =calcCircumference(+prompt("Please enter Radius"));
// document.write("The circumference is ", + circumtance );




// function calcArea(radius) {
//   var cercumtances = 3.14 * radius * radius;
//   return cercumtances;
// }

// var circle = calcArea(+prompt("Please enter Radius"));
// document.write("Area of circle is ", + circle );

  