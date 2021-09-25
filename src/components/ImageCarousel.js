import React, { useEffect, useState } from 'react';

const ImageCarousel = ({ data, setProgress }) => {
	const [current, setCurrent] = useState(0);
	const [image, setImage] = useState('');

	// const nextImage = useCallback(() => {
	//   const resetIdx = current === data.length - 1;
	//   const idx = resetIdx ? 0 : current + 1;
	//   setCurrent(idx);
	// }, [current, data.length]);

	// const onClickPrevious = () => {
	//   const resetIdx = current === 0;
	//   const idx = resetIdx ? data.length - 1 : current - 1;
	//   setCurrent(idx);
	// };

	useEffect(() => {
		function increment() {
			setCurrent(current => (current + 1) % data.length);
			setImage(data[current]);
		}
		const handleAutoPlay = setInterval(increment, 3000);
		return () => clearInterval(handleAutoPlay);
	}, [data, current]);

	// const slide = data[current];
	console.log(current + 1 === data.length);
	console.log('image' + JSON.stringify(image));

	return (
		<div>
			<div>
				{current === data.length - 1 ? (
					'test'
				) : (
					<img src={image.url} alt={image.id} />
				)}
			</div>
		</div>
	);

	// return (
	//   <>
	//     {data.map((slide, idx) => {
	//       if (idx === current) {
	//         return (
	//           <div key={slide.id}>
	//             <div>
	//               <img src={slide.url} alt={idx} />
	//             </div>
	//             <span>{current}</span>
	//           </div>
	//         );
	//       }
	//       return (
	//         <>
	//           {idx === current && (
	//             <div key={slide.id}>
	//               <div>
	//                 <img
	//                   src={slide.url}
	//                   alt={idx}
	//                   setProgress={() => setProgress(100)}
	//                 />
	//               </div>
	//               <div>
	//                 Image {current + 1} of {data.length}
	//               </div>
	//             </div>
	//           )}
	//         </>
	//       );
	//     })}
	//   </>
	// );
};

export default ImageCarousel;
