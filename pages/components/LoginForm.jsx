import { useState } from 'react'


export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    
  }
  return (
    <>
    <h1 className='form-header'>Sign in</h1>
    <form className='horizontal-center' onSubmit={onSubmit}>
        <div className="form-control">
            <label className='hi'>Username</label>
            <input type='text'
             value = {username}
             onChange={(e) => setUsername(e.target.value)}
             ></input>
        </div>
        <div className="form-control">
            <label>Password</label>
            <input type='text'
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
        </div>
        <div className="form-control button-spacer">
            <input className='button' type="button" value="Log in"/>
        </div>
    </form>
    </>
  )
}
