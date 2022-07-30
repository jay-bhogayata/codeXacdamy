import React, { useRef, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch(error){
      setError("Failed to reset password")
      console.log(error)
    }

    setLoading(false)
  }

  return (
    <>
      <div className="bg-[#f1f1f1] flex flex-col">
        <h1 className="text-3xl font-semibold text-center mt-5 font-[#1b1b1b]">Password Reset</h1>
        {error && <p className="text-xl mx-auto mt-2 font-medium text-red-700">{error}</p>}
        {message && <p className="text-xl mx-auto mt-2 font-medium text-green-700" >{message}</p>}
        <form onSubmit={handleSubmit} className="mx-auto mt-5 w-1/2 flex flex-col">
          
          <input type="email" ref={emailRef} required className="p-2  mt-2 rounded-lg bg-stone-50 w-1/2 mx-auto text-[#1b1b1b]/90" placeholder="email"/>
          <button disabled={loading} className="bg-[#1b1b1b] w-1/2 mx-auto mt-5 p-2 text-gray-300 rounded-lg" type="submit">
              Reset Password
            </button>
        </form>

        <Link to="/login" className="mx-auto mt-5 font-medium text-blue-700">Login</Link>
        <div className="mx-auto mt-5 font-medium text-blue-700">
        Need an account ? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  )
}