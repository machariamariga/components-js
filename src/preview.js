import previewImage from "./image-equilibrium.jpg";
import previewArrow from "./icon-ethereum.svg";
import previewClock from "./icon-clock.svg";
import previewAvatar from "./image-avatar.png";
import "./preview.css"
function Preview(){
    return(
        <div id="big">
            <div id="pic">
                <img id="snap" src={previewImage}/>
                <div id="text" >
                    <h1>Equilibrium #3429</h1>
                    <p>Our Equilibrium collection promotes balance and calm</p>

                </div>
                <div id="vitu">
                <div id="left">
                    <img src={previewArrow} id="kadogo"/>
                    <label>0.014ETH</label>


                </div>
                <div id="right">
                <img src={previewClock}/>
                    <label>3 Days left</label>


                </div>
                </div>


                
            
            <div id="bottom">
                <img src={previewAvatar} id="avatar"/>
                <label>Creation of Jules Wyvern</label>
                </div>

            </div>
        </div>
    );

}
export default Preview;