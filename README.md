# Semgrep Security Rules Testing Guide

A comprehensive guide for setting up and testing Semgrep security rules, focusing on prototype pollution detection.

## Quick Start

### Repository Setup

```bash
# Create and initialize repository
gh repo create "semgrep-security-rules" --public
mkdir semgrep-security-rules
cd semgrep-security-rules
git init
git remote add origin <your-github-repo-url>
git branch -M main

# Create project structure
mkdir rules tests
touch README.md
```

```bash
# Testing
# Test specific rule
semgrep --config rules/prototype-pollution.yaml tests/prototype-pollution-test.js

# Test all rules
semgrep --config rules/ tests/
```

```bash
# Stage changes
git add .

# Commit changes
git commit -m "feat: add prototype pollution detection rule"

# Push to GitHub
git push -u origin main
```
