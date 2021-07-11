import logo from './logos/logo_transparent_background.png';
import './App.css';

function App() {
  return (
    <div className="HHR">
      <header className="HHR-header">
      </header>
      <body>
        <section class="main">
          <div class="coming_soon">
            <h3>Coming 2021</h3>
            <img src={logo} alt="Hundred Acre Realty" width="400" height="400"/>
            <p>A company dedicated to building value one acre at a time.</p>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
