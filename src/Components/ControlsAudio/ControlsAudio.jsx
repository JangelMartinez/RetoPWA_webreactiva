/* eslint-disable react/prop-types */
import React from 'react'
import { audioDate } from '../../utils/functions'

const ControlsAudio = ({ audio }) => {

    return (
        <section className='controlsAudio'>
            <div className='infoContent'>
                <div className='infoAudio'>
                    {
                        Object.keys(audio).length > 0
                        ? (
                            <>
                                    <h4> 
                                    <p> {audio?.title.toUpperCase()}</p>
                                    </h4>
                                    <p> {audioDate(Date.parse(audio?.isoDate) / 1000)}</p>
                                </>
                            )
                            : 'AUDIO NOT SELECTED'

                    }

                </div>
            </div>
            <audio src={audio?.enclosure?.url} controls >
            Your browser does not support the <code>audio</code> element
            </audio>

        </section>
    )
}

export default ControlsAudio