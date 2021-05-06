import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { selectMovies } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'

const Movies = () => {

	const movies = useSelector(selectMovies);
	console.log("🛢️: ", movies);

	return (
		<Container>
			<h4>Recommended For You</h4>
			<Content>

			  <Link to="/detail">
				<Wrap>
					<img src='https://i.pinimg.com/originals/f9/a6/14/f9a6140c6495f0dbc3cbf25752ca9666.png' alt='' />
				</Wrap>
			  </Link>
			  <Link to="/detail">
				<Wrap>
					<img src='https://i.pinimg.com/originals/f9/a6/14/f9a6140c6495f0dbc3cbf25752ca9666.png' alt='' />
				</Wrap>
			  </Link>
			  <Link to="/detail">
				<Wrap>
					<img src='https://i.pinimg.com/originals/f9/a6/14/f9a6140c6495f0dbc3cbf25752ca9666.png' alt='' />
				</Wrap>
			  </Link>
			  <Link to="/detail">
				<Wrap>
					<img src='https://i.pinimg.com/originals/f9/a6/14/f9a6140c6495f0dbc3cbf25752ca9666.png' alt='' />
				</Wrap>
			  </Link>
			  <Link to="/detail">
				<Wrap>
					<img src='https://i.pinimg.com/originals/f9/a6/14/f9a6140c6495f0dbc3cbf25752ca9666.png' alt='' />
				</Wrap>
			  </Link>
			  <Link to="/detail">
				<Wrap>
					<img src='https://i.pinimg.com/originals/f9/a6/14/f9a6140c6495f0dbc3cbf25752ca9666.png' alt='' />
				</Wrap>
			  </Link>
			  <Link to="/detail">
				<Wrap>
					<img src='https://i.pinimg.com/originals/f9/a6/14/f9a6140c6495f0dbc3cbf25752ca9666.png' alt='' />
				</Wrap>
			  </Link>
			  <Link to="/detail">
				<Wrap>
					<img src='https://i.pinimg.com/originals/f9/a6/14/f9a6140c6495f0dbc3cbf25752ca9666.png' alt='' />
				</Wrap>
			  </Link>

			</Content>
		</Container>
	)
}

export default Movies

const Container = styled.div`padding: 0 0 26px;`

const Content = styled.div`
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));

		@media (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
	margin-top: 16px;
	padding-top: 56.25%;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 12px 20px -5px, rgb(0 0 0 / 73%) 0px 8px 10px -5px;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	border: 3px solid rgba(249, 249, 249, 0.1);

	img {
		inset: 0px;
		display: block;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		transition: opacity 500ms ease-in-out 0s;
		width: 100%;
		z-index: 1;
		top: 0;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -6px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;

		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
		video {
			opacity: 1;
		}
	}
`
