export default class Convertor {

  constructor() {

  }

  convertHEIF2Jpeg() {
    console.log("Converting...");
    var fs = require('fs');
    var gm = require('gm');
    // var imageMagick = gm.subClass({ imageMagick: true });
    // imageMagick("img.png").
    var writeStream = fs.createWriteStream("jpg");
    gm("C:\\anansari\\backyard\\image-convertor\\src\\heic\\autumn_1440x960.heic").setFormat("jpg").write(writeStream, function (error) {
      console.log("Finished saving", error);
    });
  }
}
