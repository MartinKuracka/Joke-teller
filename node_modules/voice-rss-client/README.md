[comment]: <> (<a href="https://www.npmjs.com/package/voice-rss-client" target="_blank">)

[comment]: <> (<img src="https://img.shields.io/npm/v/voice-rss-client.svg" alt="NPM Version" /></a>)

[comment]: <> (<a href="https://www.npmjs.com/package/voice-rss-client" target="_blank">)

[comment]: <> (<img src="https://img.shields.io/npm/l/voice-rss-client.svg" alt="Package License" /></a>)

[comment]: <> (<a href="https://www.npmjs.com/package/voice-rss-client" target="_blank">)

[comment]: <> (<img src="https://img.shields.io/npm/dm/voice-rss-client.svg" alt="NPM Downloads" /></a>)

# Voice RSS Client

## What is it?

It is a zero dependency [TypeScript](https://www.typescriptlang.org/) implementation of the [VoiceRSS SDK](http://www.voicerss.org/api/)

## Installation

You can install the package using [npm](https://npmjs.com/) or using [yarn](https://yarnpkg.com):

```shell
npm i voice-rss-client
```

***Note:*** Add `--save` if using npm version lower than 5.0.0

for newer versions of npm.

Or if using yarn

```shell
yarn add voice-rss-client
```

## Usage

You can import the library and use the `getSpeech` function as follows:

```javascript
// Like commonJS modules
const VoiceRSSClient = require("voice-rss-client");

VoiceRSSClient.getSpeech(...);

// or with destructuring
const { getSpeech } = require("voice-rss-client");

// Or using ECMAScript modules
import { getSpeech } from "voice-rss-client";
```

Then you can call the `getSpeech` function to send a request to VoiceRSS with a provided config object.

```javascript
// Using async/await
const speech = await getSpeech({ apiKey: "...", language: "en-us", text: "foo" });

// Using Promises
getSpeech({ apiKey: "...", language: "en-us", text: "foo" }).then(speech => {...});
```

The config object accepts all the options that are listed on the official [Voice RSS API docs](http://www.voicerss.org/api/),
and like on the API the config object provided needs to have at least the API Key, language and text specified.

The function returns a `base64` encoded string which represents the audio with which the server responded.

The config object accepts only the options listed on the official Voice RSS API docs and if you are using TypeScript
in your IDE provides autocompletion for the options available, as well as the language speakers according to the
selected language.

### Browser

If you are using this package in the browser only you can import the browser version only for a smaller bundle size:

```javascript
import { getSpeech } from "voice-rss-client/dist/browser";
```

### Node

If you are using this package in Node only you can import the Node version only for a smaller bundle size:

```javascript
import { getSpeech } from "voice-rss-client/dist/node";
```

### Combined

If you are using this package in both the Node and browser environment you can use the regular import statements as the
package determines which version to use based on the environment it gets called in.

## Contributions

All contributions are welcome as this is a side project that I have created in my spare time. Any advice or
constructive critics are welcome.

## P.S.

The tests are not yet complete and any suggestions would be welcome.

## Contact

Author Petar Vujović:

- [Twitter](https://twitter.com/petarvujovic98)
- [LinkedIn](https://linkedin.com/in/petarvujović)

## License

This project is [MIT licensed](https://github.com/petarvujovic98/voice-rss-client/blob/main/LICENSE)
