import "./styles/styles.css";
import "./styles/scss.scss";
import { Post } from "@models/Post";

import WebpackLogo from "./assets/webpack-logo.png";
// import dataJSON from "./assets/data";
// import dataXML from "./assets/data.xml";
// import dataCSV from "./assets/data.csv";

const post = new Post("Webpack introduction", WebpackLogo);

// console.log(post.toString());
// console.log(dataJSON);
// console.log(dataXML);
// console.log(dataCSV);
