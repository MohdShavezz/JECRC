import './header.css'
import ChildHeader from './ChildHeader'

const Header = ({name}) => {

  const headerTitle='Im Header'
  // console.log('Header')

  return (
    <div className="head" style={{background:'pink'}}>
      <h2>This is my Header Component</h2>
      <p>Name: {name}</p>

      <ChildHeader name={name} title={headerTitle}/>

    </div>
  )
}

export default Header
