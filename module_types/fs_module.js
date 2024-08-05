// Import fs module
const fs = require('fs');

// Present Working Directory: C:\Desktop\NodeJSTut
// Making a new directory called ./myFolder:

/*fs.mkdir('./myFolders', (err) => {
    if(err){
    	console.log(err);
    } else{
    	console.log('Folder Created Successfully');
    }
})

const data = "Hi,this is newFile.txt";

fs.writeFile('./myFolders/myFile.txt', data, (err)=> {
    if(err){
        console.log(err);
        return;
    } else {
    	console.log('Writen to file successfully!');
    }
})

fs.readFile('./myFolders/myFile.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err){
    	console.log(err);
        return;
    } else {
    	console.log('File read successfully! Here is the data');
        console.log(data);
    }
})



fs.rename('./myFolders/myFile.txt', './myFolders/myFiles.txt', (err)=>{
    if(err){
    	console.log(err);
        return;
    }
    console.log('File renamed successfully!')
})*/

fs.unlink('./myFolders/myFiles.txt', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File Deleted Successfully!')
})