import React from 'react'
import {assets} from '../../assets/assets.js'
import './Main.css'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>CoreX AI</p>
            <img src={assets.user_icon} alt="" />
        </div>
                <div className="main-container">
                    <div className="greet">
                        <p><span>Hello, Dev</span></p>
                        <p>How can I assist you today?</p>
                    </div>
                      <div className="cards">
                        <div className="card">
                            <img src={assets.message_icon} alt="" />
                            <p>Chat with AI</p>
                        </div>
                        <div className="card">
                            <img src={assets.code_icon} alt="" />
                            <p>Make code easy</p>
                        </div>
                        <div className="card">
                            <img src={assets.bulb_icon} alt="" />
                            <p>Brainstorm ideas</p>
                        </div>
                        <div className="card">
                            <img src={assets.compass_icon} alt="" />
                            <p>suggest beautiful places</p>
                        </div>
                        
                      </div>
                             <div className="main-bottom">
                                <div className="search-box">
                                    <input type="text" placeholder='Ask me anything...' />
                                     <div>
                                        <img src={assets.gallery_icon} alt="" />
                                        <img src={assets.mic_icon} alt="" />
                                        <img src={assets.send_icon} alt="" />
                                     </div>
                                </div>
                                <p className="bottom-info">Powered by AI. So, double check the results, privacy and legal acts are reserved by CoreX AI.</p>
                             </div>

                </div>
    </div>
  )
}

export default Main