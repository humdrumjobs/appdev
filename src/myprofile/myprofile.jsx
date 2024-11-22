import React from 'react';

export function MyProfile(props) {
  return (
    <main className='bg-secondary'>
        <h1>
            Username: {props.userName}
        </h1>
    </main>
  );
}