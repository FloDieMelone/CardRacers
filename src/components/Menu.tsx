
import { useNavigate } from "react-router-dom";
import "../styles/MainMenu.css";

export default function Menu() {
    const navigate = useNavigate();

    return (
        <div className="main-menu">
            <div className="menu-background">
                <div className="menu-content">

                    <h1 className="game-title">
                        CAR
                        <span>QUARTETT</span>
                    </h1>

                    <p className="subtitle">
                        THE ULTIMATE CAR BATTLE
                    </p>

                    <div className="menu-buttons">
                        <button
                            className="menu-button play"
                            onClick={() => navigate("/game")}
                        >
                            ▶ PLAY
                        </button>

                        <button
                            className="menu-button"
                            onClick={() => navigate("/garage")}
                        >
                            🚗 GARAGE
                        </button>

                        <button
                            className="menu-button"
                            onClick={() => navigate("/statistics")}
                        >
                            🏆 STATISTICS
                        </button>

                        <button
                            className="menu-button"
                            onClick={() => navigate("/settings")}
                        >
                            ⚙ SETTINGS
                        </button>

                        <button
                            className="menu-button"
                            onClick={() => navigate("/daily")}
                        >
                            ⚡ DAILY CHALLENGE
                        </button>
                    </div>

                    <p className="version">VERSION 1.0</p>

                </div>
            </div>
        </div>
    );
}

