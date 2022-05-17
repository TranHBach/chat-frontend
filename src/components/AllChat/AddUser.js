import "./AddUser.css";

function AddUser() {
  return (
    <div className="add-user">
      <input id="user-input" className="input-user"></input>
      <label htmlFor="user-input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </label>
    </div>
  );
}

export default AddUser;
