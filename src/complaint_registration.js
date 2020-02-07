import React, { Component } from "react";
import logo from './home.jpeg'
import './home.css'
import './styles.css'

export default class complaint extends Component {
    render() {
        return (
            <div class="wrapper">
                <div class="sidebar">
                    <h2>CITIZENS ENGAGE</h2>
                    <ul>
                        <li><a href="/user-home"><i class="fas fa-home"></i>Home</a></li>
                        <li><a href="/complaint"><i class="fas fa-user"></i>Register Complaint</a></li>
                        <li><a href="#"><i class="fas fa-address-card"></i>View Complaints</a></li>
                        <li><a href="#"><i class="fas fa-project-diagram"></i>Total Complaints</a></li>
                        <li><a href="#"><i class="fas fa-blog"></i>Pending Complaints</a></li>
                        <li><a href="#"><i class="fas fa-address-book"></i>Closed Complaints</a></li>
                        <li><a href="#"><i class="fas fa-map-pin"></i>Logout</a></li>
                    </ul> 
        
                </div>
                <div class="main_content">
                    <center>
                    <div class="header">Home Page</div>  
                    <div class="info">
                    <div className="auth-wrapper">
    <div className="auth-inner">
    <div>
            {/* <div><Helmet><script src="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"></script></Helmet></div> */}
        
        
            <form>
                <h3>Register Complaint</h3>
                <div className="form-group">
                    <label>
                        Category:
                        <select>
                            <option value="Electricity">Electricity</option>
                            <option value="Water">Water</option>
                            <option value="Road">Road</option>
                            <option value="Garbage">Garbage</option>
                        </select>
                    </label>
                 </div>
                <div className="form-group">
                    Upload Image:
                    <input type="file" name="file" />
                </div>

                <div className="form-group">
                    <label>Location:</label>
                    <input type="text" className="form-control" placeholder="Location" />
                </div>
                {/* <div>
        <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '400px'} } /> }
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </div> */}

                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input type="text" className="form-control" placeholder="Enter mobile number" />
                </div>

                <div className="form-group">
                    <label>Description:</label><br></br>
                    {/* <input type="password" className="form-control" placeholder="Enter password" /> */}
                    <textarea cols={33} rows={4}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
             
        </div></div>
            </div>
                    </div>
                    </center>
                     
                    
                    </div>
            
          </div>  
            
        );
    }
}