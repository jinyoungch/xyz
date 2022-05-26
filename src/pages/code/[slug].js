import React from 'react';
import { Converter } from 'showdown';
import showdownHighlight from 'showdown-highlight';
import { Layout, Post } from '../../components';

export default function CodePage({ title = '', date = '', body = '' }) {
  return (
    <Layout siteTitle={title} pageTitle="code">
      <Post title={title} date={date}>
        {body}
      </Post>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../../posts/code/${slug}.md`);
  const converter = new Converter({ metadata: true, extensions: [showdownHighlight] });
  const body = converter.makeHtml(content.default);
  const { title, date } = converter.getMetadata();

  return {
    props: {
      title,
      date,
      body,
    },
  };
}

export async function getStaticPaths() {
  const codeSlugs = ((context) => {
    const keys = context.keys();

    const data = keys.map((key) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      return slug;
    });

    return data;
  })(require.context('../../../posts/code', true, /\.md$/));

  const paths = codeSlugs.map((slug) => `/code/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
