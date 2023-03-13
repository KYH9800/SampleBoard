const multer = require('multer');
const path = require('path');

const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

// aws
const awsUpload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.S3_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key(req, file, cb) {
      const filiname = path.basename(file.originalname).trim();
      let newFilename = '';
      for (let value of filiname) {
        if (value === ' ' || value === '_') {
          value = '-';
        }
        newFilename += value;
      }

      cb(null, `original/${Date.now()}-${newFilename}`);
    },
  }),
  limits: { fileSize: 25 * 1024 * 1024 },
});

// local
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/'); // destination: 어디에, uploads/ 경로에
    }, // filename: 어떤 이름으로, 저장할지 path module 통해 파일 분해 추출
    filename(req, file, done) {
      console.log('file in multer: ', file);
      // path.extname(filePath)); 파일확장자 추출후 출력
      const ext = path.extname(file.originalname); // filename: 고윤혁.png > 확장자 추출(.png)
      console.log('ext: ', ext);
      // path.basename(filePath)); 파일명 추출후 출력
      const basename = path.basename(file.originalname, ext); // 고윤혁
      console.log('basename: ', basename);
      done(null, basename + new Date().getTime() + ext); // 고윤혁2021070424239281.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 파일크기: 20MB
});

module.exports = {
  upload,
  awsUpload,
};
