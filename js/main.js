!function(e){var g={};function n(I){if(g[I])return g[I].exports;var C=g[I]={i:I,l:!1,exports:{}};return e[I].call(C.exports,C,C.exports,n),C.l=!0,C.exports}n.m=e,n.c=g,n.d=function(e,g,I){n.o(e,g)||Object.defineProperty(e,g,{enumerable:!0,get:I})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,g){if(1&g&&(e=n(e)),8&g)return e;if(4&g&&"object"==typeof e&&e&&e.__esModule)return e;var I=Object.create(null);if(n.r(I),Object.defineProperty(I,"default",{enumerable:!0,value:e}),2&g&&"string"!=typeof e)for(var C in e)n.d(I,C,function(g){return e[g]}.bind(null,C));return I},n.n=function(e){var g=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(g,"a",g),g},n.o=function(e,g){return Object.prototype.hasOwnProperty.call(e,g)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nconst hiddenRepos = [\"ide-na-front\", \"WTF-04-teamwork\", \"card-material-UI\", \"pomodoro-timer-React\", \"fast-fingers\", \"timeboxing-api\"];\n\nconst filterRepos = (repos, hiddenRepos) => {\n   const publicRepos = repos.filter(({ name }) => !hiddenRepos.includes(name));\n   return publicRepos;\n}\n\nconst showRepos = (githubUserName) => {\n\n   fetch(`https://api.github.com/users/${githubUserName}/repos?sort=created`)\n      .then(resp => resp.json())\n      .then(resp => {\n         let repos = resp;\n         const repositories = document.querySelector('.repositories--js ');\n         //Used it to display on portfolio only selected repos\n         const publicRepos = filterRepos(repos, hiddenRepos);\n\n         publicRepos.forEach(repo => {\n\n            //Creating repo-card\n            const repoSection = document.createElement('section');\n            repoSection.className = 'repo';\n            repositories.appendChild(repoSection);\n            //Creating repo__content\n            const repoContent = document.createElement('div');\n            repoContent.className = 'repo__content';\n            repoSection.appendChild(repoContent);\n            //Creating repo__image\n            const repoImage = document.createElement('img');\n            repoImage.className = 'repo__image';\n            repoImage.src = `assets/img/${repo.language}.png`\n            repoImage.alt = `${repo.language} logo`\n            repoContent.appendChild(repoImage);\n            //Creating repo__title\n            const repoTitle = document.createElement('h4');\n            repoTitle.className = 'repo__title';\n            repoTitle.innerHTML = repo.name;\n            repoContent.appendChild(repoTitle);\n            //Creating repo__description\n            const repoDescription = document.createElement('p');\n            repoDescription.className = 'repo__description';\n            repoDescription.innerHTML = repo.description;\n            repoContent.appendChild(repoDescription);\n            //Creating repo__footer\n            const repoFooter = document.createElement('footer');\n            repoFooter.className = 'repo__footer';\n            repoSection.appendChild(repoFooter);\n            //Creating repo__link--demo (only if it exist)\n            if (repo.homepage) {\n               const repoLinkToDemo = document.createElement('a');\n               repoLinkToDemo.classList.add('repo__link', 'repo__link--demo');\n               repoLinkToDemo.href = repo.homepage;\n               repoLinkToDemo.innerHTML = 'Demo';\n               repoFooter.appendChild(repoLinkToDemo);\n            }\n            if (repo.homepage) {\n               const repoSeparator = document.createElement('div');\n               repoSeparator.className = 'repo__separator';\n               repoFooter.appendChild(repoSeparator);\n            }\n\n            //Creating repo__link--github\n            const repoLinkToGithub = document.createElement('a');\n            repoLinkToGithub.classList.add('repo__link', 'repo__link--github');\n            repoLinkToGithub.href = repo.svn_url;\n            repoLinkToGithub.innerHTML = 'Github';\n            repoFooter.appendChild(repoLinkToGithub);\n         })\n      })\n      .catch(err => {\n         console.log(err);\n      })\n}\n\nshowRepos(\"mateuszkornecki\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hELCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGhpZGRlblJlcG9zID0gW1wiaWRlLW5hLWZyb250XCIsIFwiV1RGLTA0LXRlYW13b3JrXCIsIFwiY2FyZC1tYXRlcmlhbC1VSVwiLCBcInBvbW9kb3JvLXRpbWVyLVJlYWN0XCIsIFwiZmFzdC1maW5nZXJzXCIsIFwidGltZWJveGluZy1hcGlcIl07XG5cbmNvbnN0IGZpbHRlclJlcG9zID0gKHJlcG9zLCBoaWRkZW5SZXBvcykgPT4ge1xuICAgY29uc3QgcHVibGljUmVwb3MgPSByZXBvcy5maWx0ZXIoKHsgbmFtZSB9KSA9PiAhaGlkZGVuUmVwb3MuaW5jbHVkZXMobmFtZSkpO1xuICAgcmV0dXJuIHB1YmxpY1JlcG9zO1xufVxuXG5jb25zdCBzaG93UmVwb3MgPSAoZ2l0aHViVXNlck5hbWUpID0+IHtcblxuICAgZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtnaXRodWJVc2VyTmFtZX0vcmVwb3M/c29ydD1jcmVhdGVkYClcbiAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgIGxldCByZXBvcyA9IHJlc3A7XG4gICAgICAgICBjb25zdCByZXBvc2l0b3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwb3NpdG9yaWVzLS1qcyAnKTtcbiAgICAgICAgIC8vVXNlZCBpdCB0byBkaXNwbGF5IG9uIHBvcnRmb2xpbyBvbmx5IHNlbGVjdGVkIHJlcG9zXG4gICAgICAgICBjb25zdCBwdWJsaWNSZXBvcyA9IGZpbHRlclJlcG9zKHJlcG9zLCBoaWRkZW5SZXBvcyk7XG5cbiAgICAgICAgIHB1YmxpY1JlcG9zLmZvckVhY2gocmVwbyA9PiB7XG5cbiAgICAgICAgICAgIC8vQ3JlYXRpbmcgcmVwby1jYXJkXG4gICAgICAgICAgICBjb25zdCByZXBvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgICAgIHJlcG9TZWN0aW9uLmNsYXNzTmFtZSA9ICdyZXBvJztcbiAgICAgICAgICAgIHJlcG9zaXRvcmllcy5hcHBlbmRDaGlsZChyZXBvU2VjdGlvbik7XG4gICAgICAgICAgICAvL0NyZWF0aW5nIHJlcG9fX2NvbnRlbnRcbiAgICAgICAgICAgIGNvbnN0IHJlcG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByZXBvQ29udGVudC5jbGFzc05hbWUgPSAncmVwb19fY29udGVudCc7XG4gICAgICAgICAgICByZXBvU2VjdGlvbi5hcHBlbmRDaGlsZChyZXBvQ29udGVudCk7XG4gICAgICAgICAgICAvL0NyZWF0aW5nIHJlcG9fX2ltYWdlXG4gICAgICAgICAgICBjb25zdCByZXBvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHJlcG9JbWFnZS5jbGFzc05hbWUgPSAncmVwb19faW1hZ2UnO1xuICAgICAgICAgICAgcmVwb0ltYWdlLnNyYyA9IGBhc3NldHMvaW1nLyR7cmVwby5sYW5ndWFnZX0ucG5nYFxuICAgICAgICAgICAgcmVwb0ltYWdlLmFsdCA9IGAke3JlcG8ubGFuZ3VhZ2V9IGxvZ29gXG4gICAgICAgICAgICByZXBvQ29udGVudC5hcHBlbmRDaGlsZChyZXBvSW1hZ2UpO1xuICAgICAgICAgICAgLy9DcmVhdGluZyByZXBvX190aXRsZVxuICAgICAgICAgICAgY29uc3QgcmVwb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIHJlcG9UaXRsZS5jbGFzc05hbWUgPSAncmVwb19fdGl0bGUnO1xuICAgICAgICAgICAgcmVwb1RpdGxlLmlubmVySFRNTCA9IHJlcG8ubmFtZTtcbiAgICAgICAgICAgIHJlcG9Db250ZW50LmFwcGVuZENoaWxkKHJlcG9UaXRsZSk7XG4gICAgICAgICAgICAvL0NyZWF0aW5nIHJlcG9fX2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICBjb25zdCByZXBvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICByZXBvRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ3JlcG9fX2Rlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIHJlcG9EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSByZXBvLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgcmVwb0NvbnRlbnQuYXBwZW5kQ2hpbGQocmVwb0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIC8vQ3JlYXRpbmcgcmVwb19fZm9vdGVyXG4gICAgICAgICAgICBjb25zdCByZXBvRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgICAgICByZXBvRm9vdGVyLmNsYXNzTmFtZSA9ICdyZXBvX19mb290ZXInO1xuICAgICAgICAgICAgcmVwb1NlY3Rpb24uYXBwZW5kQ2hpbGQocmVwb0Zvb3Rlcik7XG4gICAgICAgICAgICAvL0NyZWF0aW5nIHJlcG9fX2xpbmstLWRlbW8gKG9ubHkgaWYgaXQgZXhpc3QpXG4gICAgICAgICAgICBpZiAocmVwby5ob21lcGFnZSkge1xuICAgICAgICAgICAgICAgY29uc3QgcmVwb0xpbmtUb0RlbW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICByZXBvTGlua1RvRGVtby5jbGFzc0xpc3QuYWRkKCdyZXBvX19saW5rJywgJ3JlcG9fX2xpbmstLWRlbW8nKTtcbiAgICAgICAgICAgICAgIHJlcG9MaW5rVG9EZW1vLmhyZWYgPSByZXBvLmhvbWVwYWdlO1xuICAgICAgICAgICAgICAgcmVwb0xpbmtUb0RlbW8uaW5uZXJIVE1MID0gJ0RlbW8nO1xuICAgICAgICAgICAgICAgcmVwb0Zvb3Rlci5hcHBlbmRDaGlsZChyZXBvTGlua1RvRGVtbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVwby5ob21lcGFnZSkge1xuICAgICAgICAgICAgICAgY29uc3QgcmVwb1NlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgcmVwb1NlcGFyYXRvci5jbGFzc05hbWUgPSAncmVwb19fc2VwYXJhdG9yJztcbiAgICAgICAgICAgICAgIHJlcG9Gb290ZXIuYXBwZW5kQ2hpbGQocmVwb1NlcGFyYXRvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vQ3JlYXRpbmcgcmVwb19fbGluay0tZ2l0aHViXG4gICAgICAgICAgICBjb25zdCByZXBvTGlua1RvR2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgcmVwb0xpbmtUb0dpdGh1Yi5jbGFzc0xpc3QuYWRkKCdyZXBvX19saW5rJywgJ3JlcG9fX2xpbmstLWdpdGh1YicpO1xuICAgICAgICAgICAgcmVwb0xpbmtUb0dpdGh1Yi5ocmVmID0gcmVwby5zdm5fdXJsO1xuICAgICAgICAgICAgcmVwb0xpbmtUb0dpdGh1Yi5pbm5lckhUTUwgPSAnR2l0aHViJztcbiAgICAgICAgICAgIHJlcG9Gb290ZXIuYXBwZW5kQ2hpbGQocmVwb0xpbmtUb0dpdGh1Yik7XG4gICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pXG59XG5cbnNob3dSZXBvcyhcIm1hdGV1c3prb3JuZWNraVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);