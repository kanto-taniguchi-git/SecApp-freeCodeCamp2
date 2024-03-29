'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC(非同期) -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    // 新しい入力がハッシュと一致するかどうかを確認する
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {  // 第一引数はハッシュ化されていないデータ
        console.log(res);
    });
});
//END_ASYNC

//START_SYNC(同期処理)
// 基本的に非同期で処理する
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);
//END_SYNC

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("👹TEST APP!! ", PORT)
});
