// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="product-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="product"
      />
    </div>
  )
}

export default Products
