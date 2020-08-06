import React from 'react';
import {
  AiFillGithub as Github,
  AiFillGitlab as Gitlab,
  AiFillMediumCircle as Medium,
} from 'react-icons/ai';
import { FaDev as Dev } from 'react-icons/fa';
import { GoKey as Key } from 'react-icons/go';

const config = {
  meta: {
    hero: (
      <span>
        Hello, I&apos;m <span className="text-primary">Haseeb</span>
        {'  '} 🧑‍💻, a software engineer 🖥️. Welcome to my{' '}
        <span className="text-primary">website</span> and{' '}
        <span className="text-primary">blog</span>
        {'  '}📒.
      </span>
    ),
    social: [
      {
        icon: <Github />,
        url: 'https://github.com/hmajid2301',
      },
      {
        icon: <Gitlab />,
        url: 'https://gitlab.com/hmajid2301',
      },
      {
        icon: <Medium />,
        url: 'https://medium.com/@hmajid2301',
      },
      {
        icon: <Dev />,
        url: 'https://dev.to/hmajid2301',
      },
      {
        icon: <Key />,
        url: '/public.gpg',
      },
    ],
  },
  projects: [
    {
      alt: 'Stegappasaurus app on a vector mobile',
      text: 'Stegappasaurus',
      image: '/projects/stegappasaurus.png',
      link: 'https://stegappasaurus.haseebmajid.dev',
    },
    {
      alt: 'WIP for nerf tank.',
      text: '[WIP]: Nerf Tank',
      image: '/projects/nerf.jpg',
      link: 'https://gitlab.com/hmajid2301/nerf-tank',
    },
    {
      alt: 'Composerisation demo website.',
      text: 'Composerisation',
      image: '/projects/composerisation.png',
      link: 'https://composerisation.haseebmajid.dev',
    },
    {
      alt: 'Charity shop exchange website.',
      text: 'Charity Shop Exchange',
      image: '/projects/charity-shop.png',
      link: 'https://charityshopexchange.com/',
    },
  ],
  repositories: [
    {
      name: 'live-light',
      url: 'https://github.com/hmajid2301/live-light',
      description:
        "A light made with PI Zero, which will change colour depending on if I'm in a meeting or not.",
      stars: 10,
    },
    {
      name: 'gitlab-auto-release',
      url: 'https://gitlab.com/gitlab-automation-toolkit/gitlab-auto-release',
      description:
        'A CLI tool that allows you create releases in GitLab automatically.',
      stars: 7,
    },
    {
      name: 'articles',
      url: 'https://github.com/hmajid2301/articles',
      description:
        'This repo contains all the articles written by me, in markdown and also all of their example source code.',
      stars: 57,
    },
    {
      name: 'gitlab-github-mirror-repo',
      url: 'https://github.com/hmajid2301/gitlab-github-mirror-repo',
      description:
        'A script that will create a new repo on Gitlab and Github. Then mirror (push) Gitlab to Github.',
      stars: 0,
    },
    {
      name: 'markdown-mermaid-to-images',
      url: 'https://github.com/hmajid2301/markdown-mermaid-to-images',
      description: 'Exports mermaid diagrams in Markdown documents as images.',
      stars: 0,
    },
    {
      name: 'gitlab-auto-mr',
      url: 'https://gitlab.com/gitlab-automation-toolkit/gitlab-auto-mr',
      description:
        ' A CLI script that allows you create MR in GitLab automatically.',
      stars: 0,
    },
  ],
  history: [
    {
      alt: 'V1 of site',
      image: 'history/v1.png',
      link: 'https://v1.haseebmajid.dev',
      text: 'Version 1',
    },
    {
      alt: 'V2 of site',
      image: 'history/v2.png',
      link: 'https://v2.haseebmajid.dev',
      text: 'Version 2',
    },
  ],
};

export default config;
