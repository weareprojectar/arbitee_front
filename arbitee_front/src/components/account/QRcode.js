import React, { Component } from 'react';
import PropTypes from 'prop-types'

const propTypes = {

};

const defaultProps = {

};


class QRcode extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <button type="button">QR 코드 여기다 넣공</button>
              <p>옆에다 설명을 해쥬면 되지!</p>
            </div>
        );
    }
}

QRcode.propTypes = propTypes;
QRcode.defaultProps = defaultProps;

export default QRcode;
