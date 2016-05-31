import FactoryGuy from 'ember-data-factory-guy';
import faker from 'faker';

FactoryGuy.define('file', {
    default: {
        name: () => 'foo.txt',//faker.lorem.word() + '.txt',
        kind: 'file',
        path: '/1234567890',  // Faker.system.filePath may not yet be implemented
        size: () => faker.random.number(),
        provider: 'osfstorage',
        materializedPath: () => '/' + 'foo.png',//faker.lorem.word() + '.png',
        lastTouched: null,

        dateModified: () => faker.date.recent(1),
        dateCreated: () => faker.date.past(1),

        isProvider: false,
        checkout: false,

        links: {
            upload: '/this/is/an/upload/url',
            download: '/this/is/a/download/url',
            move: '/this/is/a/move/url',
            delete: '/this/is/a/delete/url',
            new_folder: '/this/is/a/new_folder/url'
        }
    },
    traits: {
        // Folder specific
        isFolder: {
            kind: 'folder',
            materializedPath: () => '/' + 'foo',//faker.lorem.word(),
            files: () => FactoryGuy.hasMany('file', 3)
        },
        // File specific
        hasVersions: {
            kind: 'file',
            versions: () => FactoryGuy.hasMany('file-version', 3)
        },
        hasComments: {
            kind: 'file',
            comments: () => FactoryGuy.hasMany('comment', 3)
        }
    }
});
