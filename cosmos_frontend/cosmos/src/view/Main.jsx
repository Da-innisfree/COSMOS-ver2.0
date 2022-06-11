import React, { useEffect, useState } from 'react'; 
import { debounce } from 'lodash';
// import { Link } from "react-router-dom";

import Slider from "react-slick";

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import "../style/slick.css";
import "../style/slick-theme.css";
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../store/account/Account.js'

import '../style/view/main.scss'

//css를 정리하자
import '../style/productbox.scss'

function Main() { 

    // const count = useSelector((state) => state.counter.value)
    // const token = useSelector((state) => state.counter.token)
    // const dispatch = useDispatch()
    
    // TODO - 스크룰 이벤트 추가, 상품 사이 좀더 마진
    const { scrollY } = useScroll();
    console.log('scroll event', scrollY);

    const images = [
        { url: "img/main/m1.jpg" },
        { url: "img/main/m2.jpg" },
        { url: "img/main/m3.jpg" },
        { url: "img/main/m4.jpg" },
    ];

      const tmpProductListT = [
        { url: "img/tmpproduct/1.jpg" },
        { url: "img/tmpproduct/2.jpg" },
        { url: "img/tmpproduct/3.jpg" },
        { url: "img/tmpproduct/4.jpg" },
        { url: "img/tmpproduct/5.jpg" },
        { url: "img/tmpproduct/6.jpg" },
        { url: "img/tmpproduct/7.jpg" },
        { url: "img/tmpproduct/8.jpg" },
    ]
      const tmpProductListM = [
        { url: "img/tmpproduct/9.jpg" },
        { url: "img/tmpproduct/10.jpg" },
        { url: "img/tmpproduct/11.jpg" },
        { url: "img/tmpproduct/12.jpg" },
        { url: "img/tmpproduct/13.jpg" },
        { url: "img/tmpproduct/14.jpg" },
        { url: "img/tmpproduct/15.jpg" },
        { url: "img/tmpproduct/16.jpg" },
    ]
      const tmpProductListB = [
        { url: "img/tmpproduct/17.jpg" },
        { url: "img/tmpproduct/19.jpg" },
        { url: "img/tmpproduct/20.jpg" },
        { url: "img/tmpproduct/21.jpg" },
        { url: "img/tmpproduct/22.jpg" },
        { url: "img/tmpproduct/23.jpg" },
        { url: "img/tmpproduct/25.jpg" },
        { url: "img/tmpproduct/26.jpg" },
    ]

      const topSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };

      const middleSliderSettings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay:true,
        autoplaySpeed: 7000,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />
      };
      
      const bottomSliderSettings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 7000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
        // rows: 2,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />
      };

    return ( 
        <div className="main">
            {/* <div className="area_top"> */}
            <div>
                <Slider {...topSliderSettings}>
                    {
                        images.map(image => {
                            return <div style={{height: '700px', width: '100%'}}>
                                <img src={image.url} alt="텍스트" style={{height: '700px', width: '100vw'}}/>
                            </div>
                        })
                    }
                </Slider>
            </div>
            <div className="area_middle">
                <h2 className="middle_title">
                    #NEW ARRIVALS
                </h2>
                <Slider {...middleSliderSettings}>
                    {tmpProductListT && tmpProductListT.map((detail, index) => {
                        return <div className='product_box mini pointer' key={index} >
                                <div className="product_img_wrap">
                                    <img src={detail.url} alt='smaple'/>
                                </div>
                                <div className="product_content">
                                    <div className='product_title'>상품명</div>
                                    <div className='product_price'>100,000,000</div>
                                </div>
                            </div>
                    })}
                </Slider>
            </div>
            <div className="area_middle">
                <h2 className="middle_title">
                    #추천 상품
                </h2>
                <Slider {...middleSliderSettings}>
                    {tmpProductListM && tmpProductListM.map((detail, index) => {  
                        return <div className='product_box mini pointer' key={index} >
                                <div className="product_img_wrap">
                                    <img src={detail.url} alt='smaple'/>
                                </div>
                                <div className="product_content">
                                    <div className='product_title'>상품명</div>
                                    <div className='product_price'>100,000,000</div>
                                </div>
                            </div>
                    })}
                </Slider>
            </div>
            <div className="bg_video">
                <video muted={true} autoPlay={true} loop={true}>
                    <source src="https://vod-progressive.akamaized.net/exp=1654937958~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2775%2F21%2F538877060%2F2554448084.mp4~hmac=1ff4f6813201f597feb2caff15f0663a70a8631052cd624e7f8caa523455fbb6/vimeo-prod-skyfire-std-us/01/2775/21/538877060/2554448084.mp4?filename=Waves+-+70796.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="area_bottom">
                <h2 className="middle_title">
                    기획전
                </h2>
                <div className='main_bottom_content'>
                    <div className="left_img"></div>
                    <div className="right_img"></div>
                </div>

                <Slider {...bottomSliderSettings}>
                    {tmpProductListB && tmpProductListB.map((detail, index) => {
                        return <div className='product_box mini pointer' key={index} >
                                <div className="product_img_wrap">
                                    <img src={detail.url} alt='smaple'/>
                                </div>
                                <div className="product_content">
                                    <div className='product_title'>상품명</div>
                                    <div className='product_price'>100,000,000</div>
                                </div>
                            </div>
                    })}
                </Slider>
            </div>
            
            <div className='tmp_bg_img'>

            </div>

            <div className='tmp_event_area'></div>
        </div>
    ); 
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <AiOutlineRight
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <AiOutlineLeft
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
        />
    );
}

function useScroll() {
    const [scrollY, setScrollY] = useState();
  
    const listener = () => {
      setScrollY(window.pageYOffset);
    };

    const delay = 15;

    useEffect(() => {
      window.addEventListener('scroll', debounce(listener, delay));
      return () => window.removeEventListener('scroll', listener);
    });
  
    return {
      scrollY
    };
  }

export default Main;