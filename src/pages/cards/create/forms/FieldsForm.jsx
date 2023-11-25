import { Box, Stack} from '@mui/material'
import React, { useState } from 'react'
import FieldsPicker from '../../../../components/FieldsPicker'
import FieldItem from '../../../../components/FieldItem'
import { useDispatch, useSelector } from 'react-redux';
import { updateCardData } from '../../../../features/cardBuilder/cardBuilderSlice';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function FieldsForm() {

  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.cardBuilder.cardData);

  const [fields, setFields] = useState(cardData?.fields??[]);

  const handleChange=(field)=>{
    setFields(prevFields => {
      const updated = [...prevFields, field]
      dispatch(updateCardData({ path: "fields", value: updated }));
      return updated;
    });
  } 

  const removeField=(id)=>{
    setFields(prevFields => {
      const updated = prevFields.filter(item => item.identifier !== id);
      dispatch(updateCardData({ path: "fields", value: updated }));
      return updated;
    });
  } 

  const handleValueChange=(id, value)=>{
    setFields(prevFields => {
      const updated = prevFields.map(item => {
        if (item.identifier === id) {
          return { ...item, value: value };
        }
        return item;
      });
      dispatch(updateCardData({ path: "fields", value: updated }));
      return updated;
    });
  } 

  const handleNameChange=(id, value)=>{
    setFields(prevFields => {
      const updated = prevFields.map(item => {
        if (item.identifier === id) {
          return { ...item, name: value };
        }
        return item;
      });
      dispatch(updateCardData({ path: "fields", value: updated }));
      return updated;
    });
  }

  const handleDescChange=(id, value)=>{
    setFields(prevFields => {
      const updated = prevFields.map(item => {
        if (item.identifier === id) {
          return { ...item, desc: value };
        }
        return item;
      });
      dispatch(updateCardData({ path: "fields", value: updated }));
      return updated;
    });
  }

  const handleHighlightChange=(id, value)=>{
    setFields(prevFields => {
      const updated = prevFields.map(item => {
        if (item.identifier === id) {
          return { ...item, highlight: value };
        }
        return item;
      });
      dispatch(updateCardData({ path: "fields", value: updated }));
      return updated;
    });
  }


  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    setFields(prevFields => {
      
      const reorderedItems = Array.from(prevFields);
      const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
      reorderedItems.splice(result.destination.index, 0, reorderedItem);

      dispatch(updateCardData({ path: "fields", value: reorderedItems }));
      return reorderedItems;
    });
  };

  return (
    <Stack direction="row" spacing={2} sx={{display: "flex", width: "100%"}}>
        <Box
            p={2}
            sx={{
                width: "60%",
                boxSizing: "border-box",
                border: "2px dashed #E2E8F0",
                borderRadius: "8px",
                background: "#F7FAFC"
            }}
        >
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="list">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {fields.map((value, index) => (
                    <Draggable key={value.identifier} draggableId={value.identifier} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <FieldItem
                            field={value}
                            onCancel={removeField}
                            onValueChange={handleValueChange}
                            onNameChange={handleNameChange}
                            onDescChange={handleDescChange}
                            onHighlightChange={handleHighlightChange}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Box>
        <FieldsPicker onAddField={handleChange}/>
    </Stack>
  )
}

export default FieldsForm