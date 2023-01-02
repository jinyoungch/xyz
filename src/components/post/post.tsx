// External Imports
import React from 'react';
import Link from 'next/link';

// Internal Imports
import styles from './post.module.css';

export default function Post({
  title = '',
  tag='',
  date = '',
  isThoughtsEntry = false,
  isCodeEntry = false,
  slug = '/',
  children = null,
  hackathon = 'no',
  live_demo = 'no',
  readingMins = 0,
  projectSummary = ''
}) {

  const postTagBackgroundGenerator = (tag) => {
    switch (tag) {
      case 'career':
        return 'thoughtsPostCareerTag'
      case 'personal':
        return 'thoughtsPostPersonalTag'
      default:
        break;
    } (tag === '')
  }

  return (
    <section className={styles.post}>
      <hgroup>
        {isCodeEntry && (
          <Link href={`${live_demo}`} as={`${live_demo}`}>
            <a>
              <h2>{title}<kbd> ↵</kbd></h2>
            </a>
          </Link>
        )}
        {isThoughtsEntry && (
          <Link href={"/thoughts/[slug]"} as={`/thoughts/${slug}`} passHref>
            <div className='thoughtsPostTitleAndTag'>
              <a>
                <h2>{title}</h2>
              </a>
              <a>
                <code className={postTagBackgroundGenerator(tag)}>{tag}</code>
              </a>
            </div>  
          </Link>
        )}
        {/* for when posts are clicked; only applies to /thoughts posts */}
        {/* because the /code posts are hyperlinked to demo/sourcecode paths */}
        {(!isCodeEntry && !isThoughtsEntry) && (
          <div className='thoughtsPostTitleAndTag'>
            <h2>{title}</h2>
            <a>
              <code className={postTagBackgroundGenerator(tag)}>{tag}</code>
            </a>
        </div>  
        )}
        <h3 className='date'>{date} {readingMins !== 0 ? `| ⏳: ${readingMins} mins` : null}</h3>
      </hgroup>
      {isThoughtsEntry || isCodeEntry ? (
        <p>
          <b>{isThoughtsEntry ? `tldr: ` : `stack: `}</b>
          {children}
          <br />
          {isThoughtsEntry && (
            <Link href="/thoughts/[slug]" as={`/thoughts/${slug}`}>
              <a>read more</a>
            </Link>
          )}
          {isCodeEntry && (
            <>
              <div dangerouslySetInnerHTML={{ __html: projectSummary }} />
            </>
          )}
        </p>
      ) : ( 
      <div dangerouslySetInnerHTML={{ __html: children }} />
      )}
      {hackathon !== 'no' && isCodeEntry ? (
      <>
        <code>hackathon</code>
      </>
      ) : null}
    </section>
  );
}
