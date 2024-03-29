"use strict";


/** Tell a joke: whispers a joke to the user specified
 *
 * @param user {User}
 */

function joke(user) {
  const joke = `Why can't you hear a pteradactyl go to the bathroom?
   Cause the P is silent`;

  user.room.whisper({
    name: "Joker",
    type: "chat",
    text: joke
  },
    [user]);
}

function priv(userTo, userFrom, message) {
  console.log('userTo', userTo)
  console.log('userFrom', userFrom)
  userTo.room.whisper({
    name: userFrom,
    type: 'chat',
    text: message
  }[userTo, userFrom]);

}

module.exports = {
  joke,
  priv
};