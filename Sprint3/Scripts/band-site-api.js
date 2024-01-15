class BandSiteApi {
  constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = 'https://project-1-api.herokuapp.com';
  }

  async getComments() {
      try {
          const result = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
          const comments = result.data;
          return comments;
      } catch (error) {
          console.error(error);
      }
  }
  async getShows() {
    try {
        const result = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
        const shows = result.data;
        return shows;
    } catch (error) {
        console.error(error);
    }
}
  async postComment(comments) {
    try {
        await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`,comments);
       
    } catch (error) {
        console.error(error);
    }
}
}

const bandSiteApi = new BandSiteApi('0fe65b0e-a7a1-4335-9a8c-da40a0a85a94');
