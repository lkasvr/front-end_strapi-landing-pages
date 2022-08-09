export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const { __component: { text_grid = [], image_grid = [] } = '' } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid,
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = 'section.section-grid-image',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};

/*
{
      {
        "__component": "section.section-grid",
        "_id": "602fdf2d540c00269e056175",
        "description": "Distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
        "title": "Gallery",
        "text_grid": [],
        "image_grid": [
          {
            "_id": "602fdf2d540c00269e056183",
            "__v": 0,
            "image": {
              "_id": "602fde37540c00269e05616b",
              "name": "http://source.unsplash.com/random/360x360?r=1",
              "alternativeText": "Uma paisagem com céu claro e montanhas bonitas",
              "caption": "",
              "hash": "360x360_r_1_6a2049d13a",
              "ext": "",
              "mime": "image/jpeg",
              "size": 29.09,
              "width": 360,
              "height": 360,
              "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_6a2049d13a.jpg",
              "provider_metadata": {
                "public_id": "360x360_r_1_6a2049d13a",
                "resource_type": "image"
              },
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                  "hash": "thumbnail_360x360_r_1_6a2049d13a",
                  "ext": "",
                  "mime": "image/jpeg",
                  "width": 156,
                  "height": 156,
                  "size": 6.48,
                  "path": null,
                  "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_6a2049d13a.jpg",
                  "provider_metadata": {
                    "public_id": "thumbnail_360x360_r_1_6a2049d13a",
                    "resource_type": "image"
                  }
                }
              },
              "provider": "cloudinary",
              "related": [
                "602fdf2d540c00269e056183"
              ],
              "createdAt": "2021-02-19T15:50:15.686Z",
              "updatedAt": "2021-02-19T15:54:21.862Z",
              "__v": 0,
              "id": "602fde37540c00269e05616b"
            },
            "id": "602fdf2d540c00269e056183"
          },
          {
            "_id": "602fdf2d540c00269e056184",
            "__v": 0,
            "image": {
              "_id": "602fde37540c00269e05616c",
              "name": "http://source.unsplash.com/random/360x360?r=1",
              "alternativeText": "Um livro grande aberto",
              "caption": "",
              "hash": "360x360_r_1_c073b11d09",
              "ext": "",
              "mime": "image/jpeg",
              "size": 29.39,
              "width": 360,
              "height": 360,
              "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg",
              "provider_metadata": {
                "public_id": "360x360_r_1_c073b11d09",
                "resource_type": "image"
              },
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                  "hash": "thumbnail_360x360_r_1_c073b11d09",
                  "ext": "",
                  "mime": "image/jpeg",
                  "width": 156,
                  "height": 156,
                  "size": 5.52,
                  "path": null,
                  "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_c073b11d09.jpg",
                  "provider_metadata": {
                    "public_id": "thumbnail_360x360_r_1_c073b11d09",
                    "resource_type": "image"
                  }
                }
              },
              "provider": "cloudinary",
              "related": [
                "602fdf2d540c00269e056184"
              ],
              "createdAt": "2021-02-19T15:50:15.760Z",
              "updatedAt": "2021-02-19T15:54:21.980Z",
              "__v": 0,
              "id": "602fde37540c00269e05616c"
            },
            "id": "602fdf2d540c00269e056184"
          },
          {
            "_id": "602fdf2d540c00269e056185",
            "__v": 0,
            "image": {
              "_id": "602fde37540c00269e05616d",
              "name": "http://source.unsplash.com/random/360x360?r=2",
              "alternativeText": "Imagem do topo de uma cidade grande",
              "caption": "Imagem do topo de uma cidade grande",
              "hash": "360x360_r_2_38651a645b",
              "ext": "",
              "mime": "image/jpeg",
              "size": 35.98,
              "width": 360,
              "height": 360,
              "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg",
              "provider_metadata": {
                "public_id": "360x360_r_2_38651a645b",
                "resource_type": "image"
              },
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_http://source.unsplash.com/random/360x360?r=2",
                  "hash": "thumbnail_360x360_r_2_38651a645b",
                  "ext": "",
                  "mime": "image/jpeg",
                  "width": 156,
                  "height": 156,
                  "size": 7.97,
                  "path": null,
                  "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_2_38651a645b.jpg",
                  "provider_metadata": {
                    "public_id": "thumbnail_360x360_r_2_38651a645b",
                    "resource_type": "image"
                  }
                }
              },
              "provider": "cloudinary",
              "related": [
                "602fdf2d540c00269e056185"
              ],
              "createdAt": "2021-02-19T15:50:15.821Z",
              "updatedAt": "2021-02-19T15:54:21.968Z",
              "__v": 0,
              "id": "602fde37540c00269e05616d"
            },
            "id": "602fdf2d540c00269e056185"
          },
          {
            "_id": "602fdf2d540c00269e056186",
            "__v": 0,
            "image": {
              "_id": "602fde37540c00269e05616e",
              "name": "http://source.unsplash.com/random/360x360?r=1",
              "alternativeText": "Filme para câmeras antigas",
              "caption": "",
              "hash": "360x360_r_1_9d32ada1f9",
              "ext": "",
              "mime": "image/jpeg",
              "size": 12.56,
              "width": 360,
              "height": 360,
              "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_9d32ada1f9.jpg",
              "provider_metadata": {
                "public_id": "360x360_r_1_9d32ada1f9",
                "resource_type": "image"
              },
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                  "hash": "thumbnail_360x360_r_1_9d32ada1f9",
                  "ext": "",
                  "mime": "image/jpeg",
                  "width": 156,
                  "height": 156,
                  "size": 3.5,
                  "path": null,
                  "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_9d32ada1f9.jpg",
                  "provider_metadata": {
                    "public_id": "thumbnail_360x360_r_1_9d32ada1f9",
                    "resource_type": "image"
                  }
                }
              },
              "provider": "cloudinary",
              "related": [
                "602fdf2d540c00269e056186"
              ],
              "createdAt": "2021-02-19T15:50:15.861Z",
              "updatedAt": "2021-02-19T15:54:21.887Z",
              "__v": 0,
              "id": "602fde37540c00269e05616e"
            },
            "id": "602fdf2d540c00269e056186"
          },
          {
            "_id": "602fdf2d540c00269e056187",
            "__v": 0,
            "image": {
              "_id": "602fde37540c00269e056170",
              "name": "http://source.unsplash.com/random/360x360?r=a1",
              "alternativeText": "Tela de notebook com Webull",
              "caption": "Tela de notebook com Webull",
              "hash": "360x360_r_a1_973b2a68c9",
              "ext": "",
              "mime": "image/jpeg",
              "size": 12.64,
              "width": 360,
              "height": 360,
              "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_a1_973b2a68c9.jpg",
              "provider_metadata": {
                "public_id": "360x360_r_a1_973b2a68c9",
                "resource_type": "image"
              },
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_http://source.unsplash.com/random/360x360?r=a1",
                  "hash": "thumbnail_360x360_r_a1_973b2a68c9",
                  "ext": "",
                  "mime": "image/jpeg",
                  "width": 156,
                  "height": 156,
                  "size": 3.9,
                  "path": null,
                  "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_a1_973b2a68c9.jpg",
                  "provider_metadata": {
                    "public_id": "thumbnail_360x360_r_a1_973b2a68c9",
                    "resource_type": "image"
                  }
                }
              },
              "provider": "cloudinary",
              "related": [
                "602fdf2d540c00269e056187"
              ],
              "createdAt": "2021-02-19T15:50:15.979Z",
              "updatedAt": "2021-02-19T15:54:21.992Z",
              "__v": 0,
              "id": "602fde37540c00269e056170"
            },
            "id": "602fdf2d540c00269e056187"
          },
          {
            "_id": "602fdf2d540c00269e056188",
            "__v": 0,
            "image": {
              "_id": "602fde37540c00269e05616f",
              "name": "http://source.unsplash.com/random/360x360?r=1",
              "alternativeText": "Filme Kodak para câmeras antigas",
              "caption": "",
              "hash": "360x360_r_1_b3fcbf1d93",
              "ext": "",
              "mime": "image/jpeg",
              "size": 12.24,
              "width": 360,
              "height": 360,
              "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_b3fcbf1d93.jpg",
              "provider_metadata": {
                "public_id": "360x360_r_1_b3fcbf1d93",
                "resource_type": "image"
              },
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_http://source.unsplash.com/random/360x360?r=1",
                  "hash": "thumbnail_360x360_r_1_b3fcbf1d93",
                  "ext": "",
                  "mime": "image/jpeg",
                  "width": 156,
                  "height": 156,
                  "size": 3.77,
                  "path": null,
                  "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749815/thumbnail_360x360_r_1_b3fcbf1d93.jpg",
                  "provider_metadata": {
                    "public_id": "thumbnail_360x360_r_1_b3fcbf1d93",
                    "resource_type": "image"
                  }
                }
              },
              "provider": "cloudinary",
              "related": [
                "602fdf2d540c00269e056188"
              ],
              "createdAt": "2021-02-19T15:50:15.975Z",
              "updatedAt": "2021-02-19T15:54:21.989Z",
              "__v": 0,
              "id": "602fde37540c00269e05616f"
            },
            "id": "602fdf2d540c00269e056188"
          }
        ],
        "metadata": {
          "background": false,
          "_id": "602fdf2e540c00269e0561a4",
          "name": "gallery",
          "section_id": "gallery",
          "__v": 0,
          "id": "602fdf2e540c00269e0561a4"
        },
        "__v": 2,
        "id": "602fdf2d540c00269e056175"
      },
*/
