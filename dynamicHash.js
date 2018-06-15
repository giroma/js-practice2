const hashAPI = {
id: 900779,
is_dead: false,
name: "Molson Canadian",
tags: "molson canadian beer lager canada ontario molson's molsons brewery of limited bottle",
is_discontinued: false,
price_in_cents: 3850,
regular_price_in_cents: 3850,
limited_time_offer_savings_in_cents: 0,
limited_time_offer_ends_on: null,
bonus_reward_miles: 0,
bonus_reward_miles_ends_on: null,
stock_type: "LCBO",
primary_category: "Beer",
secondary_category: "Lager",
origin: "Canada, Ontario",
package: "24x341 mL bottle",
package_unit_type: "bottle",
package_unit_volume_in_milliliters: 341,
total_package_units: 24,
volume_in_milliliters: 8184,
alcohol_content: 500,
price_per_liter_of_alcohol_in_cents: 940,
price_per_liter_in_cents: 470,
inventory_count: 3657,
inventory_volume_in_milliliters: 29928888,
inventory_price_in_cents: 14079450,
sugar_content: null,
producer_name: "Molson's Brewery of Canada Limited",
released_on: "2018-02-26",
has_value_added_promotion: false,
has_limited_time_offer: false,
has_bonus_reward_miles: false,
is_seasonal: false,
is_vqa: false,
is_ocb: false,
is_kosher: false,
value_added_promotion_description: null,
description: null,
serving_suggestion: "Great on its own. Will also complement grilled white meats, seafood and sausage. Of course, always great with bar snacks.",
tasting_note: "Made from the very best ingredients and always preservative free. Pours a light golden colour with a soft fluffy head. Delicate floral and barley aromas with notes of citrus, grain and sweet fruit. Crisp, clean, medium bodied and smooth on the palate. Flavours of light hops, sweet malt and citrus. Pleasant hoppy finish.",
updated_at: "2018-06-14T14:39:06.108Z",
image_thumb_url: null,
image_url: null,
varietal: "North American Lager",
style: "Light & Malty",
tertiary_category: "Pale Lager",
sugar_in_grams_per_liter: null,
clearance_sale_savings_in_cents: 0,
has_clearance_sale: false,
product_no: 900779
}
const createAWShash = (productHash) => {
  const keysArray = Object.keys(productHash)
  let hashAWS = {}

  for (key of keysArray) {
    let type = typeof productHash[key]


    let typeAWS = 'S'
    switch (type) {
      case 'object':
      typeAWS = 'S'
      break;
      case 'boolean':
      typeAWS = 'BOOL'

      break;
      case 'number':
      typeAWS = 'N'
      break;
      case 'string':
      typeAWS = 'S'
      break;
    }

    let value = {}
    value[typeAWS] = `${productHash[key]}`

    if (type === 'boolean') {
      value[typeAWS] = productHash[key]
    }

    hashAWS[String(key)] = value
  }
  return hashAWS
}
console.log(createAWShash(hashAPI));
