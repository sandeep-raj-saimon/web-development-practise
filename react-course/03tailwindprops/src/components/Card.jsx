import React from 'react'

const Card = ({ username = "Default User" }) => {
    console.log('dadasdasd', username)
  return (
    <div>
        <img src="https://imgur.com/BuXiOBm" alt="" />
        <h2>Hello!!! I am {username}</h2>
        <span>Skilled Backend Developer with 5 years of experience optimizing backend
            systems and building scalable solutions. Proficient in Ruby, Python, and
            Node.js, with a track record of leading backend development for projects
            serving 50+ million users. Experienced in AWS and event-driven programming,
            improving operational efficiency and scalability for high-traffic applications.
            Working knowledge of generative AI technologies—such as Stable Diffusion,
            Eleven Labs, and OpenAI—and their integration into modern software stacks.
        </span>
    </div>
  )
}

export default Card