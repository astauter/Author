
function isLoggedIn(currentUser, pageId) {
  return !!Object.keys(currentUser).length
}

export function canEditStory(currentUser, story) {
  if (story) {
    return currentUser.id === story.author_id;
  } else {
    return false;
  }
}

export default isLoggedIn;
