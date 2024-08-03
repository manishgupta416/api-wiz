useState: Manages local component state.
useEffect: Performs side effects in function components.
useContext: Consumes context values.
useReducer: Manages complex state logic.
useMemo: Memoizes expensive calculations.
useCallback: Memoizes callback functions.
useRef: Creates mutable object that persists across renders.

-Q1. What is React, and how does it differ from other JavaScript frameworks?

- React is a JavaScript library used for building user interfaces (UIs), particularly for single-page applications.
- It focuses on creating reusable UI components and efficiently updating the DOM using a concept called the Virtual DOM.
  making it simpler to integrate with other libraries and technologies.
- React is view oriented. It Provide a declarative way to vniulsf ui component and rendering of those components efficiently
- React is uni-Directional flow that means data flow in a Single direction from parents com. to child components
- Component based architecture Where ui are broken down into modular and teesiavnle comp
- Unlike full-fledged frameworks like Angular, React primarily focuses on the UI layer and can be combined with other libraries for more comprehensive solutions.
- App respond/work fast responds quickly and seemless experience to user
- Whole Dom is not being repaint every time browser has to work less

Q2. Reconciliation:

- Reconciliation is the process of comparing two versions of the Virtual DOM (old and new) to determine the differences and applying those differences to the actual DOM. It's a fundamental part of how React updates the user interface efficiently.
- It recursively compares the old and new Virtual DOM trees to identify the differences.
  It calculates the minimum number of changes needed to update the actual DOM.
  It applies these changes to the real DOM, updating only the necessary parts.

Diffing Algorithm:

- React's Virtual DOM operates using a "diffing algorithm" to efficiently update the actual DOM in response to changes in your application's state. The diffing algorithm is responsible for determining the minimal set of changes required to update the DOM to match the new Virtual DOM representation.

Q3. Explain the concept of JSX in React.

- JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code.
- It's used in React to define the structure of UI components.
- JSX is transpiled into regular JavaScript by tools like Babel, making it possible to embed HTML-like syntax directly within your JavaScript files.

<code> 
  const element = <>Hello, JSX!</>;
</code>

Q4. What is the significance of the Virtual DOM in React? How does it improve performance?

- The Virtual DOM is a lightweight copy of the actual DOM. React uses it to compare changes and update the real DOM only where needed, making updates faster.
- The Virtual DOM is an in-memory representation of the actual DOM elements.
- When there are updates in a React application, React compares the previous Virtual DOM with the updated one. It calculates the difference (diff) between them and then updates the actual DOM only with the necessary changes.
- This approach reduces the number of direct manipulations to the real DOM, leading to improved performance.

Q5. How do you create components in React? Explain the difference between functional and class components.

- Components are like building blocks for your UI. Here's a functional component:
- Components are the building blocks of a React application. They represent specific parts of the UI. In React, components can be created using functional components (using JavaScript functions) or class components (using JavaScript classes).
- Functional components are simpler, and they have been enhanced with hooks to manage state and lifecycle.
- Class components have been around for longer and manage state and lifecycle using class methods.

<code> 
  function Greeting(props) {
  return <>Hello, {props.name}!</>;
  }

class Greeting extends React.Component
{
render() {
return <>Hello, {this.props.name}!</>;
}
}
</code>

Q6. What are props in React? How are they used to pass data from parent to child components?

- Props (short for properties) are a way to pass data from a parent component to a child component.
- They are read-only and help components communicate.
- Parents can pass data to children by including attributes in the child
- The child component can then access this data through its props object.

 <code>

class Greeting extends React.Component {
render() {
return <>Hello, {this.props.name}!</>;
}
}
</code>

Q7. What is state in React? How is it different from props?

- State is a way to manage and store data within a component. Unlike props, which are passed from parent to child, state is managed internally within the component.
- When state changes, React re-renders the component. State is typically used to manage dynamic data that can change over time.

Q8. Describe the process of rendering components in React.

- Rendering in React involves two main steps:

- First, a component is rendered to produce a Virtual DOM representation.
- Next, React compares the previous Virtual DOM with the new one and calculates the difference (diff). It then updates the actual DOM with only the necessary changes.

Q9. What is the purpose of the "key" prop in React lists? Why is it important?

