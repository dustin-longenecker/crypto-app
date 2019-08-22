import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Coins extends Component {
  state = {
    coins: [],
    name: "",
    symbol: "",
    description: ""
  };

  componentDidMount() {
    this.loadCoins();
  }

  loadCoins = () => {
    API.getCoins()
      .then(res =>
        this.setState({ coins: res.data, name: "", symbol: "", description: "" })
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">

            {this.state.coins.length ? (
              <List>
                {this.state.coins.map(coin => (
                  <ListItem key={coin._id}>
                    <Link to={"/coins/" + coin._id}>
                      <table>
                        <tr>
                          <th>
                            {coin.name}
                          </th>
                          <th>
                            {coin.symbol}
                          </th>
                        </tr>
                      </table>
                    </Link>
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
