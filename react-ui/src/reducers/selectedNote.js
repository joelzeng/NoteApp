
//adding notes
export default (state={}, action) => {

  switch(action.type){
    case 'SELECT':
      console.log("SELECTED ITEM");
      return {
        id: action.id,
        title: action.title,
        content: action.content
      }
    case 'ADD':
      return {
        id: action.id,
        title: action.title,
        content: action.content
      }
    case 'MOD_TITLE':
      return {
        id: action.id,
        title: action.title,
        content: action.content
      }
    case 'MOD_CONTENT':
      return {
        id: action.id,
        title: action.title,
        content: action.content
      }

    // case 'SEARCH':
    //   return {
    //     id: action.id,
    //     title: action.title,
    //     content: action.content
    //   }


//find(({ id }) => id === this.props.selectedNote);
    default:
      return state;
  }

}
