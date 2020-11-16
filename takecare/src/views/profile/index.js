import React, { Component } from 'react';
import Follow from './button.js';
import TabPanel from './TabRow.js';
import Subhead from '../../components/basics/SubHead.js';
import Tab from '@material-ui/core/Tab';
class Profile extends Component{
    render () {
        const subhead2="My Story.";
        return (
            <div className="Profile">
                <div className="container">
                    <div className="row col s12">
                        <div className="col s4" style={{float:'left'}}>
                        <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1" className="img-responsive circle" height="200px" width="200px"/>
                        </div>
                        <div className="col">
                            <h4 style={{fontWeight:'bold'}}>Caroline Joseph.</h4>
                            <h5>Fake it till you make it.</h5>
                            <div className="row center">
                                <div className="col ">
                                <h6 className="purple-text">FOLLOWING</h6>
                                <p>69</p>
                                </div>
                                <div className="col">
                                <h6 className="red-text">FOLLOWING</h6>
                                <p>49</p>
                                </div>
                                <div className="col">
                                <Follow className="col" color="purple" text="FOLLOW" icon="person_add" style={{verticalAlign:"middle"}}/>
                                </div>
                         
                            </div>
                        </div>
                        </div>
                    <Subhead subhead={subhead2}/>
                      <TabPanel/>
                </div>
            </div>
        )
    }
}
export default Profile;