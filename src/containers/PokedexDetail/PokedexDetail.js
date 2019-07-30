import React from 'react';
import { Col } from 'reactstrap';
import axios from 'axios';


import CardComponent from '../../components/CardComponent';
import DetailFormComponent from '../../components/DetailFormComponent';

class PokedexDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemonDetail: []
        }
    }

    componentDidMount(){
        const { itemData } = this.props.location.state;

        this._getDetailData(itemData);
    }

    _getDetailData = (value) => {
        axios.get(value.url)
            .then(response => {
                this.setState({
                    pokemonDetail: response.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        const { pokemonDetail } = this.state;
        return (
            <Col style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "stretch"

            }}>
                <Col>
                    <CardComponent
                        xs="4"
                        name={pokemonDetail.name}
                        photo={pokemonDetail.sprites ? pokemonDetail.sprites.front_default : "" }
                        types={pokemonDetail.types ? pokemonDetail.types : []}
                        species={pokemonDetail.species ? pokemonDetail.species : []}
                        weight={pokemonDetail.weight}
                        abilities={pokemonDetail.abilities ? pokemonDetail.abilities : []}
                    />
                </Col>
                <Col>
                    <DetailFormComponent  xs="8" pokemonDetail={pokemonDetail}/>
                </Col>
            </Col>
        )
    }
}

export default PokedexDetail;