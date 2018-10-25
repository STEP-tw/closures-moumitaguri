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
  return function(){
    return count++;
  }
}

const makeDeltaTracker = undefined; 
//const makeDeltaTracker = function(del){
//  let deltaTracker = { old : 0, delta : 0, new : del };
//  return function(delt){
//    deltaTracker.delta = delt ;
//    deltaTracker.old = deltaTracker.new;
//    deltaTracker.new = deltaTracker.old + delt;
//    return deltaTracker;
//  }
//}



const makeFiboGenerator = undefined;
//const makeFiboGenerator = function(){
//  let prev = -1;
//  let next = 1;
//  return function(){
//    let curr = prev + next;
//    prev = next;
//    next = curr;
//    return curr;
//  }
//}


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
