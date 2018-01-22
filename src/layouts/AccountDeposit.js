import React from 'react';

const AccountDeposit = () => {
  return (
    <div>
      <p>입출금 계좌 만들기</p>
      <button type="button" className="button">입출금 계좌 생성</button>
        <p>ABT 코인을 통한 입출금을 위해서는 입출금 전용 계좌가 필요합니다.</p>
        <p>출금을 위해서는 본인 확인을 위해 신분증 확인 및 영상 통화가 요구되며, 첫 출금시에만 진행됩니다.</p>
        <p>출금 신청 이후 약 50 번의 CONFIRMATION이 진행되며, 약 20분이 소요됩니다.</p>
    </div>
  );
};

export default AccountDeposit;
