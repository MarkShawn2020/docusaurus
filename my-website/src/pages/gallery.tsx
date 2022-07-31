/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState} from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';

import Layout from '@theme/Layout';

export default (): JSX.Element => {
  const context = useDocusaurusContext();
  const imgs = context.siteConfig.customFields.images as string[];
  const getRandomIndex = () => Math.floor(Math.random() * imgs.length);
  const [index, setIndex] = useState(getRandomIndex());

  return (
    <Layout>
      <Translate>click to see next random page</Translate>
      {imgs.length > 0 && (
        <img
          role="presentation"
          src={useBaseUrl(imgs[index])}
          alt={imgs[index]}
          onClick={() => setIndex(getRandomIndex())}
        />
      )}
    </Layout>
  );
};
