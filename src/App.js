import React from 'react'


const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  console.log("Part props:")
  console.log(props)
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log("Content props:")
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const sum = (array) => {
  let result = 0
  array.forEach(element => {
    result += element.exercises;
  });
  return result;
}

const Total = (props) => {
  console.log("Total props:");
  console.log(props);
  let result = sum(props.parts);
  return (
    <div>
      <p>Number of exercises {result}</p>
    </div>
  )
}


const Full = (props) => {
  return (
    <div>
    <Header course={props.course} />
    <Content parts={props.parts} />
    <Total parts={props.parts} />
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Full course={course} parts={parts} />
     

    </div>
  )
}

export default App