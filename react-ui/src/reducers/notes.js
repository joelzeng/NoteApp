//adding notes

export default (state=[], action) => {

  switch(action.type){
    case 'ADD':
      return [...state,
        {
          id: action.id,
          title: action.title,
          content: action.content
        }
      ];
    case 'MOD_TITLE':
      return state.map(item => {
            if(item.id === action.id) {
              return {id: action.id, title: action.title, content: action.content}
            }
            return item;});

    case 'MOD_CONTENT':
      return state.map(item => {
        if(item.id === action.id) {
          return {id: action.id, title: action.title, content: action.content}
        }
        return item;});

    default:
      return state;
  }
}
