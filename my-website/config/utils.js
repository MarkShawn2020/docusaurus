/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const fs = require('fs');

const historyVersions = require('../versions.json');
const me = require('./me');

const getGithubRepoUrl = () =>
  `https://github.com/${me.organizationName}/${me.projectName}`;

const getGithubEditUrl = () => `${getGithubRepoUrl()}/edit/master/`;

async function getLatestVersion() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, '../library/VERSION.txt'),
      'utf-8',
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data.replace(/\s+/g, ''));
      },
    );
  });
}

/** @type {Promise<string[]>} */
async function asyncLoadGallery() {
  const images = [];
  const galleryDir = path.resolve(__dirname, '../static/gallery');

  return new Promise((resolve, reject) => {
    fs.readdir(galleryDir, {withFileTypes: true}, (err, films) => {
      if (err) {
        reject(err);
      }
      if (!films) {
        return;
      }
      films.forEach((film) => {
        if (film.isFile()) {
          return;
        }
        const filmDir = path.resolve(galleryDir, film.name);
        fs.readdir(filmDir, (err2, imgs) => {
          if (err2) {
            reject(err2);
          }
          if (!imgs) {
            return;
          }
          imgs.forEach((imgName) => {
            const imgPath = path.join('@site:/gallery', film.name, imgName);
            images.push(imgPath);
          });
        });
      });
    });
    console.log(`loaded ${images.length} images for Gallery`);
    resolve(images);
  });
}

module.exports = {
  getGithubRepoUrl,
  getGithubEditUrl,
  historyVersions,
  getLatestVersion,
  asyncLoadGallery,
};
