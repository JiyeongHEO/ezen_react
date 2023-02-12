/** 23-02-05 시작  */
/** 23-02-12 시작
 * 
 * 
  */
import React from 'react';
import styled from 'styled-components'; 

const NewsItemBlock = styled.div` //여기. eg)styled.button 등등
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;


function NewsItem({ariticle}) {
    const {urlToImage, url, title, description } = ariticle;

    return (
        <NewsItemBlock>

        {urlToImage && (
        <div className='thumbnail'> 
          <a href={url} target='_blank' rel='noopener noreferrer'> {/* noopener noreferrer:<a>로열때 보안취약 -> 세션기록막는목적 */}
            <img src={urlToImage} alt='thumbnail' />
          </a>
        </div>)
        }

        <div className='contents'> 
          <h2>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              {title}
            </a>
          </h2>
          <p>{description}</p>
        </div>)

        </NewsItemBlock>
    );
  }
  
  
  export default NewsItem;

  