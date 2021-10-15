import { handleFacetAction } from '../general/facets'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  updatedFilter: null,
  facets: {
    prefLabel: {
      id: 'prefLabel',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: null,
      sortDirection: null,
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'one',
      filterType: 'textFilter',
      textFilter: null,
      priority: 1
    },
    artist: {
      id: 'artist',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      pieChartButton: true,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 4
    },
    keyword: {
      id: 'keyword',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      pieChartButton: true,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 4
    },
    material: {
      id: 'material',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      pieChartButton: true,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 4
    },
    classification: {
      id: 'classification',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      pieChartButton: true,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 4
    },
    responsibleOrganisation: {
      id: 'responsibleOrganisation',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      pieChartButton: true,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 4
    },
    width: {
      id: 'width',
      // predicate: defined in backend
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      containerClass: 'five',
      type: 'integer',
      filterType: 'integerFilterRange',
      integerFilter: null,
      unit: 'cm',
      priority: 12
    },
    length: {
      id: 'length',
      // predicate: defined in backend
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      containerClass: 'five',
      type: 'integer',
      filterType: 'integerFilterRange',
      integerFilter: null,
      unit: 'cm',
      priority: 12
    },
    yearFrom: {
      id: 'yearFrom',
      // predicate: defined in backend
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      containerClass: 'five',
      type: 'integer',
      filterType: 'integerFilterRange',
      integerFilter: null,
      unit: 'year',
      priority: 12
    },
  }
}

const objectsFacets = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'objects') {
    return handleFacetAction(state, action, INITIAL_STATE)
  } else return state
}

export default objectsFacets
