import React, { Component } from 'react'
import Navbar from '../../components/Medical/Navbar'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem , MDBFormInline} from 'mdbreact';
import Cookies from 'js-cookie';
import CreateQues from '../../components/Admin/CreateQues';
import { updateQuestion, createQuestion } from '../../Redux/Actions/QuestionAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



 class QuestionCreation extends Component {
    state = {
        difficultylevel: '',
        image1:'',
        image2:'',
        identical:''
    }
//questionid ?
    onSubmit = (difficultylevel,image1,image2,identical)=> {
        if ([difficultylevel.includes("Select")]) {alert("Please ensure there is no empty input")}
        else{
            let sessionID = Cookies.get('sessionid')
            let form = {
                sessionid:sessionID,
                qnimg1:image1,
                qnimg2:image2,
                answer:identical
            }
            this.props.createQuestion(form);
            this.props.updateQuestion(form);
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.questionbank.status == "success")
        this.props.history.push('/admin')
    }
    render() {
        return (
            <div>
               <MDBContainer>
                  
               <CreateQues onSubmit={this.onSubmit} />
               </MDBContainer>
            </div>
        )
    }
}

QuestionCreation.propTypes = {
    
    createQuestion: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
    questionbank: state.create.question,
    
})
export default connect(mapStateToProps,{createQuestion,updateQuestion})(QuestionCreation)