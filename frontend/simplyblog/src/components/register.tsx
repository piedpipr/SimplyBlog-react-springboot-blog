import React from 'react'

type Props = {}

export default function Register({}: Props) {
  return (
    <div>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}