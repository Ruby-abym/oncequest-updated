
import { ThreeDots } from "react-loader-spinner";
function WaitScreen() {
  return (
    <div className="loadingPageWait">
    <div style={{display:'flex',justifyContent:'center',alignItems:"center",alignSelf:"center",height:"100%"}}>
    <div className="d-flex flex-column">
    <div className="f-16"><b>Please wait</b></div>
    <ThreeDots
      color="#114a82"
      height={80}
      width={80}
    />
    </div>
    </div>
    </div>
  );
}

export default WaitScreen;