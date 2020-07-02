export interface IFetch {
  fetched: boolean;
  fetching: boolean;
  errorMessage: string | null
}

export const initFetch = ():IFetch => ({
  fetching: false,
  fetched: false,
  errorMessage: null
});

export const fetchInProcess = ():IFetch => ({
  fetching: true,
  fetched: false,
  errorMessage: null
});

export const fetchSuccess = ():IFetch => ({
  fetching: false,
  fetched: true,
  errorMessage: null
});

export const fetchError = (error: string | null):IFetch => ({
  fetching: false,
  fetched: true,
  errorMessage: error
});