import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ADD_EXPENSE
/*const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250*/

const demoState = {
  movies: [{
    id: 335983,
    title: 'Venom',
    overview: 'radnja filma',
    vote_average:6.9,
    poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    release_date: "2018-10-03",
    genres:"Action/Drama",
    runtime:112,
    budget:116000000,
    popularity:24713,
    cast:[{
      character:'Jack Pearson',
      name:'Milo Ventimiglia',
      profile_path:'/maJeS6bA6ku21rSRceISQtwHL2h.jpg',
    }],
  }],
  series: [{
    id: 335983,
    name: 'This is us',
    overview: 'radnja serije',
    vote_average:6.9,
    poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    air_date: "2018-11-27",
    number_of_episodes: 45,
    number_of_seasons: 3,
    genres:"Action/Drama",
    popularity:24713,
    cast:[{
      character:'Jack Pearson',
      name:'Milo Ventimiglia',
      profile_path:'/maJeS6bA6ku21rSRceISQtwHL2h.jpg',
    }],
  }],
  filters: {
    text: 'venom',
    sortBy: 'rating', // rating or popularity
  }
};

//* Actions 

    //? Movie Actions

    //! ADD_MOVIE

    const addMovie = (
      {
        title="Movie Title",
        overview="Movie Description",
        vote_average=0,
        poster_path='/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        release_date='NA',
        genres='',
        runtime=0,
        budget=0,
        popularity=0,
        cast=[]

      }={ } 
      )=> ({
        type: 'ADD_MOVIE',
        movie: {
          id: uuid(),
          title,
          overview,
          vote_average,
          poster_path,
          release_date,
          genres,
          runtime,
          budget,
          popularity,
          cast
        }
      });

  //! REMOVE_MOVIE

      const removeMovie = ({ id }) => ({
        type:'REMOVE_MOVIE',
        id
      })


  //? Series Actions

  //! ADD_SERIES

  const addSeries = (
      {
        title="Series Title",
        overview="Movie Description",
        vote_average=0,
        poster_path='/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        air_date= "NA",
        number_of_episodes=0,
        number_of_seasons=0,
        genres='',
        popularity=0,
        cast=[]

      }={ } 
      )=> ({
        type: 'ADD_SERIES',
        series: {
          id: uuid(),
          title,
          overview,
          vote_average,
          poster_path,
          air_date,
          number_of_episodes,
          number_of_seasons,
          genres,
          popularity,
          cast
        }
      });

  //! REMOVE_SERIES
  
      const removeSeries = ({ id }) => ({
        type:'REMOVE_SERIES',
        id
      })

  //? Filter Actions

      //! SEARCH_BY_TEXT

      const textSearch = ({text=''} = {}) => ({
        type:'SEARCH_BY_TEXT',
        text
      });

    //! SORT_BY_RATING

    const sortByRating = () => ({
      type:'SORT_BY_RATING'
    })

    //! SORT_BY_POPULARITY

    const sortByPopularity = () => ({
      type:'SORT_BY_POPULARITY'
    })


//* REDUCERS
//* Movies Reducer

  const defaultMoviesReducerState = [];

  const moviesReducer = (state = defaultMoviesReducerState,action) => {
    switch(action.type){
      case 'ADD_MOVIE':
        return [
          ...state,
          action.movie
        ]
      case 'REMOVE_MOVIE':
        return state.filter(({ id }) => id !== action.id)
      default:
        return state
    }
  }

//* Series Reducer

  const defaultSeriesReducerState = [];
   
  const seriesReducer = (state = defaultSeriesReducerState,action) => {
    switch(action.type){
      case 'ADD_SERIES':
        return [
          ...state,
          action.series
        ]
      case 'REMOVE_SERIES':
        return state.filter(({ id }) => id !== action.id)
      default:
        return state
    }
  }

  //* Watchlist Reducer
  const defaultWatchlistReducerState=[];
  const watchlistReducer = (state = defaultWatchlistReducerState,action) => {
      
  }

//* Filter Reducer

  const defaultFilterReducerState={
    text:'',
    sortBy:'rating' // rating or popularity
  }

  const filterReducer = (state = defaultFilterReducerState,action) => {
    switch(action.type){
      case 'SEARCH_BY_TEXT':
        return {
          ...state,
          text:action.text
        }
      case 'SORT_BY_RATING':
        return {
          ...state,
          sortBy:'rating'
        }
      case 'SORT_BY_POPULARITY':
        return {
          ...state,
          sortBy:'popularity'

        }
      default:
        return state
    }
  }


//* STORE

const store=createStore(
  combineReducers({
    movies: moviesReducer,
    series: seriesReducer,
    filter: filterReducer
  })
)


const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});


const firstMovie= store.dispatch(addMovie({
  title: 'Venom',
    overview: 'radnja filma',
    vote_average:6.9,
    poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    release_date: "2018-10-03",
    genres:"Action/Drama",
    runtime:112,
    budget:116000000,
    popularity:224713,
    cast:[{
      character:'Jack Pearson',
      name:'Milo Ventimiglia',
      profile_path:'/maJeS6bA6ku21rSRceISQtwHL2h.jpg',
    }],
}));

 store.dispatch(addMovie({
  title: 'Rio',
    overview: 'radnja filma',
    vote_average:9.9,
    poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    release_date: "2018-10-03",
    runtime:112,
    budget:116000000,
    genres:"Action/Drama",
    popularity:24713,
    cast:[{
      character:'Jack Pearson',
      name:'Milo Ventimiglia',
      profile_path:'/maJeS6bA6ku21rSRceISQtwHL2h.jpg',
    }],
}))



const firstSeries= store.dispatch(addSeries({
    title: 'This is us',
    overview: 'radnja serije',
    vote_average:6.9,
    poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    air_date: "2018-11-27",
    number_of_episodes: 45,
    number_of_seasons: 3,
    genres:"Action/Drama",
    popularity:24713,
    cast:[{
      character:'Jack Pearson',
      name:'Milo Ventimiglia',
      profile_path:'/maJeS6bA6ku21rSRceISQtwHL2h.jpg',
    }],
}));

const secondSeries= store.dispatch(addSeries({
    title: 'This is yours',
    overview: 'radnja serije',
    vote_average:8.9,
    poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    air_date: "2018-11-27",
    number_of_episodes: 45,
    number_of_seasons: 33,
    genres:"Action/Drama",
    popularity:24000000000713,
    cast:[{
      character:'Jack Pearson',
      name:'Milo Ventimiglia',
      profile_path:'/maJeS6bA6ku21rSRceISQtwHL2h.jpg',
    }],
}));




store.dispatch(sortByPopularity());


//* Filter Movies And Series

const getVisibleExpenses = (movies, { text, sortBy}) => {
  return movies.filter((movie) => {
    const textMatch = movie.title.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'rating') {
      return a.vote_average < b.vote_average ? 1 : -1;
    } else if (sortBy === 'popularity') {
      return a.popularity < b.popularity ? 1 : -1;
    }
  });
};
