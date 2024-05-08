import './index.css'

const Passwords = props => {
  const {details, deletePassword, isChecked} = props
  const {id, website, username, password} = details

  const onClickDelete = () => {
    deletePassword(id)
  }

  return (
    <li className="list-cont">
      <div className="details-cont">
        <p className="para">{website}</p>
        <p className="para">{username}</p>
        <p className="para">{password}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={onClickDelete}
          className="btns"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="icon"
          />
        </button>
      </div>
    </li>
  )
}
export default Passwords
