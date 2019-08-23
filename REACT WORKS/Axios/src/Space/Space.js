import React, {Component} from 'react';
import axios from 'axios';
import classes from './Space.css';
import axio from '../SaveFirebase.js';
import Spinner from '../Spinner/Spinner'

class Space extends Component {
    state = {
        people: null,
        namesOfPeople : [],
        latitude : null,
        longitude: null,
        loading: true 
    }

    clickHandler(){
        const details = {
            name: 'Adeola',
            sex: 'Female',
            profession: 'Front-End Engineer'
        }

        axio.post('/post.json', details);
    }
    componentDidMount () {
        axios.get('http://api.open-notify.org/astros.json')
            .then(response =>{
                let number = response.data.number;
                let names = [...response.data.people]
                this.setState({people : number})
                this.setState({namesOfPeople : names})
            }).catch(err => console.log(err));

        
    }
    
    componentDidUpdate(){
        axios.get('http://api.open-notify.org/iss-now.json')
            .then(response =>{
                let latitude = response.data.iss_position.latitude;
                let longitude = response.data.iss_position.longitude;
                setTimeout(
                    this.setState({latitude : latitude}) , 5000
                )
                setTimeout(
                    this.setState({longitude : longitude}), 5000
                )  
            });
    }

    render(props){
        let people = this.state.namesOfPeople.map((person, index)=>{
            return (
                <li key={index + 1}>
                    <p>{person.name}, Craft: {person.craft}</p>
                </li>
            )
        });

        let table;
        if(this.state.longitude !== null){
            table = (
                <div>
                    <h2>Current Data On The ISS</h2>
                    <table>
                        <tbody  className={classes.table}>
                            <tr className={classes.tablerow}>
                                <td className={classes.data}>Current Latitude</td>
                                <td className={classes.dataGotten}>{this.state.latitude}</td>
                            </tr>
                            <tr className={classes.tablerow}>
                                <td className={classes.data}>Current Longitude</td>
                                <td className={classes.dataGotten}>{this.state.longitude}</td>
                            </tr>
                            <tr className={classes.tablerow}>
                                <td className={classes.data}>Current TimeStamp(unix)</td>
                                <td className={classes.dataGotten}>{this.state.longitude}</td>
                            </tr>
                            <tr className={classes.tablerow}>
                                <td className={classes.data}>Current TimeStamp(natural)</td>
                                <td className={classes.dataGotten}>{this.state.longitude}</td>
                            </tr>
                            <tr className={classes.tablerow}>
                                <td className={classes.data}>Estimated Velocity(Km/h)</td>
                                <td className={classes.dataGotten}>{this.state.longitude}</td>
                            </tr>
                            <tr className={classes.tablerow}>
                                <td className={classes.data}>Estimated Velocity(m/s)</td>
                                <td className={classes.dataGotten}>{this.state.longitude}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )
            }
        let spin;
        
        if(this.state.loading){
            spin = <Spinner />;
           
        }

        return(
            
            <div className={classes.box}>
                <h2>Current Information From Space</h2>
                {}
                <button onClick={()=>this.clickHandler()}>Click Me</button>
                <p>At this moment there are {this.state.people} humans in space They are:</p>
                <ol className={classes.list}>
                    {people}
                </ol>
                <br/>
                {table}
                {spin}
                
            </div>
        )
    }
}
    
export default Space;