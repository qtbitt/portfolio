function getAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) age--;

  return age;
}

function describeWeather(code: number) {
  if (code === 0) return "Clear";
  if ([1, 2].includes(code)) return "Mostly clear";
  if (code === 3) return "Cloudy";
  if ([45, 48].includes(code)) return "Foggy";
  if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "Rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snow";
  if ([95, 96, 99].includes(code)) return "Stormy";
  return "Mixed";
}

function weatherAccent(code: number) {
  if (code === 0) return "from-amber-200/30 via-orange-100/15 to-transparent";
  if ([1, 2, 3].includes(code)) {
    return "from-blue-100/25 via-slate-100/10 to-transparent";
  }
  if ([61, 63, 65, 80, 81, 82].includes(code)) {
    return "from-blue-400/25 via-indigo-300/10 to-transparent";
  }
  if ([95, 96, 99].includes(code)) {
    return "from-indigo-600/20 via-purple-400/8 to-transparent";
  }

  return "from-slate-200/15 via-slate-100/5 to-transparent";
}

function getDisplayLocation(location: string) {
  return location.includes("Poland") ? "Gdansk, Poland" : location;
}

export { describeWeather, getAge, getDisplayLocation, weatherAccent };
