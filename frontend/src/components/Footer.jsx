import React , { Component , PropTypes } from 'react'

class Footer extends Component {
    componentDidMount(){
        const { google } = this.props
        let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 12.9197934, lng: 100.8820457},
          zoom: 8
        });
        google.maps.event.trigger(map, "resize");
    }
    render(){
        return(
            <div className="row">
                <div className="containerFooter">
                    <div className="contentFooter">
                        <div className="col-md-3">
                            <div className="footerItem">
                                <p>Main Menu</p>
                                <ul>
                                    <li><a href="#" >Home</a></li>
                                    <li><a href="#" >About</a></li>
                                    <li><a href="#" >Contact</a></li>
                                    <li><a href="#" >Portfolio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footerItem">
                                <p>Contact</p>
                                <p>193/257 M.10 Nongprue Banglamung Chonburi 20150</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footerItem">
                                <p>Map</p>
                                <div id="map"></div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footerItem">
                                <p>Social</p>
                                <a href="https://www.facebook.com/hide.t.hyde"><i className="fa fa-facebook-square fa-4x" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

Footer.propTypes = {
    google: PropTypes.any
}

export default Footer