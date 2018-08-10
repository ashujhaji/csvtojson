const fs = require('fs');

//input file path
const csvFilePath='data-export.csv';

//ouput file creation
const ws = fs.createWriteStream('output.json');

//required npm installation
const csv=require('csvtojson');

//main function
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{

	//writing data to json
	fs.writeFile('output.json', JSON.stringify(jsonObj));

})
