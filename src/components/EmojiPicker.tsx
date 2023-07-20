import React from 'react';
import { EmojiData, emojiList } from './emojiData';

interface EmojiPickerProps {
    onEmojiSelect: (emoji: EmojiData) => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onEmojiSelect }) => {
    const handleEmojiSelect = (emoji: EmojiData): void => {
        onEmojiSelect(emoji);
    };

    return (
        <div>
            <div className="grid grid-cols-8 gap-2">
                {emojiList.map((emoji) => (
                    <button
                        key={emoji.name}
                        className="rounded-lg p-2 cursor-pointer"
                        onClick={() => handleEmojiSelect(emoji)}
                    >
                        {emoji.emoji}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EmojiPicker;
