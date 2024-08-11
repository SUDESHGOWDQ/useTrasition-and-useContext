
const SearchComponent = ({ handleInputChange,query }) => {
 

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default SearchComponent;
