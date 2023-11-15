import React, { useState } from 'react';
import './App.css';
import white6table from './imgs/white6table.jpeg';
import white4table from './imgs/white4table.jpeg';
import white2table from './imgs/white2table.jpeg';
import blue6table from './imgs/blue6table.jpeg';
import blue4table from './imgs/blue4table.jpeg';
import blue2table from './imgs/blue2table.jpeg';
import grey6table from './imgs/grey6table.jpeg';
import grey4table from './imgs/grey4table.jpeg';
import grey2table from './imgs/grey2table.jpeg';
import toilet from './imgs/toilet.jpeg';
import backg from './imgs/backg.jpeg';


const ImageChanger = ({ imageNumber }) => {
  const [imageColor, setImageColor] = useState('white');
  const [clickedImage, setClickedImage] = useState(null);

  const changeImage = (imageElement) => {
    if (imageElement.src.includes("white6table")) {
      imageElement.src = blue6table;
    } else {
      imageElement.src = white6table;
    }
  };
  const changeImage2 = (imageElement) => {
    if (imageElement.src.includes("white4table")) {
      imageElement.src = blue4table;
    } else {
      imageElement.src = white4table;
    }
  };
  const changeImage3 = (imageElement) => {
    if (imageElement.src.includes("white2table")) {
      imageElement.src = blue2table;
    } else {
      imageElement.src = white2table;
    }
  };

  const getImageSource = () => {
    switch (imageNumber) {
      case "6":
        return imageColor === 'white' ? white6table : blue6table;
      case "4":
        return imageColor === 'white' ? white4table : blue4table;
      case "2":
        return imageColor === 'white' ? white2table : blue2table;
      default:
        return '';
    }
  };

  return (
    <div className="image-container">
      <h1>Reserve<br /> a Table</h1>
      <img src={backg} className="img_int" alt="background" />
      <div className="overlay">
        <table className="topt">
          <tr>
            <td><input type="date" className="input" /></td>
            <td>
              <table className="slots">
                <tr>
                  <td>
                    <select>
                      <option value="male">Slot selection</option>
                      <option value="male">09:00AM-10:00AM</option>
                      <option value="female">10:00AM-11:00AM</option>
                      <option value="others">11:00AM-12:00PM</option>
                    </select>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <div className="interior_rest">
          <table>
            <tr>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_611' ? 'clicked' : ''}`} id={`main_img_611`} onClick={() => changeImage(document.getElementById('main_img_611'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_612' ? 'clicked' : ''}`} id={`main_img_612`} onClick={() => changeImage(document.getElementById('main_img_612'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_613' ? 'clicked' : ''}`} id={`main_img_613`} onClick={() => changeImage(document.getElementById('main_img_613'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_614' ? 'clicked' : ''}`} id={`main_img_614`} onClick={() => changeImage(document.getElementById('main_img_614'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_615' ? 'clicked' : ''}`} id={`main_img_615`} onClick={() => changeImage(document.getElementById('main_img_615'))}/></td>
              <td><img src={toilet} className="img3" /></td>
            </tr>
            <tr>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_421' ? 'clicked' : ''}`} id={`main_img_421`} onClick={() => changeImage2(document.getElementById('main_img_421'))}/></td>
              <td></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_223' ? 'clicked' : ''}`} id={`main_img_223`} onClick={() => changeImage3(document.getElementById('main_img_223'))}/></td>
              <td></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_425' ? 'clicked' : ''}`} id={`main_img_425`} onClick={() => changeImage2(document.getElementById('main_img_425'))}/></td>
            </tr>
            <tr>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_431' ? 'clicked' : ''}`} id={`main_img_431`} onClick={() => changeImage2(document.getElementById('main_img_431'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_232' ? 'clicked' : ''}`} id={`main_img_232`} onClick={() => changeImage3(document.getElementById('main_img_232'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_233' ? 'clicked' : ''}`} id={`main_img_233`} onClick={() => changeImage3(document.getElementById('main_img_233'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_234' ? 'clicked' : ''}`} id={`main_img_234`} onClick={() => changeImage3(document.getElementById('main_img_234'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_435' ? 'clicked' : ''}`} id={`main_img_435`} onClick={() => changeImage2(document.getElementById('main_img_435'))}/></td>
            </tr>
            <tr>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_441' ? 'clicked' : ''}`} id={`main_img_441`} onClick={() => changeImage2(document.getElementById('main_img_441'))}/></td>
              <td></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_243' ? 'clicked' : ''}`} id={`main_img_243`} onClick={() => changeImage3(document.getElementById('main_img_243'))}/></td>
              <td></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_445' ? 'clicked' : ''}`} id={`main_img_445`} onClick={() => changeImage2(document.getElementById('main_img_445'))}/></td>
            </tr>
            <tr>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_451' ? 'clicked' : ''}`} id={`main_img_451`} onClick={() => changeImage2(document.getElementById('main_img_451'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_452' ? 'clicked' : ''}`} id={`main_img_452`} onClick={() => changeImage2(document.getElementById('main_img_452'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_653' ? 'clicked' : ''}`} id={`main_img_653`} onClick={() => changeImage(document.getElementById('main_img_653'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_img_654' ? 'clicked' : ''}`} id={`main_img_654`} onClick={() => changeImage(document.getElementById('main_img_654'))}/></td>
            </tr>
          </table>
        </div>
        <button className="" value="Select the menu" href="#">Select the menu</button>
      </div>
    </div>
  );
}

// const App = () => {
//   return (
//     <div>
//       <ImageChanger imageNumber="6" />
//       <ImageChanger imageNumber="4" />
//       <ImageChanger imageNumber="2" />
//     </div>
//   );
// };

export default ImageChanger;