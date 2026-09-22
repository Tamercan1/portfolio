/**
 * -------------------------------------------------
 *  LINKS CONFIG
 *  All external URLs used throughout the site.
 *  Update these whenever your links change.
 * -------------------------------------------------
 */

export const LINKS = {
  /** Your GitHub profile */
  github: 'https://github.com/Tamercan1',

  /** Your LinkedIn profile */
  linkedin: 'https://linkedin.com/in/datu-tamercan-wawa-7b6112399',

  /** Your email address (mailto: is prepended automatically in the Contact section) */
  email: 'wawatamercan@gmail.com',

  /** Project-specific links -- keyed by project slug */
  projects: {
    spaceScout: {
      live: 'https://github.com/Tamercan1/spacescout-ai-space-planner/blob/main/images/README.md',
      github: 'https://github.com/Tamercan1/spacescout-ai-space-planner',
    },
    maiFriend: {
      demo: 'https://www.youtube.com/watch?si=4VPJNPeIO18vdIwG&v=9b0ojIOw24c&feature=youtu.be',
      github: 'https://github.com/Tamercan1/mai-friend',
    },
    cseReviewer: {
      demo: 'https://kacsereviewer.netlify.app/',
      github: 'https://github.com/Tamercan1/cse-personal-reviewer',
    },
    studyVault: {
      github: '#',
    },
  },
} as const;
