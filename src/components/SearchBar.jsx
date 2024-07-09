import { useState } from 'react';


export const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState('');
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm('');
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  )
}
