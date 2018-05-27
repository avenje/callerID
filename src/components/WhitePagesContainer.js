import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Panel from "./Panel";
import Search from "./Search";
import NumberDetail from "./NumberDetail";
import API from "../utils/API";

class WhitePagesContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, console log "mounted"
  componentDidMount() {
   console.log("This component mounted!");
  }

  searchNumber = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the WhitePages Pro API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNumber(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Panel
              heading={this.state.result.phone_number || "Search a Number to Begin"}
            >
            {console.log(this.state.result.phone_number,
                    this.state.result.line_type,
                    this.state.result.carrier)}

              {this.state.result.Title
                ? <NumberDetail
                    phone_number={this.state.result.phone_number}
                    line_type={this.state.result.line_type}
                    carrier={this.state.result.carrier}
                  
                  />
                : <h3>No Results to Display</h3>}
                {console.log(this.state.result)}
                
            </Panel>
          </Col>
          <Col size="md-4">
            <Panel heading="Search">
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WhitePagesContainer;

