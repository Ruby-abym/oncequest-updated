import React from "react";

const CitySelectBox = ({cityData,handleCityChange,city, t}:any) => {
  // console.log(cityData)
  return (
    <select value={city} onChange={handleCityChange}>
      <option value={t("select")}>{t("select")}</option>
      {cityData &&
        cityData.length > 0 &&
        cityData?.map((item: any, i: any) => (
          <option className="text-capitalize" value={item?.Id} key={i}>
            {t(item?.Name)}
          </option>
        ))}
    </select>
  );
};

export default CitySelectBox;
