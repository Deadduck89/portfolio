const SEND_ARTICLE = 'SEND-ARTICLE';

let initialState = {
    articles: [
        {id: 1, headline: 'Это статья номер один', text: 'Тут какой-то очерь важный текст'},
        {id: 2, headline: 'Это статья номер два', text: 'Вот этот текст еще важнее' }
    ]
}

const blogReducer = (state = initialState,action) => {
    switch(action.type) {
        case SEND_ARTICLE:
            let body = action.newArticleText;
            return {...state,
                articles: [...state.articles,{id: 4, message: body}]
            };

        default:
            return state;

    }
}

export const sendNewArticle = (newArticleText) => ({type: SEND_ARTICLE, newArticleText})

export const getArticle = (id) => {
    return initialState.articles.find(articleId => articleId === id )
}

export default blogReducer;