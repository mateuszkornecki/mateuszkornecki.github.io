"use strict";

const hiddenRepos = ["ide-na-front", "WTF-04-teamwork", "card-material-UI", "pomodoro-timer-React", "fast-fingers", "timeboxing-api", "grouped_categories"];

const filterRepos = (repos, hiddenRepos) => {
   const publicRepos = repos.filter(({ name }) => !hiddenRepos.includes(name));
   return publicRepos;
}

const showRepos = (githubUserName) => {

   fetch(`https://api.github.com/users/${githubUserName}/repos?sort=created`)
      .then(resp => resp.json())
      .then(resp => {
         let repos = resp;
         const repositories = document.querySelector('.repositories--js ');
         //Used it to display on portfolio only selected repos
         const publicRepos = filterRepos(repos, hiddenRepos);

         publicRepos.forEach(repo => {

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
            //Creating repo__link--demo (only if it exist)
            if (repo.homepage) {
               const repoLinkToDemo = document.createElement('a');
               repoLinkToDemo.classList.add('repo__link', 'repo__link--demo');
               repoLinkToDemo.href = repo.homepage;
               repoLinkToDemo.innerHTML = 'Demo';
               repoFooter.appendChild(repoLinkToDemo);
            }
            if (repo.homepage) {
               const repoSeparator = document.createElement('div');
               repoSeparator.className = 'repo__separator';
               repoFooter.appendChild(repoSeparator);
            }

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

showRepos("mateuszkornecki");