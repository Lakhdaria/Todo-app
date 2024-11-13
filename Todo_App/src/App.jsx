import './index.css';  // Importation de Tailwind CSS
import './App.css'
import TodoApp from './components/TodoApp';

function App() {

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TodoApp />
    </div>
  )
}

export default App
