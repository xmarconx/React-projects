import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainScreen.css';

export default class MainScreen extends Component {
  easyhscore = localStorage.getItem('easyhscore');
  mediumhscore = localStorage.getItem('mediumhscore');
  hardhscore = localStorage.getItem('hardhscore');
  

  handleEasyReset() 
  {
    localStorage.setItem('easyhscore',0);
    window.location.reload(false);
  }
  handleMediumReset() 
  {
    localStorage.setItem('mediumhscore',0);
    window.location.reload(false);
  }
  handleHardReset()
  {
    localStorage.setItem('hardhscore',0);
    window.location.reload(false);
  }
  handleAllReset()
  {
    localStorage.setItem('easyhscore',0);
    localStorage.setItem('mediumhscore',0);
    localStorage.setItem('hardhscore',0);
    window.location.reload(false);
  }


  render() {
    return (
      <div className='mainscreen'>
        <div className='level'>
          <h2>Seviye Seç</h2>
          <Link to='/gameboardeasy' style={{ textDecoration: 'none' }}><p>Kolay</p></Link>
          <Link to='/gameboardmedium' style={{ textDecoration: 'none' }}><p>Orta</p></Link>
          <Link to='/gameboardhard' style={{ textDecoration: 'none' }}><p>Zor</p></Link>
          <h3>Nasıl oynanır</h3>
            <div className='instruction'>
              <br>
              </br>
              YUKARI - Yukarı ok tuşu veya W
              <br>
              </br>
              AŞAĞI - Aşağı ok tuşu veya S
              <br></br>
              SOL - Sol ok tuşu veya A
              <br></br>
              SAĞ - Sağ ok tuşu veya D
              <br></br>
              Oyunu Duraklatmak için P'ye basın
            </div>
        </div>
        <div className='scorecard'>
          <h2>Yüksek Skorlar</h2>
          <div className='hscore-div'>
            <p className='levelinfo'>Kolay Seviye: {(this.easyhscore == null) ? 0 : (parseInt(JSON.parse(this.easyhscore)))}</p>
            <button className='resetbtn' onClick={this.handleEasyReset}>Bu kolay seviye skorunu sıfırla</button>
          </div>
          <div className='hscore-div'>
            <p className='levelinfo'>Orta seviye: {(this.mediumhscore == null) ? 0 : (parseInt(JSON.parse(this.mediumhscore)))}</p>
            <button className='resetbtn' onClick={this.handleMediumReset}>Bu orta seviye skorunu sıfırla</button>
          </div>
          <div className='hscore-div'>
            <p className='levelinfo'>Zor Seviye: {(this.hardhscore == null) ? 0 : (parseInt(JSON.parse(this.hardhscore)))}</p>
            <button className='resetbtn' onClick={this.handleHardReset}>Bu zor seviye skorunu sıfırla</button>
          </div>
          <div className='resetall'>
            <button className='resetallbtn' onClick={this.handleAllReset}>Bütün Skorları sıfırla</button>
          </div>
        </div>
      </div>
    )
  }
}
