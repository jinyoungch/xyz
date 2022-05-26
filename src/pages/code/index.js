import React from 'react';
import { Converter } from 'showdown';
import { Layout, Post } from '../../components';

export default function CodeRouteIndexPage({ posts = [] }) {
  return (
    <Layout siteTitle="jinyoung / code" pageTitle="code">
      <p>Some <code>hackathon</code> projects were developed in collaboration.</p>
      {posts.map(({ title, date, stack, slug, hackathon, live_demo }) => (
        <Post 
          key={slug} 
          title={title} 
          date={date} 
          slug={slug} 
          hackathon={hackathon} 
          live_demo={live_demo}
          isStack>
          {stack}
        </Post>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  //posts refer to entries saved in root:/posts
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      const content = values[index];
      const converter = new Converter({ metadata: true });
      converter.makeHtml(content.default);
      const { title, date, stack, hackathon, live_demo } = converter.getMetadata();

      return {
        title,
        date,
        stack,
        slug,
        hackathon,
        live_demo,
      };
    });

    //this return is where thought posts are sorted according to latest to earliest:
    return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  })(require.context('../../../posts/code', true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
