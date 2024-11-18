import styles from "../App.module.css";
import { Component } from "solid-js";
import Card from "../components/card/Card"; // Adjust path as necessary
import broadcastImage from "../assets/broadcast.jpg"
import weatherImage from "../assets/weather.png";
import databaseImage from "../assets/database.png";
import ResultImage from "../assets/result.png";
import Navbar from "../components/nav/Navbar";


const MainPage: Component = () => {
  const handleCardClick = (title: string) => {
    alert(`You clicked on ${title}`);

  };

  return (
    <div>


<Navbar.Root interactType="click">
        <Navbar.Bar class={styles.navbar}>
          <Navbar.MenuTrigger class={styles["navbar-trigger"]}>
            <Navbar.MenuTriggerOpenIcon>
              <div class="icon">☰</div> {/* Open menu icon */}
            </Navbar.MenuTriggerOpenIcon>
            <Navbar.MenuTriggerCloseIcon>
              <div class="icon">✕</div> {/* Close menu icon */}
            </Navbar.MenuTriggerCloseIcon>
          </Navbar.MenuTrigger>
        </Navbar.Bar>
        <Navbar.Menu
        class={`${styles["navbar-menu"]} ${
            styles[true ? "open" : "closed"]
          }`}>

          {/* menu content */}
          <ul>
            <li class={styles["navbar-item"]}>
              <a href="#">Home</a>
            </li>
            <li class={styles["navbar-item"]}>
              <a href="#">About</a>
            </li>
            <li class={styles["navbar-item"]}>
              <a href="#">Contact</a>
            </li>
          </ul>

        </Navbar.Menu>
      </Navbar.Root>

        <div class={styles["main-container"]}>
            <h1 class={styles.title}>Main Page</h1>

        <div class={styles["card-grid"]}>
          <Card
            title="Broadcast"
            image={broadcastImage}
            onClick={() => handleCardClick("Broadcast")}
          />
          <Card
            title="Weather API"
            image={weatherImage}
            onClick={() => handleCardClick("Weather API")}
          />
          <Card
            title="DB Setting"
            image={databaseImage}
            onClick={() => handleCardClick("DB Setting")}
          />
          <Card
            title="Result"
            image={ResultImage}
            onClick={() => handleCardClick("Result")}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
