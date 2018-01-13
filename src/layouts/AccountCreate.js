import React, { Component } from 'react';
import QRcode from '../components/account/QRcode'


// const CreateAccount = () => {
class AccountCreate extends Component {
  constructor() {
    super();
  }


  render() {

    return (
      <div>
        <div>
          <p>계좌만들래? 이렇게 하묜돼 샬라라라샤라라샬라</p>
          <button type="button" className="button">만들기</button>
        </div>
        <div>
          <p>만들기->QR코드 활성화 필요!</p>
          <QRcode/>
        </div>
      </div>
    );
  }

}

export default AccountCreate;
