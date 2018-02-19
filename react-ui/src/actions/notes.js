import uuid from 'uuid';

export const addToNote = (notetitle) => {
  console.log("adding Note");
  return {
    type: 'ADD',
    id: uuid.v4(),
    title: notetitle,
    content: "Replace this content..."
  };
}

export const selectNote = (note) => {
  console.log("Something was selected: "+ note.title);
  return {
    type: 'SELECT',
    id: note.id,
    title: note.title,
    content: note.content
  };
}

export const modifyTitle = (note,newtitle) => {
  //console.log("Modifying Note Title");
  return {
    type: 'MOD_TITLE',
    id: note.id,
    title: newtitle,
    content: note.content
  };
}

export const modifyContent = (note,newContent) => {
  //console.log("Modifying Note Title");
  return {
    type: 'MOD_CONTENT',
    id: note.id,
    title: note.title,
    content: newContent
  };
}

export const searchNote = (title) => {
  console.log("OnSearch note");
  return {
    type: 'SEARCH',
    id: 0,
    title: title,
    content: ''
  }
}
