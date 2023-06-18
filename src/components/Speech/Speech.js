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
            // speech.voice = voices[305];
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
        <div className={"container-speech"} style={{marginLeft:"-50px"}}>
            <div className={"btn-container d-flex justify-content-sm-around"}>
                <span style={{color: "green", fontWeight:"bold", fontSize:"18px"}}>Báo đọc</span>
                <button style={{width:"76px", height:"40px", background:"#6ae96a"}} onClick={handlePlay}>{!isPaused ? <p>Đọc</p> :
                    <p>Tiếp tục</p>}</button>
                <button style={{width:"85px", height:"40px", background:"#6ae96a"}} onClick={handlePause}><p>Tạm dừng</p></button>
                <button style={{width:"76px", height:"40px", background:"#6ae96a"}} onClick={handleStop}><p>Dừng lại</p></button>
            </div>
        </div>
    );
};

export default Speech;