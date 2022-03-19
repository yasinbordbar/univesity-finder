import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { MyButtonProps } from "../../types/props.types";

const MyButton = ({ searchUniversities }: MyButtonProps) => {
  return (
    <Button
      size="huge"
      color="pink"
      onClick={() => searchUniversities()}
      animated
    >
      <Button.Content visible>Search</Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" />
      </Button.Content>
    </Button>
  );
};

export default MyButton;
