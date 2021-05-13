import React from 'react';

export default function SearchBar(props) {
   const { keyword, setKeyword } = props;
   return (
      <div>
         <input
            value={keyword}
            placeholder={'search contacts'}
            onChange={(e) => setKeyword(e.target.value)}
         />
      </div>
   );
}
