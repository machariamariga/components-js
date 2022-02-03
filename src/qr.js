import qrImage from "./image-qr-code.png";
import "./qr.css"
function Qr(){
    return(
        <div id="main">
    <div id="card">
        <div id="content">
            <img id="image" src={qrImage}/>
            <div id="letters">
            <h1>Improve your front-end<br></br> skills by building projects</h1>
            <p>Scan the QR code to visit Frontend<br></br> Mentor and take your coding skills to<br></br> the next level</p>
            </div>
        </div>
    </div>
    </div>
    );
    
}
export default Qr;