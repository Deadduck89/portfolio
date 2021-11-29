const SEND_INFO = ' SEND-INFO';

let initialState = {
    info: [
        {id: 1, text: 'Тут какой-то очерь важный текст'}
    ]
}

const profileReducer = (state = initialState,action) => {
    switch(action.type) {
        case  SEND_INFO:
            let body = action.newInfoText;
            return {...state,
                info: [...state.articles,{id: 2, message: body}]
            };

        default:
            return state;

    }
}

export const sendArticleCreator = (newInfoText) => ({type:  SEND_INFO, newInfoText})

export default profileReducer;