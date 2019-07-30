import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Route, Switch } from "react-router-dom";

import HeaderComponent from './components/HeaderComponent';
import PokedexList from './containers/PokedexList/PokedexList';
import PokedexDetail from './containers/PokedexDetail/PokedexDetail';

function App() {
  return (
    <Container>
      <Row>
        <HeaderComponent/>
      </Row>
      <Row>
        <Col> 
        <Switch>
          <Route exact path="/" component={PokedexList} />
          <Route path="/detail" component={PokedexDetail} />
        </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
