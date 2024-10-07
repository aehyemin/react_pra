import logo from './logo.svg';
import './App.css';
//펑션 항상 대문자
function Header () {
  return <header>
      <h1><a href="/">WEjkjkjkkjB</a></h1>
  </header> //component
}

function App() {
  return (
    <div>
    <Header></Header> 
    <Header></Header>
    <nav>
      <ol>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
        <li><a href="/read/3">js</a></li>
      </ol>
    </nav>
    <article>
      <h2>welcome</h2>
      hello, w
    </article>
    </div>
  );
}

export default App;
