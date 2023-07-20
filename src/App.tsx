import React from 'react';
import EmojiPicker from "./components/EmojiPicker";
import {EmojiData} from "./components/emojiData";

function App() {
    const handleEmojiSelect = (emoji: EmojiData) => {
        alert('Emoji selected:'+ emoji.emoji)
    };
  return (
      <div>
        <h1>Emoji Picker Test</h1>
        <EmojiPicker onEmojiSelect={handleEmojiSelect} />
      </div>
  );
}

export default App;
