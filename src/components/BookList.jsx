import React from 'react';

// Presentational Component
export default function BookList({ books, loading, error, getBooks, logout }) {
  React.useEffect(() => {
    getBooks();
  }, [getBooks]);
  return (
    <div>
      <h1>BookList</h1>
      <h3>
        <button onClick={logout}>로그 아웃</button>
      </h3>
      <p>
        <button onClick={reload}>Reload</button>
      </p>
      {loading && <p>로딩 중...</p>}
      {error && <p>에러다!!</p>}
      {error === null && books.map((book) => <p>{book.title}</p>)}
    </div>
  );

  function reload() {
    getBooks();
  }
}
