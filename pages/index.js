export default function Home() {
  return (
    <div>
      <h1>Profile Form</h1>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" />
      </div>
      <div>
        <label>Password Secret Question</label>
        <select>
          <option value="maidenName">Mother's Maiden Name</option>
          <option value="firstCar">First Car Model</option>
          <option value="petsName">Pet's Name</option>
        </select>
      </div>
      <div>
        <label>Password Secret Answer: "question"</label>
        <input type="text" />
      </div>
      <div>
        <label>Favorite Sport</label>
        <select>
          <option value="baseball">Baseball</option>
          <option value="football">Football</option>
          <option value="hockey">Hockey</option>
        </select>
      </div>
      <div>
        <label>Favorite Baseball Team</label>
        <select>
          <option value="whiteSox">Chicago White Sox</option>
          <option value="cubs">Chicago Cubs</option>
          <option value="blueJays">Toronto Blue Jays</option>
          <option value="yankees">New York Yankees</option>
          <option value="redSox">Boston Red Sox</option>
        </select>
      </div>
      <div>
        <label>Favorite Football Team</label>
        <select>
          <option value="bears">Chicago Bears</option>
          <option value="giants">New York Giants</option>
          <option value="broncos">Denver Broncos</option>
          <option value="packers">Green Bay Packers</option>
          <option value="patriots">New England Patriots</option>
        </select>
      </div>
      <div>
        <label>Favorite Hockey Team</label>
        <select>
          <option value="blackhawks">Chicago Blackhawks</option>
          <option value="rangers">New York Rangers</option>
          <option value="devils">New Jersey Devils</option>
          <option value="mapleLeafs">Toronto Maple Leafs</option>
          <option value="bruins">Boston Bruins</option>
        </select>
      </div>
      <div>
        <h2>Summary</h2>
      </div>
    </div>
  );
}
