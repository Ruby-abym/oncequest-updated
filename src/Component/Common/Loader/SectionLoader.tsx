import { ThreeDots } from "react-loader-spinner";


function SectionLoader() {
  return (
    <div className="loadingSection">
    <div style={{display:'flex',justifyContent:'center',alignItems:"center",alignSelf:"center",height:"100%", padding: "20px"}}>
    <div className="d-flex flex-column">
    <div className="f-14"><b>Please wait</b></div>
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

export default SectionLoader;