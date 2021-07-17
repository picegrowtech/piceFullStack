import React, { useState } from "react";
import firebase from 'firebase'
const Model = (props) => {
    const [id, setId] = useState("60a0f8b46f1d872dec7ddcc3")
    const [updatedContent, setUpdatedContent] = useState(JSON.stringify(props.Content))
    const uploadContent = () => {
        fetch('https://pice.herokuapp.com/updateDisplayData', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:id, data:updatedContent})
        }).then(response => console.log(response.json())).then(json => console.log(json))
    }
    return (<>
        <button hidden={!props.adminIsSignedIn} type="button" class="btn btn-danger" data-toggle="modal" data-target=".bd-example-modal-lg">
            Edit display data
  </button>
        <div class="modal fade bd-example-modal-lg" id="bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document" >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <textarea type="text" class="form-control" style={{
                                    display: 'block',
                                    padding: '10px 30px',
                                    margin: '0',
                                    overflow: 'scroll', height: "600px"
                                }} onChange={(e) => { setUpdatedContent(e.target.value) }}
                                >{JSON.stringify(props.Content, null, 2)}
                                   </textarea  >
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={uploadContent}>Save changes</button>
                    </div>
                </div>
            </div>
        </div></>
    );
};

export default Model;
