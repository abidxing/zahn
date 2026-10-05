/** @type {import('next/dist/lib/load-custom-routes').Redirect[]} */
function getRedirects() {
  const permanent301 = (source, destination) => ({
    source,
    destination,
    statusCode: 301,
  });

  return [
    permanent301("/en/dentist-in-vienna", "/en"),
    permanent301("/online-termin", "/online-termine"),
    permanent301("/online-terme", "/online-termine"),
    permanent301("/kontaktiere-uns", "/kontakt"),
    permanent301("/en/kontaktiere-uns", "/en/contact"),
    permanent301("/retention", "/kfo-retainer"),
    permanent301("/invisalign-clear-aligner", "/unsichtbare-zahnspange-wien"),
    permanent301("/en/tooth-implant", "/en/implant-vienna"),
    permanent301("/en/teeth-bleaching", "/en/teeth-whitening"),
    permanent301("/en/sports-protection", "/en/sports-mouthguards"),
    permanent301("/en/professional-oral-hygiene-mundhygiene", "/en/oral-hygiene"),
    permanent301("/en/our-practice", "/en/practice"),
    permanent301("/en/invisible-brackets", "/en/invisible-braces"),
    permanent301("/en/home-en-orthodontist-vienna", "/en"),
    permanent301("/en/fee-guide", "/en/services"),
    permanent301("/en/faqs-en", "/en/faqs"),
    permanent301("/en/esthetic-dentistry", "/en/aesthetic-dental-services"),
    permanent301("/en/aesthetic-dentistry", "/en/aesthetic-dental-services"),
    permanent301("/en/dentures", "/en/dental-prosthetics"),
    permanent301("/en/contact-us", "/en/contact"),
    permanent301("/en/ceramic-braces", "/en/orthodontics"),
    permanent301("/en/before-after-photos", "/en/before-after"),
    permanent301("/en/about-me", "/en/about"),
  ];
}

module.exports = { getRedirects };
