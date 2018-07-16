This expects to live at `propublica/political-ad-collector`.

The `politicaladcollector.com` domain goes to a CloudFront'd S3 that simply redirects to `https://projects.propublica.org/political-ad-collector/`. (Cloudfront to terminate SSL for free, S3 to statically redirect this single page site.)

Then, we've got `projects.propublica.org/political-ad-collector/` set up to serve as a dumb proxy to `https://propublica.github.io/political-ad-collector/` (so plz don't rename this repo).

All of this to 1) provide SSL on the custom domain and 2) put it under a propublica URL for reader trust and whatnot.

You can still edit the assets and `index.html` to your hearts content! That `projects.propublica.org/political-ad-collector/` url should work as if it were normal Github Pages.

This is deployed automatically, on deploy to the `master` branch.

Jeremy (7/16/2018) doesn't know how to update the SCSS...