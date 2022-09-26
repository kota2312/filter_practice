import "./styles.css";

export default function App() {
  let array = ["spray", "limit", "elite", "exberant", "destruction", "present"];

  let arrayFunc = array.filter(function (e) {
    return e.length < 7;
  });

  console.log(arrayFunc);
  return (
    <div className="App">
      <h1>filter</h1>
      {/* 条件を満たした要素だけ残す関数 */}
      <div>{arrayFunc}</div>
    </div>
  );
}
