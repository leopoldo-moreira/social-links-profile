import './App.css';
import Btn from './components/Btn';
import ProfileImg from './img/avatar-jessica.jpeg'

function App() {


  const btnName = [
    'GitHub',
    'Fronend Mentor',
    'LinkedIn',
    'Twitter',
    'Instagran'
  ]


  return (
    <main className="App">

      <img alt="profile avatar" src={ProfileImg}></img>
      <h1>Jessica Randall</h1>
      <p>London, United Kingdom</p>
      <p>"Front-end developer and avid reader."</p>
      
      {btnName.map((item,index) => (
        <Btn key={index} text={item}/>
      ))}     
      
      
           
    </main>
  );
}

export default App;
