export default function AdminItem({ worker, product }) {
  const { name: workerName, email, contactNumber, role } = worker || {};
  const { name: productName, price } = product || {};

  return (
    <div>
      {role && (
        <div className="admin-items">
          <p> {workerName}</p>
          <p> {email}</p>
          <p> {contactNumber}</p>
          <p> {role}</p>
        </div>
      )}

      {productName && (
        <div className="admin-items">
          <p> {productName}</p>
          <p> {price}</p>
        </div>
      )}
    </div>
  );
}