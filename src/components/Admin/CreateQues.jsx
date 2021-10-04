import React, { Component, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBFormInline, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import Navbar from './Navbar';

const CreateQues = ({ onSubmit, pictureload1, pictureload2 }) => {
    const [difficultylevel, setDifficulty] = useState("Select difficulty");
    const [identical, setIdentical] = useState('Yes');

    return (
        <div>
            <Navbar />
            <MDBContainer>
                <MDBCol md="6">
                    <h5>Difficulty</h5>
                    <MDBDropdown>
                        <MDBDropdownToggle value={difficultylevel} caret color="primary">
                            {difficultylevel}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic onClick={e => setDifficulty(e.target.value)} >
                            <MDBDropdownItem value={'Easy'}>Easy</MDBDropdownItem>
                            <MDBDropdownItem value={'Medium'}>Medium</MDBDropdownItem>
                            <MDBDropdownItem value={'Hard'}> Hard</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    <h5>Question</h5>
                    <Uploadfile picUpload1={pictureload1} />
                    <MDBBtn color="secondary">Upload</MDBBtn>
                    <MDBCard style={{ width: "22rem" }}>
                        <MDBCardImage className="img-fluid" src = {picUpload1} waves />
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText>
                                Email: <br />
                                Tutorial Group:
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <br />
                    <h5>Answer</h5>
                    <Uploadfile picUpload2={pictureload2} />
                    <MDBBtn color="secondary">Upload</MDBBtn>
                    <MDBCard style={{ width: "22rem" }}>
                        <MDBCardImage className="img-fluid"  src = {picUpload2} waves />
                        <MDBCardBody>
                            <MDBCardTitle></MDBCardTitle>
                            <MDBCardText>
                                Email: <br />
                                Tutorial Group:
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <h5>Identical?</h5>
                    <MDBDropdown>
                        <MDBDropdownToggle value={identical} caret color="primary">
                            {identical}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic onClick={e => setIdentical(e.target.value)}>
                            <MDBDropdownItem value={'Yes'}>Yes</MDBDropdownItem>
                            <MDBDropdownItem value={'No'}>No</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    <br />
                    <MDBBtn color="primary" onClick={() => onSubmit(difficultylevel, image1, image2, identical)} >Set</MDBBtn>
                    <MDBBtn color="primary">Back</MDBBtn>


                </MDBCol>
                <MDBRow>
                </MDBRow>
            </MDBContainer>
        </div>
    )

}
export default CreateQues