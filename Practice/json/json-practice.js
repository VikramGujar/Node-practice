const fs = require('fs');

const book = {
    title:'Wings of fire',
    author:'a.p.j abdul kalam'
}

// const bookJson = JSON.stringify(book);
// console.log(bookJson.title);

// const parseData = JSON.parse(bookJson);
// console.log(parseData.title);

// fs.writeFileSync('1-jsonData.json',bookJson);

// const dataBuffer = fs.readFileSync('1-jsonData.json');
// console.log(dataBuffer);

// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.author);

const myDataBuffer = fs.readFileSync('1-jsonData.json');
const formatedMyData = myDataBuffer.toString();
const user = JSON.parse(formatedMyData);

user.title = 'Wings of fire';
user.author = 'A.P.J abdul kalam';
user.year = '2010';

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-jsonData.json',userJSON);