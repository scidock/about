# Overview

### Premium membership

A premium membership costs $4.99 per month (student discounts are available!) and enables

- unlimited length document editing,
- one-click publishing,
- integrations with Dropbox and Google Drive,
- offline mode,
- and support over email.

### Custom LaTeX packages

A number of useful, common LaTeX packages can be included with the `\usepackage` macro.

- [ae](https://ctan.org/pkg/ae)
- [amscls](https://ctan.org/pkg/amscls)
- [amsfonts](https://ctan.org/pkg/amsfonts)
- [amsmath](https://ctan.org/pkg/amsmath)
- [babelib](https://ctan.org/pkg/babelbib)
- [base](https://ctan.org/pkg/base)
- [carlisle](https://ctan.org/pkg/carlisle)
- [colortbl](https://ctan.org/pkg/colortbl)
- [dvipdfmx-def](https://ctan.org/pkg/dvipdfmx-def)
- [etex-pkg](https://ctan.org/pkg/etex-pkg)
- [fancyhdr](https://ctan.org/pkg/fancyhdr)
- [fix2col](https://ctan.org/pkg/fix2col)
- [geometry](https://ctan.org/pkg/geometry)
- [graphics](https://ctan.org/pkg/graphics)
- [hyperref](https://ctan.org/pkg/hyperref)
- [ltxmisc](https://ctan.org/pkg/ltxmisc)
- [mflogo](https://ctan.org/pkg/mflogo)
- [mfnfss](https://ctan.org/pkg/mfnfss)
- [natbib](https://ctan.org/pkg/natbib)
- [oberdiek](https://ctan.org/pkg/oberdiek)
- [pdtex-def](https://ctan.org/pkg/pdftex-def)
- [pslatex](https://ctan.org/pkg/pslatex)
- [psnfss](https://ctan.org/pkg/psnfss)
- [pspicture](https://ctan.org/pkg/pspicture)
- [url](https://ctan.org/pkg/url)

We plan on eventually supporting all custom packages hosted at
[CTAN](https://www.ctan.org), but please [let us know](mailto:support@latexbase.com)
if that's a critical need for you.

### Images

Images can be included in LaTeX Base documents by using the
`\includegraphics` macro from the `graphicx`
package. However, instead of providing a file path, you must use a direct
image url. imgur, Google Drive, and Dropbox are all good candidates for
uploading an image to be included in a LaTeX Base doc. Once uploaded to a
third-party file hosting service, make sure the image is publicly viewable
and that you've copied a direct link (ie using "Copy Image Location" in
Chrome) to paste as an argument to `\includegraphics` within
LaTeX Base.

### What is offline mode?

Unlike other online LaTeX editors, we perform typesetting right in the
browser! That means that if you're not connected to the Internet, you can
still make changes to, preview, and download your files when using Chrome
46+ or Opera 33+. Just navigate to [https://latexbase.com](https://latexbase.com)
when offline to load the app. The "https" bit is important. Also make
sure not to hard refresh! Offline mode is powered by service workers
which are discussed in
[this article](https://developer.mozilla.org/docs/Web/API/Service_Worker_API).

### Offline mode caveats

- Offline mode is currently only available for Chrome 46+ and Opera 33+.
- The compiler will fail if you try to use a new package while offline.
  That means you can only use packages offline that you've previously
  used while online.

### Browser compatibility

We're working to make document previews instantaneous, but today you
should expect a few second delay before your changes are reflected in the
live preview. The preview updates most quickly in Firefox, likely because
of asm.js optimizations.

### Other questions and comments?

Feel free to [get in touch](mailto:support@latexbase.com)!
