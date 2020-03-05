const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));

});
app.use(express.static(__dirname + '/dist'));
app.use('/', router);
 app.listen(8085);

console.log('Running at Port 8085');

