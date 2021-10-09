import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Product from '../components/Product'
import { actionCreators } from '../state' 

const Main = () => {
    const state = useSelector((state)=> state.products)
    const dispatch = useDispatch()
    const {getAllProduct} = bindActionCreators(actionCreators,dispatch)
    
    useEffect(()=>{
     getAllProduct()
     // eslint-disable-next-line
    },[])


    return (
        <div className='d-flex flex-wrap' >
           {
               state.map(data => <Product 
                key={data.id}
                title={data.title} 
                description={data.description} 
                price={data.price}
                rate={data.rating.rate}
                count={data.rating.count}
                image={data.image}
                 />)
           }
        </div>
    )
}

export default Main
