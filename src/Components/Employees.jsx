import TeamSelect from './TeamSelect';
import TeamMembers from './TeamMembers';

const Employees = ({employees,selectedTeam,handleChangeTeam,handleEmployeeCardClick}) => {

  return (

    // build out the employee cards
    <div className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">

          {/* build the team selector */}
          <div className="">
            <TeamSelect
              selectedTeam={selectedTeam}
              handleChangeTeam={handleChangeTeam}
            />
          </div>

          {/* map out the employees */}
          <div className="card-collection">
              <TeamMembers
                employees={employees}
                handleEmployeeCardClick={handleEmployeeCardClick}
                selectedTeam={selectedTeam}
              />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Employees;
