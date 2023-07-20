# Emoji Picker

Emoji Picker is a simple React component that allows users to select emojis from a list.

## Installation

To use the Emoji Picker component in your React project, you can install it from NPM:

To use the Emoji Picker component in your React project, you can install node_modules:
### `yarn install`

## Usage

````
```
import EmojiPicker, { EmojiData } from 'emoji-picker-react';
```
````
Add the EmojiPicker component to your React application:
````
```
import React from 'react';
import EmojiPicker, { EmojiData } from 'emoji-picker-react';

function App() {
  const handleEmojiSelect = (emoji: EmojiData) => {
    console.log('Emoji selected:', emoji);
  };

  return (
    <div>
      <h1>Emoji Picker Test</h1>
      <EmojiPicker onEmojiSelect={handleEmojiSelect} />
    </div>
  );
}

export default App;

```
````

## Props

The EmojiPicker component accepts the following props:

- onEmojiSelect (function): A callback function that will be called when an emoji is selected. The selected emoji data will be passed as an argument to this function.
The EmojiData type is also exported from the library, which can be used for typing the argument of the onEmojiSelect callback function.

Example usage with custom options:

````
```
import React from 'react';
import EmojiPicker, { EmojiData } from 'emoji-picker-react';

function App() {
  const handleEmojiSelect = (emoji: EmojiData) => {
    console.log('Emoji selected:', emoji);
  };

  return (
    <div>
      <h1>Emoji Picker Test</h1>
      <EmojiPicker onEmojiSelect={handleEmojiSelect} />
    </div>
  );
}

export default App;

```
````



## Contributing
Contributions to the Emoji Picker project are welcome! If you find a bug, have an enhancement in mind, or want to contribute in any way, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](# https://opensource.org/license/mit/)











