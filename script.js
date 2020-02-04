
const page = document.querySelector('#page')

// Things I need to grab:

// name: { first:/ last:}
// location: { street: / 
// city: (capitalize) / state: (need convert to initial) / postcode:}
// dob: (need convert date)
// registered: (need convert date)


// LOOP:
function renderProfiles () {
  for (let customer of customers) {
    const profile = document.createElement('div')
      profile.classList.add('profile')

      const profilePic= document.createElement('img')
        profilePic.classList.add('profilePic')
        profilePic.src = customer.picture.large
        profile.appendChild(profilePic)

      const name = document.createElement('h2')
        name.classList.add('name')
        name.textContent = customer.name.first+" "+customer.name.last
        profile.appendChild(name)

      const email = document.createElement('p')
        email.classList.add('email')
        email.textContent = customer.email
        profile.appendChild(email)

      const locationStreet = document.createElement('p')
        locationStreet.classList.add('location')
        locationStreet.textContent = customer.location.street
        profile.appendChild(locationStreet)

      const locationState = document.createElement('p')
        let state = nameToAbbr(customer.location.state)
        locationState.classList.add('location')
        locationState.textContent = customer.location.city+", "+state+" "+customer.location.postcode
        profile.appendChild(locationState)
  
      const birthday = document.createElement('p')
        birthday.classList.add('birthday')
        let date = moment(customer.dob).format('ll')
        birthday.textContent = "DOB: "+date
        profile.appendChild(birthday)

      const registered = document.createElement('p')
        registered.classList.add('registered')
        let dateR = moment(customer.registered).format('ll')
        registered.textContent = "Customer since: "+dateR
        profile.appendChild(registered)
    // customer.registered
    
    page.appendChild(profile) 
  }
}

renderProfiles()
