// Components and syled components
import { Grid, CustomButton } from './discount-grid.styled';

const discountCategories = [
  { img: 'iPhone-13-Pro-Max.png', title: 'Exclusive Offers 50% Discount', color: '#BE0046' },
  { img: 'laptop.png', title: 'Weekend Sale Mega Offer', color: '#7800BE' },
  { img: 'skin-care.png', title: 'Biggest Sale & Offer Day', color: '#BE1900' },
];

export const DiscoundGrid = () => {
  // TODO: create NavigateLinks to make the respectively redirect
  return (
    <>
      <Grid>
        {discountCategories.map((item, index) => (
          <div key={item.title} className='image-container'>
            <div className='row'>
              <img key={item.img} className='discount-image' src={`./src/assets/${item.img}`} alt={`image of ${item.img.replace(/[^a-zA-Z0-9 ]/g, ' ')}`} />
              <div className='content'>
                <h4 className='title'>{item.title}</h4>
                <CustomButton color={item.color}> Let's see </CustomButton>
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </>
  );
};
