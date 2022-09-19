let spacetrimmer = /^\s+|\s+$/g;
let number = /^[0-9.]+$/;
let seq_number = /^[1-9]+$/;
let emailvalidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validatePOI = (_model) => {
    const { name, photoattachmentsv2, categories, city_id, city_sequence, about, state, addressline1, district, latitude, longitude, sequence } = _model;

    let _errors = {
        name: { status: false, message: "" },
        photoattachmentsv2: { status: false, message: "" },
        sequence: { status: false, message: "" },
        categories: { status: false, message: "" },
        city_id: { status: false, message: "" },
        city_sequence: { status: false, message: "" },
        about: { status: false, message: "" },
        state: { status: false, message: "" },
        addressline1: { status: false, message: "" },
        district: { status: false, message: "" },
        latitude: { status: false, message: "" },
        longitude: { status: false, message: "" }
    };
    let error_found = false;


    if (!categories || categories.length === 0) {
        _errors.categories.status = true;
        _errors.categories.message = "Please select atleast one category !";
        error_found = true;
    }

    if (!photoattachmentsv2 || photoattachmentsv2.length === 0) {
        _errors.photoattachmentsv2.status = true;
        _errors.photoattachmentsv2.message = "Please select atleast one image !";
        error_found = true;
    }

    if (!city_id) {
        _errors.city_id.status = true;
        _errors.city_id.message = "Please select atleast one city !";
        error_found = true;
    }

    if (!seq_number.test(sequence) || !sequence) {
        _errors.sequence.status = true;
        _errors.sequence.message = "Please enter a number(0, decimal and negetive not allowed) !";
        error_found = true;
    }

    if (!number.test(latitude) || !latitude) {
        _errors.latitude.status = true;
        _errors.latitude.message = "Please enter a latitude(negative no not allowed) !";
        error_found = true;
    }

    if (!number.test(longitude) || !longitude) {
        _errors.longitude.status = true;
        _errors.longitude.message = "Please enter a longitude(negative no not allowed) !";
        error_found = true;
    }

    if (!seq_number.test(city_sequence) || !city_sequence) {
        _errors.city_sequence.status = true;
        _errors.city_sequence.message = "Please enter a number(0, decimal and negetive not allowed) !";
        error_found = true;
    }
    if (spacetrimmer.test(about) || !about) {
        _errors.about.status = true;
        _errors.about.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (spacetrimmer.test(name) || !name) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (spacetrimmer.test(addressline1) || !addressline1) {
        _errors.addressline1.status = true;
        _errors.addressline1.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (spacetrimmer.test(district) || !district) {
        _errors.district.status = true;
        _errors.district.message = "Please select atleast one district !";
        error_found = true;
    }
    if (spacetrimmer.test(state) || !state) {
        _errors.state.status = true;
        _errors.state.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validatePhoto = (_model) => {
    const { description, sequence, thumbnail } = _model;

    let _errors = {
        description: { status: false, message: "" },
        sequence: { status: false, message: "" },
        thumbnail: { status: false, message: "" }
    };
    let error_found = false;

    if (spacetrimmer.test(description) || !description) {
        _errors.description.status = true;
        _errors.description.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!seq_number.test(sequence) || !sequence) {
        _errors.sequence.status = true;
        _errors.sequence.message = "Please enter a number(0, decimal and negetive not allowed) !";
        error_found = true;
    }
    if (!thumbnail) {
        _errors.thumbnail.status = true;
        _errors.thumbnail.message = "Please select a image !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateVideo = (_model) => {
    const { description, sequence, thumbnail, video } = _model;
    let _errors = {
        description: { status: false, message: "" },
        sequence: { status: false, message: "" },
        thumbnail: { status: false, message: "" },
        video: { status: false, message: "" }
    };
    let error_found = false;

    if (spacetrimmer.test(description) || !description) {
        _errors.description.status = true;
        _errors.description.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!seq_number.test(sequence) || !sequence) {
        _errors.sequence.status = true;
        _errors.sequence.message = "Please enter a number(0, decimal and negetive not allowed) !";
        error_found = true;
    }
    if (!thumbnail) {
        _errors.thumbnail.status = true;
        _errors.thumbnail.message = "Please select a image !";
        error_found = true;
    }
    if (!video) {
        _errors.video.status = true;
        _errors.video.message = "Please select a video !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateplanYourTrip = (_model) => {
    const { city, poi, day, sequence } = _model;


    let _errors = {
        city: { status: false, message: "" },
        poi: { status: false, message: "" },
        day: { status: false, message: "" },
        sequence: { status: false, message: "" }
    };
    let error_found = false;

    if (!city) {
        _errors.city.status = true;
        _errors.city.message = "Please select atleast one city !";
        error_found = true;
    }
    if (!day) {
        _errors.day.status = true;
        _errors.day.message = "Please select atleast one day !";
        error_found = true;
    }
    if (!poi) {
        _errors.poi.status = true;
        _errors.poi.message = "Please select atleast one nearby city !";
        error_found = true;
    }

    if (!seq_number.test(sequence) || !sequence) {
        _errors.sequence.status = true;
        _errors.sequence.message = "Please enter a number(0, decimal and negetive not allowed) !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateVideoCategory = (_model) => {
    const { name, sequence, thumbnail } = _model;

    let _errors = {
        name: { status: false, message: "" },
        sequence: { status: false, message: "" },
        thumbnail: { status: false, message: "" }
    };
    let error_found = false;

    if (spacetrimmer.test(name) || !name) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!seq_number.test(sequence) || !sequence) {
        _errors.sequence.status = true;
        _errors.sequence.message = "Please enter a number(0, decimal and negetive not allowed) !";
        error_found = true;
    }
    if (!thumbnail) {
        _errors.thumbnail.status = true;
        _errors.thumbnail.message = "Please select a image !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateTouristCircuit = (_model) => {
    const { name, sequence, image, days, itinerary, description, route } = _model;

    let _errors = {
        name: { status: false, message: "" },
        image: { status: false, message: "" },
        itinerary: { status: false, message: "" },
        description: { status: false, message: "" },
        route: { status: false, message: "" },
        sequence: { status: false, message: "" },
        days: { status: false, message: "" }
    };
    let error_found = false;

    if (spacetrimmer.test(name) || !name) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!image) {
        _errors.image.status = true;
        _errors.image.message = "Please enter the tourist circuit name first !";
        error_found = true;
    }
    if (!number.test(days) || !days) {
        _errors.days.status = true;
        _errors.days.message = "Please enter a day(negative no not allowed) !";
        error_found = true;
    }
    if (spacetrimmer.test(itinerary) || !itinerary) {
        _errors.itinerary.status = true;
        _errors.itinerary.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (spacetrimmer.test(description) || !description) {
        _errors.description.status = true;
        _errors.description.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (spacetrimmer.test(route) || !route) {
        _errors.route.status = true;
        _errors.route.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!seq_number.test(sequence) || !sequence) {
        _errors.sequence.status = true;
        _errors.sequence.message = "Please enter a number(0, decimal and negetive not allowed) !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validatePhotoName = (_model) => {
    const { name } = _model;

    let _errors = {};
    let error_found = false;

    if (spacetrimmer.test(name) || !name) {
        _errors.name = true;
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateCity = (_model) => {
    const { name, image, sequence, latitude, longitude, description, radius } = _model;

    let _errors = {
        name: { status: false, message: "" },
        image: { status: false, message: "" },
        sequence: { status: false, message: "" },
        latitude: { status: false, message: "" },
        longitude: { status: false, message: "" },
        description: { status: false, message: "" },
        radius: { status: false, message: "" }
    };

    let error_found = false;

    if (!name) {
        _errors.name.status = true;
        _errors.name.message = "Please enter the name !";
        error_found = true;
    }
    if (spacetrimmer.test(name)) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }

    if (!image) {
        _errors.image.status = true;
        _errors.image.message = "Please enter the city name first !";
        error_found = true;
    }

    if (!sequence) {
        _errors.sequence.status = true;
        _errors.sequence.message = "Please enter the sequence !";
        error_found = true;
    }
    if (!seq_number.test(sequence)) {
        _errors.sequence.status = true;
        _errors.sequence.message = "Please enter a number(0, decimal and negetive not allowed) !";
        error_found = true;
    }

    if (!latitude) {
        _errors.latitude.status = true;
        _errors.latitude.message = "Please enter the latitude !";
        error_found = true;
    }
    if (!number.test(latitude)) {
        _errors.latitude.status = true;
        _errors.latitude.message = "Please enter a latitude(negative no not allowed) !";
        error_found = true;
    }

    if (!longitude) {
        _errors.longitude.status = true;
        _errors.longitude.message = "Please enter the longitude !";
        error_found = true;
    }
    if (!number.test(longitude)) {
        _errors.longitude.status = true;
        _errors.longitude.message = "Please enter a longitude(negative no not allowed) !";
        error_found = true;
    }

    if (!description) {
        _errors.description.status = true;
        _errors.description.message = "Please enter the description !";
        error_found = true;
    }
    if (spacetrimmer.test(description)) {
        _errors.description.status = true;
        _errors.description.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }

    if (!radius) {
        _errors.radius.status = true;
        _errors.radius.message = "Please enter the radius !";
        error_found = true;
    }
    if (!number.test(radius)) {
        _errors.radius.status = true;
        _errors.radius.message = "Please enter a radius(negative no not allowed) !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateCategory = (_model) => {
    const { name, icon, sequence, here_layer_id, classification, categorytype } = _model;

    let _errors = {
        name: { status: false, message: "" },
        icon: { status: false, message: "" },
        sequence: { status: false, message: "" },
        here_layer_id: { status: false, message: "" },
        classification: { status: false, message: "" },
        categorytype: { status: false, message: "" }
    };

    let error_found = false;

    if (!name) {
        _errors.name.status = true;
        _errors.name.message = "Please enter the name !";
        error_found = true;
    }

    if (spacetrimmer.test(name)) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }

    if (!icon) {
        _errors.icon.status = true;
        _errors.icon.message = "Please enter the category name first !";
        error_found = true;
    }
    if (!seq_number.test(sequence) || !sequence) {
        _errors.sequence.status = true;
        _errors.sequence.message = "Please enter a number(0, decimal and negetive not allowed) !";
        error_found = true;
    }
    if (!here_layer_id) {
        _errors.here_layer_id.status = true;
        _errors.here_layer_id.message = "Please select a layer id !";
        error_found = true;
    }
    if (!classification) {
        _errors.classification.status = true;
        _errors.classification.message = "Please select a classification !";
        error_found = true;
    }
    if (!categorytype) {
        _errors.categorytype.status = true;
        _errors.categorytype.message = "Please select a category type !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateDeptOfJurisdiction = (_model) => {
    const { name, contactno, email, cities } = _model;

    let _errors = {
        name: { status: false, message: "" },
        cities: { status: false, message: "" },
        email: { status: false, message: "" },
        contactno: { status: false, message: "" }
    };
    let error_found = false;

    if (spacetrimmer.test(name) || !name) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!cities || cities.length === 0) {
        _errors.cities.status = true;
        _errors.cities.message = "Please select atleast one city !";
        error_found = true;
    }
    if (spacetrimmer.test(email) || !emailvalidator.test(email) || !email) {
        _errors.email.status = true;
        _errors.email.message = "Please enter a valid email id !";
        error_found = true;
    }
    if (!number.test(contactno) || !(/^\d{10}$/).test(contactno) || !contactno) {
        _errors.contactno.status = true;
        _errors.contactno.message = "Please enter a valid phone no !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateEvent = (_model) => {
    const { name, image, sequence, start, end, url, latitude, longitude, description, organizer_contact, organizer_name,
        addressline1, addressline2, district, postalcode, state, fcities } = _model;

    let _errors = {
        name: { status: false, message: "" },
        image: { status: false, message: "" },
        sequence: { status: false, message: "" },
        start: { status: false, message: "" },
        end: { status: false, message: "" },
        url: { status: false, message: "" },
        description: { status: false, message: "" },
        state: { status: false, message: "" },
        addressline1: { status: false, message: "" },
        addressline2: { status: false, message: "" },
        district: { status: false, message: "" },
        latitude: { status: false, message: "" },
        longitude: { status: false, message: "" },
        fcities: { status: false, message: "" },
        postalcode: { status: false, message: "" },
        organizer_contact: { status: false, message: "" },
        organizer_name: { status: false, message: "" }
    };
    let error_found = false;

    if (spacetrimmer.test(name) || !name) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!image) {
        _errors.image.status = true;
        _errors.image.message = "Please enter the event name first !";
        error_found = true;
    }
    if (!seq_number.test(sequence) || !sequence) {
        _errors.sequence.status = true;
        _errors.sequence.message = "Please enter a number(0, decimal and negetive not allowed) !";
        error_found = true;
    }
    if (!fcities || fcities.length === 0) {
        _errors.fcities.status = true;
        _errors.fcities.message = "Please select atleast one city !";
        error_found = true;
    }
    if (!start) {
        _errors.start.status = true;
        _errors.start.message = "Please select the start date !";
        error_found = true;
    }
    if (!end) {
        _errors.end.status = true;
        _errors.end.message = "Please select the end date !";
        error_found = true;
    }
    if (!number.test(latitude) || !latitude) {
        _errors.latitude.status = true;
        _errors.latitude.message = "Please enter a latitude(negative no not allowed) !";
        error_found = true;
    }

    if (!number.test(longitude) || !longitude) {
        _errors.longitude.status = true;
        _errors.longitude.message = "Please enter a longitude(negative no not allowed) !";
        error_found = true;
    }
    if (spacetrimmer.test(url) || !(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(url) || !url) {
        _errors.url.status = true;
        _errors.url.message = "Please enter the proper url !";
        error_found = true;
    }
    if (spacetrimmer.test(description) || !description) {
        _errors.description.status = true;
        _errors.description.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!number.test(organizer_contact) || !(/^\d{10}$/).test(organizer_contact) || !organizer_contact) {
        _errors.organizer_contact.status = true;
        _errors.organizer_contact.message = "Please enter a mobile no !";
        error_found = true;
    }
    if (spacetrimmer.test(organizer_name) || !organizer_name) {
        _errors.organizer_name.status = true;
        _errors.organizer_name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (spacetrimmer.test(addressline1) || !addressline1) {
        _errors.addressline1.status = true;
        _errors.addressline1.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (spacetrimmer.test(addressline2) || !district) {
        _errors.addressline2.status = true;
        _errors.addressline2.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!number.test(postalcode) || !postalcode) {
        _errors.postalcode.status = true;
        _errors.postalcode.message = "Please enter a proper postalcode !";
        error_found = true;
    }
    if (spacetrimmer.test(state) || !state) {
        _errors.start.status = true;
        _errors.start.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }

    if (spacetrimmer.test(district) || !district) {
        _errors.district.status = true;
        _errors.district.message = "Please enter the district !";
        error_found = true;
    }


    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateImageName = (_model) => {
    const { name, icon } = _model;

    let _errors = {
        name: { status: false, message: "" }
    };
    let error_found = false;

    if (spacetrimmer.test(name) || !name) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateTourGuide = (_model) => {
    const { name, name_title, email, contactno, guide_id, birth_date, renewal_date, father_name } = _model;

    let _errors = {
        name: { status: false, message: "" },
        name_title: { status: false, message: "" },
        email: { status: false, message: "" },
        contactno: { status: false, message: "" },
        father_name: { status: false, message: "" },
        guide_id: { status: false, message: "" },
        birth_date: { status: false, message: "" },
        renewal_date: { status: false, message: "" }
    };
    let error_found = false;

    if (spacetrimmer.test(name) || !name) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (spacetrimmer.test(name_title) || !name_title) {
        _errors.name_title.status = true;
        _errors.name_title.message = "Select atleast one title !";
        error_found = true;
    }
    if (spacetrimmer.test(email) || !emailvalidator.test(email) || !email) {
        _errors.email.status = true;
        _errors.email.message = "Please enter a valid email !";
        error_found = true;
    }
    if (spacetrimmer.test(father_name) || !father_name) {
        _errors.father_name.status = true;
        _errors.father_name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!number.test(contactno) || !(/^\d{10}$/).test(contactno) || !contactno) {
        _errors.contactno.status = true;
        _errors.contactno.message = "Please enter a valid contact no !";
        error_found = true;
    }
    if (spacetrimmer.test(guide_id) || !guide_id) {
        _errors.guide_id.status = true;
        _errors.guide_id.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!birth_date) {
        _errors.birth_date.status = true;
        _errors.birth_date.message = "Please enter the birth date !";
        error_found = true;
    }
    if (!renewal_date) {
        _errors.renewal_date.status = true;
        _errors.renewal_date.message = "Please enter the renewal date !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validateTravelAgency = (_model) => {
    const { name, contact_person_address, email, contactno, details_of_vehicle_fleet, facilities_provided_to_tourisam,
        firm_recognisation_period_from, firm_recognisation_period_to, contact_person_name, cities } = _model;

    let _errors = {
        name: { status: false, message: "" },
        cities: { status: false, message: "" },
        email: { status: false, message: "" },
        contactno: { status: false, message: "" },
        contact_person_address: { status: false, message: "" },
        details_of_vehicle_fleet: { status: false, message: "" },
        facilities_provided_to_tourisam: { status: false, message: "" },
        firm_recognisation_period_from: { status: false, message: "" },
        firm_recognisation_period_to: { status: false, message: "" },
        contact_person_name: { status: false, message: "" }
    };
    let error_found = false;

    if (spacetrimmer.test(name) || !name) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }

    if (!cities || cities.length === 0) {
        _errors.cities.status = true;
        _errors.cities.message = "Please select atleast one city !";
        error_found = true;
    }
    if (spacetrimmer.test(contact_person_address) || !contact_person_address) {
        _errors.contact_person_address.status = true;
        _errors.contact_person_address.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (spacetrimmer.test(email) || !emailvalidator.test(email) || !email) {
        _errors.email.status = true;
        _errors.email.message = "Please enter a valid email id !";
        error_found = true;
    }
    if (spacetrimmer.test(contact_person_name) || !contact_person_name) {
        _errors.contact_person_name.status = true;
        _errors.contact_person_name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!number.test(contactno) || !(/^\d{10}$/).test(contactno) || !contactno) {
        _errors.contactno.status = true;
        _errors.contactno.message = "Please enter a valid phone no !";
        error_found = true;
    }
    if (spacetrimmer.test(facilities_provided_to_tourisam) || !facilities_provided_to_tourisam) {
        _errors.facilities_provided_to_tourisam.status = true;
        _errors.facilities_provided_to_tourisam.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!number.test(details_of_vehicle_fleet) || !details_of_vehicle_fleet) {
        _errors.details_of_vehicle_fleet.status = true;
        _errors.details_of_vehicle_fleet.message = "Please enter a valid vehicle fleet(negative no not allowed) !";
        error_found = true;
    }
    if (!firm_recognisation_period_from) {
        _errors.firm_recognisation_period_from.status = true;
        _errors.firm_recognisation_period_from.message = "Please select a valid date !";
        error_found = true;
    }
    if (!firm_recognisation_period_to) {
        _errors.firm_recognisation_period_to.status = true;
        _errors.firm_recognisation_period_to.message = "Please select a valid date !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}

export const validatePayingGuest = (_model) => {
    const { name, contact_person_name, address, contactno, email, city_id } = _model;

    let _errors = {
        name: { status: false, message: "" },
        city_id: { status: false, message: "" },
        email: { status: false, message: "" },
        contactno: { status: false, message: "" },
        contact_person_name: { status: false, message: "" },
        address: { status: false, message: "" }
    };
    let error_found = false;

    if (spacetrimmer.test(name) || !name) {
        _errors.name.status = true;
        _errors.name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!city_id) {
        _errors.city_id.status = true;
        _errors.city_id.message = "Please select atleast one city !";
        error_found = true;
    }
    if (spacetrimmer.test(address) || !address) {
        _errors.address.status = true;
        _errors.address.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (spacetrimmer.test(email) || !emailvalidator.test(email) || !email) {
        _errors.email.status = true;
        _errors.email.message = "Please enter a valid email id !";
        error_found = true;
    }
    if (spacetrimmer.test(contact_person_name) || !contact_person_name) {
        _errors.contact_person_name.status = true;
        _errors.contact_person_name.message = "Avoid using spaces in the begining and ending !";
        error_found = true;
    }
    if (!number.test(contactno) || !(/^\d{10}$/).test(contactno) || !contactno) {
        _errors.contactno.status = true;
        _errors.contactno.message = "Please enter a valid phone no !";
        error_found = true;
    }

    let vObj = { errors: _errors, errorFound: error_found };
    return vObj;
}
