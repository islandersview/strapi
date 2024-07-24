'use strict';

/**
 * item-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::item-listing.item-listing');
