# Whispir SDK Code-Generator

This package is responsible for generating software development kits (SDK's) in various languages, using Whispir's OpenAPI Specification as the source of truth. Whispir uses [OpenAPI Generator](https://openapi-generator.tech/) with customised [Mustache templates](https://mustache.github.io/) to generate these SDK's in many languages.

## Running the generator

Ensure you have Java installed, it is required by the OAS generator. The easiest way to install is through Brew.
```bash
> brew install java
> sudo ln -sfn $(brew --prefix)/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk # symlink the Java runtime
```

Run the generator with the following steps:

```bash
> yarn # install yarn dependencies
> yarn generate # generate SDK from the OAS file
```

## Supported languages

Various languages are supported in separately published SDK's.

* Node
  * 
  * [typescript-node OpenAPI Generator Mustache files](https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources/typescript-node)
  * [typescript-node OpenAPI Generator Documentation](https://openapi-generator.tech/docs/generators/typescript-node)
  * [whispir-node Git repository](https://github.com/whispir/whispir-node)
* Java
  * [java OpenAPI Generator Mustache files](https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources/java)
  * [java OpenAPI Generator Documentation](https://openapi-generator.tech/docs/generators/java)
  * [whispir-java Git repository](https://github.com/whispir/whispir-java)

## Adding a new language

1. Create a new Github repository from Whispir's [opensource-repo Git template](https://github.com/whispir/opensource-repo), with the git repository named in the format `whispir-<language>` (e.g. `whispir-node` or `whispir-go`). The opensource-repo template provides common opensource repository files such as `LICENSE`, Github issue templates, and a conventional commit release workflow, which is used to semantically version and maintain a changelog for the repository's contents.
   1. Ensure the repository belongs to the `whispir` Github organisation
   2. Under "Settings" in the new repository, make the following changes in each section (all other boxes should be unticked):
      1. "General":
         1. `Features`:
            1. `Issues`: Yes
            2. `Preserve this repository`: Yes
            3. `Discussions`: Yes
         2. `Pull Requests`:
            1. `Allow squash merging`: Yes
               1. Select `Default to pull request title` - this ensures that squash commits reference the conventional-commit pull request title, enabling semantic versioning via conventional commit messages.
            2. `Allow auto-merge`: Yes
            3. `Automatically delete head branches`: Yes
      2. "Branches":
         1. Add a `main` branch protection rule:
            1. `Require a pull request before merging`: Yes
               1. `Require approvals`: Yes
            2. `Require status checks to pass before merging`: Yes
               1. `Require branches to be up to date before merging`: Yes
               2. `Status checks that are required.`:
                  1. `conventional-pr-title`
            3. `Require conversation resolution before merging`: Yes
            4. `Do not allow bypassing the above settings`: Yes
2. Visit OpenAPI Generator's [client generators section](https://openapi-generator.tech/docs/generators#client-generators), select a stable generator that matches the desired language.
   1. Add a new key under `generators` in [openapitools.json](./openapitools.json), with the key as `<language>` (e.g. `node` or `go`)
      1. Add the selected generator to `generatorName`
      2. Add `#{cwd}/../whispir-<language>` to `output`
      3. Add `../openapi.yaml` to `glob`
      4. Add `mustache/<language>` to `templateDir`
      5. Review the additional properties available to the generator from the generator's documentation page, add in appropriate values.
   2. Create a new directory `mustache/<language>`, this will contain the customised Mustache files to align with the [SDK Client standards](#sdk-client-standards)
   3. Add, copy, and customise Mustache templates from the [OpenAPI Generator resources module](https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources), matching the resource directory to the stable generator selected in the previous step. For example, if we had selected `typescript-node` as the base generator, visit the [openapi-generator/modules/openapi-generator/src/main/resources/typescript-node](https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources/typescript-node) directory and copy the appropriate Mustache files from there into the newly created `mustache/node` directory.
      1. `licenseInfo.mustache` is always copied and the file contents MUST be empty, to ensure that OAS version updates do not result in file changes during each SDK release.
   4. Update the list in [Supported languages](#supported-languages) to link to the OpenAPI generator resources, documentation, and new `whispir-<language>` repository
3. Update the strategy matrix in [.github/workflows/generate-sdks.yml](../.github/workflows/generate-sdks.yml) to include the new `<language>`
4. Raise a `feat` PR to add the new SDK, review, and merge it.
   1. After merge, the [release-please](../.github/workflows/release-please.yml) workflow will update the release PR.
   2. Merge the release PR, the [generate-sdks](../.github/workflows/generate-sdks.yml) workflow will trigger create OAS version bump PRs in all SDK repositories.
5. Visit the newly created `whispir-<language>` repository. The following changes will be made to in the Git branch of associated with the PR created from the `generated-sdks` workflow in the `whispir-openapi` repository.
   1. Add a `version.{language-extension}` file that will be imported by the API Client to include the SDK version in the `User-Agent` header of requests made to the Whispir API, which provides metrics to Whispir on SDK usage. The file must be added separately to avoid having the version overwritten during SDK generation. For example, the Node SDK has a [`version.ts`](https://github.com/whispir/whispir-node/blob/faf5f708caeb3f638b6dbe05dae8d08bbe2cfc98/version.ts) file added.
   2. Update the `release-please` workflow in the new SDK repository to include a list of extra-files that contain a version and need to be bumped. At a minimum, the `version.{language-extension}` file will be added to this list. For example, see the [release-please.yml](https://github.com/whispir/whispir-node/blob/faf5f708caeb3f638b6dbe05dae8d08bbe2cfc98/.github/workflows/release-please.yml#L17) in `whispir-node`.
   3. For each extra-file, add the `x-release-please-start-version` and `x-release-please-end` tags as comments around the lines containing the version. The `release-please` workflow will use these tags to locate the semantic version requiring a bump. For example, see the Node SDK's' [`version.ts`](https://github.com/whispir/whispir-node/blob/faf5f708caeb3f638b6dbe05dae8d08bbe2cfc98/version.ts) for the formatting of tags. See [Updating arbitrary files](https://github.com/googleapis/release-please/blob/09ae5a2fb84e8189a9e23dce93b3d16cfdc7e228/docs/customizing.md#updating-arbitrary-files) in the Release Please documentation for more info.
   4. Update the `.openapi-generator-ignore` file to include the list of files that should not be automatically generated. The list of files must include all files containing the SDK semantic version. For example, the Node SDK contains the version in the automatically generated `package.json` file, so we [add that to the ignore file in the SDK repo](https://github.com/whispir/whispir-node/blob/faf5f708caeb3f638b6dbe05dae8d08bbe2cfc98/.openapi-generator-ignore#L25). See [Ignore file format](https://github.com/OpenAPITools/openapi-generator/blob/01f0763ec3b72b8a3ce0f4ad77713d876702f070/docs/customization.md#ignore-file-format) in the OpenAPI generator documentation for more info.
   5. Add a new `.github/workflows/ci.yml` Github workflow to run on new pull requests in the SDK repository. The CI workflow typically runs unit tests and checks code linting requirements before PRs can be merged. The CI workflow must run on the [`pull_request.types.[opened, reopened, synchronize, edited]`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request) workflow events.
   6. In the repository "Settings", update the `main` branch requirements to require that the CI workflow tasks pass before a merge to main is allowed.
   7. Add a new `.github/workflows/publish.yml` Github workflow to publish the SDK contents to the artifactory appropriate to the SDK language. The publish workflow must run on the [`release`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release) workflow event. For example, see the [publish workflow](https://github.com/whispir/whispir-node/blob/faf5f708caeb3f638b6dbe05dae8d08bbe2cfc98/.github/workflows/publish.yml) in the Node SDK repository.
   8. Review and merge the PR above. The `release-please` workflow will create a Release PR in the SDK repository.
   9.  Merge the Release PR in the SDK repository. Upon merge, Release Please will create a Github release, and the `.github/workflows/publish.yml` workflow will run, publishing the SDK to the relevant artifactory.
6. Congratulations, you've just published a new SDK for the Whispir API!

### Debugging Mustache file inputs

Documentation to determine what variables are available to the Mustache files are not widely available. It can be helpful to get a list of these variables to know what the Mustache templates will be populated with. The following command will create a `dump.json` file with a listing of all attributes that are available to use in Mustache for the `typescript-node` generator. You can modify the `-g` flag to specify the required generator. This requires that package dependencies are already installed per [Running the generator](#running-the-generator).

```bash
$(npm bin)/openapi-generator-cli generate \
    -g typescript-node \
    -i ../openapi.yaml \
    --global-property debugSupportingFiles=true \
    --dry-run > dump.json
```

## SDK Client Standards

TODO

## References

* Whispir OpenAPI Spec: https://raw.githubusercontent.com/whispir/openapi/main/openapi.yaml
* OpenAPI Generator: https://openapi-generator.tech/
  * Typescript-node generator: https://openapi-generator.tech/docs/generators/typescript-node
  * Configuration options: https://openapi-generator.tech/docs/configuration/
  * Global options: https://openapi-generator.tech/docs/globals/
* Open-source research:
  * Xero: https://devblog.xero.com/building-sdks-for-the-future-b79ff726dfd6
    * Xero-OpenAPI Code Generator: https://github.com/XeroAPI/Xero-OpenAPI#code-generators
  * Spotify: https://github.com/thelinmichael/spotify-web-api-node
  * Ultimate API Publisher guide: https://medium.com/better-practices/the-ultimate-api-publishers-guide-be74a2692326
