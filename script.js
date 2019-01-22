const fs = require('fs');

//input file path
const csvFilePath='stello.csv';

//ouput file creation
const ws = fs.createWriteStream('output.json');

//required npm installation
const csv=require('csvtojson');

//main function
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{

	fs.writeFile ("output.json", JSON.stringify(jsonObj), function(err) {
	    if (err) throw err;
	    console.log('complete');
	    }
	);
})
