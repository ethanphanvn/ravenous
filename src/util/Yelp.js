const apiKey = 'v4zdKig6NOcMP4lpf5XNZdLjnar6k1trI_gzizHLnRxt3K0Dtw6TYCVnq2hWDfWQylzHL3C3LAx3KVftYtQlslJ174VE1qZbB2vcRVyPYpzlKQT0AjLggeLonlerXXYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: { Authorization: `Bearer ${apiKey}` }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse)=> {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                })
            }
        })
    }
};

export default Yelp;