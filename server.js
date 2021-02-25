const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const VoiceRSSClient = require("voice-rss-client");
const app = express();
let jokeInput;

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
    jokeInput = req.body.input;
    sendJoke(jokeInput);
    // console.log(jokeInput)
})

sendJoke = (jokeInput) => {
    console.log('joke from sendJoke function:', jokeInput);
    VoiceRSS.speech({
        key: 'd4bb3b3e69504439b7518ca9b6f461c7',
        src: jokeInput,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

app.listen(3000)