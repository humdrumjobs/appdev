import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    setImageUrl(`placeholder.jpg`);
    setQuote('Show me the code');
    setQuoteAuthor('Joshua Bailey');
  }, []);

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <div id='picture' className='picture-box'>
          <img src={imageUrl} alt='random image' />
        </div>

        <p>Humdrum Jobs is a company through which you can find sources to make a quick buck on the weekend. Maybe you don't have a ton of skills right now, but you know how to weed a garden, this is the place for you!</p>

        <p>
          Humdrum Jobs is not responsible for the whereabouts of each job you perform. Each person is strictly responsible for any personal injury,
          damages done to personal or private property, or anything of the sort. Humdrum Jobs aims strictly to provide a means whereby one finds
          jobs to earn money, and provides a method to transact money in payment for jobs performed. All other incidents that 
          occur are not under our jurisdiction or fault.
        </p>

        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}