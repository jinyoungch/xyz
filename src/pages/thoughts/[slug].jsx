import React from 'react';
import { Converter } from 'showdown';
import showdownHighlight from 'showdown-highlight';
import { Layout, Post } from '../../components';
import Link from 'next/link';

export default function ThoughtsPage({ title = '', date = '', body = '' }) {
  return (
    <Layout siteTitle={title} pageTitle="thoughts">
      <Post title={title} date={date}>
        {body}
      </Post>
      <p className='return-to-main'>
        <Link href={'/thoughts'}><a>• return to <b>/thoughts •</b></a></Link> 
      </p>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../../posts/thoughts/${slug}.md`);
  const converter = new Converter({ metadata: true, extensions: [showdownHighlight] });
  const body = converter.makeHtml(content.default);
  const { title, date } = converter.getMetadata();

  //markdown file converted to html (type: string):
  console.log(body)

  return {
    props: {
      title,
      date,
      body,
    },
  };
}

export async function getStaticPaths() {
  const thoughtsSlugs = ((context) => {
    const keys = context.keys();

    const data = keys.map((key) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      return slug;
    });

    return data;
  })(require.context('../../../posts/thoughts', true, /\.md$/));

  const paths = thoughtsSlugs.map((slug) => `/thoughts/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
