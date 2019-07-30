import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, Form, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const CardComponent = (props) => {
  return (
    <div>
      <Card style={{margin: "5px", border: "4px black solid", borderRadius: ".5em"}}>
        <CardImg style={{width: "50%", alignSelf: "center"}} src={props.photo} />
        <CardBody 
            style={{
                margin: "5px",
                backgroundColor: "yellow",
                border: "2px black solid",
                borderRadius: "2px"
                }}
          >
          <CardTitle
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "25px"
            }}
          >{props.name}</CardTitle>
          <CardText style={{borderTop: "1px black solid", flexWrap: "wrap"}}>
            <Form>
              <FormGroup>
                <Label sm="3" style={{fontWeight: "bold"}}>Types</Label>
                <Label sm="2" style={{fontWeight: "bold"}}>:</Label>
                <Label sm="4" style={{fontWeight: "bold"}}>
                  {props.types.map((value) => {
                  return (`${value.type.name}; `);
                  })}
                </Label>
              </FormGroup>
              <FormGroup>
                <Label sm="3" style={{fontWeight: "bold"}}>Species</Label>
                <Label sm="2" style={{fontWeight: "bold"}}>:</Label>
                <Label sm="4" style={{fontWeight: "bold"}}>{props.species.name}</Label>
              </FormGroup>
              <FormGroup>
                <Label sm="3" style={{fontWeight: "bold"}}>Weight</Label>
                <Label sm="2" style={{fontWeight: "bold"}}>:</Label>
                <Label sm="4" style={{fontWeight: "bold"}}>{props.weight}</Label>
              </FormGroup>
              <FormGroup>
                <Label sm="3" style={{fontWeight: "bold"}}>Ability</Label>
                <Label sm="2" style={{fontWeight: "bold"}}>:</Label>
                <Label sm="4" style={{fontWeight: "bold"}}>
                  {props.abilities.map((value) => {
                  return (`${value.ability.name}; `);
                  })}
                </Label>
              </FormGroup>
            </Form>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

CardComponent.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  type: PropTypes.object,
  species: PropTypes.object,
  weight: PropTypes.string,
  ability: PropTypes.object 
};

CardComponent.defaultProps = {
  name: '',
  photo: '',
  type: [],
  species: [],
  weight: '',
  ability: [] 
}

export default CardComponent;