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
//  let deltaTracker = { old : 0, delta : 0, new : del };
//  return function(delt){
//    deltaTracker.delta = delt ;
//    deltaTracker.old = deltaTracker.new;
//    deltaTracker.new = deltaTracker.old + delt;
//    return deltaTracker;
//  }
//}




const makeFiboGenerator = undefined;
const makeCycler = undefined;
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
