export default function RowTable({ idx, user }) {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>
        {user.firstName} {user.lastName}
      </td>
      <td>{user.gender}</td>
      {user.addr ? (
        <td>
          {user.addr
            .map((el) => {
              return `${el.street} ${el.house}, ${el.city} ${el.country}`;
            })
            .join(" ")}
        </td>
      ) : (
        <td></td>
      )}
    </tr>
  );
}
