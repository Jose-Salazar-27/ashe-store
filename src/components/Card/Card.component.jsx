// External libraries dependencies
import { Link } from 'react-router-dom';

// Components and styled acomponents
import { CardLayout } from './card.styled';

export const Card = ({ obj }) => {
  const { id, title, price, description, discountPercentage, rating, stock, thumbnail } = obj;
  // console.log(obj);
  return (
    <CardLayout>
      <div className='card-img-container'>
        <img className='card-img' src={thumbnail} alt={`image of ${title}`} />
      </div>
      <div className='card-body'>
        <h4>{title}</h4>
        {/* <p className='card-description'>{description}</p> */}
        <span>{`rating ${Number(rating)}/5`}</span>
        <Link>view now</Link>
      </div>
    </CardLayout>
  );
};
