import React, { useRef, useState } from "react";

function CardLayout({url, name, number}) {
    //const[playing, setPlaying] = useState(false);
    //const videoRef = useRef(null);

    /*const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }else {
            videoRef.current.play();
            setPlaying(true);
        }
    }*/

    return (
        <div  className="">
            <div className="h-fit w-fit rounded-full">
                <img class="rounded-2xl"
                    className="video_player"
                    src={url}
                />
            </div>
            <div className="footer">
                <h3>{"vendor:" + name}</h3>
            </div>
            <div className>
                <a
                href={"https://wa.me/" + number}
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <i class="fa fa-whatsapp whatsapp-icon"></i>
                </a>
            </div>
        </div>
    )
}

export default CardLayout;
