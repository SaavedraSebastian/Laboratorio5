import Carousel from 'react-bootstrap/Carousel';
const feather = require('feather-icons');
feather.replace();
setTimeout(() =>{
    feather.replace();	
}, 1000);
const Main = () => {
    return <main>
  <Carousel>
      <Carousel.Item>
       
          <img src="https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/mejores-bancos-de-imagenes-gratis.jpg" className="d-block w-100" alt="..."></img>
          <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1713312000&semt=ais" className="d-block w-100" alt="..."></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img src="https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg?size=626&ext=jpg&ga=GA1.1.1488620777.1713312000&semt=sph" className="d-block w-100" alt="..."></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    <p className="mt-5 mb-5">En SystemandSoftware, nos dedicamos a forjar el camino en la revolución digital, ofreciendo soluciones tecnológicas que anticipan las necesidades del futuro y potencian el crecimiento de nuestros clientes en un mundo cada vez más conectado. </p>
    <p className="mt-2">Con sede en Winooski, Vermont, somos un moderno proveedor de sistemas perimetrales y CIS locales y en la nube que ofrece a las empresas de servicios públicos sistemas CIS y perimetrales totalmente compatibles desde 1973.</p>


    </main>;
}

export default Main;