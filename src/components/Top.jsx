import { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import CreateSection from "./Create";

const Top = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = ( e, {name}) => setActiveItem(name);
  
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="market place"
          active={activeItem === "market place"}
          onClick={handleItemClick}
        />
      </Menu>
      <CreateSection />
    </Segment>
  );
};

export default Top;
