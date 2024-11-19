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
