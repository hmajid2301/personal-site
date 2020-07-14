import React from 'react';

import BlogPost from './BlogPost';

import { render } from 'test-utils';

const data = `
<blockquote>
<p>Cover image from, <a href="https://worldvectorlogo.com/downloaded/storybook-1">World Vector Logo</a></p>
</blockquote>
<p>Recently I started to re-design my website, I decided to use this as an opportunity to learn some new technologies
such as Gatsby, Tailwind. I also decided to try using Storybook. For this said project I used MDX to create my
Storybook stories. In this article, I will show you how you can create Storybooks stories, for a Gatsby project
with TailwindCSS, Typescript using MDX.</p>
<p>You can find an example project using this <a href="https://gitlab.com/hmajid2301/personal-site/-/tree/e415420744b2a8f49eddaf2d3058b23c70f46638/.storybook">here</a>.
You can also find a <a href="https://storybook.haseebmajid.dev/">demo site</a> for said project.</p>
<blockquote>
<p>This article assumes you already familiar with Typescript, TailwindCSS and Gatsby.</p>
</blockquote>
<h2>Storybook</h2>
<blockquote>
<p>Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient. - Storybook Website</p>
</blockquote>
<p>Storybook allows us to create and test (visually) components in isolation. It can be a great way to both document all
of your components but also speed up development as all you need to focus on is one component at a time. Storybook
also has a ton of extra plugins/addons which can help to customise storybooks to your liking. One such example being
checking for any accessibility issues your components may have.</p>
<h3>MDX</h3>
<p>MDX is a combination of markdown mixed with JSX. It allows us to "execute" and "render" JSX code from within an MDX
document. When used with Storybook it means we get all of the flexibility of markdown. So we can use normal markdown
syntax, to document our component. We also get access to MDX-flavored Component Story Format (CSF) which includes a collection
of components called "Doc Blocks", that allow Storybook to translate MDX files into storybook stories.</p>
<h2>Setup</h2>
<p>OK let's go over what we need to do, first let's create our gatsby site by using the <code class="language-text">gatsby-cli</code> tool.</p>
<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">gatsby new gatsby-site
<span class="token builtin class-name">cd</span> gatsby-site</code></pre></div>
<h3>TailwindCSS</h3>
<p>Now let's see how we add tailwindcss to this site:</p>
<div class="gatsby-highlight" data-language="bash"><pre style="counter-reset: linenumber 4" class="language-bash line-numbers"><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> gatsby-plugin-typescript gatsby-plugin-postcss tailwindcss twin.macro postcss-preset-env
`;

describe('<BlogPost />', () => {
  test('Render with default styles', () => {
    const { getByText } = render(
      <BlogPost
        data={data}
        date="2020-06-29"
        slug="/blog/my-first-post"
        tags={['gatsby', 'documentation', 'mdx']}
        title="How to use Storybooks, Gatsby, Babel, Tailwind, Typescript together"
      />
    );

    const codeBlock = getByText(
      'How to use Storybooks, Gatsby, Babel, Tailwind, Typescript together'
    );
    expect(codeBlock).toBeTruthy();
  });
});
