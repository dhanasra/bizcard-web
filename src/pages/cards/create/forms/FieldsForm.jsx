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
    setFields([...fields, field]);
    dispatch(updateCardData({path: "fields", value: fields}));
  } 

  const removeField=(id)=>{
    setFields(fields.filter(item => item._id !== id));
    dispatch(updateCardData({path: "fields", value: fields}));
  } 

  const handleValueChange=(id, value)=>{
    const updated = fields.map(item => {
      if (item._id === id) {
        return { ...item, value: value };
      }
      return item;
    });
    setFields(updated);
    dispatch(updateCardData({path: "fields", value: updated}));
  } 

  const handleNameChange=(id, value)=>{
    const updated = fields.map(item => {
      if (item._id === id) {
        return { ...item, name: value };
      }
      return item;
    });
    setFields(updated);
    dispatch(updateCardData({path: "fields", value: updated}));
  }

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = Array.from(fields);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);

    setFields(reorderedItems);
    dispatch(updateCardData({path: "fields", value: reorderedItems}));
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
                    <Draggable key={value._id} draggableId={value._id} index={index}>
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