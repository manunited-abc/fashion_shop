function SliderMain() {
    return (
        <div className="slider-wrapper my-40 my-sm-25 float-left w-100">
            <div className="container">
                {/* <div className="ttloading-bg" /> */}
                <div className="slider slider-for owl-carousel">
                    <div>
                        <a href="#">
                            <img src="img/slider/sample-01.jpg" alt="" height={800} width={1600} />
                        </a>
                        <div className="slider-content-wrap center effect_top">
                            <div className="slider-title mb-20 text-capitalize float-left w-100">our specials</div>
                            <div className="slider-subtitle mb-50 text-capitalize float-left w-100">fashion trend</div>
                            <div className="slider-button text-uppercase float-left w-100">
                                <a href=" #">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img src="img/slider/sample-02.jpg" alt="" height={800} width={1600} />
                        </a>
                        <div className="slider-content-wrap center effect_bottom">
                            <div className="slider-title mb-20 text-capitalize float-left w-100">about us</div>
                            <div className="slider-subtitle mb-50 text-capitalize float-left w-100">fashion style</div>
                            <div className="slider-button text-uppercase float-left w-100">
                                <a href=" #">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SliderMain;
