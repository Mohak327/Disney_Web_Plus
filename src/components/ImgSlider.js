import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                <img src="/images/slider-badging.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <img src="/images/slider-scale.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <img src="/images/slider-badag.jpg" alt="" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                <img src="/images/slider-scales.jpg" alt="" />
                </a>
            </Wrap>
        </Carousel>
    );
};

export default ImgSlider;

// We can now custom style the Slider ourselves
const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 150, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    position: relative;

    img {
        border: 3.5px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow:
            rgb(0 0 0 / 69%) 0px 12px 20px -5px,
            rgb(0 0 0 / 73%) 0px 8px 10px -5px;
        transition: 300ms;


        &:hover {
            border: 3.5px solid rgba(249, 249, 249, 0.8);
            box-shadow:
            rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        }
    }

`