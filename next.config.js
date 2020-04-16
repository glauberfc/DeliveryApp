const { withExpo } = require('@expo/next-adapter')
const withImages = require('next-images')
const withFonts = require('next-fonts')

module.exports = withExpo(
  withFonts(
    withImages({
      projectRoot: __dirname,
    }),
  ),
)
