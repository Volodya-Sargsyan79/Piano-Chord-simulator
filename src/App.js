import React , {Component}from 'react'
import Navbar from "./Components/NavBar/Navbar";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pricing from "./Components/Pricing/Pricing";
import Blog from "./Components/Blog/Blog";
import AveilableOn from "./Components/HomePage/AveilableOn/AveilableOn";
import PrivacyPolicy from "./Components/PirvacyPolicy/PrivacyPolicy";
import Jobs from "./Components/Jobs/Jobs";
import TermsOfService from "./Components/TermsOfService/TermsOfService";
import axios from 'axios'

import './App.css'

const store = createStore(reducer)

export default class App extends Component{

    componentDidMount() {
        axios.post('http://localhost:5000/test')
            .then(data=>{
                console.log(data)
        })
            .catch(err=>{
                console.log(err)
            })
    }

    render(){
        return(
            <Provider store={store}>
                <Router>
                    <header className={'header'} >
                        <Navbar/>
                    </header>
                    <Route exact path='/' render = {()=><HomePage  />}/>
                    <Route path={'/pricing'} component={Pricing}/>
                    <Route path={'/blog'} component={Blog}/>
                    <Route path={'/privacy_policy'} component={PrivacyPolicy}/>
                    <Route path={'/jobs'} component={Jobs}/>
                    <Route path={'/terms&&_of&&_service&&'} component={TermsOfService}/>
                    <footer>
                        <section>
                            <AveilableOn/>
                        </section>
                        <Footer/>
                    </footer>
                </Router>
            </Provider>
        )
    }
}