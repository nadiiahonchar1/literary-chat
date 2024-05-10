export function convertImageToDataURL(imageBlob, callback) {
  var reader = new FileReader();
  reader.onload = function (event) {
    callback(event.target.result);
  };
  reader.readAsDataURL(imageBlob);
}
