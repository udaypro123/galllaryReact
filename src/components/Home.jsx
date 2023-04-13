import React, { useContext, useEffect } from 'react'
import { authcontext } from './context'

const Home = () => {
    const { input, data, setdata } = useContext(authcontext)

    async function getdata() {
        const res = await fetch(`https://api.unsplash.com/photos/?client_id=wNxaIWT-sV77oGB-IHcC2GvPoQ4KoLsvZA0I9MZhAL8`)
        const datas = await res.json()
        console.log(datas)
        return setdata(datas)
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <div className='homecompo'>

                {
                   data.map((ele, id) => {
                                return( <>
                                    <div className='imagdiv' key={id}>
                                        <img src={ ele.urls.small
                                        } alt="" />

                                    
                                   
                                    <div className='taggdiv'>
                                        <p>{ele.user.first_name}</p>
                                        <p>{ele.created_at}</p>
                                    </div>
                                    </div>
                                    
                                </>)
                            })
                }
                </div>
        </>
    )
}

export default Home
