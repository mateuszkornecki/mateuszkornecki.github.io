"use strict";

console.log(`Siema Mati!`);

const showRepos = () => {

    fetch(`https://api.github.com/users/mateuszkornecki/repos?sort=full_name&direction=asc`)

    // ! EXAMPLE HTML STRUCTURE FOR REPO CARD
    //<div class="repositories">
    //     <section class="repo">
    //     <div class="repo__content">
    //         <img src="assets/img/github-logo2.svg" alt="github logo" class="repo__image">
    //         <h4 class="repo__title">podlaskigit</h4>
    //         <p class="repo__description">Podlaskie aliasy dla gitowych komend</p>
    //     </div>
    //     <footer class="repo__footer">
    //         <a href="#" class="repo__link repo__link--demo">Demo</a>
    //         <div class="repo__separator"></div>
    //         <a href="" class="repo__link repo__link--github">Github</a>
    //     </footer>
    // </section> 

    .then(resp => resp.json())
        .then(resp => {
            let repos = resp;
            const repositories = document.querySelector('.repositories--js ');

            repos.forEach(repo => {

                console.log(repo);

                //Creating repo-card
                const repoSection = document.createElement('section');
                repoSection.className = 'repo';
                repositories.appendChild(repoSection);
                //Creating repo__content
                const repoContent = document.createElement('div');
                repoContent.className = 'repo__content';
                repoSection.appendChild(repoContent);
                //Creating repo__image
                const repoImage = document.createElement('img');
                repoImage.className = 'repo__image';
                repoImage.src = `assets/img/${repo.language}.png`
                repoImage.alt = `${repo.language} logo`
                repoContent.appendChild(repoImage);
                //Creating repo__title
                const repoTitle = document.createElement('h4');
                repoTitle.className = 'repo__title';
                repoTitle.innerHTML = repo.name;
                repoContent.appendChild(repoTitle);
                //Creating repo__description
                const repoDescription = document.createElement('p');
                repoDescription.className = 'repo__description';
                repoDescription.innerHTML = repo.description;
                repoContent.appendChild(repoDescription);
                //     <footer class="repo__footer">
                //         <a href="#" class="repo__link repo__link--demo">Demo</a>
                //         <div class="repo__separator"></div>
                //         <a href="" class="repo__link repo__link--github">Github</a>
                //     </footer>
                //Creating repo__footer
                const repoFooter = document.createElement('footer');
                repoFooter.className = 'repo__footer';
                repoSection.appendChild(repoFooter);
                //Creating repo__link--demo
                const repoLinkToDemo = document.createElement('a');
                repoLinkToDemo.classList.add('repo__link', 'repo__link--demo');
                repoLinkToDemo.href = repo.homepage;
                //Creating repo__link--demo
                repoLinkToDemo.innerHTML = 'Demo';
                repoFooter.appendChild(repoLinkToDemo);
                //Creating repo__separator
                const repoSeparator = document.createElement('div');
                repoSeparator.className = 'repo__separator';
                repoFooter.appendChild(repoSeparator);
                //Creating repo__link--github
                const repoLinkToGithub = document.createElement('a');
                repoLinkToGithub.classList.add('repo__link', 'repo__link--github');
                repoLinkToGithub.href = repo.homepage;
                repoLinkToGithub.innerHTML = 'Github';
                repoFooter.appendChild(repoLinkToGithub);

            })


            // repos.forEach(repo => {
            //     const repoSection = document.createElement('section');
            //     const repoTextWrapper = document.createElement('div');
            //     const repoName = document.createElement('h3');
            //     const repoDescription = document.createElement('p');
            //     const repoFooter = document.createElement('footer');
            //     const repoLanguage = document.createElement('span');
            //     const repoFooterTextWrapper = document.createElement('div');
            //     const repoGithub = document.createElement('a');
            //     const repoLive = document.createElement('a');

            //     repoSection.className = 'repo';
            //     repoTextWrapper.className = 'repo__text-wrapper';
            //     repoName.className = 'repo__title';
            //     repoDescription.className = 'repo__description';
            //     repoLanguage.className = 'repo__language';
            //     repoFooter.className = 'repo__footer';
            //     repoFooterTextWrapper.className = 'repo__footer-text-wrapper';
            //     repoGithub.className = 'repo__github';
            //     repoLive.className = 'repo__live';

            //     repositories.appendChild(repoSection);
            //     repoSection.appendChild(repoTextWrapper);
            //     repoTextWrapper.appendChild(repoName);
            //     repoTextWrapper.appendChild(repoDescription);
            //     repoSection.appendChild(repoFooter);
            //     repoFooter.appendChild(repoLanguage);
            //     repoFooter.appendChild(repoFooterTextWrapper);
            //     repoFooterTextWrapper.appendChild(repoGithub);
            //     repoFooterTextWrapper.appendChild(repoLive);

            //     repoName.innerHTML = repo.name;
            //     repoDescription.innerHTML = repo.description;

            //     repoGithub.innerHTML = `<a class="repo__link" href="${repo.svn_url}">Github</a>`;
            //     repoLive.innerHTML = `<a class="repo__link" href="${repo.homepage}">Live</a>`;
            //     localStorage.removeItem('User Name');

            //     switch (repo.language) {
            //         case 'HTML':
            //             repoLanguage.innerHTML = `<img class="language__icon" src="assets/img/${repo.language}.png" alt="${repo.language} icon">`
            //             break;
            //         case 'JavaScript':
            //             repoLanguage.innerHTML = `<img class="language__icon" src="assets/img/${repo.language}.png" alt="${repo.language} icon">`
            //             break;
            //         case 'CSS':
            //             repoLanguage.innerHTML = `<img class="language__icon" src="assets/img/${repo.language}.png" alt="${repo.language} icon">`
            //             break;
            //         default:
            //             repoLanguage.innerHTML = repo.language;
            //     }

            // })
        })
        .catch(err => {
            console.log(err);
        })
}

showRepos();