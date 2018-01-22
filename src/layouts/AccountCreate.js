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
          <h1>계좌 만들기</h1>
          <p>Arbiter 툴을 이용한 투자에 참여하시려면 고유의 계좌를 만드셔야 합니다.</p>
          <button type="button" className="button">만들기</button>
        </div>
        <div>
          <p>Ariter 툴 이용을 위한 계좌는 QR 코드 형태로 발급됩니다.</p>
          <QRcode/>
        </div>
      </div>
    );
  }

}

export default AccountCreate;
