import React, { Component } from "react";
import Header from "./Header";
import ThemesList from "./ThemesList";
import themes from "../data/themes";
import FooterButton from "./FooterButton";

function handleSelection() {
  let result = 0;

  for (let i = 0; themes.length > i; i++) {
    if (themes[i].selected === true) {
      result += 1;
    }
  }

  return result;
}

class addThemes extends Component {
  state = {
    selected: handleSelection(),
    pop: false
  };

  handleSelection = (selected, time) => {
    this.setState({
      selected,
      time
    });
  };

  render() {
    return (
      <div>
        <Header selected={this.state.selected} pop={this.state.pop}>
          <span className="right">{this.state.time}</span>
        </Header>
        <main>
          <ThemesList
            handleSelection={this.handleSelection}
            popButton={this.onClickButton}
          />
        </main>
        <FooterButton name="Preview tour" link="/overview">
          <span>{this.state.selected}</span>
        </FooterButton>
      </div>
    );
  }
}

export default addThemes;
