# Loaders 

Loaders allow files to be preprocessed as and when theyre required to be loaded .

They provide a powerful way to handle front end build steps.

Loaders are often used to transform files from a different language , or to require files.

Specifiying loaders in each and every single module can be repetitive, so its best to specify loaders in your Webpack configuration like follows

```
{ 
  module: { 
    loaders: [
      // for .jade files 
      {test: /\.jade$/, loader: "jade"},
      // for .css files 
      {test: /\.css$/, loader: "style!css"},
      // for .coffee files
      {test: /\.coffee$/, loader: "coffee-loader"}
    ]
  }
}
```
