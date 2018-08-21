export const heic2jpg = (imgPath, outputPath) => {
  var gm = require('gm');
  var imageMagick = gm.subClass({ imageMagick: true });
  return new Promise((resolve, reject) => {
    imageMagick(imgPath).setFormat(process.env.TO_CONVERT_FORMAT).write(
      outputPath, function (err) {
        if (!err) {
          resolve(outputPath);
        }
        reject(err);
      });
  });
}
