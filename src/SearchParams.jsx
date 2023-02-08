import React,{ useEffect,useState } from "react"
import Pet from './Pet'


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {

  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = []

  const [pets,setPets] = useState([])


  useEffect(()=>{
    fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`).then(res=>res.json()).then(json=>setPets(json.pets))
  },[animal])




  const onChange = (e)=>{
    setLocation(e.target.value)
  }

  return (
		<div className='search-params'>
			<form>
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

      {
        pets.map(pet=>{
          return <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />})
      }


		</div>
  );
}
export default SearchParams