import Logo from '../components/Logo'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <Logo />
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Tailwind CSS v4 is working!
        </h1>
        <p className="text-4xl text-gray-600">
          Start editing to see changes in real-time.
        </p>
      </div>
    </div>
  )
}

export default App
