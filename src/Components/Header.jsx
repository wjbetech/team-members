const Header = ({selectedTeam, teamMemberCount}) => {

  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-2">
        <div className="col-8 mt-3">
          <h4>Current Team: {selectedTeam}</h4>
          <p className="mt-2">
            {selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? "member." : "members."}
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header;
