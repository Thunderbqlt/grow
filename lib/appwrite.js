import { Client, Databases } from 'react-native-appwrite';

//Information to setup connection to database
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.sam.grow',
    projectId: '66be8da0000acf473132',
    databaseId: '66c1231800341d1703c3',
    plotCollectionId: '66c123d8000ccb68ad94',

}

const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

export const databases = new Databases(client);