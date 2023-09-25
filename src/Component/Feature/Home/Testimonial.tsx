import React from "react";
import Slider from "react-slick";

import Link from 'next/link'
import { ROUTE } from "@/Const/Route";
import SectionLoader from "@/Component/Common/Loader/SectionLoader";
import { ImgPlaceHolder } from "@/Utils";
import { useTranslation } from "next-i18next";

function Testimonial(props: any) {
  const  {t}  = useTranslation();
  const { testimonial } = props;
  const loadingData_New: any = props?.loadingData || null;
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: testimonial && testimonial?.length == 1 ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <section className="section tesi-wrap tesi-wrap-pb">
          <div className="container">
            <div className="row testi-mo">
              <div className="col-md-5">
                <div className="inner-heading">
                  <div className="headingmains testi-mo-pad">
                    <h2>{t("testimonials")}</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="exploretesti">
                  <Link
                    href={{ pathname: ROUTE.TESTIMONIAL, query: { type: 1 } }}
                  >
                    {t("explore_all")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 col-sm-6">
                <div className="inner-heading">
                  <div className="headingmains">
                    <p>{t("testimonial_content")}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-sm-6">
                {loadingData_New && Object.keys(loadingData_New)?.length > 0 ? (
                  <>
                    {testimonial && testimonial.length > 0 && (
                      <div className="testi_slider">
                        <Slider {...settings}>
                          {testimonial &&
                            testimonial?.length > 0 &&
                            testimonial?.map((item: any, index: any) => (
                              <div key={index}>
                                <div className="col-md-12 col-sm-12 col-xs-12 item">
                                  <div className="team_member">
                                    <figure className="effect-julia">
                                      <img
                                        src={
                                          item?.ProfileImage
                                            ? item?.ProfileImage
                                            : item?.Gender &&
                                              item?.Gender?.toLowerCase() ==
                                                "female"
                                            ? "/assets/img/testi_female.png"
                                            : "/assets/img/testi_male.png"
                                        }
                                        onError={(e: any) =>
                                          ImgPlaceHolder(
                                            e,
                                            item?.Gender &&
                                              item?.Gender?.toLowerCase() ==
                                                "female"
                                              ? "/assets/img/testi_female.png"
                                              : "/assets/img/testi_male.png"
                                          )
                                        }
                                        alt={`image${index}`}
                                      />
                                    </figure>
                                    <div className="member_name">
                                      <p
                                        className="truncate"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            item?.Content &&
                                            item?.Content?.slice(0, 300),
                                        }}
                                      ></p>
                                      {/* {item?.VideoUrl && (
                                        <p>
                                          <ReactPlayer
                                            className="testimonialVdo"
                                            controls
                                            url={item?.VideoUrl}
                                          />
                                        </p>
                                      )} */}
                                      <h5>
                                        <span></span>
                                        {item?.Name}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </Slider>
                      </div>
                    )}
                  </>
                ) : (
                  <SectionLoader />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default React.memo(Testimonial);
