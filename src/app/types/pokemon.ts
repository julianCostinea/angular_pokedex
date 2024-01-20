export type Pokemon = {
  name: string;
  url: string;
};

export type apiResponse = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};
