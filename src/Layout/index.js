import React from "react";
import {Switch, Link, Route} from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from './Home';
import Study from './Study';
import CreateDeck from './Components/Deck/CreateDeck';
import ViewDeck from './Components/Deck/Deck';
import EditDeck from './Components/Deck/EditDeck';
import AddCard from './Components/Card/AddCard';
import EditCard from './Components/Card/EditCard';

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Link to='/decks/new'>
              <button className='btn btn-secondary'>
                <i className='fas fa-plus'></i> Create Deck
              </button>
            </Link>
            <Home />
          </Route>

          <Route exact path='/decks/new'>
            <CreateDeck />
          </Route>

          <Route exact path='/decks/:deckId/study'>
            <Study />
          </Route>

          <Route exact path='/decks/:deckId/edit'>
            <EditDeck />
          </Route>

          <Route exact path='/decks/:deckId'>
            <ViewDeck />
          </Route>

          <Route exact path='/decks/:deckId/cards/new'>
            <AddCard />
          </Route>

          <Route exact path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;