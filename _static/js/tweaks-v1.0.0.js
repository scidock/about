/**
 * A collection of tweaks to the sphinx readthedocs ui.
 */

function modifyElement(selector, modifier) {
  const target = document.querySelector(selector);
  if (target) {
    modifier(target);
  }
}

function removeElement(selector) {
  modifyElement(selector, function(element) {
    element.parentNode.removeChild(element);
  });
}

function setAttributes(selector, options) {
  modifyElement(selector, function(element) {
    for (key in options) {
      element[key] = options[key];
    }
  });
}

function fixHomeLink1() {
  setAttributes('a.icon-home', {
    href: 'https://scidock.com',
  });
}

function fixHomeLink2() {
  setAttributes('.wy-breadcrumbs > li > a', {
    href: 'https://scidock.com',
    textContent: 'LaTeX Base by SciDock',
  });
}

function removeGitHubEditing() {
  removeElement('li.wy-breadcrumbs-aside');
}

function removeRtdPro() {
  removeElement('div.rtd-pro');
}

function setPageTitle() {
  const title = document.title;
  const separator = ' — ';
  if (title.indexOf(separator) !== -1) {
    document.title = 'LaTeX Base by SciDock | ' + title.split(' — ')[0];
  }
}

(function main() {
  [
    fixHomeLink1,
    fixHomeLink2,
    removeGitHubEditing,
    removeRtdPro,
    setPageTitle,
  ].forEach(function(tweak) {
    setInterval(tweak, 50);
  });
})();
