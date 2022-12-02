import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RowTable from "../components/rowTable";
import { fetchDataUser } from "../store/action/userAction";

export default function Home() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchDataUser());
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Gender</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              return (
                <RowTable
                  key={idx}
                  user={user}
                  idx={idx}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
