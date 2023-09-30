import React from 'react'
import ImgPlaceHolder from '@/Utils/imgPlaceholder';

const Staff = (props:any) => {
  const {Structure, TeamImage}=props;
  
  console.log(TeamImage);
    return (
            <section className="bg-white section pt-3">
              <div className="container" id="section2">
                <div className="row">
                  <div className="col-md-12">
                    <div className="overview-wrap justify-content-center text-center">
                    {/* <img src="/assets/img/staff-structure.png" className="scale img_overlap" alt="" /> */}
                    <img src={TeamImage ? TeamImage : "/assets/img/test_main.png"} onError={(e:any)=>ImgPlaceHolder(e, "/assets/img/test_main.png")} className="scale" alt="" />
                    {/* <div className="img_overlap_data">
                      <h5>The Department Staff Structure</h5>
                      <div className="row mt-2">
                        {Structure && Structure?.map((item:any, index:any)=>(
                          <div className="col-md circle" key={index}>
                            <h1>{item?.value}</h1>
                            <div>{item?.title}</div>
                          </div>
                        ))}
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>          
              </div> 
			</section>
    )
}

export default Staff
