import styled from 'styled-components';
import {auth, provider} from '../firebase'


const Header = (props) => {

	const handleAuth = () => {
	  auth
		.signInWithPopup(provider)
		.then((result) => {
			console.log(result);
		}).catch((error) => {
			alert(error.message)
		});
	}

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+"/>
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="SEARCH" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="ORIGINALS" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="MOVIES" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="SERIES" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
			<Login onClick={handleAuth}>Login</Login>
            <UserImg src='https://i.postimg.cc/JhMqbqDP/me.jpg'/>
        </Nav>
    );
}

export default Header;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #040714;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 6px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    // margin-top: 4px;
    // max-height: 70px;
    // font-size: 0;
    display: inline-block;
    margin-right: 25px;

    img {
        display: block;
        min-width: 80px;
		width: 100%;
    }
`

// flex-flow property is a shorthand property for
// flex-direction and flex-wrap
const NavMenu = styled.nav`
    display: flex;
    flex: 1;
    align-items: center;
    // margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
            padding: 5px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            // padding: 2px 0;
            // line-height: 1.08;
            // white-space: nowrap;
            position: relative;

            &:after {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 6px 6px;
                bottom: -6px;
                content: "";
				opacity: 0;
                position: absolute;
                height: 2px;
                left: 0px;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                // width: auto;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

// Don't show the navbar menu when screen size goes below 768px
//     @media (max-width: 1000px) {
//     display: none;
// }
`;

const Login = styled.a`
    position: fixed;
    right: 96px;
    // margin: 0 10px;

	background-color: black;
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	transition: all 0.2s ease-out;
	cursor: pointer;

	&:hover {
		color: black;
		background-color: #f9f9f9;
		border-color: transparent;
	}
`;

const UserImg = styled.img`
    position: fixed;
    right: 36px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`;