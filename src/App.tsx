
import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">
          ReactLaunch 🚀
        </h1>
        <div className="flex min-h-screen items-center justify-center">
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  )
}

export default App
