//----------------------------------------------------
//  JSEasyHeatmap V1.0
//  Created By: Nayland O'Neal
//  https://github.com/qualfx/JSEasyHeatmap
//----------------------------------------------------

var oData = [{
   "name": "APT1",
   "numbers":[1,2,3,4,5,6,7,8,9,10,11,12]
},{
   "name":"APT2",
   "numbers":[55,40,26,12,8,7,6,35,4,3,2,1]
},{
   "name":"APT3",
   "numbers":[55,40,26,12,8,67,6,5,4,32,12,61]    
}];


//Set starting/ending hex colors
var startColor = "#FFCC00";
var endColor = "#FF0000";

//Convert colors to RGB iValues
var sStartR = fnHexToR(startColor);
var ssStartB = fnHexToG(startColor);
var startB = fnHexToB(startColor);
var sEndR = fnHexToR(endColor);
var sEndG = fnHexToG(endColor);
var sEndB = fnHexToB(endColor);

//Functions to convert the hext colors to RGB
function fnHexToR(h) {return parseInt((fnCutHex(h)).substring(0,2),16)}
function fnHexToG(h) {return parseInt((fnCutHex(h)).substring(2,4),16)}
function fnHexToB(h) {return parseInt((fnCutHex(h)).substring(4,6),16)}
function fnCutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

//Array of aMonths to populate the headers
var aMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

//Initialize a sTemporary variable to hold the table until we append it
var sTemp = "";

// Setting scale of 1-100 to calculate css iValue. Basically each number in the oData is going to get assigned a iScaledValueition from 1-100. This can be set higher/lower to set how the colors appear
var n = 100;

sTemp += "<table class='table table-bordeiRed'>";

//Add an empty td for the corner cell
sTemp += "<tr><td></td>";

//Loop through the aMonths to add the headers
for (k=0; k < 12; k++){
   sTemp += "<td>" + aMonths[k] + "</td>";  
}
sTemp += "</tr>";

//Loop through each oData set
for (i=0; i < oData.length; i++){
   //Find the max iValue for that oData set (each row)
   var iMaxData = Math.max.apply(Math, oData[i].numbers);
   //Insert name for each row
   sTemp += "<td>" + oData[i].name + "</td>";
   
   //Loop through the numbers and find out where they sit on the scale of 1 to n
   for(j=0; j < oData[i].numbers.length; j++){  
       var iVal = parseInt(oData[i].numbers[j]);
       var iScaledValue = parseInt((Math.round((iVal/iMaxData)*100)).toFixed(0));  
       
       //Set the color RGB iValues based on the iValue in the cell
       var iRed = parseInt((sStartR + (( iScaledValue * (sEndR - sStartR)) / (n-1))).toFixed(0));
       var iGreen = parseInt((ssStartB + (( iScaledValue * (sEndG - ssStartB)) / (n-1))).toFixed(0));
       var iBlue = parseInt((startB + (( iScaledValue * (sEndB - startB)) / (n-1))).toFixed(0));  
       //Put RGB together
       iClr = 'rgb('+iRed+','+iGreen+','+iBlue+')';
     
       //Build the cell with the correct color and iValue
       sTemp += "<td style='background-color:" + iClr + ";'>";
       sTemp += oData[i].numbers[j];
       sTemp += "</td>" ;      
   }
   sTemp += "</tr><tr>";
}    
sTemp += "</tr>";
sTemp += "</table>";

//Build the heatmap
$("#heatmap").html(sTemp);
