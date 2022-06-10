const api = new XMLHttpRequest();
const content = document.getElementById("repos")

function transitionOnScroll()
{
    var title = document.getElementById("title")
    var navbar = document.getElementById("navbar")
    window.onscroll = function(e) {
        if (window.scrollY > 100) {
            navbar.classList.add("scrolled")
            title.classList.add("title_scrolled")
        }
        else {
            navbar.classList.remove("scrolled")
            title.classList.remove("title_scrolled")
        }
    }
}


function get_repos()
{
    var parsed = JSON.parse(api.responseText)
    for (const index_api in parsed) {
        if (parsed.hasOwnProperty(index_api)) {
            // Create new element to store the api data
            var new_div = document.createElement("div");
            var name_repos = document.createElement("h3");
            var language_repos = document.createElement("pre")
            var description_repos = document.createElement("p")

            new_div.setAttribute('class', 'infos_repos')
            name_repos.setAttribute('class', 'name')
            language_repos.setAttribute('class', 'language')
            description_repos.setAttribute('class', 'description')
            if (parsed[index_api].language) { // don't display the readme repo
                // get the api data
                var name = document.createTextNode(parsed[index_api].name)
                var language = document.createTextNode(parsed[index_api].language)
                var description = document.createTextNode(parsed[index_api].description);

                // update the page
                name_repos.appendChild(name)
                language_repos.appendChild(language)
                description_repos.appendChild(description)
                new_div.appendChild(name_repos)
                new_div.appendChild(language_repos)
                new_div.appendChild(description_repos)
                content.appendChild(new_div);

            }
        }
    }
}

api.onload = get_repos

api.open('get', "https://api.github.com/users/deadpanda-c/repos")

api.send();
transitionOnScroll()