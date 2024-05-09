export function dataURLToBinary(dataURL) {
  const binaryImageData = atob(dataURL.split(",")[1]);
  const arrayBuffer = new ArrayBuffer(binaryImageData.length);
  const view = new Uint8Array(arrayBuffer);
  for (let i = 0; i < binaryImageData.length; i++) {
    view[i] = binaryImageData.charCodeAt(i);
  }
  const blob = new Blob([arrayBuffer], { type: "image/png" });
  return blob;
}
