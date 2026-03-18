import './Search.scss';

export const Search = () => {
  return (
    <div className='search-container'> 
      <div className="search-box">
        <div className="search-icon-wrapper">
          <img src="icons/search.svg" alt="search" />
        </div>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Поиск" 
        />
      </div>
    </div>
  );
};