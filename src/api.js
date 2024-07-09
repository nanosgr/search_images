import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID k4_h23iN4-r6QC11LjIS2UxKp43OSsI7kjYCwcWq6jQ',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;