// External libraries dependencies

import { FilterContainer } from './slider.styled';

export const Filter = ({ filter, setFilter }) => {
  // Don't use setFilter method directly because react gives a warning. Use this function instead
  const handleFilter = (category, evnt) => {
    evnt.preventDefault();
    setFilter(prevState => {
      return { ...prevState, category: String(category) };
    });
  };

  return (
    <FilterContainer>
      <h2>You might be interested</h2>
      <ul className='tabs-container'>
        <li className={`filter-tab ${filter.category === 'smartphones' ? 'active' : ''}`}>
          <button id='test-id' onClick={evnt => handleFilter('smartphones', evnt)}>
            smartphones
          </button>
        </li>
        <li className={`filter-tab ${filter.category === 'groceries' ? 'active' : ''}`}>
          <button onClick={evnt => handleFilter('groceries', evnt)}>groceries</button>
        </li>
        <li className={`filter-tab ${filter.category === 'skincare' ? 'active' : ''}`}>
          <button onClick={evnt => handleFilter('skincare', evnt)}>skincare</button>
        </li>
      </ul>
    </FilterContainer>
  );
};
