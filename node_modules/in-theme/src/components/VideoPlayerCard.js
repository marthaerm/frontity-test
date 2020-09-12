const VideoPlayerCard = (props) => {
    return(
        <div className="video-player-card">

            <div className="video-player">
            <iframe src={props.href} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
            </div>
            <div>
                <p className="video-player-card-text">
                    Optional metadata should be kept to two or three lines. Optional metadata should be kept to two or three lines. Optional metadata should be kept to two or three lines. Optional metadata should be kept to two or three lines. Optional metadata should be kept to two or three lines. Optional metadata should be kept to two or three lines. Optional metadata should be kept to two or three lines. Optional metadata should be kept to two or three lines. Optional metadata should be kept to two or three lines. Optional metadata should be kept to two or three lines.
                </p>
                <div className="video-player-card-button">
                    <button className="">
                        Enter Festival
                    </button>
                </div>
            </div>

            <style jsx>{`
                .video-player-card {
                    background: #FFFFFF 0% 0% no-repeat padding-box;
                    border: 1px solid #EAEAEA;
                    opacity: 1;
                    margin-Left: 82px;
                    margin-Right: 82px;
                    display: 
                }

                .video-player-card-text{
                    margin-top: 40px;
                    margin-left: 40px;
                    margin-right: 160px;
                    text-align: left;
                    font-family: Helvetica;
                    font-size: 12px;
                    color: #6E6E6E;
                    opacity: 1; 
                }

                .video-player-card-button{
                    margin-top: 30px;
                    margin-bottom: 30px;
                }
                .video-player-card-button button{
                    border: 2px solid var(--bleu-0f4c81);
                    background: #0F4C81 0% 0% no-repeat padding-box;
                    text-align: center;
                    font-weight: bold;
                    font-size: 14px;
                    font-family: Helvetica;
                    letter-spacing: 0px;
                    color: #FFFFFF;
                    padding: 10px 40px;

                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }

                .video-player iframe{
                    width: 100%;
                    height: 400px; 
                }

                @media(max-width: 768px){
                    .video-player-card-button button{
                        border: 2px solid var(--bleu-0f4c81);
                        background: #0F4C81 0% 0% no-repeat padding-box;
                        text-align: center;
                        font-weight: bold;
                        font-size: 14px;
                        font-family: Helvetica;
                        letter-spacing: 0px;
                        color: #FFFFFF;
                        
                        width:100%;
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                    }
                }
            `}

            </style>
        </div>
        
    )
}

export default VideoPlayerCard;