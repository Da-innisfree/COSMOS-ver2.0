import React, {useEffect} from 'react'; 
import { Link, useParams } from "react-router-dom";

import '../style/view/productlist.scss'
import '../style/comm.scss'

import testdata from '../assets/testdata/category_detail.json'
import productApi from'../apis/Product.js'

function Test() {
    return (
        <div>
            <span>테스느</span>
        </div>
    )
}

function CategoryRadio(props) {
    if(!props.value){
        return
    }
    else {
        return (
            <div>
                <input type='radio' name='category' id={props.value}/><label for={props.value} className='radio_label category'>{props.value}</label>
            </div>
        )
    }
}


function PeoducctList() { 
    const data = testdata
    console.log('testdata.............',data.category_detail);

    const { gender, category } = useParams();

    console.log('categorycategory',gender, category);

    useEffect(()=> {
        productApi.getCategoryDetail('W','니트웨어')
        .then( res => {
            if(res && res.data){
                
                console.log('...........aaaa',res.data)
            }
        }

        )
    }, []);
    return ( 
        <div> 
            <div className="product_list_top">
                <div className="choice_content">
                    <h1 className="product_title">{category}</h1>
                    <div className="btn_area">
                        <div>
                            <input type='radio' name='category' id='all'/><label for="all" className='radio_label category'>모두보기</label>
                        </div>
                        { data.category_detail.map((detail, index) => {
                            return <CategoryRadio key={index} value={detail}/>
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
