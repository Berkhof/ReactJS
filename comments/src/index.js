// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create a react component
const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail
                author="Sam"
                timeAgo="Today at: 4:45PM"
                avatar={faker.image.avatar()}
                comment="Nice blog !"/>
        </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Alex"
                avatar={faker.image.avatar()}
                timeAgo="Today at 2:00AM"
                comment="First comment !"/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Jane"
                avatar={faker.image.avatar()}
                timeAgo="Yesterday at 5:00PM"
                comment="I was the first one !"/>
            </ApprovalCard>
        </div>
    );
};

//Take the react component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));
