import React, { useState, useEffect } from 'react'
import CardList from "./components/CardList";
import SearchBox from './components/SearchBox';
import tachyons from 'tachyons'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global'
import  Toggle from './Toggle'


function App() {

	const [pokemon,setPokemon] = useState([])
	const [searchField,setSearchField] = useState('')
	const [theme,setTheme] = useState('light')
	const toggleTheme = () => {
		if ( theme==='light' ) {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=180')
		.then( res => res.json() )
		.then( data => {
			return data.results
		})
		.then(data => {
			let SinglePokemonData = data.map((user, i) => {
				const KO = fetch(data[i].url).then(res=> res.json()).then(data => {
				  return data
				}).catch(err => console.log("Unable to get data from single pokemon data", err))
				return KO
			})
			Promise.all(SinglePokemonData).then(data => {
			  setPokemon(data)
			}).catch(err => console.log("Couldn't set the single pokemon data to the state array", err))
		  })
		  .catch(err => console.log("Error", err))
	},[])

	const onChangeInSearch = (e) => {
		return setSearchField(e.target.value)
	}

	const filteredData = pokemon.filter( p => {
		return p.name.toLowerCase().includes(searchField.toLowerCase())
	} )


	if ( filteredData.length !== 0 ) {
		return(
			<ThemeProvider theme={theme==='light'?lightTheme:darkTheme}>
				<div className='tc r'>
					<GlobalStyles />
					<img src='https://i.ibb.co/p3cgPhV/logo-Poke-Friends.png' width='190px'></img>
					<SearchBox searchChange={onChangeInSearch}/>
					<Toggle theme={theme} toggleTheme={toggleTheme} />
				</div>
				<br />	
				<div className='tc r'>
					<CardList data={filteredData}/>
				</div>
				<br />
				<footer className='tc r'>
					<span>Credits:</span>
					<br />
					<small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
					<br />
					<small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
				</footer>
			</ThemeProvider>
		);
	} else {
		return(
			<ThemeProvider theme={theme==='light'?lightTheme:darkTheme}>
				<div className='tc r'>
					<GlobalStyles />
					<img src='https://i.ibb.co/p3cgPhV/logo-Poke-Friends.png' width='190px'></img>
					<SearchBox searchChange={onChangeInSearch}/>
					<Toggle theme={theme} toggleTheme={toggleTheme} />
				</div>
				<h3 className='tc r'>
					No Pokemon found. Please try again
				</h3>
				<br />
				<footer className='tc r'>
					<span>Credits:</span>
					<br />
					<small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
					<br />
					<small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
				</footer>
			</ThemeProvider>
		)
	}

	
}


export default App;