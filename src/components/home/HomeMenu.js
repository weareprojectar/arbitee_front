import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../resource/Home.css';


class HomeMenu extends Component {
    render() {
        return (
            <body>
            <div id="wrap">
                <header class="header">
                    <nav>AR</nav>
                </header>
                <section class="slider_section">
                    <Link to={'/accountindex'}  className="btn1"><button>시작하기</button></Link>
                    <Link to={'/signin'} className="btn2"><button>로그인</button></Link>
                    <Link to={'/signup'} className="btn3"><button>회원가입</button></Link>
                </section>
                <footer class="footer"></footer>
            </div>
        </body>
        )
    }
}

export default HomeMenu;
