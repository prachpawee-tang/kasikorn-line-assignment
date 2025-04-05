export const isDesktop = (): boolean => {
  const uagent = navigator.userAgent;
  return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
    uagent
  );
};
