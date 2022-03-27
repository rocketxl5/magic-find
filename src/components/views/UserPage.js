import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';
import { UserContext } from '../../contexts/UserContext';

const UserPage = () => {
  const { user } = useContext(UserContext);

  const [storeView, setStoreView] = useState(false);
  const [cardsView, setCardsView] = useState(false);
  const history = useHistory();
  // const toggleView = (view) => {
  //   if (view === 'store') {
  //     cardsView && setCardsView(false);
  //     setStoreView(true);
  //   } else {
  //     storeView && setStoreView(false);
  //     setCardsView(true);
  //   }
  // };

  return (
    <main className="user-page-container">
      <Link to="/store">
        <section className="user-page-section to-store">
          <h2>Manage Your Store</h2>
          <article>
            <p>Go to your to your store to modify it's content.</p>
            <p>
              You can add or remove a card. You can also modify the information
              of existing cards.
            </p>
          </article>
        </section>
      </Link>
      <Link to="/search-api">
        <section className="user-page-section  to-addcard">
          <h2>Add A New Card</h2>
          <article>
            <p>
              Search the Skyfall API for a specific card you wish to sell. You
              can set the condition, the quantity you want to sell and the price
              you wish to ask. You can also leave a comment to propestive
              buyers.
            </p>
            <p>Selling and buying cards as never been so easy!</p>
          </article>
        </section>
      </Link>
      <Link to="/profile">
        <section className="user-page-section  to-profile">
          <h2>Modify Your Profile</h2>
          <article>
            <p>This section is under currently under development.</p>
          </article>
        </section>
      </Link>
    </main>
  );
};

export default UserPage;

//  <h1>Welcome to Magic Find</h1>
//       <div>
//         <button onClick={() => history.push({ pathname: '/store' })}>
//           Search Store
//         </button>
//         <button onClick={() => history.push({ pathname: '/search-api' })}>
//           Search API
//         </button>
//       </div>
