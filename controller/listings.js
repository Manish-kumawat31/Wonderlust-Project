const Listing = require("../models/listing")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });

module.exports.allListings = async (req, res, next) => {
    const allListings = await Listing.find();
    res.render("./listings/home.ejs", { allListings })
}

module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs")
}

module.exports.postAddNew = async (req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.location,
        limit: 1,
    })
        .send();
    let url = req.file.url;
    let filename = req.file.public_id;
    let insertData = new Listing(req.body);
    insertData.owner = req.user._id;
    insertData.image = { filename: filename, url: url };
    insertData.geometry = response.body.features[0].geometry;
    await insertData.save();
    console.log(insertData);

    req.flash("success", "New listing added!");
    res.redirect("/listings");
}

module.exports.viewListing = async (req, res, next) => {
    let { id } = req.params;
    let list1 = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    res.render("./listings/show.ejs", { list1 })
}

module.exports.renderEditForm = async (req, res, next) => {
    let { id } = req.params;
    let list1 = await Listing.findById(id);
    let originalUrl = list1.image.url;
    originalUrl = originalUrl.replace("/upload", "/upload/ar_1.0,c_thumb,g_face,h_200,w_200/r_max/co_skyblue,e_outline/co_lightgray,e_shadow,x_5,y_8")
    res.render("./listings/edit.ejs", { list1, originalUrl })
}

module.exports.putEdit = async (req, res, next) => {
    let { id } = req.params;
    let data = req.body;
    let update = await Listing.findByIdAndUpdate(id, data)
    // let updateImg = await Listing.findByIdAndUpdate(id, { image: { url: image } })
    if (req.file) {
        let url = req.file.url;
        let filename = req.file.public_id;
        console.log(url);

        update.image = { filename: filename, url: url };
        await update.save();
    }
    req.flash("success", "Listing Updated !");
    res.redirect(`/listings/${id}`)
}

module.exports.deleteListing = async (req, res, next) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id)
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings")
}