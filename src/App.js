import React, { useState } from 'react';
import './styles.css';
import ImageCarousel from './components/ImageCarousel';
import LoadingBar from 'react-top-loading-bar';
import uniqid from 'uniqid';

const data = [
	{ id: uniqid, url: 'https://placeimg.com/640/480/tech' },
	{ id: uniqid, url: 'https://placeimg.com/640/480/animals?t=1632555895204' },
	{ id: uniqid, url: 'https://placeimg.com/640/480/animals?t=1632555926722' },
	{ id: uniqid, url: 'https://placeimg.com/640/480/tech?t=1632557411771' },
	{ id: uniqid, url: 'https://placeimg.com/640/480/animals?t=1632555945228' },
	{ id: uniqid, url: 'https://placeimg.com/640/480/animals?t=1632555954416' },
	{ id: uniqid, url: 'https://placeimg.com/640/480/animals?t=1632555962045' },
	{ id: uniqid, url: 'https://placeimg.com/640/480/animals?t=1632555973167' },
	{ id: uniqid, url: 'https://placeimg.com/640/480/animals?t=1632555985840' },
	{ id: uniqid, url: 'https://placeimg.com/640/480/animals?t=1632555999215' },
];

export default function App() {
	// const data = Array(20).fill({});
	const [progress, setProgress] = useState(0);
	return (
		<div className='App'>
			<LoadingBar
				color='#f11946'
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>
			<h1>Image Carousel</h1>
			<ImageCarousel data={data} setProgress={setProgress} />
		</div>
	);
}
