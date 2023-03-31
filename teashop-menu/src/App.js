import './App.css';
//import Header from './Helmet';
import Footer from './Footer';
import Tea from './Section1';
import TeaCollections from './Section2';

function App() {
  return (
    <>
      <div className='tea-menu'>
        <header>
          <h1>House of<span className='tea-brand'>Tea</span></h1>
        </header>
        <main>
          <section>
            <div className="tea-icon">
              <img className="tea-icon" src="https://static.vecteezy.com/system/resources/previews/015/846/009/non_2x/matcha-logo-design-matcha-cup-green-tea-wallpaper-free-space-for-text-symbol-free-vector.jpg" alt="tea"/>
              <h2>Tea</h2>
            </div>
            <Tea />
          </section>
          <section>
            <h2> Tea Collections</h2>
            <TeaCollections />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
