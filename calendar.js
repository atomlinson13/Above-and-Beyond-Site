/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 12
   Tutorial Case

   Author: 
   Date:   

   Function List:
   calendar(calendarDay)
      Creates the calendar table for the month specified in the
      calendarDay parameter. The current date is highlighted in 
      the table.
*/

function writeCalTitle(calendarDay){
	   var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	   
	   var thisMonth = calendarDay.getMonth(); 
	   var thisYear = calendarDay.getFullYear();
	   

	   document.write("<tr>");
	   document.write("<th id='calendar_head' colspan='7'>");
	   document.write(monthName[thisMonth] + " " + thisYear); 
	   document.write("</th>");
	   document.write("</tr>");
}

     
function daysInMonth(calendarDay)
{
	//Array of days in each month
	var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];
	//Four digit year value 
	var thisYear = calendarDay.getFullYear();
	
	//Extract Month #
	var thisMonth = calendarDay.getMonth();
	
	//Revise the days in February for leap years
	if(thisYear%4 == 0) {	
		if((thisYear%100 != 0)|| (thisYear%400 == 0)) {
			dayCount[1] = 29;
		}	
	}

	//return the number of days in the current month
	return dayCount[thisMonth];
	
}


function writeDayNames()
{
	var dayName = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
	
	document.write("<tr>");
	for(var i = 0; i<dayName.length; i++) {
		document.write("<th class='calendar_weekdays'>" + dayName[i] + "</th>");
	}
	

}
    
function writeCalDays(calendarDay)
{
	//Determine the starting day of the month
	var day = new Date(calendarDay.getFullYear(), calendarDay.getMonth(), 1);
	var weekDay = day.getDay();
	
	//Write blank cells proceding the first day
	document.write("<tr>");
	for(var i = 0; i<weekDay; i++) {
	    document.write("<td id='blank'> </td>");	
	}	
	
	var totalDays = daysInMonth(calendarDay);
	var highlightDay = calendarDay.getDate();
	for (var i = 1; i<=totalDays; i++) {
		day.setDate(i);
		weekDay = day.getDay();
		
		//start a new  row on sunday
		if (weekDay==0) document.write("<tr>");

		if (i==highlightDay) {
		   document.write("<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>");
		} else {
		  document.write("<td class='calendar_dates'>" + i + dayEvent[i] + "</td>");
		}

		if (weekDay==6) document.write("</tr>"); 
		
	}		
}



function calendar(dateString)
{	 
  if(dateString==null) calDate= new Date();
  else calDate = new Date(dateString);
    
  document.write("<table id ='calendar_table'>");
  writeCalTitle(calDate); 
  writeDayNames()
  writeCalDays(calDate);
  document.write("</table>");

} 
	
	


