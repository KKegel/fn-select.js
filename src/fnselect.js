/**
 * create a closure function from the given func callback and its parameters
 * @param {boolean} decider value, if callback func will be executed
 * @param {function} func calback to be executed, if decider is true
 * @param {*} _params params of the callback func as single arguments
 */
export const _ = (decider, func, ..._params) => {
  function successor() {
    if(decider){
      return [true, func(..._params)];
    }else{
      return [false, null];
    }
  }
  return successor;
}

/**
 * execute the first function, which decider is true and return its return value
 * if no decider is true, null will be returned
 * @param {function} _args _ type functions
 */
export const selectFirst = (..._args) => {
  for(let i = 0; i < _args.length; i++){
    let result = _args[i]();
    if(result[0]){
      return result[1];
    }
  }
  return null;
}

/**
 * executes all functions, whose decider are true and return an array of the return values
 * if no decider is true, an empty array will be returned
 * @param {function} _args 
 */
export const select = (..._args) => {
  return _args.map(arg => {
    let result = arg();
    if(result[0]){
    	return result[1];
    }
  }).filter(e => e !== undefined);
}