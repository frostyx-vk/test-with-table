import './App.css';
import data from "./examp.json"

function App() {

  function searchInJSON(obj, key, val) {
    let results = [];
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        if (k === key && obj[k] === val) {
          results.push(obj);
        } else if (typeof obj[k] === "object") {
          results = results.concat(searchInJSON(obj[k], key, val));
        }
      }
    }
    return results;
  }

  let key = "type";
  let val = "file";
  let results = searchInJSON(data, key, val);

  return (
    <div className="App">
      <table >
        <thead>
          <tr>
            <th>File name</th>
            <th>Size</th>
            <th>Last Modification</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, i) => (
            <tr>
              <td key={i + 'a'}>{result.name}</td>
              <td key={i + 'b'}>{result.size}</td>
              <td key={i}>{result.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
