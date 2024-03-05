
import axios from 'axios'
import { useState } from 'react'
import SignUpForm from './Signup'


function Loginsignup() {


  const [user, setUser] = useState([])
  const addUser = (data) => {
    console.log(data);
    setUser(() => [...user, data])
  }

  return (
    <div>
      <SignUpForm RegisterUser={addUser} />
    </div>
  )
}

export default Loginsignup;