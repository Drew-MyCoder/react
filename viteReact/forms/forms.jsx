import './forms.css'

const Forms = () => {
    const [firstName, setFirstName] = React.useState("")

    function handleChange() {
        console.log('changed')
    };

  return (
    <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
  )
}

export default Forms
