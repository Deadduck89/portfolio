import {sendNewArticle} from "../../../redux/blog-reducer";
import {connect} from "react-redux";
import BlogPage from "./BlogPage";




let mapStateToProps = (state) => {

    return {
        blogPage: state.blogPage
    }
}

//Забираем из редьюсера action creator, который принимает
//новый текст и добавляет его в стейт

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewArticle: (newArticleText) => {
            dispatch( sendNewArticle(newArticleText) );
        }
    }

}


export default connect( mapStateToProps, mapDispatchToProps )( BlogPage );