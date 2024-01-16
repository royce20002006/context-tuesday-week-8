function allTheArgs(func, ...args) {
  return function(...moreArgs) {
    return func.apply(null, args.concat(moreArgs))
    
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
