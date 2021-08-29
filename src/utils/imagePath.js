const imagePath = (folder, subFolder, imagePath = '') => {
  return imagePath
    ? require('!!assets-loader!../../content/' +
        folder +
        subFolder.replace('/portfolio', '') +
        imagePath)
    : undefined
}

export default imagePath
