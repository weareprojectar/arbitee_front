import React, {Component} from 'react';
import { Link } from 'react-router';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <body>
            <div id="wrap">
                <header class="header">
                    <nav>AR</nav>
                </header>
                <section class="slider_section">
                    <Link to={'/account'} class="btn1"><button>시작하기</button></Link>
                    <button class="btn2">로그인</button>
                    <button class="btn3">회원가입</button>
                </section>
                <footer class="footer"></footer>
            </div>
        </body>
        )
    }
}

export default Home;
