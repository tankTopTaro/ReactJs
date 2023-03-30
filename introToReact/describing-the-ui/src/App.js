import './App.css';
// import Profile from './Profile.js'
// import { getImageUrl } from './Utils';
// import { people } from './Data';

/* // My first COMPONENT
function Profile() {
  return (
    <img
      src='https://i.imgur.com/MK3eW3As.jpg'
      alt='Katherine Johnson' />
  );
} */

/* // Importing and Exporting components
export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
} */

/* // Writing markup with JSX
export default function TodoList() {
  return (
    // this doesn't quite work!
    <h1>Hedy Lamarrs's Todos</h1>
    <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo" />
    <ul>
      <li>Invent new traffic lights</li>
      <li>Rehearse a movie scene</li>
      <li>Improve spectrum technology</li>
    </ul>
  );
}

export default function TodoList() {
  return (
    // this can be fix by using a converter
    <>
      <h1>Hedy Lamarrs's Todos</h1>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo" />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
} */
 
/* // JavaScript in JSX with curly braces
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style = { person.theme }>
      <h1>{ person.name }'s Todos</h1>
      <img
        className = "avatar"
        src = "https://i.imgur.com/7vQD0fPs.jpg"
        alt = { person.name } />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
} */

/* // Passing PROPS to a COMPONENT
export default function Profile() {
  return (
    <Card>
      <Avatar
        size={450}
        person={{
          name: 'Paimon :3',
          imageId: 'YQUy9MB' 
        }} />
    </Card>
  )
}

function Avatar({person, size}) {
  return (
    <img
      className = "avatar"
      src = { getImageUrl(person) }
      alt = { person.name }
      width = {size}
      height = {size} />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  )
} */

/* // Conditional Rendering
function Item({ name, isPacked }) {
  return (
    <li className = "item">
      { name } {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space Suit" />
          <Item
          isPacked={true}
          name="Viking Helmet" />
          <Item
          isPacked={false}
          name="Photo of Tam" />
      </ul>
    </section>
  );
} */

/* // Rendering Lists
export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}: </b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
} */

/* // Keeping components PURE
// this is an example of IMPURE component
let guest = 0;

function Cup() {
  // BAD: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest # {guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
 
// You can make this component PURE by passing a PROP 
//    instead of modifying a preexisting variable
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet(){
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
} */

// CHALLENGE
/* // 1. Export the component
export default function Profile() {   // you need to export the function if you want to display it
  return (
    <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />
  );
} */

/* // 2. Fix the return statement
export default function Profile() {
  return (    // return statement should have parentheses
    <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
  );
} */

/* // 3. Spot the mistake
function Profile() {  // React function names should start with an UPPERCASE letter
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
} */

/* // 4. Your own component
function MyName({ myName }){
  return (
    <h1>Good Job! {myName} </h1>
  );
}

export default function Congrats() {
  return (
    <MyName myName={'kevin'}/>
  );
} */

/* // 5. Split the Components further
import Gallery from './Gallery';
import { Profile } from './Profile1';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery Profile={Profile}/>
    </div>
  );
} */

/* // 6. Convert some HTML to JSX 
export default function Bio() {
  return(
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thought here.
        <br/><br/>
        <b>And <i>pictures</i></b> of scientist!
      </p>
    </>
  );
} */
 
/* // 7. Fix the mistake
const person = {
  name:'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
} */

/* // 8. Extract information into an object
const person = {
  name:'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  imgUrl: 'https://i.imgur.com/7vQD0fPs.jpg'
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.imgUrl}
        alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
} */

/* // 9. Write an expression inside JSX curly braces
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 'b',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + ".jpg"}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
} */

// 10. Extract a component