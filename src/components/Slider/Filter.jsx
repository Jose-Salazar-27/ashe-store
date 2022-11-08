// utilities
import { handleHorizontalScroll } from '@/utilities';

// Components and styled components
import { FilterContainer } from './slider.styled';
import { ArrowButton } from '@/styled-components';

// TODO: improve this component. I want to use useRef for slider
export const Filter = ({ filter, setFilter }) => {
  // Don't use setFilter method directly because react gives a warning. Use this function instead
  const handleFilter = (evnt, category) => {
    evnt.preventDefault();
    setFilter(prevState => {
      return { ...prevState, category: String(category) };
    });
  };

  // I write the categories manually because I want to always use the same ones for this component
  const categories = ['smartphones', 'groceries', 'skincare'];

  return (
    <FilterContainer>
      <h2 className='filter-title'>Our popular categories</h2>
      <ul className='tabs-container'>
        {categories.map(category => {
          return (
            <li key={category} className={`filter-tab ${filter.category === category ? 'filter-active' : ''}`}>
              <button className={`filter-button`} id='test-id' onClick={evnt => handleFilter(evnt, category)}>
                smartphones
              </button>
            </li>
          );
        })}
        <div>
          <ArrowButton onClick={() => handleHorizontalScroll('left', 'slider', 250)}>{'<'}</ArrowButton>
          <ArrowButton onClick={() => handleHorizontalScroll('rigth', 'slider', 250)}>{'>'}</ArrowButton>
        </div>
      </ul>
    </FilterContainer>
  );
};
