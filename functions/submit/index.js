const sendEmail = require('./send')
console.log('starting function')

exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  if (e.title && e.body) {
    sendEmail(e.title, e.body).then((result) => {
      cb(null, result)
    }, cb)
  } else {
    cb(new Error('Invalid payload: ' + JSON.stringify(e)))
  }
}
