import './App.css';
import Card from './components/TaskOne/card';
import data from './components/TaskOne/list';
import General from './components/TaskTwo/General/General';


function App() {
  return (
    <>
    <h1>Задача 1!</h1>
      <div className="container">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    <h1>Задача 2!</h1>
      <General />
    </>
  )
}

export default App
