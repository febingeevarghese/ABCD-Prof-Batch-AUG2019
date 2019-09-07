var mypromise = new Promise (resolve,reject)=>{
    var mygrade="A";
    if(mygrade=="A+"){
        resolve();
    }
    else{
        reject();
    }
    });
    mypromise.then(()
    console.log("Promise satisfied");
}).catch(()=>{
    console.log("Promis rejected");
});
   