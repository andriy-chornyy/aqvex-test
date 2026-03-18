import './Search.scss';

interface SearchProps {
  onSearch: (value: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

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
          onChange={handleChange}
        />
      </div>
    </div>
  );
};