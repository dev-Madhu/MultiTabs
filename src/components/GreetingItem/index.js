import './index.css'

const GreetingItem = props => {
  const {greetingDetails} = props
  const {imageUrl, imageAltText} = greetingDetails
  return (
    <>
      <li className="project-item-container">
        <img className="project-item-image" src={imageUrl} alt={imageAltText} />
      </li>
    </>
  )
}

export default GreetingItem
