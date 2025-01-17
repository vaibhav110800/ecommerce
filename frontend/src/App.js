import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import CouponManagementScreen from './screens/CouponManagementScreen'
import RequestPassword from './screens/RequestPassword'
import ResetPassword from './screens/ResetPassword'
import FloatingButton from './components/floatingButton'
import Wishlist from './screens/Wishlist'
import PrivacyPolicy from './screens/PrivacyPolicy'
import TermsOfService from './screens/TermsOfService'
import CategoryScreen from './screens/CategoryScreen'
import Newsletter from './screens/Newsletter'
import ListScreen from './screens/ListScreen'
import Scroller from './components/Scroller'
// import CreateNewsletter from './screens/CreateNewsletter'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3' id='main'>
        <Container>
          <FloatingButton />
          <Route path='*' component={Scroller} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/wishlist' component={Wishlist} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/category/:category' component={CategoryScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/user/password/forget' component={RequestPassword} />
          <Route path='/reset/password/:token' component={ResetPassword} />
          <Route path='/admin/newsletter' component={Newsletter} />
          {/* <Route path='/admin/newsletter' component={CreateNewsletter} /> */}
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/admin/coupons' component={CouponManagementScreen} />
          <Route path='/search/:keyword' component={ListScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={ListScreen}
            exact
          />
          <Route
            path='/policy'
            component={PrivacyPolicy}
            exact
          />
          <Route
            path='/terms'
            component={TermsOfService}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
