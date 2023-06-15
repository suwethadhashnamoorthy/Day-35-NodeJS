const path = require('path');
const fs = require("fs");

const express = require("express");
const app = express();


const PORT = process.env.PORT || 5500;

//creating a file 
app.get("/createfile", function (req, res) {

    const d = new Date();
    let filename = `${d.getDate()}-${(d.getMonth() + 1)}-${d.getFullYear()}-${d.getHours()}.${d.getMinutes()}`;
    // filename=filename.toString();
    console.log(filename)

    let timestamp = Math.floor(new Date().getTime() / 1000).toString();


    fs.writeFile(`./${filename}.txt`, timestamp, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    res.send("file created");


   


 // finding the text files
const directoryPath = path.join(__dirname, 'folder');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
        res.send(file)
    });
});

})
app.listen(PORT, () => {
    console.log(`Web server running at PORT: ${PORT}`)
})