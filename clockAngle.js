function clockAngle(h,m) {
  const minuteAngle = 360 / 60 * m
  const hourAngle = 360 / 12 * (h + m/60)
  return Math.abs(minuteAngle - hourAngle)
}
