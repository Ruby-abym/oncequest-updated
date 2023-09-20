import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function WaitScreen() {
  return (
    <div className="loadingPageWait">
    <div style={{display:'flex',justifyContent:'center',alignItems:"center",alignSelf:"center",height:"100%"}}>
    <div className="d-flex flex-column">
    <div className="f-16"><b>Please wait</b></div>
    {/* <Loader
      type="ThreeDots"
      color="#114a82"
      height={100}
      width={100}
    /> */}
    </div>
    </div>
    </div>
  );
}

export default WaitScreen;