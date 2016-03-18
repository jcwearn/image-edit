var fs = require('fs'),
    path = require('path'),
    lwip = require('lwip');

var ImageController = {
  getImage: function() {
    var imgPath = path.join(__dirname, '../wat.jpg');
    lwip.open(imgPath, function(err, image) {
      if (image) {
        image.saturate(-1, function(err, image) {
          if (image) {
            image.toBuffer('jpg', function(err, buffer) {
              if (err) console.log(err);
              if (buffer) {
                fs.writeFile('output.jpg', buffer, (err) => {
                  if (err) console.log(err);
                });
              }
            });
          }
        });
      }      
    });
  }
};

module.exports = ImageController;
