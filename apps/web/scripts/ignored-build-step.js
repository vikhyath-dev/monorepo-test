process.exit(process.env.VERCEL_GIT_COMMIT_REF === "test" ? 0 : 1);
