import React, {useEffect, useState} from 'react'; 
import { Link, useParams } from "react-router-dom";

import '../style/view/productlist.scss'
import '../style/comm.scss'

import productApi from'../apis/Product.js'

function Test() {
    return (
        <div>
            <span>테스느</span>
        </div>
    )
}


function PeoducctList() { 
    const [categoryDetail, setCategoryDetail] = useState([]);
    // const [product, setProduct] = useState([]);

    const { gender, category } = useParams();

    console.log('categorycategory',gender, category);

    const findCategoryDetail = () => {
        productApi.getCategoryDetail(gender,category)
        .then( res => {
            if(res && res.data){
                console.log(res.data)
                setCategoryDetail(res.data)
            }
        })

    }

    // const findProductList= () => {
    //     productApi.getProductList('W','니트웨어')
    //     .then( res => {
    //         if(res && res.data){
    //             setProduct(res.data)
    //         }
    //     })
    // }

    useEffect(()=> {
        findCategoryDetail();
        // findProductList();
    }, []);
    return ( 
        <div> 
            <div className="product_list_top">
                <div className="choice_content">
                    <h1 className="product_title">{category}</h1>
                    <div className="btn_area">
                        <div>
                            <input type='radio' name='category' id='all'/><label htmlFor="all" className='radio_label category'>모두보기</label>
                        </div>
                        {categoryDetail && categoryDetail.map((detail, index) => {
                            return <div key={index}>
                                        <input type='radio' name='category' id={detail}/><label htmlFor={detail} className='radio_label category'>{detail}</label>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
            <div className="product_list_middle">
                <div className="product_search_area">
                    
                </div>
                <div className="product_list_wrap">
                        <div className="product">
                            <Link to="/product">
                                <div className="img"></div>
                                <div className="content">
                                    <label className="product_title">상품명 test</label>
                                    <label className="product_price">가격 3자리 , </label>
                                    <ul>
                                        <li>색상</li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    
                    <div className="product">
                        <div className="img"></div>
                        <div className="content">
                            
                        </div>
                    </div>
                    <div className="product">
                        <div className="img"></div>
                        <div className="content">
                            
                        </div>
                    </div>
                    <div className="product">
                        <div className="img"></div>
                        <div className="content">
                            
                        </div>
                    </div>
                    <div className="product">
                        <div className="img"></div>
                        <div className="content">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_list_bottom">

            </div>
        </div> 
    ); 
} 
    
export { PeoducctList, Test };
