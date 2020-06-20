# My HTML Boilerplate

This is my version of a HTML Boilerplate to spin up a project quickly. It is based on [HTML5Boilerplate](https://html5boilerplate.com/), and utilized SCSS, and my Gulp Boilerplate.

## Installing
To get started, clone this repository to your computer:
```
git clone git@github.com:eclectic-coding/my-html-boilerplate.git
```
You will need to install package dependencies with `yarn` or `npm install`.

## Features
All source files are located in the `src` directory:
- IMG (images)
- SCSS (7-in-1 SCSS Boilerplate)
- js (JavaScript)

This boilerplate uses my Gulp Boilerplate, which features the following:
- Styles: Compiles SCSS to CSS, writes Sourcemaps, autoprefix for browser extensions, generates main.css, minified to a main.min.css, and copies to the `dist` folder.
- JavaScript files are converted to ES5 with babel, concatenated, uglified and minified, and copied to `dist`.
- Images (GIF, JPG, PNG, SVG) are compressed and optimized, and copied to `dist`.
- Browsersync runs and loads the project automatically in the browser.

From the terminal use `gulp` to build the project, or `gulp watch` to build, launch the browser, and watch the files in the `src` folder for changes.

This Boilerplate is designed to used VanillaJS so there is no JQuery set up. Feel free to add if that is your preference.

## Deployment
Deployment will be easy. All your changes are compiled by via `gup watch`, so all you have to do, is depoly your `dist` directory.

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details about  the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Chuck Smith** - [Eclectic Coding](https://github.com/eclectic-coding)

See also the list of [contributors](https://github.com/eclectic-coding/this-repo/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
