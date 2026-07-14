import React, { useRef, useState } from 'react'

const UserForm = () => {


  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // const firstname = formData.get('firstname');
    // console.log(firstname)
    const formValues = Object.fromEntries(formData.entries());
    console.log("Submitted Data:", formValues);

  }

  console.log('user form render..')

  return (
    <div>
      <h2>USER FORM</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">
          <input type="text"
            name='firstname'
            placeholder='enter firstname'
          // value={'jjjjj'}
          />
        </label>
        <label htmlFor="lastname">
          <input type="text"
            name='lastname' placeholder='enter lastname' />
        </label>
        <label htmlFor="age">
          <input type="text"
            name='age' placeholder='enter age' />
        </label>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default UserForm

// import React, { useRef, useState } from 'react'

// const UserForm = () => {

//   // statefull component:state
//   // stateless: no states
//   const firstnameRef=useRef()
//   const lastnameRef=useRef()
//   const ageRef=useRef()

//   function handleSubmit(e){
//     e.preventDefault()
//     let firstname=firstnameRef.current.value
//     let lastname=lastnameRef.current.value
//     let age=ageRef.current.value
//     if(firstname==''||lastname==''||age==''){
//       alert('requied all')
//       return
//     }
//     console.log("USERDATA",firstname,lastname,age)
//     firstnameRef.current.value=''
//   }

//   console.log('user form render..')

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstname">
//           <input type="text"
//             name='firstname'
//             placeholder='enter firstname'
//             // value={'jjjjj'}
//             ref={firstnameRef}
//           />
//         </label>
//         <label htmlFor="lastname">
//           <input type="text"
//           name='lastname' placeholder='enter lastname' ref={lastnameRef}/>
//         </label>
//         <label htmlFor="age">
//           <input type="text"
//           name='age' placeholder='enter age' ref={ageRef} />
//         </label>
//         <button type='submit'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default UserForm




// import React, { useState } from 'react'

// const UserForm = () => {

//   const [form,setForm]=useState({firstname:'',lastname:'',age:''})

//   function hanldeSubmit(e) {
//     e.preventDefault()
//     // validation
//     const {firstname,lastname,age}=form
//     if(firstname=='' || lastname==''|| age==''){
//       alert('all fields required.')
//       return
//     }
//     console.log("USERDATA:",form)
//     setForm({firstname:'',lastname:'',age:''})
//   }
//   function hanldeChange(e){
//       // console.log(e.target.name,e.target.value)
//       const {name,value}=e.target
//       // console.log(name,value)
//       setForm(form=>({
//         ...form,
//         [name]:value
//       }))
//   }

//   console.log('user form render..')

//   return (
//     <div>
//       <form onSubmit={hanldeSubmit}>
//         <label htmlFor="firstname">
//           <input type="text"
//             onChange={hanldeChange}
//             name='firstname'
//             placeholder='enter firstname'
//             value={form.firstname}
//           />
//         </label>
//         <label htmlFor="lastname">
//           <input type="text"
//           onChange={hanldeChange}
//           name='lastname' placeholder='enter lastname' value={form.lastname} />
//         </label>
//         <label htmlFor="age">
//           <input type="text"
//            onChange={hanldeChange}
//           name='age' placeholder='enter age' value={form.age} />
//         </label>
//         <button type='submit'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default UserForm






// import React, { useState } from 'react'

// const UserForm = () => {

//   const [firstname, setFirstname] = useState('')
//   const [lastname, setLastname] = useState('')
//   const [age, setAge] = useState('')

//   function hanldeSubmit(e) {
//     e.preventDefault()
//     // alert('hanldeSubmit')
//     console.log(firstname,lastname,age)
//   }

//   console.log('user form render..')

//   return (
//     <div>
//       <form onSubmit={hanldeSubmit}>
//         <label htmlFor="firstname">
//           <input type="text"
//             onChange={(e) => setFirstname(e.target.value)}
//             name='firstname'
//             placeholder='enter firstname'
//           />
//         </label>
//         <label htmlFor="lastname">
//           <input type="text"
//           onChange={(e) => setLastname(e.target.value)}
//           name='lastname' placeholder='enter lastname' />
//         </label>
//         <label htmlFor="age">
//           <input type="text"
//           onChange={(e) => setAge(e.target.value)}
//           name='age' placeholder='enter age' />
//         </label>
//         <button type='submit'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default UserForm
