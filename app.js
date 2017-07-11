const express = require('express');
const path = require('path');
//init app
const app = express();
//load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
//home route
app.get('/',function(req,res){
  res.render('index');
});
app.listen(3000,function(){
  console.log('server started at port 3000..');
});
