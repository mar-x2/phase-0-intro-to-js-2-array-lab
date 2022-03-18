const cats =["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
  cats.push(name); 
};

 function destructivelyPrependCat(name){
   cats.unshift(name);
 };

 function destructivelyRemoveLastCat(){
   cats.pop();
};

function destructivelyRemoveFirstCat(){
  cats.shift();
};

function appendCat(name){
  const apCat = cats.slice();
  apCat.push(name);
return apCat;
};

function prependCat(name){
   const preCat = cats.slice();
   preCat.unshift(name);
   return preCat;
};

function removeLastCat(){
  const remCat = cats.slice();
  remCat.pop();
  return remCat;
};

function removeFirstCat(){
  const firCat = cats.slice();
  firCat.shift();
  return firCat
};