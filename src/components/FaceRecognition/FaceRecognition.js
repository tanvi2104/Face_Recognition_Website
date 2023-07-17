import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL,box }) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt="img" src={ imageURL } width='500px' height='auto' />
				<div className='bounding-box' style={{ top: box.leftCol, right: box.rightCol, left:box.leftCol, bottom: box.bottomRow}} ></div>
			</div>
		</div>
	);
}

export default FaceRecognition;