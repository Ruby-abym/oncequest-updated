const ImgPlaceHolder = (e:any, img:any) => {
    e.target.onerror = null; 
    return e.target.src=img;
}
export default ImgPlaceHolder;