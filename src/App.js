import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BCard from './components/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function App() {
  return (
    <>
    <div className='container'>
      <Header title="Mini galería de fotografías" />
      <Row xs={1} md={2} xl={3} className="g-4">
        <Col>
          <BCard url="https://images.pexels.com/photos/1689608/pexels-photo-1689608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Trepidante" description="Mmmmmmm... vértigo" linkAutor="https://www.pexels.com/es-es/@zhuhehuai/"/>
        </Col>
        <Col>
          <BCard url="https://images.pexels.com/photos/13973602/pexels-photo-13973602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Ningún lugar" description="Pequeño pueblo perdido en la bruma" linkAutor="https://www.pexels.com/es-es/@ricardo-oliveira-317251078/"/>
        </Col>
        <Col>
          <BCard url="https://images.pexels.com/photos/11916514/pexels-photo-11916514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Hogar dulce hogar" description="Que linda la tranquilidad del campo, más con personas que uno quiere..." linkAutor="https://www.pexels.com/es-es/@mikhail-konetski-161728914/"/>
        </Col>
        <Col>
          <BCard url="https://images.pexels.com/photos/14410954/pexels-photo-14410954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Misteriosa personaje" description="¿Quién será esta misteriosa mujer? ¿sera un auto retrato?" linkAutor="https://www.pexels.com/es-es/@fotios-photos/"/>
        </Col>
    </Row>

    </div>
    <Footer text='Una muy breve selección de fotografías de mí agrado extraídas desde Pexels, pertenecientes a distintos fotografos(as) a lo largo del mundo...'/>
    </>
  );
}

export default App;
