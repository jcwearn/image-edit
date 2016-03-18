var express = require('express');
var router = express.Router();
var ImageController = require('../controllers/image_controller.js'),
    UploadController = require('../controllers/upload_controller.js'),
    multer = require('multer'),
    upload = multer({ dest: __dirname + '../public/uploads/'});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/image', ImageController.getImage);

router.post('/upload', upload.single("image"), UploadController.upload);

module.exports = router;
