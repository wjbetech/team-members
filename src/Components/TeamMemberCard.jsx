import femaleProfile from '../Media/images/femaleProfile.jpg';
import maleProfile from '../Media/images/maleProfile.jpg'

const TeamMemberCard = ({employee, handleEmployeeCardClick, selectedTeam}) => {

  return (

    <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-3 standout' : 'card m-3')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
      {(employee.gender === "male") ? <img src={maleProfile} className="card-img-top" alt="male" /> : <img src={femaleProfile} className="card-img-top" alt="female" />
      }
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation: </b>
          {employee.designation}
        </p>
      </div>
    </div>

  )

}

export default TeamMemberCard;
