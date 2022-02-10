import axios from "axios";
import "./App.css";

const apiURL = "https://localhost:7068/api/Books/";
const bookTitle = document.querySelector("bookTitle");

function App() {
  axios
    .get(apiURL)
    .then(function (response) {
      console.log(response.data);
      //bookTitle.innerHTML = response.data.forms.title;
    })
    .catch(function (error) {
      console.log(`Error: ${error}`);
      //bookTitle.innerHTML = `An error has occurred: ${error}`;
    });
  return (
    <div className="App">
      <h1>Axios Demo</h1>
      <label htmlFor="BookTitle">Book Title</label>
      <input type="text" name="BookTitle" className="bookTitle" />
    </div>
  );
}

export default App;
