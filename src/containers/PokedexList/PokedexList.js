import React from 'react';
import { Col, ListGroup, ListGroupItem, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';
const apiURL = 'https://pokeapi.co/api/v2';



class PokedexList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemonLists: [],
            initialLists: [],
            next: "",
            pokemonType: []
        }
    }

    componentDidMount(){
        this._getData(apiURL + '/pokemon');
        this._getTypePokemon();
    }

    _getData = (url) => {
        axios.get(url)
            .then(response => {
                this.setState({
                    initialLists: [
                        ...this.state.initialLists,
                        ...response.data.results],
                    pokemonLists: [
                        ...this.state.pokemonLists,
                        ...response.data.results],
                    next: response.data.next
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    _getTypePokemon = () => {
        axios.get(apiURL + '/type')
        .then(response => {
            this.setState({
                pokemonType: response.data.results
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    _getDataByType = (e) => {
        axios.get(e.target.value)
            .then(response => {
                console.log(response);
                this.setState({
                    initialLists: response.data.pokemon,
                    pokemonLists: response.data.pokemon
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    _filterData = (event) => {
        var updatedList = this.state.initialLists;

        updatedList = updatedList.filter(function(item){
            var pokemon = item.pokemon ? item.pokemon : item;
            return pokemon.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });

        this.setState({pokemonLists: updatedList});
    }

    render(){
        const { pokemonLists, pokemonType } = this.state;
        return(
            <Col >
                <Col style={{margin: "10px"}}>
                    <Form>
                        <FormGroup style={{display: "flex", flexWrap: "wrap"}}>
                            <Col sm={8}>
                                <Input onChange={this._filterData} placeholder="Search Pokemon" bsSize="lg" />
                            </Col>
                            <Col sm={4}>
                                <Input onChange={this._getDataByType} type="select" bsSize="lg">
                                    <option>Filter by Type</option>
                                    {pokemonType.map((item, index) => {
                                        return(
                                            <option key={index} value={item.url}>{item.name}</option>
                                        )
                                    })}
                                </Input>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
                <Col style={{display: "flex", flexWrap: "wrap" }}>
                    <ListGroup style={{width: "100%"}}>
                    {pokemonLists.map((item, index) => {
                        return (
                            <Link
                                to={{
                                    pathname: `/detail/${item.pokemon ? item.pokemon.name : item.name}`,
                                    state: { itemData: item.pokemon ? item.pokemon : item }
                                }}
                                key={index}
                            >
                                <ListGroupItem 
                                    style={{
                                        fontSize: "large",
                                        fontWeight: "bold",
                                        margin: "2px",
                                        backgroundColor: "yellow",
                                        border: "3px black solid",
                                        color: "black"
                                    }}>
                                    {item.pokemon ? item.pokemon.name : item.name}
                                </ListGroupItem>
                            </Link>
                        )
                    })}
                        <ListGroupItem 
                            style={{
                                fontSize: "large",
                                fontWeight: "bold",
                                margin: "2px",
                                color: "black",
                                textAlign: "center"
                            }}
                            onClick={() => this._getData(this.state.next)}
                            >
                            Load More ...
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Col>
        )
    }
}

export default PokedexList;