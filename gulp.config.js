module.exports = {
  // Settings: Turn on/off build features
  clean: true,
  styles: true,
  images: true,
  scripts: true,
  copy: false,
  reload: true,

  // Global project folder destinations
  input: "src/",
  html: "src/",
  output: "dist/",

  // Styles
  stylesSrc: "src/scss/**/*.{scss,sass}",
  stylesDest: "dist/",

  // Images
  imagesSrc: "src/img/*.*",
  imagesDest: "dist/",

  // Scripts
  scriptsSrc: "src/js/*.js",
  scriptsDest: "dist/",

  // reload
  reload: "dist/",
};
