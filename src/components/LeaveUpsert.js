import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createLeaveAction, updateLeaveAction } from "../redux/LeaveReducer";

export function LeaveUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  console.log(state);

  const [employeeId, setEmployeeId] = useState(state.leave.reflev.employeeId);
  const [fromDate, setFromDate] = useState(state.leave.reflev.fromDate);
  const [toDate, setToDate] = useState(state.leave.reflev.toDate);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateEmployeeId = (e) => setEmployeeId(e.target.value);
  const updateFromDate = (e) => setFromDate(e.target.value);
  const updateToDate = (e) => setToDate(e.target.value);

  const addLeave = (e) => {
    e.preventDefault();
    console.log(employeeId, fromDate, toDate);

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createLeaveAction({
        employeeId,
        fromDate,
        toDate,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // A2: navigate to another page
    // history.push("/list-leave");

    // reset the form
    setEmployeeId("");
    setFromDate("");
    setToDate("");
  };

  const updateLeave = () => {
    dispatch(
      updateLeaveAction({
        leaveid: state.leave.reflev.leaveid,
        employeeId,
        fromDate,
        toDate,
      })
    );

    // reset the form
    setEmployeeId("");
    setFromDate("");
    setToDate("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">
          {state.leave.reflev.leaveId ? "Update Leave" : "Apply Leave"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <div className="mb-1">
          <input
            type="text"
            value={employeeId}
            onChange={(e) => updateEmployeeId(e)}
            className="form-control"
            placeholder="Enter Employee Id"
          />
        </div>

        <div className="mb-1">
          <input
            type="date"
            value={fromDate}
            onChange={(e) => updateFromDate(e)}
            className="form-control"
            placeholder="Enter from Date"
            required
            min="2021-06-08"
            max="2021-12-31"
          />
        </div>

        <div className="mb-1">
          <input
            type="date"
            value={toDate}
            onChange={(e) => updateToDate(e)}
            className="form-control"
            placeholder="Enter To Date"
            required
            min="2021-06-09"
            max="2021-12-31"
          />
        </div>

        <div className="mb-1">
          {state.leave.reflev.leaveId ? (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Update Leave"
              onClick={() => updateLeave()}
            />
          ) : (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Add Leave"
              onClick={(e) => addLeave(e)}
            />
          )}
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
