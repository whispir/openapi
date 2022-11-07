#!/usr/bin/env node

/**
 * Evaluates the Conventional Commit type between two semantic versions
 * @input previousVersion - string
 * @input newVersion - string
 * 
 * @output conventional-commit type (either 'feat!', 'feat', or 'fix')
 */

// https://www.conventionalcommits.org/en/v1.0.0/#summary
const semverConventionalcommitMap = {
    major: 'feat!',
    minor: 'feat',
    patch: 'fix',
}

import('semver-diff').then((semverDiff) => {
    const [, , previousVersion, newVersion] = process.argv

    const semver = semverDiff.default(previousVersion, newVersion);
    const conventionalCommitMessage = semverConventionalcommitMap[semver];

    console.log(conventionalCommitMessage)
})
