import {FaSistrix,FaMapMarkerAlt} from "react-icons/fa"
import './App.css';
import { Link } from "react-router-dom";
import './page/page718.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="visual">
        <h2>DRIVE DFEIND US</h2>
      </div>
      <main>
        <div className="inner">
          <div className="model">
            <h2 className="m-tittle">MODELS</h2>
            <ul className="m-menu">
              <li className="v-718">
                <p className="tittle">718</p>

                <Link to="/Page718" className="s-tittle">나만의 포르쉐<span className="arrow"></span></Link>|{" "} 
                
              </li>
              <li className="v-911">
                <p className="tittle">911</p>
                <p className="s-tittle">나만의 포르쉐<span className="arrow"></span></p>
              </li>
              <li className="v-tay">
                <p className="tittle">TAYCAN</p>
                <p className="s-tittle">나만의 포르쉐<span className="arrow"></span></p>
              </li>
              <li className="v-pana">
                <p className="tittle">PANAMERA</p>
                <p className="s-tittle">나만의 포르쉐<span className="arrow"></span></p>
              </li>
              <li className="v-macan">
                <p className="tittle">MACAN</p>
                <p className="s-tittle">나만의 포르쉐<span className="arrow"></span></p>
              </li>
              <li className="v-cay">
                <p className="tittle">CAYENNE</p>
                <p className="s-tittle">나만의 포르쉐<span className="arrow"></span></p>
              </li>
            </ul>
          </div>
          <div className="spe">
            <h2 className="m-tittle">SPECIAL</h2>
            <div className="s-spe">
              <p>ANIVERSARY</p>
              <h3>LIMITE EDITION</h3>
            </div>
          </div>
          <div className="shop">
            <h2 className="m-tittle">SHOPING TOOL</h2>
            <div className="m-shop">
              <ul className="list">
                <li>
                  <div className="shop1">
                      <p>모델찾기</p>
                  </div>
                </li>
                <li> 
                  <div className="shop2">
                    <p>포르쉐 센터</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="dis">
            <h2 className="m-tittle">DISCOVER</h2>
            <ul className="dis-list">
              <li>
                <div className="dis1"></div>
                <p>Porsche News</p>
              </li>
              <li>
                <div className="dis2"></div>
                <p>Porsche Lifestyle</p>
              </li>
              <li>
                <div className="dis3"></div>
                <p>Porsche Museum</p>
              </li>
              <li>
                <div className="dis4"></div>
                <p>Porsche Exclusive</p>
              </li>
            </ul>
          </div>

        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export function Header() {
  return(
<header>
      <div className='inner'>
        <h1>
          <Link to="/">
            <p className="blind">logo</p>
            <div className="logo"></div>
          </Link>
        </h1>
        <div>
          <ul className='nav'>
            <li>
              <a href="/Page718">
                <div className="logo-718"></div>
                <p>718</p> 
              </a>  
            </li>
            <li>
              <div className="logo-911"></div>
              <p>911</p>
            </li>
            <li>
              <div className="logo-tay"></div>
              <p>Taycan</p>
            </li>
            <li>
              <div className="logo-pana"></div>
              <p>Panamera</p>
            </li>
            <li>
              <div className="logo-macan"></div>
              <p>Macan</p>
            </li>
            <li>
              <div className="logo-cay"></div>
              <p>Cayenne</p>
            </li>
          </ul>
        </div>
        <div className='info'>
          <div className="place">
            <FaMapMarkerAlt className="icon"></FaMapMarkerAlt>
            <p>포르쉐 찾기</p>
          </div>
          <div className="my">
            <FaSistrix className="icon"></FaSistrix>
            <p>my porsche</p>
          </div>
        </div>
        </div>
      </header>
  );
}
function Footer(){
  return(
<footer>
        <div className="inner">
          <p className="f1">© 2022 Porsche Korea Ltd. Legal notice 개인정보처리방침 쿠키 정책 위치정보사업 이용약관 위치기반서비스 이용약관 Open Source Software Notice.</p>
          <p>포르쉐 고객센터 080-8100-911</p>
          <p className="f2">※ 표기된 연비는 표준 모드에 의한 것으로 도로상태, 운전방법, 차량적재, 정비상태 및 외기온도에 따라 실주행연비와 차이가 있습니다.</p>
          <p>※ 본 웹사이트에 기재된 내용은 사전에 예고 없이 변경될 수 있으므로 실제 차량과 다를 수 있습니다.</p>
          <p>※ 차량 이미지는 실제 모델과 다를 수 있으며, 국내 적용 사양 및 구성에 따라 차이가 있을 수 있습니다.</p>
          <p>※ 국내 출시 이전 차량의 경우 국내 공인 연비 정보 및 타이어 에너지소비효율 정보가 존재하지 않을 수 있습니다.</p>
          <p>※ 개별소비세 인하 관련 공지사항</p>
          <p>포르쉐 코리아는 정부의 일시적 개별소비세 인하 정책에 따라 적용 대상 차량에 대해 개별소비세 감면 혜택을 적용합니다.</p>
          <p>자세한 사항은 포르쉐 센터를 통하여 문의하시기 바랍니다.</p>
        </div>
      </footer>
  );
}

export default App;
