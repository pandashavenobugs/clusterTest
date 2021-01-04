const cluster = require('cluster');
const cpus = require('os').cpus(); // to get cpus of pc

// console.log(cpus)

if(cluster.isMaster){
  console.log("this is the master process :",process.pid);
  for (let i=0; i< cpus.length; i++){
    cluster.fork(); 
  }
}else{
  console.log('this is the worker process :',process.pid);
  // what we gonna do here 
  // may be http request or all app
}