var express = require('express'),
    router = express.Router(),
    ImageController = require('../controllers/image_controller.js'),
    UploadController = require('../controllers/upload_controller.js'),
    path = require('path'),
    multer = require('multer');

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/image', ImageController.getImage);

var upload = multer({ dest: path.join(__dirname, '../public/uploads/')});
router.post('/upload', upload.single("image"), UploadController.upload);

module.exports = router;
