// var UserInput = document.querySelector("#bdate");

// var Answer = document.querySelector("#checkpalin");

// Answer.addEventListener("click",AllDateFormats);

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
    if(date.year < 10){
        Stringstr.year ="000"+date.year;
    }
    else{
        Stringstr.year = date.year.toString();
    }

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
        
    for (i=0;i<checkAllFormatsArePalindromevariable.length;i++){
        var flag = IsPalindrome(checkAllFormatsArePalindromevariable[i])
        if(0 === flag){  
            console.log("Palindrome");
            break;
        }else{
            console.log("Not Palindrome");

        }

    }   
}





var date ={
    day :12,
    month : 2,
    year :1111
};

console.log(CheckMonthCriteria(date));


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
        }
        console.log("if more than days of month",date.month);
        date.day =1;
        console.log("Generated Day ",date.day);
       
    }else{
        var DaysAreLessInMonth=date.day +1;
        console.log("Generated Day",DaysAreLessInMonth);
        console.log("Generated Month",date.month);
        console.log("Generated year",date.year);
    }


}


function MaxDaysOfMonth(date){

    var maxdays = [31 , 28 , 31,30,31,30,31,30,31,30,30,31];
        
    var index = maxdays.at(date.month-1);
    
    // console.log("days of month",index);
    
    return index;
    
    }
    
   


function NextNewDate(date){

}