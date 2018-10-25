const makeConstant = function(arg){
  return function(){
    return arg;
  }
}

const makeCounterFromN = function(count){
  return function(){
    return count++;
  }
}

const makeCounterFromZero = function(){
  let count = 0;
  return makeCounterFromN(count);
}

const makeDeltaTracker = function(deltaValue){
  let deltaTracker = { old : 0, delta : 0, new : deltaValue };
  return function(del){
    if(del != undefined){
    deltaTracker.delta = del;
    deltaTracker.old = deltaTracker.new;
    deltaTracker.new = deltaTracker.old + deltaTracker.delta;
    return deltaTracker;
  }
    deltaTracker.old = deltaTracker.old + deltaValue;
    return deltaTracker;
  }
}

const makeFiboGenerator = function(arg1,arg2){
  let term1 = 0;
  let term2 = 1;
  if(arg1 != undefined && arg2 == undefined){
    term1 = 0;
    term2 = arg1;
  }
  if(arg1 != undefined && arg2 != undefined){
    term1 = arg1;
    term2 = arg2;
  }
  return  function(){
    let term3 = term1 + term2;
    term = term1;
    term1 = term2;
    term2 = term3;
    return term;
  }
}

const makeCycler = function(list){
  let count = 0;
  let divisor = list.length;
  let originList = [];
  for(let element of list){
    originList.push(element);
  }
  return function(){
    let cycle = count % divisor;
    count++;
    return originList[cycle];
  }
}

const curry = function(func,value){
  return function(arg1,arg2){
    return func(value,arg1,arg2);
  }
}

const compose = function(func1,func2){
  return function(arg1,arg2){
      return func1(func2(arg1,arg2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
