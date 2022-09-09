import * as React from 'react';
import { renderToString } from 'react-dom/server';
import properties from '@sitevision/api/server/Properties';
import router from '@sitevision/api/common/router';
import appData from '@sitevision/api/server/appData';
import nodeIterator from '@sitevision/api/server/NodeIteratorUtil';
import App from './components/App';

router.get('/', (req, res) => {
  const message = 'Hello, world!';
  const name = appData.get('name');
  var startPage = appData.getNode('page');
  var pages = [];

  var nodes = nodeIterator.getMenuItems(startPage);

  while (nodes.hasNext()) {
    var node = nodes.next();
    pages.push(
      {
        id: properties.get(node, 'jcr:uuid'),
        name: properties.get(node, 'displayName'),
        uri: properties.get(node, 'URI')
      }
    );
  };

  res.agnosticRender(renderToString(<App message={message} name={name} pages={pages} />), {
    message,
    pages,
    name,
  });
});
