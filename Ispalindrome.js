 var UserInput = document.querySelector("#bdate");

 var Answer = document.querySelector("#checkpalin");
 var output = document.querySelector("#output");
 var output1 = document.querySelector("#output1");
 Answer.addEventListener("click",clickhandler);


 function clickhandler(e){
    var User =  UserInput.value;

    if(User !==''){
        var Usergiven = User.split('-');

        var date={
            day:Usergiven[2],
            month:Usergiven[1],
            year:Usergiven[0]
        }
        console.log(date);
        console.log(checkAllFormatsArePalindrome(date));

    }

 }



function reverseStr(str){
    console.log(str)
    var splitTr = str.split('');
    var reverseTr = splitTr.reverse();
    var  joinTr = reverseTr.join('');
    console.log(joinTr);
    return joinTr;
}


function IsPalindrome(str){

    var Checker = reverseStr(str);
    if(str === Checker) {
        var out =0;
        return out;
    }else{
        var out1 =1;
        return out1;
    }
}






function NumToStr(date){


    var Stringstr = { day : "", month:"", year:""};

    if(date.day < 10){
        Stringstr.day =""+date.day;
 
    }
    else{
        Stringstr.day = date.day.toString();
    }
    if(date.month < 10){
        Stringstr.month =""+date.month;
    }
    else{
        Stringstr.month = date.month.toString();
    }
    if(date.year < 10){
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
    // console.log("checkfor",ddmmyyyy);
    // return ddmmyyyy;
}


function checkAllFormatsArePalindrome(date){
        
         var checkAllFormatsArePalindromevariable = AllDateFormats(date);
        
    for (i=0;i<checkAllFormatsArePalindromevariable.length;i++){
        var flag = IsPalindrome(checkAllFormatsArePalindromevariable[i])
        if(0 === flag){  
            console.log("Palindrome");
            output.innerText = "Congrats! Your birth date is palindrome";
            break;
        }else{
            console.log("Not Palindrome");
            output.innerText = "Your birth date is not a palindrome";
            console.log(CheckMonthCriteria(date));

        }

    }   
}


// ------------------------------------------------------------------------





function CheckMonthCriteria(date){
    if(date.month<13){
        var MaxDaysOfMonthV = MaxDaysOfMonth(date);
        console.log("MaxdaysByFunction",MaxDaysOfMonthV);
        var CheckDateCriteriaV = CheckDateCriteria(date,MaxDaysOfMonthV);
    }else{
        CheckYearCriteria(date)
    }
}

function CheckYearCriteria(date){
    var newYear =date.year+1;
    console.log("Changed New year",newYear)
    var newMonth = date.month+1;
    newMonth=1;
    console.log("Changed New month",newMonth)
}

 
function CheckDateCriteria(date,MaxDaysOfMonthV){
    if(date.day >= MaxDaysOfMonthV){
        date.month  = date.month + 1;
        if(date.month > 12){
            CheckMonthCriteria(date);
        }else{

        console.log("if more than days of month",date.month);
        date.day =1;
        console.log("Generated Day ",date.day);

        }



    }else{
        var iteration =date.day;

        for(i = iteration;i<MaxDaysOfMonthV;i++){


        var DaysAreLessInMonth= i +1;
        var Gday=DaysAreLessInMonth;
        var Gmonth=date.month;
        var Gyear=date.year;



        console.log("Gener day",Gday);
        console.log("Gener month",Gmonth);
        console.log("Gener year",Gyear);


            var newdate = {
                day : Gday,
                month : Gmonth,
                year : Gyear
            }



             var Gconvertostring = NewNextGeneration(newdate);


        }
    }


}


function NewAllDateFormats(newdate){

    var srtt = NumToStr(newdate);

   var ddmmyyyy =  srtt.day + srtt.month + srtt.year;
//    var mmddyyyy =  srtt.month + srtt.day + srtt.year;
//    var yyyyddmm =  srtt.year + srtt.day + srtt.month;
//    var ddmmyy =  srtt.day + srtt.month + srtt.year.slice(-2);
//    var yymmdd =  srtt.year.slice(-2) + srtt.month + srtt.day;
//    var mmddyy =  srtt.month + srtt.day + srtt.year.slice(-2);
//    return [ddmmyyyy,mmddyyyy,yyyyddmm,ddmmyy,yymmdd,mmddyy];
//    console.log("checkfor",ddmmyyyy);
   return ddmmyyyy;
}



function NewNextGeneration(newdate){
        //  console.log("checAll",newdate);
        var checkAllFormatsArePalindromevariable = NewAllDateFormats(newdate);
        console.log("String",checkAllFormatsArePalindromevariable);
   
        var oo = checkAllFormatsArePalindromevariable;

        var checkfinal = checkAllFormatsArePalindromevariable.split('').reverse().join('');
        console.log("reversesring",checkfinal);     

        if(checkfinal===checkAllFormatsArePalindromevariable){
            console.log("Palindrome");
            
            output1.innerHTML = oo;
       
        }else{
            console.log("Non Palindrome date ");
            output1.innerHTML = "Sorry we couldn't find next palindrome date";
            


        }
}



function MaxDaysOfMonth(date){

    var maxdays = [31 , 28 , 31,30,31,30,31,30,31,30,30,31];
        
    var index = maxdays.at(date.month-1);
    
    // console.log("days of month",index);
    
    return index;
    
    }
    
   