const inProgress = document.getElementById("in_progress")
const unix_repos = document.getElementById("unix_repos")
const python_repos = document.getElementById("python_repos")
const web_repos = document.getElementById("web_repos")

const btn_unix = document.getElementById("c")
const btn_progress = document.getElementById("progress")
const btn_python = document.getElementById("python")
const btn_web = document.getElementById("web")

const api_github = new XMLHttpRequest()

function stockIntoDiv(obj, name, language, description) {
    obj.appendChild(name)
    obj.appendChild(language)
    obj.appendChild(description)
}

function stockInfoRepos() {
    var content = JSON.parse(api_github.responseText)
// remove the readme repos
    for (const index_api in content) {
        let repos = content[index_api]
        let new_div = document.createElement("div")

        let name = document.createElement("h3")
        let language = document.createElement("pre")
        let description = document.createElement("p")
        new_div.setAttribute('id', "infos_repos")
        new_div.setAttribute('onclick', "document.location.href = '" + repos.html_url + "'")
        description.setAttribute('class', 'description')
        name.appendChild(document.createTextNode(repos.name))

        language.appendChild(document.createTextNode(repos.language))
        description.appendChild(document.createTextNode(repos.description))
        stockIntoDiv(new_div, name, language, description)
// Put the div into categories
        if (repos.language == "HTML"
        || repos.language == "CSS"
            || repos.language == "JavaScript")  {
                web_repos.appendChild(new_div)
            }
            if (repos.language == "Python") {
                python_repos.appendChild(new_div)
            }
            if (repos.language == "C") {
                unix_repos.appendChild(new_div)
            }
            for (const i in repos.description) {
                if (repos.description[i] == '(') {
                    inProgress.appendChild(new_div)
                }
            }


    }
}

api_github.onload = stockInfoRepos

api_github.open("get", "https://api.github.com/users/deadpanda-c/repos")

api_github.send()


btn_unix.onclick = function () {
    if (unix_repos.style.display != "none") {
        unix_repos.style.display = "none"
    } else {
        unix_repos.style.display = "inline-flex"
        inProgress.style.display = "none"
        web_repos.style.display = "none"
        python_repos.style.display = "none"
    }
}

btn_progress.onclick = function () {
    if (inProgress.style.display != "none") {
        inProgress.style.display = "none"
    } else {
        inProgress.style.display = "inline-flex"
        web_repos.style.display = "none"
        python_repos.style.display = "none"
        unix_repos.style.display = "none"

    }
}

btn_python.onclick = function () {
    if (python_repos.style.display != "none") {
        python_repos.style.display = "none"
    } else {
        python_repos.style.display = "inline-flex"
        unix_repos.style.display = "none"
        web_repos.style.display = "none"
        inProgress.style.display = "none"
    }
}

btn_web.onclick = function () {
    if (web_repos.style.display != "none") {
        web_repos.style.display = "none"
    } else {
        web_repos.style.display = "inline-flex"
        inProgress.style.display = "none"
        python_repos.style.display = "none"
        unix_repos.style.display = "none"

    }
}