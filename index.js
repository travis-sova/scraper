import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'node:fs';

if (!fs.existsSync('cache')) {
    fs.mkdirSync('cache');
}

let cacheName = `cache/pablo.html`;
let data;
if (!fs.existsSync(cacheName)) {
    let res = await axios.get(`https://neeger.ee`);
    data = res.data;
    fs.writeFileSync(cacheName, data);
} else {
    data = fs.readFileSync(cacheName);
}
const $ = cheerio.load(data);
let img = $(`img`);
console.log(img.attr('src'));