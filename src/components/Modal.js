import React, { Component} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import {deleteTrips} from '../redux/actions/tripActions';

class Modalpop extends Component {
    state = {
        show: false,
        message: '',
    }
handleModal(){
    this.setState({
    show: !this.state.show
})
}
    render(){
        return(
            <div className='mt-5'>
                <Button className='bg-danger' onClick = {()=> this.handleModal()}>Cancle</Button>
                <Modal size={'sm'} animation={true} className ='mt-5 float-right' show={this.state.show} >
                    <Modal.Header className='text-danger'> Attetion! </Modal.Header>
                    <Modal.Body>Are sure you want to cancel this trip?</Modal.Body>
                    <Modal.Footer>
                        <Button onClick = {()=> this.handleModal()} className='bg-info'>No</Button>
                        <Button className='bg-danger'>Yes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
const MapStateToProps = ({ trips, user }) => {
    console.log('MODALLLLL_____', trips)
    return {
      trips,
      user
    }
  }
export default connect(MapStateToProps,{deleteTrips})(Modalpop);