import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        // required: true,
        // default:"pending"

    },
    bundleName: {
        type: String,

    },
    category: {
        type: String,
        required: true
    },
    courseMentorName: {
        type: String,
        // required: true
    },
    video: {
        type: String,
        // required: true
    },

    description: {
        type: String,
        // required: true
    },

    price: {
        type: Number,
        required: true
    },

    duration: {
        type: String,

    },
    bundle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bundle',
    },
    discount: {
        type: Number,
        default: 0
    },
    discountedPrice: {
        type: Number,
    },

    hasDiscount: {
        type: Boolean,
        default: function () {
            return this.discount > 0;
        }
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true

});

export const Course = mongoose.model('Course', courseSchema);
