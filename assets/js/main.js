
//Preenche os dados do head
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo // Altera o src do html
    photo.alt = profileData.name // Altera o alt do html

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name // Pega a tag com o id e muda o texto dentro dele

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}` // Muda o href da tag com o id

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `tel:${profileData.email}`
}

(async () => {
    const profileData = await buscarArquivo()
    updateProfileInfo(profileData)
})()