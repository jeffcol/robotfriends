import React, { Fragment, Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots.js";

class App extends Component {
  // ES7 React/Redux/GraphQL/React-Native snippets
  // ren
  constructor(props) {
    super(props);

    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(
        this.state.searchField.toLowerCase());
    });

    return (
      <Fragment>
        <h1>Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
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
