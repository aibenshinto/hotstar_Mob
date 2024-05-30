export interface Movie {
    id: string;
    title: string;
    posterURL: string;
    // Add any other fields as necessary
  }
  
  export const getData = async (category: string): Promise<Movie[]> => {
    const resp = await fetch(`https://api.sampleapis.com/movies/${category}`);
    const json: Movie[] = await resp.json();
    return json;
  };
  