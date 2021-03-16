# Webpack introduction for myself

Basics of Webpack with its environment, features and configuration.

### Installing `webpack` and `webpack-cli`

### Creating _webpack.config.js_

### Basic configuration of webpack

### Patterns for filename as [name] & [contenthash]

### Plugins as _html-webpack-plugin_ for connecting html file with js files & _clean-webpack-plugin_ for cleaning unnecessary js files, because for every change in _dist_ folder will be created new js file. To solve this problem & other problems we use plugins.

### Adding _context_ **src** for relative files.

### Installing _css-loader_ & _style-loader_ for importing styles in js files, because webpack doesn't understand all files except **js** and **json**. In config file we create new property **module** (object) -> **rules** (array) -> object {test: 'regex', use: [loaders]}.

### You can add json files by default because as I said it by default will be parsed by webpack.

### For files I install new loader **file-loader** & add test/use object in rules. (images, etc.)

### _csv-loader_ , _xml-loader_ for .csv & .xml files. Add to rules in loader.

### Also in config file you can add default extensions with **resolve** property & add relative paths with **alias** property.

### Adding **optimization** property e.g. don't include same package to different entry points.

## Adding **webpack-dev-server** to automatically refresh view of web application.

### Some plugins for optimizations e.g. **optimize-css-assets-webpack-plugin**, **terser-webpack-plugin**

### Adding **sass** & **sass-loader** for webpack to write css on preprocessor _SCSS_, then add this to rules.

###
