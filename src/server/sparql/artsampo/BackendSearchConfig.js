import { objectsConfig } from './perspective_configs/ObjectsConfig'
import {
  objectPropertiesInstancePage,
  objectPropertiesFacetResuts,
  knowledgeGraphMetadataQuery,
  objectsByMaterialQuery,
  objectsByArtistQuery,
  objectsByClassificationQuery,
  objectsByOrganizationQuery,
  objectsByKeywordQuery
} from './sparql_queries/SparqlQueriesObjects'
import { federatedSearchDatasets } from './sparql_queries/SparqlQueriesFederatedSearch'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
import { sitemapInstancePageQuery } from '../SparqlQueriesGeneral'
import { makeObjectList } from '../SparqlObjectMapper'
import {
  mapPlaces,
  mapLineChart,
  mapMultipleLineChart,
  linearScale,
  mapPieChart
} from '../Mappers'

export const backendSearchConfig = {
  objects: objectsConfig,
  objectsByMaterial: {
    perspectiveID: 'objects', // use endpoint config from finds
    q: objectsByMaterialQuery,
    filterTarget: 'object',
    resultMapper: mapPieChart
  },
  objectsByClassification: {
    perspectiveID: 'objects', // use endpoint config from finds
    q: objectsByClassificationQuery,
    filterTarget: 'object',
    resultMapper: mapPieChart
  },
  objectsByKeyword: {
    perspectiveID: 'objects', // use endpoint config from finds
    q: objectsByKeywordQuery,
    filterTarget: 'object',
    resultMapper: mapPieChart
  },
  objectsByOrganization: {
    perspectiveID: 'objects', // use endpoint config from finds
    q: objectsByOrganizationQuery,
    filterTarget: 'object',
    resultMapper: mapPieChart
  },
  objectsByArtist: {
    perspectiveID: 'objects', // use endpoint config from finds
    q: objectsByArtistQuery,
    filterTarget: 'object',
    resultMapper: mapPieChart
  }
}
