import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Passwords from '../Passwords'
import './index.css'

class PassswordApp extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    isChecked: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newItem = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  deletePassword = id => {
    const {passwordList} = this.state
    const updatedList = passwordList.filter(each => each.id !== id)
    this.setState({
      passwordList: updatedList,
    })
  }

  searchPassword = event => {
    this.setState({searchInput: event.target.value})
  }

  checkbox = () => {
    this.setState(prevState => {
      const {isChecked} = prevState
      return {
        isChecked: !isChecked,
      }
    })
  }

  renderImage = () => {
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
          alt="no passwords"
          className="image"
        />
        <p className="heading">No Passwords</p>
      </div>
    )
  }

  renderList = () => {
    const {passwordList, isChecked, searchInput} = this.state
    const searchResults = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <ul>
        {searchResults.map(each => (
          <Passwords
            key={each.id}
            details={each}
            deletePassword={this.deletePassword}
            isChecked={isChecked}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {passwordList, website, username, password, searchInput} = this.state
    const count = passwordList.length
    const isCountZero = count === 0

    return (
      <div className="main-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="cont">
          <div className="form-cont">
            <h1 className="heading">Add New Password</h1>
            <form onSubmit={this.addPassword}>
              <div className="input-cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                  value={website}
                />
              </div>

              <div className="input-cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="website"
                  className="icon"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>

              <div className="input-cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="website"
                  className="icon"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="img-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="image"
            />
          </div>
        </div>
        <div className="cont2">
          <div className="search-cont">
            <div className="count-cont">
              <h1 className="heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icon"
              />
              <input
                type="search"
                placeholder="Search"
                className="search"
                value={searchInput}
                onChange={this.searchPassword}
              />
            </div>
          </div>
          <hr />
          <input
            type="checkbox"
            id="checkbox"
            name="Show Passwords"
            value="Show Passwords"
            onClick={this.checkbox}
          />
          <label htmlFor="checkbox" className="box">
            Show Passwords
          </label>
          {isCountZero ? this.renderImage() : this.renderList()}
        </div>
      </div>
    )
  }
}
export default PassswordApp
