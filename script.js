const myButton = document.getElementById('button');
const audioElement = document.getElementById('audio');
const errorMessage = document.getElementById('message');
const repeatButton = document.getElementById('repeat-button');
let jokeResponse;
let fullJoke;

// Get the Joke from API
async function joke() {
    try {
        errorMessage.hidden = true;
        let newJoke = await JokeAPI.getJokes();
        let response = await newJoke.json();
        if (response.type === 'twopart') {
            fullJoke = response.setup + response.delivery;
        } else {
            fullJoke = response.joke;
        }
        jokeResponse = fullJoke;
        sendJoke(fullJoke);
    } catch(err) {
        console.log(err);
        errorMessage.hidden = false;
      }
}

// Send text joke to speech API
sendJoke = (fullJoke) => {
    console.log('fulljoke z fetchu', fullJoke);
    fetch('http://localhost:3000/', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
        input: (fullJoke)
        })
    }).then(response => response.json()).catch(console.log('can not get the response data'))
        .then(console.log(response))
}
// sendJoke = (jokeResponse) => {
//     VoiceRSS.speech({
//         key: 'd4bb3b3e69504439b7518ca9b6f461c7',
//         src: jokeResponse,
//         hl: 'en-us',
//         v: 'Linda',
//         r: 0,
//         c: 'mp3',
//         f: '44khz_16bit_stereo',
//         ssml: false
//     });
// }

//  Event listeners
myButton.addEventListener('click', () => joke() );
repeatButton.addEventListener('click', () => sendJoke(fullJoke) );

