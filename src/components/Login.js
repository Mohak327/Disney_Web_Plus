import styled from 'styled-components'

const Login = (props) => {
  return (
    <Container>
      <Content>
		<CTA>
			<CTALogoOne src="/images/cta-logo-one.svg"/>
			<SignUp>get it all right here</SignUp>
			<Description>
            	Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 01/05/21, the price of Disney+ and The Disney Bundle will increase by $2.00.
			</Description>
			<CTALogoTwo src="/images/cta-logo-two.png" alt="" />
		</CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
`;

const BgImage = styled.div`
    background-image: url("/images/login-background.jpg");
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

	// Puts this image on the lowest level of view
    z-index: -1;
`;

const CTA = styled.div`
	align-items: center;
	max-width: 650px;
	width: 90%;
	display: flex;
	flex-direction: column;
	transition-timing-function: ease-out;
	transition: opacity: 0.2s;
`;

const CTALogoOne = styled.img`
	margin-bottom: 12px;
	max-width: 600px;
	min-height: 1px;
	display: block;
	width: 90%;
`;

const SignUp = styled.a`
	text-transform: uppercase;
	font-weight: 800;
	color: #f9f9f9;
	background-color: #0063e5;
	margin-bottom: 12px;
	width: 100%;
	letter-spacing: 1.5px;
	font-size: 18px;
	padding: 20px 0;
	border: 1px solid transparent;
	border-radius: 4px;
	&:hover {
		background-color: #0483ee;
  }
`;

// hsla(hue, saturation, lightness, alpha)
const Description = styled.p`
	cursor: pointer;
    color: hsla(0, 0%, 95%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    width: 90%;
    display: inline-block;
    vertical-align: bottom;
`;