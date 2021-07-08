// Material-ui Icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export function Main_1(){
  //Card Flip function
  setTimeout(function() {
    var top = document.getElementsByClassName("top");
    var bottom = document.getElementsByClassName("bottom");
    var cards = document.querySelector('.cards');
    cards.style.left = "50%";
    var cards2 = document.querySelector('.cards_2');
    cards2.style.left = "5%";
    [...top].map((i) => {
        i.style.transform = 'rotateY(0deg)'
    });
    [...bottom].map((i) => {
        i.style.transform = 'rotateY(-180deg)'
    });
  }, 1500);
  return (
      <div className="main">
        <div className="cards cards_container-1">
          <div className="stack" href="#">
            <div className="card top">
                <img src="./img/Soham 100 Images/img_87.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img src="./img/Soham 100 Images/img_86.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img src="./img/Soham 100 Images/img_85.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img src="./img/Soham 100 Images/img_84.jpeg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img src="./img/Soham 100 Images/img_83.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img src="./img/Soham 100 Images/img_82.png" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img className="item" src="./img/Soham 100 Images/img_75.jpg" alt="" />
            </div>
            <div className="card bottom" >
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img className="item" src="./img/Soham 100 Images/img_73.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img className="item" src="./img/Soham 100 Images/img_68.jpg" alt="" />
              </div>
              <div className="card bottom">
                <img src="./img/5-soham.png" alt="" />
              </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img className="item" src="./img/Soham 100 Images/img_67.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img className="item" src="./img/Soham 100 Images/img_66.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img className="item" src="./img/Soham 100 Images/img_64.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
                <img className="item" src="./img/Soham 100 Images/img_49.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img src="./img/Soham 100 Images/img_41.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_40.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_37.jpeg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_33.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_32.jpeg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_31.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_28.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_22.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_20.jpeg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_16.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_15.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
          <div className="stack" href="#">
            <div className="card top">
              <img className="item" src="./img/Soham 100 Images/img_8.jpg" alt="" />
            </div>
            <div className="card bottom">
              <img src="./img/5-soham.png" alt="" />
            </div>
          </div>
        </div>
        <span className="btn btn_1 button button_1">
            <KeyboardArrowDownIcon className= "down_arrow"/>
        </span>
        <div className="main_blur">&nbsp;</div>
      </div>
    );
};

export function Main_2(){
  return (
    <main className="main main_2">
              <div className="cards cards_2">
                <div className="stack" href="#">
                  <div className="card top">
                      <img src="./img/Soham 100 Images/img_87.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img src="./img/Soham 100 Images/img_86.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img src="./img/Soham 100 Images/img_85.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img src="./img/Soham 100 Images/img_84.jpeg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img src="./img/Soham 100 Images/img_83.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img src="./img/Soham 100 Images/img_82.png" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img className="item" src="./img/Soham 100 Images/img_75.jpg" alt="" />
                  </div>
                  <div className="card bottom" >
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img className="item" src="./img/Soham 100 Images/img_73.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img className="item" src="./img/Soham 100 Images/img_68.jpg" alt="" />
                    </div>
                    <div className="card bottom">
                      <img src="./img/5-soham.png" alt="" />
                    </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img className="item" src="./img/Soham 100 Images/img_67.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img className="item" src="./img/Soham 100 Images/img_66.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img className="item" src="./img/Soham 100 Images/img_64.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                      <img className="item" src="./img/Soham 100 Images/img_49.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img src="./img/Soham 100 Images/img_41.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_40.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_37.jpeg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_33.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_32.jpeg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_31.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_28.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_22.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_20.jpeg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_16.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_15.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
                <div className="stack" href="#">
                  <div className="card top">
                    <img className="item" src="./img/Soham 100 Images/img_8.jpg" alt="" />
                  </div>
                  <div className="card bottom">
                    <img src="./img/5-soham.png" alt="" />
                  </div>
                </div>
              </div>
            </main>
  );
};

