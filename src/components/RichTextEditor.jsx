import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { makeStyles } from '@mui/styles';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  editor: {
    marginTop: theme.spacing(2),
    border: '1px solid #ccc',
    borderRadius: "3px",
    padding: "16px",
    minHeight: "300px"
  },
}));

const toolbarOptions = {
  options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded'],
  inline: {
    options: ['bold', 'italic', 'underline', 'strikethrough'],
  },
  blockType: {
    options: ['Normal', 'H1', 'H2', 'H3', 'Blockquote'],
  },
  textAlign: {
    options: ['left', 'center', 'right'],
  },
};

const RichTextEditor = ({ value = '', onChange }) => {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const onEditorStateChange = (newState) => {
    setEditorState(newState);
    getDataFromEditor(newState);
  };

  const getDataFromEditor = (editorState) => {
    const content = editorState.getCurrentContent();
    const htmlString = stateToHTML(content);
    onChange(htmlString);
  };

  const setContentFromHtml = (htmlString) => {
    const contentState = stateFromHTML(htmlString);
    const editorStateFromHtml = EditorState.createWithContent(contentState);
    setEditorState(editorStateFromHtml);
  };

  useEffect(() => {
    setContentFromHtml(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={classes.editor}>
      <Editor
        editorState={editorState}
        toolbar={toolbarOptions}
        onEditorStateChange={onEditorStateChange}
      />
    </Box>
  );
};

export default RichTextEditor;
