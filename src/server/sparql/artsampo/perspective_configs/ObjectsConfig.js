import {
  objectPropertiesFacetResults,
  objectPropertiesInstancePage
} from '../sparql_queries/SparqlQueriesObjects'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const objectsConfig = {
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
    properties: objectPropertiesFacetResults
  },
  instance: {
    properties: objectPropertiesInstancePage,
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
    classification: {
      id: 'classification',
      facetValueFilter: '',
      label: 'Classification',
      labelPath: ':classification',
      predicate: ':classification',
      type: 'list',
      literal: 'true'
    },
    material: {
      id: 'material',
      facetValueFilter: '',
      label: 'Material',
      labelPath: ':material',
      predicate: ':material',
      type: 'list',
      literal: 'true'
    },
    keyword: {
      id: 'keyword',
      facetValueFilter: '',
      label: 'Keyword',
      labelPath: ':keyword',
      predicate: ':keyword',
      type: 'list',
      literal: 'true'
    },
    yearFrom: {
      id: 'yearFrom',
      facetValueFilter: '',
      labelPath: ':yearFrom',
      predicate: ':yearFrom',
      type: 'integer'
    },
    width: {
      id: 'width',
      facetValueFilter: '',
      labelPath: ':widtht',
      predicate: ':width',
      type: 'integer',
      typecasting: 'BIND(xsd:integer(ROUND(?value)) as ?valueAsInteger)'
    },
    length: {
      id: 'height',
      facetValueFilter: '',
      labelPath: ':length',
      predicate: ':length',
      type: 'integer',
      typecasting: 'BIND(xsd:integer(ROUND(?value)) as ?valueAsInteger)'
    }
  }
}
