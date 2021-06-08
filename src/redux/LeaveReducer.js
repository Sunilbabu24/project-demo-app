const initState = {
  list: [],

  reflev: {},
  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};

// ACTION TYPES
const LEAVE_CREATE = "LEAVE_CREATE";
const LEAVE_UPDATE = "LEAVE_UPDATE";
const LEAVE_DELETE = "LEAVE_DELETE";
const LEAVE_GET_ALL = "LEAVE_GET_ALL";
const LEAVE_GET_BY_ID = "LEAVE_GET_BY_ID";

const REF_LEAVE = "REF_LEAVE";

// ACTIONS :: COmponents are interacting with this action
export function createLeaveAction(payload) {
  return { type: LEAVE_CREATE, payload: payload };

  // MAKE SURE redux-thunk is installed.
  /* return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/employee/";
    const requestBody = { ...payload, age: 30 };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: EMPLOYEE_CREATE, payload: payload });
  };*/
}

export function updateLeaveAction(payload) {
  return { type: LEAVE_UPDATE, payload: payload };
  /*return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/employee/${payload.id}`;
    const requestBody = { ...payload, age: 25 };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefEmployee({}));
  };*/
}

export function deleteLeaveAction(payload) {
  return { type: LEAVE_DELETE, payload: payload };

  // redux thunk
  /* return async (dispatch) => {
    const url = `http://localhost:8080/api/employee/${payload.id}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllEmployeeAction());
  };*/
}

export function getAllLeaveAction(payload) {
  return { type: LEAVE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  /* return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/employee/";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const employeList = await response.json();
    console.log(employeList);

    // Update the UI
    dispatch({ type: EMPLOYEE_GET_ALL, payload: employeList });
  };*/
}

export function getByIdLeaveAction(payload) {
  return { type: LEAVE_GET_BY_ID, payload: payload };
  /*return async (dispatch) => {
    const url = `http://localhost:8080/api/employee/${payload.id}`;
    const response = await fetch(url);
    const employeeObj = await response.json();

    // this wil update the refemp
    dispatch(updateRefEmployee(employeeObj));
  };*/
}

export function updateRefLeave(payload) {
  return { type: REF_LEAVE, payload: payload };
}

// REDUCER LOGIC
export function LeaveReducer(state = initState, action) {
  switch (action.type) {
    case LEAVE_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case LEAVE_UPDATE:
      // TODO
      return state;
    case LEAVE_DELETE:
      // TODO
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

      return { ...state, list: [...oldList] };
    case LEAVE_GET_ALL:
      // Update the list
      return { ...state, list: action.payload };
    case LEAVE_GET_BY_ID:
      // TODO
      return state;

    case REF_LEAVE:
      return { ...state, reflev: action.payload };

    default:
      return state;
  }
}
