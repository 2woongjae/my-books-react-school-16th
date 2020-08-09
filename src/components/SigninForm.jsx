import React, { useRef } from 'react';

export default function SigninForm({ login, loading }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div>
      <p>
        <input type="text" ref={emailRef} />
      </p>
      <p>
        <input type="password" ref={passwordRef} />
      </p>
      {loading && <p>로딩 중...</p>}
      <p>
        <button onClick={click}>로그인</button>
      </p>
    </div>
  );

  function click() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === '' || password === '') return;
    login(email, password);
  }
}
