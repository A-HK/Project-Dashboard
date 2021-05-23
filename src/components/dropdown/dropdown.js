import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "tech" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

handleSubmit(event) {

    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} class="w-96">
      <span class="w-96">
        <label class="text-base font-semibold w-96">
          <p class="inline-block px-1 mr-2 text-base font-semibold">Filter based on:</p>
          <select value={this.state.value} onChange={this.handleChange} class="inline-block text-green-400 bg-white p-2 border rounded focus:outline-none">
            <option value="tech" class="bg-green-400 text-white focus:bg-green-400">Technology Used</option>
            <option value="date" class="bg-green-400 text-white">Date of Creation</option>
            <option value="domains" class="bg-green-400 text-white">Domains</option>
          </select>
        </label>
        <input type="submit" value="Submit" class="inline-block bg-black text-green-400 p-2 ml-3 rounded cursor-pointer hover:text-white"/>
        </span>
      </form>
    );
  }
}

export default Dropdown;
