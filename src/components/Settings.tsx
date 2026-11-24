import "./../styles/Settings.css";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Settings = () => {

    // Game Settings
    const [player1, setPlayer1] = useState("Player 1");
    const [player2, setPlayer2] = useState("Player 2");
    const [winningPoints, setWinningPoints] = useState(10);

    // Audio Settings
    const [masterVolume, setMasterVolume] = useState(100);
    const [musicVolume, setMusicVolume] = useState(50);
    const [effectsVolume, setEffectsVolume] = useState(70);

    const [muteAll, setMuteAll] = useState(false);
    const [backgroundMusic, setBackgroundMusic] = useState(true);
    const [gameSounds, setGameSounds] = useState(true);
    const [buttonSounds, setButtonSounds] = useState(true);

    return (
        <div className="settings">

            <h1>Settings</h1>

            <h2>Game Settings</h2>

            <label>Player 1</label>
            <input
                type="text"
                value={player1}
                onChange={e => setPlayer1(e.target.value)}
            />

            <label>Player 2</label>
            <input
                type="text"
                value={player2}
                onChange={e => setPlayer2(e.target.value)}
            />

            <label>Winning Points: {winningPoints}</label>
            <input
                type="range"
                min="1"
                max="50"
                value={winningPoints}
                onChange={e => setWinningPoints(Number(e.target.value))}
            />

            <h2>Audio Settings</h2>

            <label>Master Volume: {masterVolume}%</label>
            <input
                type="range"
                min="0"
                max="100"
                value={masterVolume}
                onChange={e => setMasterVolume(Number(e.target.value))}
            />

            <label>Music Volume: {musicVolume}%</label>
            <input
                type="range"
                min="0"
                max="100"
                value={musicVolume}
                onChange={e => setMusicVolume(Number(e.target.value))}
            />

            <label>Effects Volume: {effectsVolume}%</label>
            <input
                type="range"
                min="0"
                max="100"
                value={effectsVolume}
                onChange={e => setEffectsVolume(Number(e.target.value))}
            />

            <h3>Sound Options</h3>

            <label>
                <input
                    type="checkbox"
                    checked={muteAll}
                    onChange={e => setMuteAll(e.target.checked)}
                />
                Mute All
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={backgroundMusic}
                    onChange={e => setBackgroundMusic(e.target.checked)}
                />
                Background Music
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={gameSounds}
                    onChange={e => setGameSounds(e.target.checked)}
                />
                Game Sounds
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={buttonSounds}
                    onChange={e => setButtonSounds(e.target.checked)}
                />
                Button Sounds
            </label>

            <button
                className="settings-button"
                onClick={() => window.location.href = "/"}
            >
                BACK TO MENU
            </button>

        </div>
    );
};

export default Settings;
