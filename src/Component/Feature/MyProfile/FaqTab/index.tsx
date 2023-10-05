import React, { useState } from "react";

const FaqTab = () => {
  const [active, setActive] = useState(0);
  const handleOpen = (val: any) => setActive(val);
  return (
    <div className="tc_box">
      <div className="heading_box">Frequently Asked Questions</div>
      <div className="faqbox">
        <div className="d-flex flex-wrap align-items-center">
          <div>
            <button type="submit" className="book--hexagon faq active">
              <span className="text-capitalize">Labs and Centers</span>
            </button>
          </div>
          <div className="ml-2">
            <button type="submit" className="book--hexagon faq">
              <span className="text-capitalize">Reports</span>
            </button>
          </div>
          <div className="ml-2">
            <button type="submit" className="book--hexagon faq">
              <span className="text-capitalize">Test Booking</span>
            </button>
          </div>
        </div>
        <ul className="faq_list">
          {Array(5)
            .fill(0)
            ?.map((ele: any, index: number) => (
              <li onClick={() => handleOpen(index + 1)}>
                <div className="question">
                  <span>
                    Lorem Ipsum online text generator creates fictitious
                  </span>
                  <i
                    className={
                      active == index + 1
                        ? "fa fa-angle-up"
                        : "fa fa-angle-down"
                    }
                  ></i>
                </div>
                {active == index + 1 && (
                  <div className="answer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident,
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FaqTab;
