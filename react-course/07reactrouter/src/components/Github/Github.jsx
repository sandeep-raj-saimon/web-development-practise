import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/sandeep-raj-saimon')
    //     .then((res) => res.json())
    //     .then(data => setData(data))
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
    <img src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sandeep-raj-saimon')
    return response.json()
}