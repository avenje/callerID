import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Panel from "./Panel";
import Search from "./Search";
import NumberDetail from "./NumberDetail";
import API from "../utils/API";
import Header from "./Header";
import Footer from "./Footer";

class WhitePagesContainer extends Component {
  state = {
    result: {
    },
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
    
    if (!this.props ) { // or !this.props.data.length if your have an empty array initially
      return null; // or some loading indicator 
  }

    return (
      <div>
      <Container>
        <Header />
        <Row>
        <Col size="md-4">
            
          <Search
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Col>
          
          <Col size="md-8">
            <Panel
              heading={<span className="searchedNum">{this.state.result.phone_number || "Search a Phone Number to Begin"}</span>}
            >

              {this.state.result.phone_number
                ? <NumberDetail
                    phone_number={this.state.result.phone_number}
                    line_type={!this.state.result.line_type || this.state.result.line_type === null ? <span className="na"> No Line Type Data Available</span> : this.state.result.line_type}
                    carrier={!this.state.result.carrier || this.state.result.carrier === null ? <span className="na">No Carrier Data Available</span> : this.state.result.carrier}
                    fullName={!this.state.result.belongs_to[0] || this.state.result.belongs_to[0].name === null ? <span className="na">No Name Data</span> : this.state.result.belongs_to[0].name}
                    age_range={!this.state.result.belongs_to[0] || this.state.result.belongs_to[0].age_range === null ? <span className="na">No Data or for a Business</span> : this.state.result.belongs_to[0].age_range}
                    gender={!this.state.result.belongs_to[0] || this.state.result.belongs_to[0].gender === null ? <span className="na">No Data or for a Business</span> : this.state.result.belongs_to[0].gender}
                    street_line_1={!this.state.result.current_addresses[0] || this.state.result.current_addresses[0].street_line_1 === null ? <span className="na">No Address Data Available</span> : this.state.result.current_addresses[0].street_line_1}
                    city={!this.state.result.current_addresses[0] || this.state.result.current_addresses[0].city === null ? "" : this.state.result.current_addresses[0].city}
                    state_code={!this.state.result.current_addresses[0] || this.state.result.current_addresses[0].state_code === null ? "" : this.state.result.current_addresses[0].state_code}
                    postal_code={!this.state.result.current_addresses[0] || this.state.result.current_addresses[0].postal_code === null ? "" : this.state.result.current_addresses[0].postal_code}
                    associated_people={!this.state.result.associated_people[0] ? <span className="na">No Associated People</span> : this.state.result.associated_people.map(function(user, i) {
                      return <li key={i}>{user.name} 
                        <p><span className="relation">{" Relation: "}</span> {user.relation.replace(/_/,' ')}</p></li>
                    })}
                  />
                : <h3>No Results to Display</h3>}
                {console.log(this.state.result)}
               
               
            </Panel>
          </Col>
        </Row>
        
      </Container>
      <Footer />
      </div>
    );
  }
}

export default WhitePagesContainer;

