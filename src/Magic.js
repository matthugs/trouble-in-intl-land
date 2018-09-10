import React, {Component} from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import sanitizeHtml from 'sanitize-html';

const getTextFromElement = element => sanitizeHtml(
  renderToStaticMarkup(element),
  {
    allowedTags: [],
    allowedAttributes: [],
  },
);

export default class Magic extends Component {
  render = () => getTextFromElement(this.props.children)
}
