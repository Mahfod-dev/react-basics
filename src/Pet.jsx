import React from 'react'
import { Link } from 'react-router-dom';

const Pet = ({name,animal,breed,images,location,id}) => {



  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg'

  return (
		<div className='pet'>
			<Link to={`/details/${id}`}>
				<div className='image-container'>
					<img
						src={images[0] || hero}
						alt={name}
					/>
				</div>
				<div className='info'>
					<h1>{name}</h1>
					<h2>{`${animal} - ${breed} - ${location}`}</h2>
				</div>
			</Link>
		</div>
  );
}
export default Pet