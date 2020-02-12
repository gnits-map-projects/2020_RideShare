import React, { Component } from "react";
import './UserHome.css'
export default class Nav extends Component{
    render() {
        return (

            
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
               
        );
}
}