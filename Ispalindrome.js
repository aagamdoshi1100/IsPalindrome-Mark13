
function reverseStr(str){

    return str.split('').reverse().join('');
}


function IsPalindrome(str){

    var Checker = reverseStr(str);
    return str === Checker

}


function NumToStr(date){


    var Stringstr = { day : "", month:"", year:""};

    if(date.day < 10){
        Stringstr.day ="0"+date.day;
 
    }
    else{
        Stringstr.day = date.day.toString();
    }
    if(date.month < 10){
        Stringstr.month ="0"+date.month;
    }
    else{
        Stringstr.month = date.month.toString();
    }
    if(date.year < 100){
        Stringstr.year =""+date.year;
    }
    else{
        Stringstr.year = date.year.toString();
    }
     console.log("checkstr",Stringstr);
    return Stringstr;

}



function AllDateFormats(date){

     var srtt = NumToStr(date);

    var ddmmyyyy =  srtt.day + srtt.month + srtt.year;
    var mmddyyyy =  srtt.month + srtt.day + srtt.year;
    var yyyyddmm =  srtt.year + srtt.day + srtt.month;
    var ddmmyy =  srtt.day + srtt.month + srtt.year.slice(-2);
    var yymmdd =  srtt.year.slice(-2) + srtt.month + srtt.day;
    var mmddyy =  srtt.month + srtt.day + srtt.year.slice(-2);
    return [ddmmyyyy,mmddyyyy,yyyyddmm,ddmmyy,yymmdd,mmddyy];
 
}


function checkAllFormatsArePalindrome(date){

        var checkAllFormatsArePalindromevariable = AllDateFormats(date);
        var flag =false;

    for (var i=0; i< checkAllFormatsArePalindromevariable.length; i++){
        // console.log( checkAllFormatsArePalindromevariable[i]);
        if(IsPalindrome(checkAllFormatsArePalindromevariable[i])){
            flag = true;
            // console.log("Plaindrome")
            break;
        }
    }
    return flag;   
}


// var date = {
//     day :1,
//     month :11,
//     year :1111
// }

//--------------------------------------------------------------------------------------------------------

function GetNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;


    var DaysInMonth = [31 ,28,31,30,31,30,31,31,30,31,30,31];


    if(month === 2){
        if(isLeapyear(year)){
            if(day >29){
                day =1;
                month++;
            }
        }else{
            if(day >28){
                day =1;
                month++;
            }
        }
    }
    else{
        if(day > DaysInMonth[month-1]){
            day = 1;
            month++;
        }
    }

    if(month > 12){
        month =1;
        year++;
    }

    return{
        day : day,
        month : month,
        year : year
    };

}

// console.log(GetNextDate(date));


function isLeapyear(year){

    if(year % 400 ===0){
        return true;
    }
    if(year % 100 === 0){
        return false;
    }
    if(year %   4 === 0){
        return true;
    }
    return false;
}


function GetNextPalindromeDate(date){

    var counter = 0;
       var NextDate = GetNextDate(date);
       console.log("Get Next Date : ",NextDate);

        // var h = checkAllFormatsArePalindrome(NextDate);
        // console.log("Palindrome result: ",h);

 while(1){
    counter++;
    var h = checkAllFormatsArePalindrome(NextDate);
    console.log("Palindrome result: ", h);
    if(h){
        
        break;
    }   
    var NextDate = GetNextDate(NextDate);
 }      
 return[counter,NextDate];
}

// console.log(GetNextPalindromeDate(date));


var UserInput = document.querySelector("#bdate");

 var Answer = document.querySelector("#checkpalin");
 var output = document.querySelector("#output");
 var output1 = document.querySelector("#output1");
 var output2 = document.querySelector("#output2");

 Answer.addEventListener("click",clickhandler);

  
 function clickhandler(e){

    var In = UserInput.value;

    if(In !== ''){

        var removehypen = In.split('-');

        var date ={
            day : removehypen[2],
            month:removehypen[1],
            year:removehypen[0]
        }
        console.log("Inserted Date" , date);


        var palindromecheckkarnewala = checkAllFormatsArePalindrome(date);




  if(palindromecheckkarnewala){

    output.innerText = "Your birth date is  a palindrome";

  }else{

    output.innerText = "Your birth date is not a palindrome";
    console.log(GetNextPalindromeDate(date));
    var [counter,NextDate] = GetNextPalindromeDate(date);

    output1.innerText = `The next plaindorme date is ${NextDate.day}-${NextDate.month}-${NextDate.year}`;
    output2.innerText = `You have missed by ${counter} days`;

  }

 

    }

 }