// External libraries dependencies
import { NavLink } from 'react-router-dom';

// Components and styled acomponents
import { CardLayout, CustomNavLink } from './card.styled';

export const Card = ({ obj }) => {
  const { id, title, price, description, discountPercentage, rating, stock, thumbnail } = obj;
  // console.log(obj);
  return (
    <CardLayout>
      <div className='card-img-container'>
        <img className='card-img' src={thumbnail} alt={`image of ${title}`} />
      </div>
      <div className='card-body'>
        <CustomNavLink className='card-title'>{title}</CustomNavLink>
        <p className='card-rating'>{`rating ${Number(rating)}/5`}</p>
      </div>
    </CardLayout>
  );
};
