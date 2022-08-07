import { useState } from 'react';

export default function Enter() {
  const [method, setMethod] = useState('email');
  const onClick = (e) => {
    setMethod(e.target.name);
  };
  return (
    <div>
      <h2>Enter to Carrot</h2>
      <p>Enter using:</p>
      <div>
        <button onClick={onClick} name="email">
          Email
        </button>
        <button onClick={onClick} name="phone">
          Phone
        </button>
      </div>
      <div>
        {method === 'email' && (
          <>
            <p>Email address</p>
            <input type="email" name="email" id="email" />
          </>
        )}
        {method === 'phone' && (
          <>
            <p>Phone</p>
            <div>
              <span>+82</span>
              <input type="number" name="number" id="number" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
