/**
 * Internal dependencies
 */
import './wp-init.js';
import '../scss/style.scss';
import '@wordpress/core-data';
import * as gjsBlocks from './blocks';
import * as gjsComponents from './components';

/**
 * WordPress dependencies
 */
import * as i18n from '@wordpress/i18n';
import * as blocks from '@wordpress/blocks';
import * as components from '@wordpress/components';
import * as coreBlocks from '@wordpress/core-blocks';
import * as element from '@wordpress/element';
import * as data from '@wordpress/data';
import * as editor from '@wordpress/editor';
import * as editPost from '@wordpress/edit-post';
import * as plugins from '@wordpress/plugins';

const lib = {
  blocks: gjsBlocks,
  components: gjsComponents,
};

export {
  i18n,
  blocks,
  components,
  coreBlocks,
  element,
  data,
  editor,
  editPost,
  plugins,
  lib,
};
