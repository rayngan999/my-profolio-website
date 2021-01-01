import { css } from '@emotion/core';
import theme from '../../config/theme';

const prism = css`
  p > code,
  li > code {
    color: #f8f8f2;
    background: #131316;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    padding: 0.4em 0.5em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
    tab-size: 4;
    hyphens: none;
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
  }
  pre[class*='language-'] {
    padding: 1em;
    margin: 1.5rem 0;
    overflow: auto;
    border-radius: 0.3em;
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary.base};
    }
    &::-webkit-scrollbar-track {
      background: ${theme.colors.black.light};
    }
    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }
  }
  pre[class*='language-'] {
    background: #131316;
  }
  p > code[class*='language-'],
  li > code[class*='language-'] {
    border-radius: 0.3em;
    background: rgba(52, 152, 219, 0.2);
    color: #2e3246;
    bottom: 2px;
    position: relative;
  }
  .token.operator {
    color: #bc78d7;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #7ad7e2;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ef514f;
  }
  .token.boolean,
  .token.number {
    color: #ae81ff;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #e5db89;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }
  .token.atrule,
  .token.attr-value,
  .token.class-name {
    color: #e6db74;
  }
  .token.function {
    color: #84c16a;
  }

  .token.keyword {
    color: #6095ea;
  }
  .token.regex,
  .token.important {
    color: #fd971f;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .about-section {
    width: 80vw;
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;
    @include media(">=phone", "<lgphone") {
      flex-direction: column-reverse;
    }
    @include media(">=lgphone", "<tablet") {
      flex-direction: column-reverse;
    }
    @include media(">=tablet", "<desktop") {
      flex-direction: column-reverse;
      align-items: center;
    }
    .content {
      width: 50%;
      @include media(">=phone", "<lgphone") {
        width: 100%;
      }
      @include media(">=lgphone", "<tablet") {
        width: 100%;
      }
      @include media(">=tablet", "<desktop") {
        width: 100%;
      }
  
      h1 {
        font-size: 3rem;
        line-height: 20px;
        @include media(">=tablet", "<desktop") {
          text-align: center;
        }
      }
      p {
        @include media(">=tablet", "<desktop") {
          text-align: center;
        }
      }
    }
    .image-wrapper {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      @include media(">=phone", "<lgphone") {
        width: 100%;
      }
      @include media(">=lgphone", "<tablet") {
        width: 100%;
      }
      @include media(">=tablet", "<desktop") {
        width: 100%;
      }
    }
  }
  
`;

export default prism;
