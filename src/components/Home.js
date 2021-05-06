import { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'

import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'

const Home = () => {
	const dispatch = useDispatch();
	// let recommends = [];

	useEffect(() => {
		db.collection("movies").onSnapshot((snapshot) => {
			let tempMovies = snapshot.docs.map((doc) => {
			// 	// console.log(movies)
				console.log(doc.data());
				return { id: doc.id, ...doc.data() }
			})
			dispatch(setMovies(tempMovies));
		})
	}, [])

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Movies />
		</Container>
	)
}

export default Home

const Container = styled.main`
	position: relative;
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	overflow-x: hidden;
	display: block;
	top: 70px;

	// This is another div we create, which will be behind the content
	&:after {
		background: url("/images/home-background.png") center center / cover no-repeat fixed;
		content: "";
		position: absolute;
		// shorthand for the top , right , bottom and/or left
		inset: 0px;
		z-index: -1;
	}
`
