# This configuration serves as a default template that can be used in every project. It includes the following details:

## Husky Library

[Husky](https://typicode.github.io/husky) is a library that allows you to easily add Git hooks to your project. Git hooks are scripts that run automatically before or after certain Git events, such as committing code.

In this project, Husky is used to set up a pre-commit hook. The pre-commit hook is triggered before a commit is made and runs the `lint-staged` command.

## lint-staged

[lint-staged](https://github.com/okonet/lint-staged) is a tool that allows you to run linters on staged files. Staged files are the files that are about to be committed.

In this project, lint-staged is configured to run ESLint and Prettier on TypeScript files (`*.ts`) and TypeScript React files (`*.tsx`) before each commit. The `eslint --fix` command automatically fixes any linting errors, and the `prettier --write` command formats the code according to the Prettier configuration.

By using lint-staged, you can ensure that only properly formatted and linted code is committed to your repository.

Please refer to the official ESLint and lint-staged documentation for more information on each configuration option.

## Metadata Configuration

To configure the metadata for your site, make the following changes:

- Set the `metadataBase` property in the `metadata` object to the URL of your site.

- Set the `title` and `description` property in the `shared-metadata.ts`

- Update the `url` property in the `openGraph` object to the root URL of your site.

Please make these changes according to your project requirements.

## Typography

### Font Size

The project has been extended with dynamic font sizes using the "dynamic prefix". This extension was made based on Tailwind classes. The structure allows for scaling down to a size that is a minimum of two steps smaller than the maximum base font size. For example, if you're using "text-base", it scales down to "text-xs".

### Tailwind Typography

If you're going to use CMS or Markdown, there's a comment in the tailwind config file to add tailwind typography, you can activate it if you wish.
