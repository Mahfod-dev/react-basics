import React,{ useEffect, useState } from "react"
import useBreedList from './hooks/useBreedList'
import Results from "./Results";


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {

  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");


  const [pets,setPets] = useState([])


  const [breeds] = useBreedList(animal)


  useEffect(()=>{
	requestPets()
  },[])

 const requestPets = async () => {
	const res = await fetch(
		`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
	);
	const json = await res.json();
	setPets(json.pets);
};

const onSubmit =async (e)=>{
	  e.preventDefault()
	requestPets()

}

  const onChange = (e)=>{
    setLocation(e.target.value)
  }

  return (
		<div className='search-params'>
			<form onSubmit={onSubmit}>
				<label htmlFor='location'>Location</label>
				<input
					type='text'
					id='location'
					value={location}
					placeholder='Location'
					onChange={onChange}
				/>

				<label htmlFor='animal'>Animal</label>

				<select
					name='animal'
					id='animal'
					value={animal}
					onChange={(e) => setAnimal(e.target.value)}>
					<option />
					{ANIMALS.map((animal) => {
						return (
							<option
								value={animal}
								key={animal}>
								{animal}
							</option>
						);
					})}
				</select>

				<label htmlFor='breed'>
					Breed
					<select
						disabled={!breeds.length}
						id='breed'
						value={breed}
						onChange={(e) => setBreed(e.target.value)}
						onBlur={(e) => setBreed(e.target.value)}>
						<option />
						{breeds.map((breed) => (
							<option
								key={breed}
								value={breed}>
								{breed}
							</option>
						))}
					</select>
				</label>

				<button type='submit'>Submit</button>
			</form>

				<Results pets={pets}/>

		</div>
  );
}
export default SearchParams