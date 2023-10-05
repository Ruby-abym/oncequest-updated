import React, { useEffect, useState } from "react";
import styles from "@/styles/checkout.module.css";
import { ROUTE } from "@/Const/Route";
import { useRouter } from "next/router";
interface ICardBox {
  totalPayble: number;
  setTotalPayble: (val: number) => void;
}
const CartBox = ({ totalPayble = 0, setTotalPayble }: ICardBox) => {
  const ExistCardData: any[] = JSON.parse(
    localStorage.getItem("CartData") || "[]"
  );
  const router = useRouter();
  const [coupen, setCoupen] = useState<any>("");
  const [apply, setApply] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [cardEntry, setCardEntry] = useState<any[]>(ExistCardData || []);
  const CityId: any = localStorage.getItem("oq:city");

  useEffect(() => {
    if (router?.query?.Id) {
      addToCart(router?.query);
    }
  }, [router?.query?.Id]);

  const handleRemoveCoupen = () => {
    setOpen(false);
    setCoupen("");
    setApply(false);
  };
  const handleApplycoupen = () => {
    setApply(true);
  };

  useEffect(() => {
    if (cardEntry) {
      let coupenDis: number = apply ? 100 : 0;
      setTotalPayble(
        cartTotal() > 1500
          ? cartTotal() - coupenDis
          : cartTotal() - coupenDis + 150
      );
    }
  }, [cardEntry, apply]);

  const getCityPrice = (cityPrice: any[] = []) => {
    let _price =
      CityId &&
      cityPrice?.length > 0 &&
      cityPrice?.find(
        (ele: any) => ele?.availability == 1 && CityId == ele?.city_id
      );
    return _price?.city_price;
  };
  const addToCart = (data: any) => {
    let CityPrice: any =
      getCityPrice(data?.CitywisePrices) || data?.SellingPrice || 0;
    let CartData: any[] = [...cardEntry];
    CartData.push({
      Id: data?.Id,
      TestCode: data?.TestCode || data?.PackageCode,
      TestName: data?.TestName || data?.PackageName,
      MRP: data?.MRP,
      SellingPrice: CityPrice,
      Type: data?.type,
    });
    setCardEntry(CartData);
    localStorage.setItem("CartData", JSON.stringify(CartData));
    router.replace(ROUTE.CHECKOUT);
  };
  const removeFromCart = (data: any) => {
    let CartData: any[] = [...cardEntry];
    let newArr: any[] = CartData?.filter(
      (ele: any) => !(ele?.Id == data?.Id && ele?.Type == data?.Type)
    );
    localStorage.setItem("CartData", JSON.stringify(newArr));
    setCardEntry(newArr);
  };
  const cartTotal = (mrp: boolean = false) => {
    return cardEntry?.reduce(
      (total, item) => Number(mrp ? item?.MRP : item?.SellingPrice) + Number(total),
      0
    );
  };

  return (
    <div>
      <div className={styles.cartHeading}>Test/Packages</div>
      <div className={styles.cardDes}>
        <div>
          {cardEntry?.length > 0 ? cardEntry?.map((item: any, index: any) => (
            <div className={styles.cardItem}>
              <div>
                <img
                  src="/assets/img/my-profile/delete.png"
                  onClick={() => removeFromCart(item)}
                />
                {item?.TestName}({item?.Type})
              </div>
              <div className={styles.rate}>₹{item?.SellingPrice || 0}</div>
            </div>
          ))
          :
          <div className="font-weight-bold text-center fs-16 my-2">No Test/Package Added</div>
        }
        </div>
        <div className="text-right">
          <a
            href=""
            style={{ padding: "5px 20px", margin: "10px 0px" }}
            className="book--hexagon active"
            onClick={(e: any) => {
              e.preventDefault();
            router.push({pathname:ROUTE.BOOKATEST, query:{
                tabs: "",
                categoryId: "",
                subCategoryId: "",
              }});
            }}
          >
            <span className="text-capitalize">
              <img
                className="mr-2"
                src="/assets/img/my-profile/white-plus.png"
                aria-hidden="true"
              />
              Add More
            </span>
          </a>
        </div>
        {cardEntry?.length > 0 && (
          <React.Fragment>
            <div>
              <div className={styles.cardItem}>
                <div>Home Collection Free</div>
                <div className={styles.rate}>
                  {cartTotal() > 1500 ? "Free" : "₹150"}
                </div>
              </div>
              <div className={styles.cardItem}>
                <div>Sub Total</div>
                <div className={styles.rate}>
                  ₹{cartTotal() > 1500 ? cartTotal() : cartTotal() + 150}
                </div>
              </div>
              <div className={styles.cardItem}>
                {!open && !apply && (
                  <p
                    className={styles.coupenHaveText}
                    onClick={() => setOpen(!open)}
                  >
                    I have a coupon code
                  </p>
                )}
                {open && !apply && (
                  <div className={styles.applyCoupen}>
                    <div>
                      <input
                        value={coupen}
                        onChange={(e: any) => setCoupen(e.target.value)}
                      />
                      <img
                        className="mr-2"
                        src="/assets/img/my-profile/blue-cross.png"
                        aria-hidden="true"
                        onClick={() => setCoupen("")}
                      />
                    </div>
                    <button
                      className="book--hexagon active"
                      style={{ margin: 0 }}
                      onClick={handleApplycoupen}
                    >
                      <span className="text-capitalize">Apply</span>
                    </button>
                  </div>
                )}
                {open && apply && (
                  <React.Fragment>
                    <div>
                      Coupon Discount{" "}
                      <span
                        className={styles.remove}
                        onClick={handleRemoveCoupen}
                      >
                        Remove
                      </span>
                    </div>
                    <div className={styles.rate}>₹100</div>
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className={styles.cardTotal}>
              <div>Total Payable Amount</div>
              <div className={styles.rate}>₹{totalPayble || 0}</div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};



export default CartBox;
