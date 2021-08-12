const imagePath = (folder, subFolder, imagePath = '') => {
  return require('!!assets-loader!../../content/' +
    folder +
    subFolder.replace('/portfolio', '') +
    imagePath)
}

export default imagePath
