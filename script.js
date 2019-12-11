
function addContent(n){
  var content = makeContent(n);
  $("#content")[0].innerHTML = "";
  $("#content").append(content);
  $("#content")[0].scrollTop = 0;
}

function makeContent(num){
  $("li").removeClass("on");
  var tag = ".li-"+num
  $(tag).addClass("on");
  if(num<0){
    $(".num-1").removeClass("on");
    $(".num-2").removeClass("on");
  }else if (num<5) {
    $(".num-1").addClass("on");
    $(".num-2").removeClass("on");
  }else if (num<11) {
    $(".num-1").removeClass("on");
    $(".num-2").addClass("on");
  }

  if(menuToggle==true){toggle()};
  var html=""
  // html+= "<br>"
//// Workshop I : Manifesto poster ////
    if (num==-2){html+="<img src='src/main.gif' id='main'><p class='main-text'><br><span style='color:blue'>디자이너 엄태욱(Te-euk, Real moomin)</span>은 홍익대학교 시각디자인과에서 디자인을 공부했다. 마이크로 타이포그라피, 특히 웹에 기반한 스크린-모바일 타이포그라피 작업을 주로 하며, 프리랜서 개발자-디자이너로 일하는 동안 패션, 그래픽 디자이너, 뮤지션들과 협업했다."
    html+="<br><br>현재는 NAVER에서 커뮤니티 서비스를 설계하고 있으며, 가상의 공간, 사람과 사람을 관찰하고 이어주는 일, 무민트롤에 관심이 많다.<br><br>이 페이지는 커뮤니케이션 디자인 수업을 통해 약 3개월 간 진행된 그의 그래픽 실험 세션들에 대한 프로세스 북이다. 총 2개의 챕터로 나누어져 있다.</p>"}
    if (num==-1){
      html+="<p id='calendar0' style='margin-bottom:8px'>Calendar (Thu 10:00)</p>"
      html+="<div class='calendar2'>w1<br>09.04<span><br><br><br>Orientation</span></div>"
      html+="<div class='calendar' onclick="+"'addContent(0)'"+"'>w2<br>09.18<span><br><br><br>Workshop I</span></div>"
      html+="<div class='calendar' onclick="+"'addContent(1)'"+"'>w3<br>09.25<span><br><br><br>Workshop II</span></div>"
      html+="<div class='calendar2'>w4<br>10.03<span><br><br><br>Absence</span></div>"
      html+="<div class='calendar' onclick="+"'addContent(2)'"+"'>w5<br>10.10<span><br><br>Project I<br>in progress</span></div>"
      html+="<div class='calendar' onclick="+"'addContent(2)'"+"'>w6<br>10.17<span><br><br>Project I<br>in progress</span></div>"
      html+="<div class='calendar' onclick="+"'addContent(3)'"+"'>w7<br>10.24<span><br><br>Project I<br>done</span></div>"
      html+="<div class='calendar' onclick="+"'addContent(4)'"+"'>w8<br>10.31<span><br><br><br>Open studio I<br></span></div>"
      html+="<div class='calendar' onclick="+"'addContent(5)'"+"'>w9<br>11.07<span><br><br><br>Workshop III<br></span></div>"
      html+="<div class='calendar' onclick="+"'addContent(6)'"+"'>w10<br>11.14<span><br><br><br>Activity I<br></span></div>"
      html+="<div class='calendar' onclick="+"'addContent(8)'"+"'>w11<br>11.21<span><br><br>Project II<br>in progress</span></div>"
      html+="<div class='calendar' onclick="+"'addContent(8)'"+"'>w12<br>11.28<span><br><br>Project II<br>in progress</span></div>"
      html+="<div class='calendar' onclick="+"'addContent(7)'"+"'>w13<br>12.05<span><br><br><br>Activity II</span></div>"
      html+="<div class='calendar' onclick="+"'addContent(9)'"+"'>w14<br>12.12<span><br><br>Project II<br>done</span></div>"
      html+="<div class='calendar' onclick="+"'addContent(10)'"+"'>w15<br>12.19<span><br><br><br>Open studio II</span></div>"
    }

    if (num==0) {
    html+="<p style='color:blue'>Workshop I << Manifesto Poster >></p>"
    html+="<p>R724  2019.09.18</p>"
        html+="<img src='src/0-3.png'>";
    html+="<p>Workshop I은 그래픽 디자인사의 마니페스트와 디자이너의 작품들을 조사한 뒤, 2시간 동안 마니페스토를 포스터를 제작하는 워크샵이다. 한 그룹에 4-5명의 구성원이 모여 메시지를 정하고, 준비한 재료를 이용해 A3 판면의 포스터 낱장을 디자인한다.</p>"
      html+="<img src='src/0-0.png'>";
    html+="<br><p>각 구성원은 마니페스토를 조사한 내용을 나누고, 자신의 견해를 나누었다. <span style='color:blue'>디자이너 엄태욱</span>은 그래픽 디자인에서의 마니페스토 = ‘견해의 그래픽’으로 간주하고, 그래픽 디자인 거장들의 견해와 작업 방식에 대해 탐구했다.</p>"
      html+="<img src='src/0-4.png'>"
    html+="<br><p>그룹 1의 디자이너들은 ‘스테판 사그마이스터(Stefan Sagmeister)’의 디자인 철학과 그가 즐겨 사용한 소재인 ‘몸’을 주제로 ‘디자이너와 몸’에 대해 논하였다.</p>"
    html+="<img src='src/0-5.png'>"
    html+="<br><p>몸의 이미지를 수집하여 포스터를 구성하기로 했다. 이 포스터에서 <span style='color:blue'>디자이너 엄태욱</span>은 그래픽 요소간 강-중-약의 요소, 그리고 강렬한 메시지를 전하고자 했다. 핵심 메시지는 ‘디자이너에게 몸은 가장 가까운 미디어’로, 메를로-퐁티의 경구를 인용했다. 완성된 그래픽 디자인 포스터는 다른 그룹의 포스터와 함께 R724에 전시되었다.</p>"
    html+="<img src='src/0-6.png'>"
    }

    //// Workshop II : Letter Design ////
    if (num==1) {
    html+="<p style='color:blue'>Workshop II << Letter Design >></p>"
    html+="<p>R724  2019.09.25</p>"
    html+="<img src='src/1-1.png'>";
    html+="<p>Workshop II는 각자의 매니페스토를 선정하고, 매니페스토에 어울리는 글리프를 디자인하는 워크샵이다. 디자이너들은 2시간동안 먹물과 다양한 재료들을 이용해 디자인 작업에 사용할 소스를 만들었다.<span style='color:blue'> 디자이너 엄태욱</span>은 ‘디자인 과잉(Design Overflow)’을 주제로 선정했다. 필요 이상의 디자인이 이루어지는 상황을 디자인 과잉으로 정의하고, 이 상황으로부터 나온 디자인 작업물들을 거품에 비유했다. 먹물과 입김을 이용해 종이 위에 거품 자국을 만들었다.</p>"
    html+="<img src='src/1-2.png'>";
    html+="<p>크고 작은 거품의 갯수, 입김을 넣는 세기와 시간, 먹물의 농도에 따라 다양한 자국을 그려냈다. 빠른 작업 진행을 위해 더운 바람으로 종이를 건조했으며, 결과물은 가공을 거쳐 위와 같이 나왔다. 비록 이후의 작업으로 이어지지는 못했으나, 들숨과 날숨 그리고 먹을 이용한 새로운 그래픽 실험이었다.</p>"
    html+="<img src='src/1-3.jpg'>";

    }
    //// process of Project I : Design Overflow ////
    if (num==2){
      html+="<p style='color:blue'>Process of << Design Overflow >></p>"
      html+="<p>R724  2019.10.04 ➡ 2019.10.23</p>"
      html+="<img src='src/2-3.jpg'><p><span style='color:blue'>디자이너 엄태욱</span>은 디자인 못지 않게 디자이너의 생태계에도 관심이 많다. 디자인을 이해하기 위해 디자이너, 작업 동기, 영향력 등을 살피는 편이었다. 그의 눈에는 디자이너가 점점 많아지면서 불필요한 동기, 불필요한 작업물들이 생겨나고 있는게 보였다.</p>"
      html+="<img src='src/2-5.jpg'><br><p>그에게 디자인 = 문제해결이었고, 디자이너는 문제를 해결하는 사람이었다. 오늘날, 문제 해결사들이 많아지면서 점점 그들은 살아남기 위해 문제를 더 많이 만들어 내는 셈이었다. 이러한 시각에서 <span style='color:blue'>디자이너 엄태욱</span>은 문제를 푸는 행위에 집중하여 문제를 탐구하기로 하였다.</p>"
      html+="<img src='src/2-6.jpg'><br><p>디자이너의 행위와 유사성을 보이는 것은 ‘퍼즐풀이’였다. 그래서 퍼즐풀이를 이용한 그래픽 디자인을 살펴보고 프로젝트1의 컨셉을 ‘싸구려 퍼즐북’으로 정했다. 컨셉이 확정되자 디자인 과잉에 대해 공감하는 동료 디자이너들을 모아 인터뷰를 나누었다.</p>"
      html+="<img src='src/2-7.jpg'><br><p>책의 재료에는 재생지를 사용했고, 각 페이지마다 간단한 퍼즐로 주제와 관련된 비주얼을 만들었다. 총 5개 장으로 구성되었으며, 각각의 장마다는 새로운 퍼즐을 넣었고, 도비라에는 우화나 단상을 넣어 주제에 대해 미처 풀지못한 이야기를 싣었다. 디자인 결과물은 <u><a onclick="+"'addContent(3)'"+"'>Output</a></u>에서 확인할 수 있다.</p>"

    }

    //// Project I : Design Overflow ////
    if (num==3){
      html+="<p style='color:blue'><< Design Overflow >></p>"
      html+="<p>R724  2019.10.24</p>"
      html+="<a href='https://drive.google.com/file/d/118KEvTbyV3Y1DIo_gjkzNWT4H8wB9-Ps/view?usp=sharing' target='_blank'><img src='src/2-1.png'></a>"
      html+="<br><a href='https://drive.google.com/file/d/118KEvTbyV3Y1DIo_gjkzNWT4H8wB9-Ps/view?usp=sharing' target='_blank' style='margin-left:30px;'><u>⬇ PDF DOWNLOAD</u> (4.17 MB)</a><p>디자인 과잉을 주제로 한 아카이브 북이 완성됐다. 총 49페이지 분량의 책으로 디자이너의 가짜 문제(Pseudo Problem)에 대한 <span style='color:blue'> 디자이너 엄태욱</span>의 생각과 동료 디자이너들의 인터뷰들을 싣었다. 각 페이지의 컨셉은 신문 속 퍼즐과 지하철 매대에서 파는 퍼즐 책이며, 풀 수 없는 퍼즐과 인터뷰 내용을 나란히 싣었다.<br><img src='src/3-1.png'><br>4장에서는 디자인 과잉 현상 속 디자이너가 가져야 하는 바람직한 자세를 매니페스토로 풀어내고 있다. 이 작업은 10월 31일, R724에서 열린 <u><a onclick="+"'addContent(4)'"+"'>Open studio I</a></u>에 전시되었다.</p>"
    }

    //// Open Studio I ////
    if (num==4) {
    html+="<p style='color:blue'>Open Studio I << Design Manifesto >></p>"
    html+="<p>R724  2019.10.31</p>"
    html+="<img src='src/4-2.jpg'><br><p>10월 31일 오전, 그래픽 디자인 매니페스토를 주제로 25점의 작품들이 전시되었다. 전시 결과물은 주로 영상, 책, 포스터 등이 있었으며, 참여형 작업도 포함됐다. 각자의 마니페스토와 함께 일러스트나 스텐실, 본문 위주의 타이포그라피 등 다양한 스타일의 작업들을 감상할 수 있었다.</p>"
    html+="<img src='src/4-1.jpg'><br><p></p></br>"
    }

    //// Workshop III ////
    if (num==5) {
    html+="<p style='color:blue'>Workshop III << Geo-Demography >></p>"
    html+="<p>R724  2019.11.07</p>"
    html+="<img src='src/5-1.jpg'><br><a href='https://940822tw.github.io/SolC/' target='_blank' style='margin-left:30px;'><u>LINK</u> (16.5 MB)</a><br><p>Workshop III은 ‘우연의 장소’에 대한 탐구이다. 한 그룹에 4-5명의 디자이너가 모여 주제가 될 장소를 선정하고, 이를 2시간동안 자유롭게 표현하는 작업이다. 그룹 1은 HIVCD의 지도와 실제 발견하는 사물들을 연결하여 의미-지도를 구성했다. 구성원들이 정해진 시간에 역할을 나누어 이미지 소스를 가공하거나 텍스트를 작성했고, <span style='color:blue'>디자이너 엄태욱</span>은 인터랙션 가능한 코드를 작성했다.<br><br>해당 주제는 흥미로웠지만 다음 작업으로 이어지지는 않았다. 다만 그래픽에 지도를 사용한다는 아이디어는 그대로 가져가기로 했다.</p>"
      }

    //// Activity I ////
    if (num==6) {
    html+="<p style='color:blue'>Activity I << XYZ BOX >></p>"
    html+="<p>윤디자인갤러리  2019.11.14</p>"
    html+="<img src='src/6-0.jpg'><br><p>30여명의 디자이너들과 함께 마포구 상수동에 자리한 윤디자인갤러리에 디자이너 안병학, 이원재, 김한솔외 여러 디자이너의 작품을 감상했다. 중국 내몽골의 타입 디자이너 애민의 작품 외 다수의 작업 설명을 들었다. 두 번째 오픈 스튜디오에 앞서 전시 방법에 대한 탐구를 했다.<br><img src='src/6-1.jpg'><br></p>"
    html+="<br><p></p>"
      }

    //// Activity II ////
    if (num==7) {
    html+="<p style='color:blue'>Activity II << Final Show of HIVCD >></p>"
    html+="<p>HoMA  2019.12.05</p>"
    html+="<img src='src/7-1.jpeg'><br><p>30여명의 디자이너들과 함께 HIVCD의 졸업주간 전시를 관람했다. 홍익대학교의 안병학 교수가 지도한 사회문화적-디자인-스튜디오에 방문해 도슨트의 설명을 들었다. 약 15여개의 그래픽 디자인 작업물들을 감상했다. 센서를 이용한 그래픽, 출판, 설치 작업 등 다양한 포맷의 작업이 전시되었다.<br><img src='src/7-2.jpg'><br></p>"
      }

    //// process of Project II ////
    if (num==8) {
    html+="<p style='color:blue'>Process of << Urban Automata >></p>"
    html+="<p>R724  2019.11.21 ➡ 2019.12.11</p>"
    html+="<img src='src/8-1.gif'>"
    html+="<br><p>Workshop III를 하는동안 <span style='color:blue'>디자이너 엄태욱</span>은 우연의 공간을 탐구하면서 지도 그래픽에 영감을 얻었다. 그에게 지도란 한 장소의 특성을 관찰하기 좋은 시각 자료이다. 특히 위성사진은 관찰하고 싶은 곳을 보여주면서도, 오랜 기간을 두고 촬영 된 좋은 기록이었다.</p>"
    html+="<img src='src/8-2.jpg'><p>위 이미지는 마포구 서강동 일대의 위성사진으로, 1972년 이후 홍익대학교 앞의 역사를 보여준다. 마구잡이로 만들어진 홍대 앞의 모습은 마치 우연처럼 보이지만 일련의 과정을 거쳐 형성되었음을 볼 수 있다. <span style='color:blue'>디자이너 엄태욱</span>은 이 점에 착안하여 우연(처럼 보이는)의 공간을 구성하며 그래픽 실험을 진행했다.</p>"
    html+="<img src='src/8-3.jpg'><p>규칙을 이용해 예상치 못한 그래픽을 얻는 방법 중에는 ‘셀룰러 오토마타(Cellular Automata)’가 있다. 일정한 규칙을 가지고 확산하는 모습은 마치 도시의 모습과 닮아있기 때문에 임의의 공간을 만들어 낼 때에는 이 패턴을 이용하기로 했다.</p>"
    html+="<img src='src/8-4.jpg'><p>위와 같이 그래픽 패턴에 따라 위성 지도조각을 대응해서 새로운 공간을 만들어낸다. 공간축은 흑-백에 따라 결정되며, 연도 별 위성 사진을 통해 다른 질감을 보여주고자 한다.</p>"
    html+="<img src='src/8-5.png'><p>프로젝트의 결과물은 그래픽 실험 포스터가 될 것이며, <u><a onclick="+"'addContent(9)'"+"'>Output</a></u>에서 확인할 수 있다.</p>"


      }

    //// process of Project II : Urban Automata ////
    if (num==9){
      html+="<p style='color:blue'><< Urban Automata >></p>"
      html+="<p>R724  2019.12.12</p>"
      html+="<img src='src/9-1.png'>"
      html+="<br><a href='https://drive.google.com/file/d/1rTbSmZ00T9161aSwaHjmlCgiQtA6z0nH/view?usp=sharing'><u>⬇ PDF DOWNLOAD</u> (29.0 MB)</a><p>연도별 도시의 풍경을 수집해 재구성한 포스터이다. 위성의 촬영 시간과 날짜에 따라 같은 장소라도 다른 모습을 가지게 된다. 한편 조각모음들은 연도가 지날수록 좀 더 선명해지고, 도심의 밀도가 올라가며 녹지가 없어지는 경향을 보인다. 포장도로와 교통량 역시 눈에띄게 증가했다.</p>"

    }


    //// Open Studio II ////
    if (num==10) {
    html+="<p style='color:blue'>Open Studio II << Communication.Design.2 >></p>"
    html+="<p>홍문관 7층 복도  2019.12.12 ➡ 2019.12.19</p>"
    html+="<img src='src/10.png'>"
    }
  return html
}

var menuToggle = false

function toggle() {
 if (menuToggle==false) {
     $("#category2").animate({left: '-1px'});
     $("#m-menu").addClass("on")
     // $("#m-menu").animate({transform: 'rotation(180deg)'});
     menuToggle=!menuToggle
 }else{
     $("#category2").animate({left: '100vw'});
     $("#m-menu").removeClass("on")
     // $("#m-menu").animate({transform: 'rotation(0deg)'});
     menuToggle=!menuToggle
 }
}
