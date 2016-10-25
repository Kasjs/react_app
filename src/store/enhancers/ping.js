/*eslint-disable */
export const ping = store => next => action => {
  console.log(`type of event: ${action.type}, additional info of event ${action.payload} `)
  return next(action)
}
/*eslint-enable */