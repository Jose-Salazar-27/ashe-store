import styled from 'styled-components';

const BannerStyles = styled.div`
  position: relative;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;

  & .banner-text {
    /* font-style: italic; */
    color: #fff;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 75%;
    width: 33%;
    height: 80%;
    background-color: ${props => props.rgba};
    padding: 3rem;
    text-overflow: ellipsis;
    overflow: hidden;
    /* white-space: nowrap; */

    & .title {
      font-size: 4.8rem;
      font-weight: 600;
    }

    & .category {
      font-size: 3.2rem;
      font-weight: 400;
    }

    & .text {
      line-height: 1.6;
      font-size: 1.8rem;
      font-weight: 300;
    }
  }
`;

export const Banner = ({ imgURL, category, title, description, textSide, rgba = 'rgba(0, 70, 190, 0.7)' }) => {
  return (
    <BannerStyles url={imgURL} rgba={rgba}>
      <div className='banner-text'>
        <h2 className='title'>{title}</h2>
        <h4 className='category'>{category}</h4>
        <p className='text'>{description}</p>
      </div>
    </BannerStyles>
  );
};
