import { useState } from "react";

// import styles of this component
import styles from "./App.module.css";

// import other components to use
import Header from "./Components/Header/Header";
import MasonryLayout from "./Components/MasonryLayout/MasonryLayout";
import ContainerCard from "./Components/ContainerCard/ContainerCard";
import Dropdown from "./Components/Elements/Dropdown/Dropdown";

// import json files
import images from "./Jsons/Images.json";

// App component
const App = () => {
  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Records",
      active: true,
    },
    {
      id: 2,
      title: "AI Records",
      active: false,
    },
    {
      id: 3,
      title: "Original Records",
      active: false,
    },
    {
      id: 4,
      title: "Electronic Records",
      active: false,
    },
    {
      id: 5,
      title: "Acoustic Records",
      active: false,
    },
  ];

  const [categoryImage, setCategoryImage] = useState(images.categories.all);

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter((item) => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0];
        return item.toLowerCase().includes(titleSplited);
      });
      return [...images.categories[categoryChoose]];
    });
  };

  return (
    <>
      <Header />
      <div
        className="flex justify-content-center"
        style={{ marginTop: "50px", padding: "50px" }}
      >
        <ContainerCard>
          <div
            className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}
          >
            <h1>All NFT records</h1>
            <Dropdown
              title="All Records"
              items={ddItems}
              liftingDdTextUp={takeDdTitle}
            />
          </div>
          <MasonryLayout images={categoryImage} />
        </ContainerCard>
      </div>
    </>
  );
};

export default App;
