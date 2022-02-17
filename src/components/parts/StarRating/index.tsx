import { Rating as StarRating } from 'react-simple-star-rating';

const Rating = (ratingValue: any): JSX.Element => {
	const { rating } = ratingValue;
      
	return (
	  <StarRating
	    ratingValue={rating * 10}
	    size={25}
	    readonly
	    fillColor="orange"
	    emptyColor="gray"
	  />
	);
      };
      
export { Rating };
      