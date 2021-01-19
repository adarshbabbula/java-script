var x;
try {
  x = y + 1; 
}
catch(err) {
  console.log(err.name);
}

try {
    throw "Throwing Error";
}
catch(err){
    console.log(err);
}