import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [auto, setAuto] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  // Fake API call simulation
  const fetchData = async () => {
    setLoading(true)
    setMessage("")
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)) // simulate delay
      setMessage("✅ Data fetched successfully!")
    } catch (error) {
      setMessage("❌ Something went wrong!")
    } finally {
      setLoading(false)
    }
  }

  // Auto increment logic
  useEffect(() => {
    let interval
    if (auto) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [auto])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>🚀 subhajit yeehh majumdar ok ok dev  Experimental Feature's</h1>



      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          Manual Count is {count}
        </button>

        <button onClick={() => setAuto((prev) => !prev)}>
          {auto ? "⏸ Stop Auto Increment" : "▶️ Start Auto Increment"}
        </button>

        <button onClick={fetchData} disabled={loading}>
          {loading ? "Fetching..." : "Simulate API Call"}
        </button>

        <p>{message}</p>

        <p>
          Edit <code>src/App.jsx</code> and save to test CI/CD pipeline
        </p>
      </div>

      <p className="read-the-docs">
        CI/CD Test by Subhajit — branch: <strong>subha-dev</strong>
      </p>
    </>
  )
}

export default App
