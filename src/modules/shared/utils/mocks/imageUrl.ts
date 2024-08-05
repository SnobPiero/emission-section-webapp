export const getMockedImage = (width: number = 200, height?: number) => {
  const baseUrl = 'https://picsum.photos';

  if (height) {
    return `${baseUrl}/${width}/${height}`;
  }

  return `${baseUrl}/${width}`;
};
