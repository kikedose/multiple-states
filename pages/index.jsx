import React, { useEffect, useState } from 'react';
import get from '../xhr';

function Main() {
  const [database, setDatabase] = useState([]);
  const [state, setState] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await get('api/database/');
      setDatabase(response);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const initialState = {};
    database.forEach((entry) => {
      initialState[entry.uid] = entry.value;
    });

    setState(initialState);
  }, [database]);

  const handleOnChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.checked,
    })
  }

  if (database.length) {
    return (
      <form>
        {
          database.map((entry) => (
            <label key={entry.uid}>
              {entry.name}
              <input
                type="checkbox"
                name={entry.uid}
                onChange={handleOnChange}
                checked={state[entry.uid] ?? false}
                autoComplete="off"
              />
              <br />
            </label>
          ))
        }

        <button
          type="button"
          onClick={() => console.log(state)}
        >
          Print Status
        </button>

        <button
          type="button"
          onClick={() => console.log(database)}
        >
          Print Database
        </button>
      </form>
    )
  }

  return <p>Loading...</p>
}

export default Main;
