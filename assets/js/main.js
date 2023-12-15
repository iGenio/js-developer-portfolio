
//Preenche os dados do head
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo // Altera o src do html
    photo.alt = profileData.name // Altera o alt do html

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name // Pega a tag com o id e muda o texto dentro dele

    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}` // Muda o href da tag com o id

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `tel:${profileData.email}`
}


//Preenche as ferramentas
function updateHardSkills(profileData) {
    const hardskills = document.getElementById('profile.skills.hardskills')
    hardskills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

//Preenche as softskills
function updateSoftSkills(profileData) {
    const softskills = document.getElementById('profile.skills.softskills')
    softskills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

//Preenche os idiomas
function updateLanguage(profileData) {
    const language = document.getElementById('profile.language')
    language.innerHTML = profileData.idiomas.map(idioma => `<li>${idioma}</li>`).join('')
}

//Preenche o portfólio
function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(portfolio => `<li><h3 class="title github">${portfolio.nome}</h3>
        <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
    </li>`).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience')
    experience.innerHTML = profileData.experiencias.map(experience => `                    <li>
    <h3 class="title">${experience.nome}</h3>
    <p class="period">${experience.periodo}</p>
    <p>
        ${experience.descricao}
    </p>
</li>`).join('')
}

(async () => {
    const profileData = await buscarArquivo()
    console.log(profileData)
    updateProfileInfo(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateLanguage(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()

