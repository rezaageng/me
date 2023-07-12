import { type EducationsResponse } from '@/@types/educations'
import { type ExperiencesResponse } from '@/@types/experiences'
import { type HomeResponse } from '@/@types/home'
import { type ProjectsResponse } from '@/@types/projects'
import { type SkillCategoriesResponse } from '@/@types/skills'
import { rest } from 'msw'

export const handlers = [
  rest.get(
    `${process.env.API_URL}/api/home`,
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<HomeResponse>({
          data: {
            id: 1,
            attributes: {
              title: "Hello, I'm rezaa.",
              subtitle:
                'Front-end developer and Informatics Engineering student at Pasundan University',
              createdAt: '2023-02-06T07:37:17.769Z',
              updatedAt: '2023-06-25T06:35:18.416Z',
              publishedAt: '2023-02-06T07:44:18.682Z',
              anotherSide: 'i like games, anime, manga, and manhwa',
              summary: 'I like to code especially in front end dev heheheheh'
            }
          },
          meta: {}
        })
      )
  ),
  rest.get(
    '/api/home',
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<HomeResponse>({
          data: {
            id: 1,
            attributes: {
              title: "Hello, I'm rezaa.",
              subtitle:
                'Front-end developer and Informatics Engineering student at Pasundan University',
              createdAt: '2023-02-06T07:37:17.769Z',
              updatedAt: '2023-06-25T06:35:18.416Z',
              publishedAt: '2023-02-06T07:44:18.682Z',
              anotherSide: 'i like games, anime, manga, and manhwa',
              summary: 'I like to code especially in front end dev heheheheh'
            }
          },
          meta: {}
        })
      )
  ),
  rest.get(
    `${process.env.API_URL}/api/skill-categories`,
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<SkillCategoriesResponse>({
          data: [
            {
              id: 1,
              attributes: {
                category: 'Programming and Markup Languages',
                createdAt: '2023-06-19T10:05:59.643Z',
                updatedAt: '2023-06-19T10:23:16.177Z',
                skills: {
                  data: [
                    {
                      id: 1,
                      attributes: {
                        name: 'JavaScript',
                        createdAt: '2023-06-19T10:08:40.913Z',
                        updatedAt: '2023-06-19T10:08:40.913Z'
                      }
                    },
                    {
                      id: 2,
                      attributes: {
                        name: 'TypeScript',
                        createdAt: '2023-06-19T10:10:41.361Z',
                        updatedAt: '2023-06-19T10:10:41.361Z'
                      }
                    }
                  ]
                }
              }
            },
            {
              id: 4,
              attributes: {
                category: 'Testing',
                createdAt: '2023-06-19T10:08:20.882Z',
                updatedAt: '2023-06-19T10:23:29.227Z',
                skills: {
                  data: [
                    {
                      id: 28,
                      attributes: {
                        name: 'Jest',
                        createdAt: '2023-06-19T10:18:31.241Z',
                        updatedAt: '2023-06-19T10:18:31.241Z'
                      }
                    },
                    {
                      id: 29,
                      attributes: {
                        name: 'React Testing Library',
                        createdAt: '2023-06-19T10:18:41.226Z',
                        updatedAt: '2023-06-19T10:18:41.226Z'
                      }
                    }
                  ]
                }
              }
            }
          ],
          meta: {
            pagination: {
              page: 1,
              pageSize: 25,
              pageCount: 1,
              total: 4
            }
          }
        })
      )
  ),
  rest.get(
    '/api/skill-categories',
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<SkillCategoriesResponse>({
          data: [
            {
              id: 1,
              attributes: {
                category: 'Programming and Markup Languages',
                createdAt: '2023-06-19T10:05:59.643Z',
                updatedAt: '2023-06-19T10:23:16.177Z',
                skills: {
                  data: [
                    {
                      id: 1,
                      attributes: {
                        name: 'JavaScript',
                        createdAt: '2023-06-19T10:08:40.913Z',
                        updatedAt: '2023-06-19T10:08:40.913Z'
                      }
                    },
                    {
                      id: 2,
                      attributes: {
                        name: 'TypeScript',
                        createdAt: '2023-06-19T10:10:41.361Z',
                        updatedAt: '2023-06-19T10:10:41.361Z'
                      }
                    }
                  ]
                }
              }
            },
            {
              id: 4,
              attributes: {
                category: 'Testing',
                createdAt: '2023-06-19T10:08:20.882Z',
                updatedAt: '2023-06-19T10:23:29.227Z',
                skills: {
                  data: [
                    {
                      id: 28,
                      attributes: {
                        name: 'Jest',
                        createdAt: '2023-06-19T10:18:31.241Z',
                        updatedAt: '2023-06-19T10:18:31.241Z'
                      }
                    },
                    {
                      id: 29,
                      attributes: {
                        name: 'React Testing Library',
                        createdAt: '2023-06-19T10:18:41.226Z',
                        updatedAt: '2023-06-19T10:18:41.226Z'
                      }
                    }
                  ]
                }
              }
            }
          ],
          meta: {
            pagination: {
              page: 1,
              pageSize: 25,
              pageCount: 1,
              total: 4
            }
          }
        })
      )
  ),
  rest.get(
    `${process.env.API_URL}/api/experiences`,
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<ExperiencesResponse>({
          data: [
            {
              id: 1,
              attributes: {
                createdAt: '2023-06-30T12:01:05.619Z',
                updatedAt: '2023-06-30T12:23:57.479Z',
                title: 'Web Developer',
                employmentType: 'Internship',
                companyName: 'miHoYo Co., Ltd',
                locationType: 'On-site',
                startDate: '2021-06-01',
                endDate: '2021-08-31',
                description:
                  'Developed a web application using React.js and TypeScript',
                currentlyEmployed: false,
                location: 'Shanghai, China'
              }
            },
            {
              id: 2,
              attributes: {
                createdAt: '2023-06-30T12:08:51.007Z',
                updatedAt: '2023-06-30T12:24:11.405Z',
                title: 'Front-end Developer',
                employmentType: 'Full-time',
                companyName: 'Google LLC',
                locationType: null,
                startDate: '2021-09-01',
                endDate: null,
                description:
                  'Developed a web application using Next.js and TypeScript',
                currentlyEmployed: true,
                location: 'Mountain View, California, United States'
              }
            },
            {
              id: 3,
              attributes: {
                createdAt: '2023-06-30T12:08:51.007Z',
                updatedAt: '2023-06-30T12:24:11.405Z',
                title: 'Mobile Developer',
                employmentType: 'Part-time',
                companyName: null,
                locationType: null,
                startDate: '2022-04-01',
                endDate: '2022-06-31',
                description:
                  'Developed a web application using Next.js and TypeScript',
                currentlyEmployed: true,
                location: 'Developed an application using Flutter'
              }
            }
          ],
          meta: {
            pagination: {
              page: 1,
              pageSize: 25,
              pageCount: 1,
              total: 2
            }
          }
        })
      )
  ),
  rest.get(
    '/api/experiences',
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<ExperiencesResponse>({
          data: [
            {
              id: 1,
              attributes: {
                createdAt: '2023-06-30T12:01:05.619Z',
                updatedAt: '2023-06-30T12:23:57.479Z',
                title: 'Web Developer',
                employmentType: 'Internship',
                companyName: 'miHoYo Co., Ltd',
                locationType: 'On-site',
                startDate: '2021-06-01',
                endDate: '2021-08-31',
                description:
                  'Developed a web application using React.js and TypeScript',
                currentlyEmployed: false,
                location: 'Shanghai, China'
              }
            },
            {
              id: 2,
              attributes: {
                createdAt: '2023-06-30T12:08:51.007Z',
                updatedAt: '2023-06-30T12:24:11.405Z',
                title: 'Front-end Developer',
                employmentType: 'Full-time',
                companyName: 'Google LLC',
                locationType: null,
                startDate: '2021-09-01',
                endDate: null,
                description:
                  'Developed a web application using Next.js and TypeScript',
                currentlyEmployed: true,
                location: 'Mountain View, California, United States'
              }
            },
            {
              id: 3,
              attributes: {
                createdAt: '2023-06-30T12:08:51.007Z',
                updatedAt: '2023-06-30T12:24:11.405Z',
                title: 'Mobile Developer',
                employmentType: 'Part-time',
                companyName: null,
                locationType: null,
                startDate: '2022-04-01',
                endDate: '2022-06-31',
                description:
                  'Developed a web application using Next.js and TypeScript',
                currentlyEmployed: true,
                location: 'Developed an application using Flutter'
              }
            }
          ],
          meta: {
            pagination: {
              page: 1,
              pageSize: 25,
              pageCount: 1,
              total: 2
            }
          }
        })
      )
  ),
  rest.get(
    `${process.env.API_URL}/api/projects`,
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<ProjectsResponse>({
          data: [
            {
              id: 1,
              attributes: {
                name: 'Nothing',
                type: 'Personal',
                description:
                  'im the bone of my sword steel is my body and iron is my blood ahahhahh',
                createdAt: '2023-07-06T04:23:16.065Z',
                updatedAt: '2023-07-06T04:23:22.924Z',
                publishedAt: '2023-07-06T04:23:22.923Z',
                skills: {
                  data: [
                    {
                      id: 2,
                      attributes: {
                        name: 'TypeScript',
                        createdAt: '2023-06-19T10:10:41.361Z',
                        updatedAt: '2023-06-19T10:10:41.361Z'
                      }
                    },
                    {
                      id: 15,
                      attributes: {
                        name: 'React.js',
                        createdAt: '2023-06-19T10:14:04.788Z',
                        updatedAt: '2023-06-19T10:14:04.788Z'
                      }
                    },
                    {
                      id: 19,
                      attributes: {
                        name: 'Next.js',
                        createdAt: '2023-06-19T10:15:30.996Z',
                        updatedAt: '2023-06-19T10:15:30.996Z'
                      }
                    }
                  ]
                },
                cover: {
                  data: {
                    id: 1,
                    attributes: {
                      name: 'latern-kazuha.png',
                      alternativeText: null,
                      caption: null,
                      width: 2500,
                      height: 1270,
                      formats: {
                        thumbnail: {
                          name: 'thumbnail_latern-kazuha.png',
                          hash: 'thumbnail_latern_kazuha_d142861208',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 245,
                          height: 124,
                          size: 68.76,
                          url: '/uploads/thumbnail_latern_kazuha_d142861208.png'
                        },
                        small: {
                          name: 'small_latern-kazuha.png',
                          hash: 'small_latern_kazuha_d142861208',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 500,
                          height: 254,
                          size: 246.84,
                          url: '/uploads/small_latern_kazuha_d142861208.png'
                        },
                        medium: {
                          name: 'medium_latern-kazuha.png',
                          hash: 'medium_latern_kazuha_d142861208',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 750,
                          height: 381,
                          size: 512.47,
                          url: '/uploads/medium_latern_kazuha_d142861208.png'
                        },
                        large: {
                          name: 'large_latern-kazuha.png',
                          hash: 'large_latern_kazuha_d142861208',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 1000,
                          height: 508,
                          size: 868.82,
                          url: '/uploads/large_latern_kazuha_d142861208.png'
                        }
                      },
                      hash: 'latern_kazuha_d142861208',
                      ext: '.png',
                      mime: 'image/png',
                      size: 913.35,
                      url: '/uploads/latern_kazuha_d142861208.png',
                      previewUrl: null,
                      provider: 'local',
                      provider_metadata: null,
                      createdAt: '2023-07-06T04:21:19.322Z',
                      updatedAt: '2023-07-06T04:21:19.322Z'
                    }
                  }
                }
              }
            },
            {
              id: 2,
              attributes: {
                name: 'medjed',
                type: 'Team',
                description: 'i say goodbye my dearest',
                createdAt: '2023-07-06T05:44:20.111Z',
                updatedAt: '2023-07-06T05:44:21.304Z',
                publishedAt: '2023-07-06T05:44:21.302Z',
                skills: {
                  data: [
                    {
                      id: 19,
                      attributes: {
                        name: 'Next.js',
                        createdAt: '2023-06-19T10:15:30.996Z',
                        updatedAt: '2023-06-19T10:15:30.996Z'
                      }
                    },
                    {
                      id: 21,
                      attributes: {
                        name: 'Tailwind CSS',
                        createdAt: '2023-06-19T10:16:34.935Z',
                        updatedAt: '2023-06-19T10:16:34.935Z'
                      }
                    }
                  ]
                },
                cover: {
                  data: {
                    id: 3,
                    attributes: {
                      name: '5d43d1153471573.63cb42613f447.png',
                      alternativeText: 'fire force image',
                      caption: null,
                      width: 1920,
                      height: 1080,
                      formats: {
                        thumbnail: {
                          name: 'thumbnail_5d43d1153471573.63cb42613f447.png',
                          hash: 'thumbnail_5d43d1153471573_63cb42613f447_834889ef69',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 245,
                          height: 138,
                          size: 62.04,
                          url: '/uploads/thumbnail_5d43d1153471573_63cb42613f447_834889ef69.png'
                        },
                        small: {
                          name: 'small_5d43d1153471573.63cb42613f447.png',
                          hash: 'small_5d43d1153471573_63cb42613f447_834889ef69',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 500,
                          height: 281,
                          size: 225.11,
                          url: '/uploads/small_5d43d1153471573_63cb42613f447_834889ef69.png'
                        },
                        medium: {
                          name: 'medium_5d43d1153471573.63cb42613f447.png',
                          hash: 'medium_5d43d1153471573_63cb42613f447_834889ef69',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 750,
                          height: 422,
                          size: 483.7,
                          url: '/uploads/medium_5d43d1153471573_63cb42613f447_834889ef69.png'
                        },
                        large: {
                          name: 'large_5d43d1153471573.63cb42613f447.png',
                          hash: 'large_5d43d1153471573_63cb42613f447_834889ef69',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 1000,
                          height: 563,
                          size: 836.19,
                          url: '/uploads/large_5d43d1153471573_63cb42613f447_834889ef69.png'
                        }
                      },
                      hash: '5d43d1153471573_63cb42613f447_834889ef69',
                      ext: '.png',
                      mime: 'image/png',
                      size: 666.66,
                      url: '/uploads/5d43d1153471573_63cb42613f447_834889ef69.png',
                      previewUrl: null,
                      provider: 'local',
                      provider_metadata: null,
                      createdAt: '2023-07-06T05:42:42.541Z',
                      updatedAt: '2023-07-06T05:43:36.641Z'
                    }
                  }
                }
              }
            }
          ],
          meta: {
            pagination: {
              page: 1,
              pageSize: 25,
              pageCount: 1,
              total: 2
            }
          }
        })
      )
  ),
  rest.get(
    '/api/projects',
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<ProjectsResponse>({
          data: [
            {
              id: 1,
              attributes: {
                name: 'Nothing',
                type: 'Personal',
                description:
                  'im the bone of my sword steel is my body and iron is my blood ahahhahh',
                createdAt: '2023-07-06T04:23:16.065Z',
                updatedAt: '2023-07-06T04:23:22.924Z',
                publishedAt: '2023-07-06T04:23:22.923Z',
                skills: {
                  data: [
                    {
                      id: 2,
                      attributes: {
                        name: 'TypeScript',
                        createdAt: '2023-06-19T10:10:41.361Z',
                        updatedAt: '2023-06-19T10:10:41.361Z'
                      }
                    },
                    {
                      id: 15,
                      attributes: {
                        name: 'React.js',
                        createdAt: '2023-06-19T10:14:04.788Z',
                        updatedAt: '2023-06-19T10:14:04.788Z'
                      }
                    },
                    {
                      id: 19,
                      attributes: {
                        name: 'Next.js',
                        createdAt: '2023-06-19T10:15:30.996Z',
                        updatedAt: '2023-06-19T10:15:30.996Z'
                      }
                    }
                  ]
                },
                cover: {
                  data: {
                    id: 1,
                    attributes: {
                      name: 'latern-kazuha.png',
                      alternativeText: null,
                      caption: null,
                      width: 2500,
                      height: 1270,
                      formats: {
                        thumbnail: {
                          name: 'thumbnail_latern-kazuha.png',
                          hash: 'thumbnail_latern_kazuha_d142861208',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 245,
                          height: 124,
                          size: 68.76,
                          url: '/uploads/thumbnail_latern_kazuha_d142861208.png'
                        },
                        small: {
                          name: 'small_latern-kazuha.png',
                          hash: 'small_latern_kazuha_d142861208',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 500,
                          height: 254,
                          size: 246.84,
                          url: '/uploads/small_latern_kazuha_d142861208.png'
                        },
                        medium: {
                          name: 'medium_latern-kazuha.png',
                          hash: 'medium_latern_kazuha_d142861208',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 750,
                          height: 381,
                          size: 512.47,
                          url: '/uploads/medium_latern_kazuha_d142861208.png'
                        },
                        large: {
                          name: 'large_latern-kazuha.png',
                          hash: 'large_latern_kazuha_d142861208',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 1000,
                          height: 508,
                          size: 868.82,
                          url: '/uploads/large_latern_kazuha_d142861208.png'
                        }
                      },
                      hash: 'latern_kazuha_d142861208',
                      ext: '.png',
                      mime: 'image/png',
                      size: 913.35,
                      url: '/uploads/latern_kazuha_d142861208.png',
                      previewUrl: null,
                      provider: 'local',
                      provider_metadata: null,
                      createdAt: '2023-07-06T04:21:19.322Z',
                      updatedAt: '2023-07-06T04:21:19.322Z'
                    }
                  }
                }
              }
            },
            {
              id: 2,
              attributes: {
                name: 'medjed',
                type: 'Team',
                description: 'i say goodbye my dearest',
                createdAt: '2023-07-06T05:44:20.111Z',
                updatedAt: '2023-07-06T05:44:21.304Z',
                publishedAt: '2023-07-06T05:44:21.302Z',
                skills: {
                  data: [
                    {
                      id: 19,
                      attributes: {
                        name: 'Next.js',
                        createdAt: '2023-06-19T10:15:30.996Z',
                        updatedAt: '2023-06-19T10:15:30.996Z'
                      }
                    },
                    {
                      id: 21,
                      attributes: {
                        name: 'Tailwind CSS',
                        createdAt: '2023-06-19T10:16:34.935Z',
                        updatedAt: '2023-06-19T10:16:34.935Z'
                      }
                    }
                  ]
                },
                cover: {
                  data: {
                    id: 3,
                    attributes: {
                      name: '5d43d1153471573.63cb42613f447.png',
                      alternativeText: 'fire force image',
                      caption: null,
                      width: 1920,
                      height: 1080,
                      formats: {
                        thumbnail: {
                          name: 'thumbnail_5d43d1153471573.63cb42613f447.png',
                          hash: 'thumbnail_5d43d1153471573_63cb42613f447_834889ef69',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 245,
                          height: 138,
                          size: 62.04,
                          url: '/uploads/thumbnail_5d43d1153471573_63cb42613f447_834889ef69.png'
                        },
                        small: {
                          name: 'small_5d43d1153471573.63cb42613f447.png',
                          hash: 'small_5d43d1153471573_63cb42613f447_834889ef69',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 500,
                          height: 281,
                          size: 225.11,
                          url: '/uploads/small_5d43d1153471573_63cb42613f447_834889ef69.png'
                        },
                        medium: {
                          name: 'medium_5d43d1153471573.63cb42613f447.png',
                          hash: 'medium_5d43d1153471573_63cb42613f447_834889ef69',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 750,
                          height: 422,
                          size: 483.7,
                          url: '/uploads/medium_5d43d1153471573_63cb42613f447_834889ef69.png'
                        },
                        large: {
                          name: 'large_5d43d1153471573.63cb42613f447.png',
                          hash: 'large_5d43d1153471573_63cb42613f447_834889ef69',
                          ext: '.png',
                          mime: 'image/png',
                          path: null,
                          width: 1000,
                          height: 563,
                          size: 836.19,
                          url: '/uploads/large_5d43d1153471573_63cb42613f447_834889ef69.png'
                        }
                      },
                      hash: '5d43d1153471573_63cb42613f447_834889ef69',
                      ext: '.png',
                      mime: 'image/png',
                      size: 666.66,
                      url: '/uploads/5d43d1153471573_63cb42613f447_834889ef69.png',
                      previewUrl: null,
                      provider: 'local',
                      provider_metadata: null,
                      createdAt: '2023-07-06T05:42:42.541Z',
                      updatedAt: '2023-07-06T05:43:36.641Z'
                    }
                  }
                }
              }
            }
          ],
          meta: {
            pagination: {
              page: 1,
              pageSize: 25,
              pageCount: 1,
              total: 2
            }
          }
        })
      )
  ),
  rest.get(
    `${process.env.API_KEY}/api/educations`,
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<EducationsResponse>({
          data: [
            {
              id: 1,
              attributes: {
                name: 'Katapang Public Vocational High School 1',
                degree: null,
                major: 'Software Engineering',
                gpa: null,
                location: 'Bandung, Indonesia',
                startDate: '2018-07-16',
                endDate: '2021-06-02',
                description: 'i learn software engineering',
                createdAt: '2023-07-06T12:02:53.368Z',
                updatedAt: '2023-07-06T12:02:53.368Z'
              }
            },
            {
              id: 2,
              attributes: {
                name: 'Pasundan University',
                degree: 'Majoring in',
                major: 'Informatics Engineering',
                gpa: 3.66,
                location: 'Bandung, Indonesia',
                startDate: '2022-09-26',
                endDate: '2026-09-30',
                description: 'i learn code',
                createdAt: '2023-07-06T12:10:42.206Z',
                updatedAt: '2023-07-06T12:10:42.206Z'
              }
            }
          ],
          meta: {
            pagination: {
              page: 1,
              pageSize: 25,
              pageCount: 1,
              total: 2
            }
          }
        })
      )
  ),
  rest.get(
    '/api/educations',
    async (_req, res, ctx) =>
      await res(
        ctx.status(200),
        ctx.json<EducationsResponse>({
          data: [
            {
              id: 1,
              attributes: {
                name: 'Katapang Public Vocational High School 1',
                degree: null,
                major: 'Software Engineering',
                gpa: null,
                location: 'Bandung, Indonesia',
                startDate: '2018-07-16',
                endDate: '2021-06-02',
                description: 'i learn software engineering',
                createdAt: '2023-07-06T12:02:53.368Z',
                updatedAt: '2023-07-06T12:02:53.368Z'
              }
            },
            {
              id: 2,
              attributes: {
                name: 'Pasundan University',
                degree: 'Majoring in',
                major: 'Informatics Engineering',
                gpa: 3.66,
                location: 'Bandung, Indonesia',
                startDate: '2022-09-26',
                endDate: '2026-09-30',
                description: 'i learn code',
                createdAt: '2023-07-06T12:10:42.206Z',
                updatedAt: '2023-07-06T12:10:42.206Z'
              }
            }
          ],
          meta: {
            pagination: {
              page: 1,
              pageSize: 25,
              pageCount: 1,
              total: 2
            }
          }
        })
      )
  )
]
