import React, { useEffect, useState } from 'react'
//import audios from '../../../audios/audios.json'
import { audioDate } from '../../utils/functions'

// eslint-disable-next-line react/prop-types
const Podcasts = ({ changeAudio }) => {

    const [page, setPage] = useState(1)
    const [fetchAudio, setFetchAudio] = useState({ data: [] })
    const [loading, setLoading] = useState(false)

    console.log('fetch audio', fetchAudio)

    useEffect(() => {

        audioFetch();

    }, [page])

    const audioFetch = () => {
        fetch(`https://www.webreactiva.com/api/podcast/episodes?page=${page}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                method: 'GET',
                //mode: 'no-cors',
                referrerPolicy: 'strict-origin-when-cross-origin',
                referrer: 'no-referrer',
            }
        )
            .then(res => {

                console.log('res', res);
                return res.json()
            })
            .then(data => console.log(data))
            .catch(err => console.error(err))


    };

    return (
        <>
            <section className='contentAudios'>
                {

                    fetchAudio.data.map(audio => {
                        return (

                            <div key={audio.number} className='cardAudio' onClick={() => changeAudio(audio)}>
                                <img src={audio.image_url} alt={audio.title} />
                                <div>
                                    <h3 className='audioTitle'>{audio.title}</h3>
                                    <p className='dateRight'>
                                        <span className='formatDate'>
                                            {audioDate(audio.published_at)}
                                        </span>
                                    </p>
                                </div>

                            </div>

                        )
                    })
                }

            </section>
            <div className='buttonLoad'>
                <button className='load' onClick={() => { setPage(page + 1) }}>Load more audios</button>
            </div>
        </>
    )
}

export default Podcasts