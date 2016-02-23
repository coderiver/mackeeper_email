var gulp  = require('gulp');
var config = require('../config');
sendmail = require('gulp-mailgun');

gulp.task('mail', function () {
  gulp.src( 'build/index.html') // Modify this to select the HTML file(s)
  .pipe(sendmail({
    key: 'key-a12658a24799e13a7f50e297ad04f2c9', 
    sender: 'from@test.com',
    recipient: 'flintyara@yahoo.com',
    subject: 'This is a test email'
  }));
});