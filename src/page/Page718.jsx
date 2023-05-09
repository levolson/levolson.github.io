import {FaSistrix,FaMapMarkerAlt} from "react-icons/fa"
import { Link } from "react-router-dom";

function smooth(){
  let btnLink=document.querySelectorAll(".smooth")
for(let k=0;k<btnLink.length;k++){
btnLink[k].addEventListener("click",function(e){
    e.preventDefault();
    let target=this.getAttribute("href");
    let tarPos=document.querySelector(target).offsetTop;
    window.scrollTo({top:tarPos,behavior:'smooth'})
})}
}

function Page718() {
    return (
      <div className="page718">
        <Header></Header>
        <div className="main">
            <div className="inner">
                <section className="sec">
                    <ul className="list">
                        <li>
                            <div className="cay"></div>
                            <h2>718 Cayman</h2>
                            <p>91,600,000 KRW부터</p>
                        </li>
                        <li>
                        <div className="cay-s"></div>
                            <h2>718 Cayman S</h2>
                            <p>103,500,000 KRW부터</p>
                        </li>
                        <li>
                        <div className="cay-gt"></div>
                            <h2>718 Cayman GT4</h2>
                            <p>138,700,000 KRW부터</p>
                        </li>
                        <li>
                        <div className="box"></div>
                            <h2>718 Boxter</h2>
                            <p>96,300,000 KRW부터</p>
                        </li>
                        <li>
                        <div className="box-s"></div>
                            <h2>718 Boxter S</h2>
                            <p>108,200,000 KRW부터</p>
                        </li>
                        <li>
                        <div className="box-gt"></div>
                            <h2>718 Boxter GTS4</h2>
                            <p>128,200,000 KRW부터</p>
                        </li>
                    </ul>
                </section>
                <section className="font-list sec">
                    <div className="fon-list">
                        <a href="#concept" className="smooth" onClick={smooth}><p>718컨셉트</p></a>
                        <a href="#design" className="smooth" onClick={smooth}><p>디자인</p></a>
                        <a href="#per" className="smooth" onClick={smooth}><p>퍼포먼스</p></a>
                        <a href="#com" className="smooth" onClick={smooth}><p>편의사항</p></a>
                        <a href="#gal" className="smooth" onClick={smooth}><p>갤러리</p></a>
                    </div>
                </section>
                <section className="sec c718" id="concept">
                  <div className="concept">
                    <h3>718 concept</h3>
                    <p>718 모델은 스포츠카의 핵심을 유지하면서 미드십 엔진을 탑재한 로드스터로,</p>
                    <p>전설적인 포르쉐 718의 스포츠 정신에 미래형 스포츠카를 접목하여</p>
                    <p>오늘날의 도로에 적합하게 변신시켰습니다.</p>
                    <p>목표는 단 하나, 일상의 주행을 최고의 즐거움으로 만드는 것입니다.</p>
                  </div>
                </section>
                <section className="sec c718" id="design">
                  <div className="design">
                    <h3>Design</h3>
                    <p>정교하며, 과하지 않습니다. 자신감 넘치며, 구속받지 않습니다.</p>
                    <p>낮고, 와이드하며, 매끈합니다. 718 모델의 익스테리어 디자인은 스포티하면서도 독특한 에지와</p>
                    <p>함께 뚜렷하게 정의된 전통적인 윤곽으로 차별화된 특징을 선보입니다.</p>
                  </div>
                </section>
                <section className="sec c718" id="per">
                  <div className="per">
                    <h3>Performance</h3>
                    <p>718 모델의 특별함은 그 성능과 핸들링, 디자인에 있으며 트렁크 두 개의 넓은</p>
                    <p>적재 공간도 그 중 하나입니다</p>
                    <p>무엇보다 특별한 것은 처음부터 이 모든 것을 가능하게 해준 미드십 엔진 컨셉트입니다.</p>
                  </div>
                </section>
                <section className="sec c718" id="com">
                  <div className="com">
                    <h3>편의사항</h3>
                    <p>어댑티브 댐퍼는 일상의 주행에서 더욱 편안함을 제공합니다.</p>
                    <p>또한 다양한 수납 솔루션, 여유로운 레그룸, 넉넉한 수납을 위해 마련된</p>
                    <p>앞뒤의 적재 공간으로 실용성을 더합니다.</p>
                  </div>
                </section>
                <section className="sec gal" id="gal">
                  <h3>갤러리</h3>
                  <ul>
                    <li><div className="gal1 gal0"></div></li>
                    <li><div className="gal2 gal0"></div></li>
                    <li><div className="gal3 gal0"></div></li>
                    <li><div className="gal4 gal0"></div></li>
                  </ul>
                </section>
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }

  function reload(){
    window.location.reload();
  }
function Header() {
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
              <li onClick={reload}>
              
                <div className="logo-718"></div>
                <p>718</p>
              
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

  export default Page718;