- The "key" prop helps React keep track of individual items in a list. It's like a label for React to remember which items have changed
- The "key" prop is used to uniquely identify elements in a list of components.
- It helps React efficiently update and re-render lists by providing a way to track which elements have changed, been added, or removed.
- Using a unique "key" for each element in a list improves performance and ensures correct component behavior.

Q10. Explain the component lifecycle in class components.

- Class components have various lifecycle methods that are called during different stages of a component's life, such as mounting, updating, and unmounting. These methods include componentDidMount, componentDidUpdate, and componentWillUnmount.
- They allow you to perform actions like fetching data, updating state, or performing cleanup operations.

Q11. useState

- useState is a React Hook that allows functional components to manage and update state.
- It returns a state variable and a function to update that variable.
- It's commonly used for managing simple state within a component.

For example:

 <code> 
import React, { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

return (

<div>
<p>Count: {count}</p>

<button onClick={() => setCount(count + 1)}>Increment</button>

</div>
);
}
</code>

Q12. useEffect

useEffect is a React Hook used for handling side effects in functional components, such as data fetching, DOM manipulation, or subscription management.
It runs after the component has rendered

- It's called after the component renders and can optionally be configured to run only when certain dependencies change.

For example:

 <code>

import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
const [data, setData] = useState([]);

useEffect(() => {
fetch("https:api.example.com/data")
.then((response) => response.json())
.then((data) => setData(data));
}, []);

return (

<ul>
{data.map((item) => (
<li key={item.id}>{item.name}</li>
))}
</ul>
);
}
</code>

Q13. useContext is a React Hook that allows components to access the context (global state) provided by a Context.Provider. It's used to avoid prop drilling and make certain values accessible throughout the component tree.

Q14. useReducer is a React Hook that is an alternative to useState for more complex state management. It follows the reducer pattern from Redux, where you provide a reducer function and an initial state. It returns the current state and a dispatch function to update the state.

Q15. React Router is a library that provides routing capabilities to your React applications. It helps you manage different views or pages in a single-page application.

Q16. What are controlled and uncontrolled components in React?

- Controlled components are React components where form data is controlled by React state. Any changes to the form elements are handled by state, and the component re-renders accordingly.

- Uncontrolled components are components where form data is handled by the DOM itself, and React does not manage the state of the form. This approach can be used when you want to avoid controlled state management for specific use cases.

Q17. Describe the concept of "lifting state up" in React. Provide an example situation where this might be necessary.

- Lifting state up refers to the practice of moving the state from a child component to its parent component.
- This is often done when multiple child components need access to the same state or when the state affects multiple components.
- For example, if you have two input fields that need to share their values and update each other, you can lift the state to a common parent component and pass the state and callback functions as props to the child components.

Q18. Explain the term "props drilling" and how it can be mitigated.

- Props drilling occurs when props are passed through multiple layers of components, even if the intermediate components don't directly use those props.
- This can make the codebase harder to maintain. To mitigate props drilling, you can use techniques like the Context API to provide data globally to components that need it, or you can use state management libraries like Redux.

Q19. What is the purpose of the context API in React? When would you use it?

- The context API is used to provide a way to share data across the component tree without having to pass props manually at every level.
- It's useful when you have data that many components need access to, such as user authentication or theme settings. However, it's recommended to use context for data that truly needs to be shared widely, as excessive use can make component relationships less clear.

Q20. What is Redux, and why might it be used alongside React?

- Redux is a predictable state management library that helps manage the state of a React application

Q21. Higher-Order Components (HOCs)

- A Higher-Order Component (HOC) is a pattern in React where a function takes a component and returns a new component with enhanced functionality.
- HOCs are used to share common behavior between components, such as handling authentication, data fetching, or logging.
  Example of a simple HOC using function components and hooks

<code>

