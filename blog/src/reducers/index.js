import { combineReducers} from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    posts: postsReducer,
    users: usersReducer


// dummyKey: () => 10 // dummykey - tricking Redux into thinking it has a valid reducer
    //                   // no errors in console
});
