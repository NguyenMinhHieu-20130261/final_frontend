import React, {useState, useEffect} from "react";
import "./style.css";

const Speech = (data) => {
    const [isPaused, setIsPaused] = useState(false);
    const [speech, setSpeech] = useState(null);

    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    useEffect(() => {
        const u = new SpeechSynthesisUtterance(data.text);
        setSpeech(u);
        return () => {
            synth.cancel();
        };
    }, [data, synth]);
    const handlePlay = () => {
        if (isPaused)
            synth.resume();
        else {
            speech.voice = voices[301];
            synth.speak(speech);
        }
        setIsPaused(false);
    };
    const handlePause = () => {
        synth.pause();
        setIsPaused(true);
    };
    const handleStop = () => {
        synth.cancel();
        setIsPaused(false);
    };

    return (
        <div className={"container-speech"}>
            <div className={"btn-container d-flex justify-content-sm-around"}>
                <span style={{color: "green", fontWeight:"bold", fontSize:"18px"}}>Báo đọc</span>
                <button onClick={handlePlay}>{!isPaused ? <i className={"fa fa-play"}></i> :
                    <i className={"fa fa-angle-double-right"}></i>}</button>
                <button onClick={handlePause}><i className={"fa fa-pause"}></i></button>
                <button onClick={handleStop}><i className={"fa fa-stop"}></i></button>
            </div>
        </div>
    );
};

export default Speech;