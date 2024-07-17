const URL = "https://6697ca5702f3150fb66f036b.mockapi.io/api/todos";

const saveTask = (task) => {
  console.log("POST");

  const options = {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json",
    },
  };

  return fetch(URL, options);
  //   return axios.post(URL, task);
};

const getAllTasks = () => {
  console.log("GET");

  return fetch(URL).then((res) => res.json());
  //return axios.get(URL);
};

const updateTask = (id, status) => {
  console.log("PUT");

  const options = {
    method: "PUT",
    body: JSON.stringify({ isDone: status }),
    headers: {
      "Content-type": "application/json",
    },
  };

  return fetch(`${URL}/${id}`, options);

  //return axios.put(`URL/${id}`, {isDone: status})
};

const deleteTask = (id) => {
  console.log("DELETE");

  const options = {
    method: "DELETE",
  };

  return fetch(`${URL}/${id}`, options);

  //return axios.detele(`${URL}/${id}`)
};

export { saveTask, getAllTasks, updateTask, deleteTask };
