import {
  manuscriptPropertiesFacetResults,
  manuscriptPropertiesInstancePage
} from '../sparql_queries/SparqlQueriesPerspective1'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const collectionsConfig = {
  endpoint: {
    url: 'http://localhost:3048/ds/sparql',
    prefixes,
    useAuth: false
  },
  facetClass: ':Object',
  includeInSitemap: true,
  // defaultConstraint: `
  //   <SUBJECT> dct:source mmm-schema:Bibale .
  // `,
  paginatedResults: {
    properties: manuscriptPropertiesFacetResults
  },
  instance: {
    properties: manuscriptPropertiesInstancePage,
    relatedInstances: '',
    defaultTab: 'table'
  },
  facets: {
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    },
    artist: {
      id: 'artist',
      facetValueFilter: '',
      label: 'Author',
      labelPath: ':artist/foaf:familyName',
      predicate: ':artist',
      type: 'list'
    },
    responsibleOrganisation: {
      id: 'responsibleOrganisation',
      facetValueFilter: '',
      label: 'Author',
      labelPath: ':responsibleOrganisation',
      predicate: ':responsibleOrganisation',
      type: 'list',
      literal: 'true'
    },

  }
}
