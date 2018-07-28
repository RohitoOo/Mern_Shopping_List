import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group' ;
import uuid from 'uuid' ;

class ShoppingList extends Component {

  state = {
    items : [
    {  id : uuid(),  name: 'Eggs' },
    {  id : uuid(),  name: 'Coffee' },
    {  id : uuid(),  name: 'Meat' },
    {  id : uuid(),  name: 'Veggies' }
  ]
}
render(){

// Deconstructing items from this.state
const { items } = this.state

  return(
    <Container>
      <Button
        color="dark"
        style={{marginBottom : '2rem'}}
        onClick={() => {
          //change to bootstap Modal
          const name = prompt('Enter Item');
          if(name) {
            this.setState (state => ({ items: [...state.items , {id: uuid() , name}   ]}) )
          }
        }}
        >
        Add Item
      </Button>

      <ListGroup>

        {items.map( ({id, name}) => (
          <CSSTransition key={id} timeout={5000} classNames='fade'>
            <ListGroupItem>
              <Button>&times;</Button>  
              {name}
            </ListGroupItem>
          </CSSTransition>


        )


        )}


      </ListGroup>
    </Container>
  )
}

}

export default ShoppingList;
