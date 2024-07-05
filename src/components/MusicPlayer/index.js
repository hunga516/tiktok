import './MusicPlayer.css'
import music1 from '../../videos/flac-1.flac'
import { forwardRef, useImperativeHandle, useRef } from 'react';

function MusicPlayer(props, ref) {

    const musicRef = useRef()

    useImperativeHandle(ref, () => (
        {
            play() {
                musicRef.current.play()
            },
            pause() {
                musicRef.current.pause()
            }
        }
    ))



    return (
        <audio
            ref={musicRef}
            src={music1}
            controls
            type='audio/flac'
        />
    )
}

export default forwardRef(MusicPlayer);