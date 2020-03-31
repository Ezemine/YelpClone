// Client ID
// NEtjLAq4I_0nXkWcMmJr-A

// API Key
// FZyKpYS75Xap-ikJSXyHUItWQ-buINDNA1m8F1Vc9KNnvXOjoMa2tqCQp5Tkyb28fo317d3V1bq2EiSWM6jLI7eyKGUfRVRQadV7rX_naOlAJcY1tY2jFPswHn6CXnYx
const apiKey = 'FZyKpYS75Xap-ikJSXyHUItWQ-buINDNA1m8F1Vc9KNnvXOjoMa2tqCQp5Tkyb28fo317d3V1bq2EiSWM6jLI7eyKGUfRVRQadV7rX_naOlAJcY1tY2jFPswHn6CXnYx';
const Yelp =
{
    search(term, location, sortBy)
    {
        return fetch(`https://cors-anywhere.herokuapp.com
        https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
            Authorization: `Bearer ${apiKey}`
            }
        }).then(response =>
        {
            return response.json();
        }).then(jsonResponse =>
        {
            if (jsonResponse.businesses)
            {
                return jsonResponse.businesses.map(business =>
                {
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
                    reviewCount: business.review_count
                    }
                })
        }
        })
    }
};

export default Yelp;