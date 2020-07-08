import React, { Fragment, Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  // ES7 React/Redux/GraphQL/React-Native snippets
  // ren
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchField: "",
    };
  }
  // ES7 React/Redux/GraphQL/React-Native snippets
  // cdm
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((file) => file.json())
      .then((users) =>
        this.setState({
          robots: users,
        })
      );
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <Fragment>
        <h1 className="f1">Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </Fragment>
    );
  }
}

// const App = () => {
//   return (
//     <Fragment>
//       <h1>Robot Friends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </Fragment>
//   );
// };

export default App;
