import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

function App() {
  return (
    
    <main>
      <header>
      <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="currentColor" class="drop" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        <a href="" className="logo">MyBlog</a>
      </Dropdown>
        <a href="" className="logo">
          <img src="/DL_logo.png" alt="MyBlog Logo" />
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src="https://jeu-bayrou.com/wp-content/uploads/2022/11/Kratos-est-il-immortel-dans-God-of-War-Ragnarok-696x392.jpg" alt=""></img>
      </div>
        <div className="texts">
          <h2>The God of War</h2>
          <p className="info">
            <a className="author">Dark Lazoril</a>
            <time>2023-02-10 16:45</time>
          </p>
          <p className="summary"> Kratos est le principal protagoniste de la série God of War. Un guerrier spartiate, né à Sparta, Kratos était un soldat respecté et général jusqu'à ce qu'il perde sa femme et fille à cause de la tromperie d'Arès, qu'il servait alors. Une fois qu'il a tué Arès et obtenu le pardon des autres dieux de l'Olympe, il est devenu le nouveau Dieu de la guerre. Zeus le trahit ensuite, Kratos survit et décide de prendre sa revanche sur le Dieu des Dieux, libérant au passage les maux sur la Terre.
          Après avoir réussi sa vengeance, Kratos s’échappa dans le monde des dieux nordiques en s’installant à Midgard dans l’ancienne Norvège où il épousa une autre femme nommée Faye qui donna naissance à Atreus, leur fils. cendres au plus haut sommet des neuf royaumes.</p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img src="https://cdn.pixabay.com/photo/2022/12/28/18/02/zeus-7683518_960_720.jpg" alt=""></img>
      </div>
        <div className="texts">
          <h2>The Almighty Zeus</h2>
          <p className="info">
            <a className="author">Dark Lazoril</a>
            <time>2023-02-10 16:45</time>
          </p>
          <p className="summary"> Zeus (Ζεύς) est le roi des dieux dans la mythologie grecque et est nommé Jupiter chez les Romains. Il est le fils des Titans Cronos et Rhéa et le frère de plusieurs dieux : Hestia, Déméter, Hadès, Poséidon et Héra, avec laquelle il est marié. Ses fonctions principales sont celles de dieu du ciel et du tonnerre
          </p>
          </div>
      </div>
      
      <div className="post">
        <div className="image">
          <img src="https://staticg.sportskeeda.com/editor/2023/01/dbaee-16726684485852-1920.jpg" alt=""></img>
      </div>
        <div className="texts">
          <h2>Atreus aka Loki</h2>
          <p className="info">
            <a className="author">Dark Lazoril</a>
            <time>2023-02-10 16:45</time>
          </p>
          <p className="summary"> Loki est le filou rusé de la mythologie nordique. Son père est le géant de Jötunn Farbauti et sa mère est Laufey. Avec la géante Angrboða, Loki est le père de Hel, Jörmungandr et Fenrir.
          </p>
        </div>
      </div> 
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.3/umd/popper.min.js" integrity="sha384-Q5IUVN/6N0tjPLveJfzbYwvpepB0Wl1J9Kj/iI9Tjr+mlTmDKf+/jcugJwYGJjY0" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.1/js/bootstrap.min.js" integrity="sha384-1aeWTzKj//I+TvXzCvbvT37JEx12S+zsS1yIgGEGlF8BxWQ4L9sZ3qmyU6+8U6W2" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </main>
  );
}

export default App;
