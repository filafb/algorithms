function areYouPlayingBanjo(name) {
  const firstLetter = name[0].toLowerCase();
  return firstLetter !== "s" ? `${name} does not play banjo!` : `${name} plays banjo!`
      // Don't forget to return your output!
}
