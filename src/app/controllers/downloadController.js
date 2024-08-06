const path = require('path');
const appDownloadPath = path.join(__dirname, 'downloads', 'AutoFiFa.zip');
class DownloadController {
  download(req, res, next) {
    res.download(appDownloadPath, 'AutoFiFa.zip', (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Internal Server Error');
      }
    });
  }
}
module.exports = new DownloadController();