async function buscarArquivo () {
    const url = 'https://raw.githubusercontent.com/iGenio/js-developer-portfolio/main/data/profile.json'
    const file = await fetch(url)
    const profileData = await file.json()
    return profileData
}


