JSEasyHeatmap
=============

Easy-to-use javascript heatmap plugin. 


Dependencies: 

1. Bootstrap (for styling the table. This can be easily removed and styled manually)

Usage:

1. Create an empty div in your html document wherever you would like the heatmap to appear: <br/>
`<div id="heatmap"></div>`
2. Place jseasyheatmap.js in your lib folder and include in HTML file
3. Input data is expected in JSON Format:<br/>
```var oData = [{
   "name": "DataSet1",
   "numbers":[1,2,3,4,5,6,7,8,9,10,11,12]
}```

Options:
--
1. If you would like different column headers, simply change:<br/>
`var aMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];`
2. Modify the start and end colors by changing:<br/>
`var startColor = "#FFCC00";`<br/>
`var endColor = "#FF0000";`





