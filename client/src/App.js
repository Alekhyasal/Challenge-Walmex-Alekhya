import "./App.css";
import { connect } from "react-redux";
import {
  simpleAction,
  getItems,
  ageDemographic,
} from "./Redux/Actions/simpleAction";
import { useEffect, useState } from "react";
function App({
  simpleAction,
  users,
  getItems,
  items,
  ageDemographic,
  usersWith,
}) {
  const [selectedItem, setSelectedItem] = useState("-1");
  useEffect(() => {
    simpleAction();
    getItems();
  }, [simpleAction, getItems]);
  useEffect(() => {
    if (selectedItem === "0") alert("Please select Item");
    else ageDemographic(selectedItem);
  }, [selectedItem, ageDemographic]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>All Users</h1>
        <table>
          <thead>
            <tr>
              <td>User Name</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {users.map((u, indx) => {
              return (
                <tr key={indx}>
                  <td>{u.username}</td>
                  <td>{u.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h1>All Demograhic Of user with</h1>
        <select onChange={(e) => setSelectedItem(e.currentTarget.value)}>
          <option value="0">Item</option>
          {items.length > 0 && items.map((i) => <option value={i}>{i}</option>)}
        </select>
        <table>
          <thead>
            <tr>
              <td>Age</td>
              <td>Count</td>
            </tr>
          </thead>
          <tbody>
            {usersWith.map((u, indx) => {
              return (
                <tr key={indx}>
                  <td>{u.age}</td>
                  <td>{u.count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.simpleReducer.users,
  items: state.simpleReducer.items,
  usersWith: state.simpleReducer.usersWith,
});
const mapDispatchToProps = (dispatch) => ({
  simpleAction: () => dispatch(simpleAction()),
  getItems: () => dispatch(getItems()),
  ageDemographic: (item) => dispatch(ageDemographic(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
