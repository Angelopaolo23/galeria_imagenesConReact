import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
function App() {
  return (
    <div className='container bg-dark text-light row'>
    <Header title="Galeria de fotografias de Angelo" />
    
    <Card url="https://images.pexels.com/photos/13973602/pexels-photo-13973602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Fotografia 1" description="Pequeño pueblo perdido en la bruma"/>
    <Card url="https://images.pexels.com/photos/13973602/pexels-photo-13973602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Fotografia 1" description="Pequeño pueblo perdido en la bruma"/>
    <Card url="https://images.pexels.com/photos/13973602/pexels-photo-13973602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Fotografia 1" description="Pequeño pueblo perdido en la bruma"/>
    <Footer />
    </div>
  );
}

export default App;
