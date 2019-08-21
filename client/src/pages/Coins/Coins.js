import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Coins extends Component {
  state = {
    coins: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadCoins();
  }

  loadCoins = () => {
    API.getCoins()
      .then(res =>
        this.setState({ coins: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteCoin = id => {
    API.deleteCoin(id)
      .then(res => this.loadCoins())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveCoin({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadCoins())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Coins Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Coin
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Coins On My List</h1>
            </Jumbotron>
            {this.state.coins.length ? (
              <List>
                {this.state.coins.map(coin => (
                  <ListItem key={coin._id}>
                    <Link to={"/coins/" + coin._id}>
                      <strong>
                        {coin.title} by {coin.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteCoin(coin._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Coins;
