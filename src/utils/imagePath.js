export const imagePath = (folder, subFolder, imagePath) => {
  return require('!!assets-loader!../../content/' +
    folder +
    subFolder +
    imagePath)
}
