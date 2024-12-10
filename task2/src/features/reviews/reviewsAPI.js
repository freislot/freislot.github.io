const reviews = [
  { id: 1, platform: "Google", rating: 4, date: "2023-12-01T10:00:00Z", text: "Отличный сервис!" },
  { id: 2, platform: "Яндекс", rating: 5, date: "2023-12-02T09:30:00Z", text: "Превосходно!" },
  { id: 3, platform: "2ГИС", rating: 3, date: "2023-12-03T08:00:00Z", text: "Средний опыт." },
  { id: 4, platform: "Google", rating: 2, date: "2023-12-04T07:15:00Z", text: "Ожидал большего." },
  { id: 5, platform: "Яндекс", rating: 4, date: "2023-12-05T11:00:00Z", text: "Очень неплохо!" },
  { id: 6, platform: "2ГИС", rating: 5, date: "2023-12-06T12:00:00Z", text: "Лучший сервис!" },
  { id: 7, platform: "Google", rating: 3, date: "2023-12-07T10:30:00Z", text: "Хорошо, но могло быть лучше." },
  { id: 8, platform: "Яндекс", rating: 1, date: "2023-12-08T09:00:00Z", text: "Полное разочарование." },
  { id: 9, platform: "2ГИС", rating: 4, date: "2023-12-09T08:45:00Z", text: "Хороший выбор." },
  { id: 10, platform: "Google", rating: 5, date: "2023-12-10T07:30:00Z", text: "Просто идеально!" },
  { id: 11, platform: "Яндекс", rating: 2, date: "2023-12-11T06:15:00Z", text: "Не самый лучший опыт." },
  { id: 12, platform: "2ГИС", rating: 3, date: "2023-12-12T11:00:00Z", text: "Нормально, но ожидал большего." },
  { id: 13, platform: "Google", rating: 1, date: "2023-12-13T10:15:00Z", text: "Ужасный сервис." },
  { id: 14, platform: "Яндекс", rating: 4, date: "2023-12-14T09:45:00Z", text: "Хороший сервис." },
  { id: 15, platform: "2ГИС", rating: 5, date: "2023-12-15T08:30:00Z", text: "Лучший выбор на рынке!" },
  { id: 16, platform: "Google", rating: 2, date: "2023-12-16T07:00:00Z", text: "Не рекомендую." },
  { id: 17, platform: "Яндекс", rating: 3, date: "2023-12-17T10:00:00Z", text: "Средний опыт." },
  { id: 18, platform: "2ГИС", rating: 4, date: "2023-12-18T09:00:00Z", text: "Довольно неплохо." },
  { id: 19, platform: "Google", rating: 5, date: "2023-12-19T08:15:00Z", text: "Прекрасный сервис!" },
  { id: 20, platform: "Яндекс", rating: 1, date: "2023-12-20T07:30:00Z", text: "Полный провал." },
];

export function fetchCount() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(reviews), 1000)
  );
}
