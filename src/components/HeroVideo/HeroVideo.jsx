import React from "react";
import * as styles from "./HeroVideo.module.scss"

const HeroVideo = (props) => {
    const {
        videoLink,
    } = props

    return (
        <section className={styles.videoBlock}>
            <video
                className={styles.video}
                playsInline
                loop
                autoPlay
                muted
            >
                <source type="video/mp4" src={videoLink}/>
            </video>
        </section>
    )

}
export default HeroVideo