`import React, { useEffect } from "react";

function withLogger(WrappedComponent) {
return function EnhancedComponent(props) {
useEffect(() => {
console.log(`Component ${WrappedComponent.name} has mounted.`);
}, []);

    return <WrappedComponent {...props} />;

};
}

const EnhancedComponent = withLogger(MyComponent);

import React, { useState, useEffect } from "react";

Higher-Order Component function
function withLoadingSpinner(WrappedComponent, fetchDataFunction) {
return function EnhancedComponent(props) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchDataFunction()
        .then((responseData) => {
          setData(responseData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, []);

    return loading ? (
      <div>Loading...</div>
    ) : (
      <WrappedComponent data={data} {...props} />
    );

};
}

Component that needs the loading spinner
function DataDisplay(props) {
const { data } = props;

return (

<div>
<>Data Display</>
<ul>
{data.map((item) => (
<li key={item.id}>{item.name}</li>
))}
</ul>
</div>
);
}

Simulated data fetching function
function fetchData() {
return new Promise((resolve) => {
setTimeout(() => {
const responseData = [
{ id: 1, name: "Item 1" },
{ id: 2, name: "Item 2" },
{ id: 3, name: "Item 3" },
];
resolve(responseData);
}, 2000); Simulating a delay for data fetching
});
}

Apply the HOC to the component
const DataDisplayWithLoading = withLoadingSpinner(DataDisplay, fetchData);

Usage of the enhanced component
function App0() {
return (

<div>
<>Higher-Order Component Example</>
<DataDisplayWithLoading />
</div>
);
}

export default App0;
</code>

Q22. HTTP Caching

- A technique used to improve the performance and efficiency of web applications by storing and reusing previously fetched resources.

Q23. Code Splitting

- A technique used to optimize the loading and performance of web applications.
  It involves breaking down a large JavaScript bundle into smaller chunks, which are loaded on-demand as needed.
  -Faster Initial Load
  Better Performance
  Lower Bandwidth Usage

Q24. Lazy Loading

- A technique to improve performance by loading resources on-demand.
- The main purpose of lazy loading is to delay the loading of certain assets (such as images, videos, or content) until they are needed or visible on the screen. This helps reduce the initial load time and saves bandwidth

Q25. Optimizing React Application Performance in Functional Components

- Optimizing performance in a React application involves improving its speed, responsiveness, and efficiency.
- This can be achieved through various techniques such as minimizing unnecessary renders, using shouldComponentUpdate or React.memo to prevent unnecessary re-renders, and employing efficient data fetching and management
- Optimizing performance in functional components involves using React's built-in memoization technique and the useMemo hook to prevent unnecessary re-renders.
- By memoizing components and values, you can ensure that they only update when their dependencies change.
- Memoizing components that involve heavy computations or rendering logic to avoid unnecessary re-renders.

<code>

import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ value }) {
Imagine this component has complex rendering logic
return <div>{value}</div>;
}

function App1() {
const [count, setCount] = useState(0);

Memoizing the ExpensiveComponent using useMemo
const memoizedExpensiveComponent = useMemo(() => {
return <ExpensiveComponent value={count} />;
}, [count]);

return (

<div>
<>Optimizing Performance Example</>
<button onClick={() => setCount(count + 1)}>Increment</button>
{memoizedExpensiveComponent}
</div>
);
}

export default App1;

</code>

Q26. Purpose of Error Boundaries in Functional Components

- Error boundaries are React components that catch and handle errors in their child components during rendering.
- You can capture errors within the component tree and handle them gracefully.
- They prevent the entire application from crashing due to a single component error and allow developers to display fallback UI or handle errors gracefully

<code>

import React, { useState, useEffect } from 'react';

function ErrorFallback() {
return <div>Oops, something went wrong!</div>;
}

function ExampleComponent({ shouldError }) {
if (shouldError) {
throw new Error('An error occurred.');
}
return <div>No error occurred.</div>;
}

function App() {
const [hasError, setHasError] = useState(false);

useEffect(() => {
if (hasError) {
Handle the error here, e.g., log it
console.error('An error occurred.');
}
}, [hasError]);

return (

<div>
<>Error Boundary Example</>
<button onClick={() => setHasError(true)}>Trigger Error</button>
{hasError ? <ErrorFallback /> : <ExampleComponent shouldError={false} />}
</div>
);
}

export default App;
</code>

Q27. Code Splitting in Functional Components

- Code splitting using functional components can be achieved with the help of React's lazy and Suspense components. These allow you to load components asynchronously, improving the initial load time of your application.
- Delaying the loading of heavy components until they are needed to enhance the performance of your application.

<code>

import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App2() {
return (

<div>
<>Code Splitting Example</>
<Suspense fallback={<div>Loading...</div>}>
<LazyComponent />
</Suspense>
</div>
);
}

export default App2;
</code>
