import React, {useState} from 'react';
import './goals.css';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";

const item = {
  id: v4(),
  name: "Get started on the design"
}

const item2 = {
  id: v4(),
  name: "Determine Tech Stack"
}

const item3 = {
  id: v4(),
  name: "Have fun while at it"
}

const item4 = {
  id: v4(),
  name: "Visualise workflow"
}


function Goals() {
  const [text, setText] = useState("")
  const [state, setState] = useState({
    "todo": {
      title: "To Be Done",
      items: [item, item2],
    },
    "in-progress": {
      title: "In Progress",
      items: [item3],
    },
    "done": {
      title: "Completed",
      items: [item4],
    }
  })

  const handleDragEnd = ({destination, source}) => {
    if (!destination) {
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    // Creating a copy of item before removing it from state
    const itemCopy = {...state[source.droppableId].items[source.index]}

    setState(prev => {
      prev = {...prev}
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1)


      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  const addItem = () => {
    setState(prev => {
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [
            {
              id: v4(),
              name: text
            },
            ...prev.todo.items
          ]
        }
      }
    })

    setText("")
  }

  return (
    <>
    <div className="goalSection">
    <h2 className="goalHead">GOALS</h2>
    <p className="goalSubline">Completed a milestone? Drag and drop your goal from 'To Be Done' to 'Completed' and give yourself a pat on the back!</p>
    <div className="addGoal">
      <input className="addGoalText" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button className="addGoalButton" onClick={addItem}>ADD GOAL</button>
    </div>
    <div className="goals">
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return(
            <div key={key} className={"column"}>
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided, snapshot) => {
                  return(
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-col"}
                    >
                      {data.items.map((el, index) => {
                        return(
                          <Draggable key={el.id} index={index} draggableId={el.id}>
                            {(provided, snapshot) => {
                              console.log(snapshot)
                              return(
                                <div
                                  className={`item ${snapshot.isDragging && "dragging"}`}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {el.name}
                                </div>
                              )
                            }}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>
            </div>
          )
        })}
      </DragDropContext>
    </div>
    </div>
    </>
  );
}

export default Goals;
