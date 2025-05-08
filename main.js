const xhttp = new XMLHttpRequest();
const endpoint = "https://api.github.com/users/ExtratoZ";

xhttp.open("GET", endpoint, true);

xhttp.onload = function () {
    if (xhttp.status == 200) {
        const resposta = JSON.parse(xhttp.responseText);

        document.getElementById("avatar").src = resposta.avatar_url;
        document.getElementById("user").innerText = resposta.name;
        document.getElementById("tag").innerText = `@` + resposta.login;
        document.getElementById("repositories").innerText = resposta.public_repos;
        document.getElementById("followers").innerText = resposta.followers;
        document.getElementById("following").innerText = resposta.following;
        document.getElementById("profile-link").href = resposta.html_url;
            
    } else  {
        alert("Usuário não encontrado!");
    }
};

xhttp.send();