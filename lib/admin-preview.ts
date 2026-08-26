import "server-only";

export function isAdminPreviewEnabled() {
  return (
    process.env.NODE_ENV !== "production" ||
    process.env.ADMIN_PREVIEW_ENABLED === "true"
  );
}
