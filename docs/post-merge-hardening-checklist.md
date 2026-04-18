# Post-merge hardening checklist

Use this checklist after a feature PR merges to keep QA outcomes actionable.

## Intake rules

- One issue per defect, no bundled issue threads.
- Use the `Post-merge hardening task` issue template for every finding.
- Add severity in the issue title: `[S1]`, `[S2]`, or `[S3]`.

## Definition of done

A hardening issue closes only when all are true:

- Root cause identified and documented.
- Fix merged to `main`.
- CI is green for the merge commit.
- Regression check passed on the affected flow.

## Tracking

- Keep parent coordination issue open only for status rollup.
- Link child defect issues in a checklist under the parent issue.
- Close parent issue when all child defects are closed.
