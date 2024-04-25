import 'bootstrap/dist/css/bootstrap.min.css';

const Doctors = () => {
  const doctors = [
    {
      name: "xxx",
      age: 34,
    },
    {
      name: "yyyy",
      age: 34,
    },
    {
      name: "zzzz",
      age: 34,
    },
  ];

  return (
    <>
    <div className="container">
        <h1 className='text-center'>List Of Doctors</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th >Name</th>
            <th >Age</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key = {doctor.name}>
              <th >{doctor.name}</th>
              <td >{doctor.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Doctors;
