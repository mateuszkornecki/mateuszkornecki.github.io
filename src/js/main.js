"use strict";

const showRepos = () => {

    fetch(`https://api.github.com/users/mateuszkornecki/repos?sort=updated`)
        .then(resp => resp.json())
        .then(resp => {
            let repos = resp;
            const repositories = document.querySelector('.repositories--js ');

            repos.forEach(repo => {

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
                //Creating repo__footer
                const repoFooter = document.createElement('footer');
                repoFooter.className = 'repo__footer';
                repoSection.appendChild(repoFooter);
                //Creating repo__link--demo
                if (repo.homepage) {
                    const repoLinkToDemo = document.createElement('a');
                    repoLinkToDemo.classList.add('repo__link', 'repo__link--demo');
                    repoLinkToDemo.href = repo.homepage;
                    //Creating repo__link--demo
                    repoLinkToDemo.innerHTML = 'Demo';
                    repoFooter.appendChild(repoLinkToDemo);
                }
                //Creating repo__separator
                // const repoSeparator = document.createElement('div');
                // repoSeparator.className = 'repo__separator';
                // repoFooter.appendChild(repoSeparator);
                //Creating repo__link--github
                const repoLinkToGithub = document.createElement('a');
                repoLinkToGithub.classList.add('repo__link', 'repo__link--github');
                repoLinkToGithub.href = repo.svn_url;
                repoLinkToGithub.innerHTML = 'Github';
                repoFooter.appendChild(repoLinkToGithub);
            })
        })
        .catch(err => {
            console.log(err);
        })
}

showRepos();