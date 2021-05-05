import styled from 'styled-components'

const Detail = () => {
    return (
        <Container>
      <Background>
        <img src='https://res.allmacwallpaper.com/get/iMac-21-inch-5K-Retina-wallpapers/star-wars-the-rise-of-skywalker-12k-4096x2304/22025-13.jpg' alt='' />
        {/* <img src='https://thoughtsfromthebench379373603.files.wordpress.com/2020/01/bfii.jpg' alt='' /> */}
      </Background>

      <ImageTitle>
        <img src='/images/starwars.png' alt='' />
      </ImageTitle>
      <ContentMeta>
        <Controls>
			<Player>
				<img src="/images/play-icon-black.png" alt="" />
				<span>Play</span>
			</Player>
			<Trailer>
				<img src="/images/play-icon-white.png" alt="" />
				<span>Trailer</span>
			</Trailer>
			<AddList>
				<span />
				<span />
			</AddList>
			<GroupWatch>
				<div>
				<img src="/images/group-icon.png" alt="" />
				</div>
			</GroupWatch>
        </Controls>
        <SubTitle>
			Voluptate commodi suspendisse ullamcorper volutpat congue posuere nobis eget perspiciatis senectus
		</SubTitle>
        <Description>
          	Potenti error ipsam eget mollitia pariatur diam ultricies tristique arcu, fames! Pretium! Tempus, atque cumque? Lectus, eveniet leo illo repudiandae cras veniam suscipit felis ullamcorper maxime magna magnis ultrices magnis scelerisque sint accumsan metus expedita labore esse metus curae quod, tempora congue
        </Description>
      </ContentMeta>
    </Container>
    )
}

export default Detail

const Container = styled.div`
	position: relative;
    // overflow-x: hidden;
  	overflow: hidden;
	top: 75px;
    color: white;
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	// justify-content: center;
	// align-items: center;
`

const Background = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  left: 0px;
  opacity: 0.67;
  z-index: -1;
  bject-fit: cover;

  img {
	transform: scaleX(-1);
	object-fit: cover;
    width: 100vw;
    height: 100vh;

    @media (max-width: 1200px) {
    //   width: 100vw;
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 30px auto;
  height: 21vw;
  min-height: 180px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
	font-size: 15px;
	margin: 0px 22px 0px 0px;
	padding: 0px 24px;
	height: 56px;
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 1.8px;
	text-align: center;
	text-transform: uppercase;
	background: rgb(255, 255, 255);
	border: none;
	color: rgb(0, 0, 0);
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	img {
		width: 32px;
	}

	&:hover {
		box-shadow:
				rgb(0 0 0 / 80%) 0px 40px 58px -6px,
				rgb(0 0 0 / 72%) 0px 30px 22px -10px;
	//   background: rgb(198, 198, 198);
		transform: scale(1.05);
		transition: opacity 250ms ease-in-out 0s;
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }

	@media (max-width: 430px) {
		// Break the add and group icon into new row
	}
`;

const Trailer = styled(Player)`
	background: rgba(0, 0, 0, 0.6);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);

	&:hover {
	background: rgba(0, 0, 0, 0.3);
    transition: opacity 250ms ease-in-out 0s;
	}
`;

const AddList = styled.div`
	height: 44px;
	width: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 50%;
	border: 2px solid white;
	cursor: pointer;
	margin-right: 16px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	span {
		background-color: rgb(249, 249, 249);
		display: inline-block;
        transition: opacity 500ms ease-in-out 0s;

		&:first-child {
			height: 2px;
			transform: translate(1px, 0px) rotate(0deg);
			width: 16px;
		}
		&:nth-child(2) {
			height: 16px;
			transform: translateX(-8px) rotate(0deg);
			width: 2px;
		}
	}

	&:hover {
		background-color: rgba(249, 249, 249);
		span {
			background-color: rgb(0, 0, 0);
        	transition: width 250ms, transform 500ms;
			&:first-child  {
				transform: translate(1px, 0px) rotate(-90deg);
			}
			&:nth-child(2) {
				transform: rotate(90deg) translateY(8px);
			}
		}
		img {
			filter: invert(1);
		}
	}
`;

const GroupWatch = styled.div`
	height: 44px;
	width: 44px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: white;
	div {
		height: 40px;
		width: 40px;
		background: rgb(0, 0, 0);
		border-radius: 50%;
		img {
		width: 100%;
		}
	}
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	&:hover {
		div {
			background-color: rgb(249, 249, 249);
		}
		img {
			filter: invert(1);
		}
	}

`;

const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	padding: 16px 0px;
	color: rgb(249, 249, 249);
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;