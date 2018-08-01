import React, {Component} from 'react'
import {
Button,
Modal,
ModalHeader,
ModalBody,
Form,
FormGroup,
Label,
Input
} from 'reactstrap';

import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemModal extends Component {
  state = {
    modal: false,
    name : ' '
  }

  toggle = () => {
    this.setState({
      modal : !this.state.modal
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render(){
    return(
      <div>
        <Button
          color='dark'
          style={{
            margin : '2rem'
          }}
           onClick={this.toggle}
          >Add Item</Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}>
              <ModalHeader
                toggle={this.toggle}
                >Add To Shopping List
              </ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>

                    <Input
                      type="text"
                      name="name"
                      id="item"
                      placeholder="Add an item..."
                      onChange={this.onChange}
                      ></Input>
                      <Button
                        style={{marginTop: '1rem'}}
                        >
                        Add Item
                      </Button>
                  </FormGroup>
                </Form>
              </ModalBody>
          </Modal>
      </div>
    )
  }


}

export default connect()(ItemModal);
