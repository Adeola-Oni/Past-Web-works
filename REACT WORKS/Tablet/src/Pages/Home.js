import React, {Component} from 'react';
import classes from './Pages.css';
import Aux from './Aux.js';
import HomeContents from './HomeContents'
import AboutContents from './AboutContents';
import { Link } from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            name : <HomeContents key='home'/>,
        };
        this.routeHandler = this.routeHandler.bind(this);
    }

    routeHandler(e, x){
        const paths = new Map([ ['/', '<HomeContents/>'], ['/home','<HomeContents/>'], ['/about','<AboutContents/>']])
        let targ = e.target.href;
        for (var [key, value] of paths.entries()) {
            let newKey = 'http://localhost:3000' + key;
            if(newKey === targ){
                this.setState(
                    {name : x}
                )
            }
        }
    }

    render(props){ 
        
    return (
        
        <Aux>
            <nav>
                <ul className={classes.ul}>

                    <li  onClick={(e)=>this.routeHandler(e, <HomeContents/>)} >
                        <Link to ='/' className={classes.li} > 
                            Home  
                        </Link>
                    </li>

                    <li onClick={(e)=>this.routeHandler(e, <AboutContents/>)}>
                        <Link to='/about' className={classes.li} >
                            About
                        </Link>
                    </li>

                </ul>
            </nav>
            <br/><br/>

            <section className={classes.section}>
                {this.state.name}

            </section>  
        </Aux>
    ) 
    }
}

export default Home;