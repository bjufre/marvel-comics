import { schema } from 'normalizr';


const VARIANTS = {
  fantastic: 'portrait_fantastic',
  uncanny: 'portrait_uncanny',
};

const NOT_FOUND = `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/${VARIANTS.uncanny}.jpg`;

const cleanTitle = title =>
  title.split(' ').slice(0, -2).join(' ');

const getYear = title =>
  title.match(/\(([\d,\w,\s,-]+)\)/)[1];

const processStrategy = (comic) => ({
  ...comic,
  title: cleanTitle(comic.title),
  year: getYear(comic.title),
  price: `${comic.prices[0].price}$`,
  thumbnail: comic.thumbnail
    ? `${comic.thumbnail.path}/${VARIANTS.uncanny}.${comic.thumbnail.extension}`
    : NOT_FOUND,
});

export const comic = new schema.Entity('comics', {}, { processStrategy });
export const arrayOfComics = new schema.Array(comic);
