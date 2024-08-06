import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.scss';
import { Link } from "react-router-dom";
import photoHero from '../../assets/ronaldo.png';
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

function Home() {

     // const [showLogin, setShowLogin] = useState(true);
     const { showLogin } = useContext(AppContext);

     console.log(showLogin);

     return (
          <div className='home-page'>
               <Container>
                    <Row className='hero'>
                         <Col md={6}>
                              <div className='text-block'>
                                   <h1 className='title'>Hệ Thống</h1>
                                   <h1 className='title main'>AUTO FC ONLINE</h1>

                                   <ul className="des-list">
                                        <li className="des-item">
                                             <Icon className="icon" icon="solar:football-linear" />
                                             <p className="text">Tiện lợi - dễ dàng sử dụng</p>
                                        </li>

                                        <li className="des-item">
                                             <Icon className="icon" icon="solar:football-linear" />
                                             <p className="text">Auto 100% không chiếm chuột</p>
                                        </li>

                                        <li className="des-item">
                                             <Icon className="icon" icon="solar:football-linear" />
                                             <p className="text">An toàn - KHÔNG ban acc</p>
                                        </li>
                                   </ul>

                                   <Link className="download-button" to='/download'>Tải ngay</Link>
                              </div>
                         </Col>

                         <Col md={6}>
                              <div className="img-des">
                                   <img className="photo-hero-1" src={photoHero} alt="" />
                              </div>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
}

export default Home;