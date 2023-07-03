export default function AdminItem({ worker, product }) {
  const { name: workerName, email, contactNumber, role } = worker || {};
  const { name: productName, price } = product || {};

  return (
    <div>
      {role && (
    <>
    <div className="admin-items">
    <p>{worker.name}</p>
    <p>{worker.email}</p>
    <p>{worker.contactNumber}</p>
    <p>{worker.role}</p>
    <p>. . .</p>
    </div>
    </>

      )}

      {productName && (
        <div className="admin-items">
          <p> {productName}</p>
          <p> {price}</p>
          <p>. . .</p>
        </div>
      )}
    </div>
  );
}