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
      "id": "Phone.a9c76fef-a2e0-4b08-cfe3-bc7128b77c90",
      "phone_number": "3192411363",
      "is_valid": true,
      "country_calling_code": "1",
      "line_type": "Mobile",
      "carrier": "Verizon Wireless",
      "is_prepaid": null,
      "is_commercial": false,
      "belongs_to": [
        {
          "id": "Person.84de5980-f1e4-491e-942c-dbf18c0ec006",
          "name": "Jeremy Joel Avenarius",
          "firstname": "Jeremy",
          "middlename": "Joel",
          "lastname": "Avenarius",
          "age_range": "35-39",
          "gender": "Male",
          "type": "Person",
          "link_to_phone_start_date": "2008-11-30",
          "industry": null
        }
      ],
      "current_addresses": [
        {
          "id": "Location.8cda40a4-ff83-4696-bd12-d5c2997896ca",
          "location_type": "Address",
          "street_line_1": "1132 Holly St",
          "street_line_2": null,
          "city": "Denver",
          "postal_code": "80220",
          "zip4": "4435",
          "state_code": "CO",
          "country_code": "US",
          "lat_long": {
            "latitude": 39.734364,
            "longitude": -104.921997,
            "accuracy": "RoofTop"
          },
          "is_active": true,
          "delivery_point": "SingleUnit",
          "link_to_person_start_date": "2008-11-30"
        }
      ],
      "historical_addresses": [],
      "associated_people": [
        {
          "id": "Person.3cb3e64e-ba5f-427d-93ff-bf841c57017d",
          "name": "James E J Avenarius Jr.",
          "firstname": "James",
          "middlename": "E J",
          "lastname": "Avenarius",
          "relation": "Sibling"
        },
        {
          "id": "Person.46b23399-4643-4ea8-8789-f4e162382f08",
          "name": "Stacy L Dicker",
          "firstname": "Stacy",
          "middlename": "L",
          "lastname": "Dicker",
          "relation": "Household"
        },
        {
          "id": "Person.4abbdd23-8227-433e-af47-3250b90c0d1e",
          "name": "Mr. James E J Avenarius Sr.",
          "firstname": "James",
          "middlename": "E J",
          "lastname": "Avenarius",
          "relation": "Parent_Child"
        },
        {
          "id": "Person.65a70a46-14e0-4ed1-953a-b7a1a921ccd8",
          "name": "Angela Lynn Millman",
          "firstname": "Angela",
          "middlename": "Lynn",
          "lastname": "Millman",
          "relation": "Sibling"
        },
        {
          "id": "Person.6bdbdea2-2a99-4871-9288-53be0b2e9ea2",
          "name": "Andrew A Hartman",
          "firstname": "Andrew",
          "middlename": "A",
          "lastname": "Hartman",
          "relation": "Household"
        },
        {
          "id": "Person.7254cc7b-c978-4669-9000-d05099d0f357",
          "name": "Stacy Dicker Hartman",
          "firstname": "Stacy",
          "middlename": "Dicker",
          "lastname": "Hartman",
          "relation": "Household"
        },
        {
          "id": "Person.99cb99ff-5841-4bc0-b1d7-ef15e0a270ad",
          "name": "Stacy Avenarius",
          "firstname": "Stacy",
          "middlename": null,
          "lastname": "Avenarius",
          "relation": "Household"
        },
        {
          "id": "Person.a1679a2e-5187-443d-8418-4d5639998b59",
          "name": "Eric Jon Avenarius",
          "firstname": "Eric",
          "middlename": "Jon",
          "lastname": "Avenarius",
          "relation": "Sibling"
        },
        {
          "id": "Person.a242ef2d-b615-4692-8f44-c3caba486669",
          "name": "Diane L Avenarius Sr.",
          "firstname": "Diane",
          "middlename": "L",
          "lastname": "Avenarius",
          "relation": "Parent_Child"
        },
        {
          "id": "Person.dae74af1-2b54-479b-97e0-6aa3f8217103",
          "name": "Ursula Scriba Scriba",
          "firstname": "Ursula",
          "middlename": "Scriba",
          "lastname": "Scriba",
          "relation": "Household"
        }
      ],
      "alternate_phones": [
        "5635566588"
      ],
      "error": null,
      "warnings": []
    },
    search: ""
  };

  // When this component mounts, console log "mounted"
  componentDidMount() {
   console.log("This component mounted!");
  }

  // searchNumber = query => {
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

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
              heading={this.state.result.phone_number || "Search a Phone Number to Begin"}
            >

              {this.state.result.phone_number
                ? <NumberDetail
                    phone_number={this.state.result.phone_number}
                    line_type={this.state.result.line_type}
                    carrier={this.state.result.carrier}
                    fullName={this.state.result.belongs_to[0].name}
                    age_range={this.state.result.belongs_to[0].age_range}
                    gender={this.state.result.belongs_to[0].gender}
                    street_line_1={this.state.result.current_addresses[0].street_line_1}
                    city={this.state.result.current_addresses[0].city}
                    state_code={this.state.result.current_addresses[0].state_code}
                    postal_code={this.state.result.current_addresses[0].postal_code}
                  
                  />
                : <h3>No Results to Display</h3>}
                {console.log(this.state.result)}
               
               
            </Panel>
          </Col>
          
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default WhitePagesContainer;

