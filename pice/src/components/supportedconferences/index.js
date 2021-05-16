import Slider from "react-slick";
import "./slick.css";
import ImgUrl from "../../Theme/images.json";

import "./styleSheet.css";

const SupportConferences = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrvArw />,
    nextArrow: <NxtArw />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="support_confs_bg">
      <div className="container">
        <div className="row">
          <div className="support_confs_cnt">
            <h3>{props.Content.supportconfTitle}</h3>
            <Slider className="support_confs_slider" {...settings}>
              <div>
                <img src={ImgUrl.supportconfMicroimg} alt="" />
                <h5>{props.Content.supportconfMicro}</h5>
                <p>{props.Content.supportconfYr2019}</p>
              </div>
              <div>
                <img src={ImgUrl.supportconfHpcaimg} alt="" />
                <h5>{props.Content.supportconfHpca}</h5>
                <p>{props.Content.supportconfYr2019}</p>
              </div>
              <div>
                <img src={ImgUrl.supportconfIscaimg} alt="" />
                <h5>{props.Content.supportconfIsca}</h5>
                <p>{props.Content.supportconfYr2019}</p>
              </div>
              <div>
                <img src={ImgUrl.supportconfMicroimg} alt="" />
                <h5>{props.Content.supportconfMicro}</h5>
                <p>{props.Content.supportconfYr2020}</p>
              </div>
              <div>
                <img src={ImgUrl.supportconfIscaimg} alt="" />
                <h5>{props.Content.supportconfIsca}</h5>
                <p>{props.Content.supportconfYr2020}</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

function PrvArw(props) {
  const { onClick } = props;
  return (
    <div
      className="slickPrv"
      style={{ backgroundImage: `url(${ImgUrl.SliderLftArw})` }}
      onClick={onClick}
    />
  );
}

function NxtArw(props) {
  const { onClick } = props;
  return (
    <div
      className="slickNxt"
      style={{ backgroundImage: `url(${ImgUrl.SliderRgtArw})` }}
      onClick={onClick}
    />
  );
}

export default SupportConferences;
