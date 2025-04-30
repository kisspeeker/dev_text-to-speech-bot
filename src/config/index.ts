export default () => ({
  BOT_TOKEN: (process.env.BOT_TOKEN ?? '').trim(),
  DB_NAME: (process.env.DB_NAME ?? '').trim(),

  IS_UNDER_CONSTRUCTION: (process.env.IS_UNDER_CONSTRUCTION ?? '').trim(),
  SUPER_ADMIN_ID: (process.env.SUPER_ADMIN_ID ?? '').trim(),
  ADMIN_IDS: (process.env.ADMIN_IDS ?? '').split(',').filter(Boolean)
});
