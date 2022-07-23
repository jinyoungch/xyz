import React from 'react';
import { Converter } from 'showdown';
import { Layout, Post } from '../../components';
const readingTime = require('reading-time');

export default function ThoughtsRouteIndexPage({ posts = [] }) {
  return (
    <Layout siteTitle="jinyoung / thoughts" pageTitle="thoughts">
      {posts.map(({ title, category, date, tldr, slug, readingMins }) => (
        <Post 
          key={slug} 
          category={category}
          date={date} 
          readingMins={readingMins} 
          slug={slug} 
          title={title} 
          isThoughtsEntry>
          {tldr}
        </Post>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  //posts refer to entries saved in root:/<route (eg. thoughts or code)>/posts
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      const content = values[index];
      const converter = new Converter({ metadata: true });
      const body = converter.makeHtml(content.default);
      const { title, date, tldr, category } = converter.getMetadata();

      const { minutes } = readingTime(body);
      const readingMins = Math.round(minutes);
      console.log(`reading time for [${title}]:`, `${readingMins}mins`)

      return {
        category,
        date,
        readingMins,
        slug,
        title,
        tldr,
      };
    });

    //this return is where posts are sorted according to latest to earliest:
    return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  })(require.context('../../../posts/thoughts', true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
