import Header from './Header.jsx';
import Footer from './Footer.jsx';
import './index.css';

function App() {
  return(
  <> 
  <Header/>
  <h1 style={{color:'blue',textAlign:'center'}}>Hello,React</h1>
  <div className='container'>This is div container</div>
  <h2>This is h2 heading </h2>
  <Footer/>
  </>
  );
}
export default App;