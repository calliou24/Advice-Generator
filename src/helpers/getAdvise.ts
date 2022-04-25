
export const getAdvise =  async () => {
  const apiKey = 'https://api.adviceslip.com/advice'
  const request = await fetch(apiKey);
  const { slip } = await request.json();
  return slip
}