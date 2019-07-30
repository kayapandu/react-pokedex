import React from 'react';
import { Col, Form, FormGroup, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class DetailFormComponent extends React.Component {
    constructor(props){
        super(props);
    }

    _renderStats = (value, index) => {

        return(
            <FormGroup 
                key={index} >
                <Label sm="4" style={{fontWeight: "bold"}}>{value.stat.name}</Label>
                <Label sm="4" style={{fontWeight: "bold"}}>:</Label>
                <Label sm="4" style={{fontWeight: "bold"}}>{value.base_stat}</Label>
            </FormGroup>
        );
    }

    render(){
        const { pokemonDetail } = this.props;
        const {stats = [] } = pokemonDetail;
        return(
            <Col 
                style={{
                    display: "flex",
                    margin: "5px",
                    border: "4px gray solid",
                    borderRadius: ".5em",
                    flexWrap: "wrap"
                }}
            >
                <Form style={{width: "100%", padding: "10px"}}>
                    {stats.map((item, index) => {
                        return this._renderStats(item, index);
                    })}
                    <Link to="/"><Button>Back</Button></Link>
                </Form>
            </Col>
        )
    }
}

export default DetailFormComponent;