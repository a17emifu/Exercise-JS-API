// JSON data som mock från API: OMDb
// för att visa toppfilmar
const moviesFixture =[
    {
      "Title": "Hamilton",
      "Year": "2020",
      "Rated": "PG-13",
      "Released": "03 Jul 2020",
      "Runtime": "160 min",
      "Genre": "Biography, Drama, History, Musical",
      "Director": "Thomas Kail",
      "Writer": "Lin-Manuel Miranda (book), Ron Chernow (inspired by the book Alexander Hamilton by)",
      "Actors": "Daveed Diggs, Renée Elise Goldsberry, Jonathan Groff, Chris Jackson",
      "Plot": "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.7/10"
        },
        {
          "Source": "Metacritic",
          "Value": "90/100"
        }
      ],
      "Metascore": "90",
      "imdbRating": "8.7",
      "imdbVotes": "42,260",
      "imdbID": "tt8503618",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "1917",
      "Year": "2019",
      "Rated": "R",
      "Released": "10 Jan 2020",
      "Runtime": "119 min",
      "Genre": "Drama, War",
      "Director": "Sam Mendes",
      "Writer": "Sam Mendes, Krysty Wilson-Cairns",
      "Actors": "Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth",
      "Plot": "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
      "Language": "English, French, German",
      "Country": "USA, UK, India, Spain, Canada, China",
      "Awards": "Won 3 Oscars. Another 111 wins & 166 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "89%"
        },
        {
          "Source": "Metacritic",
          "Value": "78/100"
        }
      ],
      "Metascore": "78",
      "imdbRating": "8.3",
      "imdbVotes": "372,646",
      "imdbID": "tt8579674",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Neal Street Productions, Amblin Entertainment",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Klaus",
      "Year": "2019",
      "Rated": "PG",
      "Released": "15 Nov 2019",
      "Runtime": "96 min",
      "Genre": "Animation, Adventure, Comedy, Family",
      "Director": "Sergio Pablos, Carlos Martínez López(co-director)",
      "Writer": "Sergio Pablos (original story by), Sergio Pablos (screenplay by), Jim Mahoney (screenplay by), Zach Lewis (screenplay by)",
      "Actors": "Jason Schwartzman, J.K. Simmons, Rashida Jones, Will Sasso",
      "Plot": "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg's new postman, Jesper, befriends toymaker Klaus, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions.",
      "Language": "English, Saami",
      "Country": "Spain, UK",
      "Awards": "Nominated for 1 Oscar. Another 8 wins & 19 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.2/10"
        },
        {
          "Source": "Metacritic",
          "Value": "65/100"
        }
      ],
      "Metascore": "65",
      "imdbRating": "8.2",
      "imdbVotes": "75,501",
      "imdbID": "tt4729430",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Joker",
      "Year": "2019",
      "Rated": "R",
      "Released": "04 Oct 2019",
      "Runtime": "122 min",
      "Genre": "Crime, Drama, Thriller",
      "Director": "Todd Phillips",
      "Writer": "Todd Phillips, Scott Silver, Bob Kane (based on characters created by), Bill Finger (based on characters created by), Jerry Robinson (based on characters created by)",
      "Actors": "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
      "Plot": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      "Language": "English",
      "Country": "USA, Canada",
      "Awards": "Won 2 Oscars. Another 100 wins & 218 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.5/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "68%"
        },
        {
          "Source": "Metacritic",
          "Value": "59/100"
        }
      ],
      "Metascore": "59",
      "imdbRating": "8.5",
      "imdbVotes": "866,686",
      "imdbID": "tt7286456",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Bron Studios, Creative Wealth Media Finance, DC Comics",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Ford v Ferrari",
      "Year": "2019",
      "Rated": "PG-13",
      "Released": "15 Nov 2019",
      "Runtime": "152 min",
      "Genre": "Action, Biography, Drama, Sport",
      "Director": "James Mangold",
      "Writer": "Jez Butterworth, John-Henry Butterworth, Jason Keller",
      "Actors": "Matt Damon, Christian Bale, Jon Bernthal, Caitriona Balfe",
      "Plot": "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.",
      "Language": "English, Italian, French, Japanese",
      "Country": "USA",
      "Awards": "Won 2 Oscars. Another 21 wins & 75 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.1/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "92%"
        },
        {
          "Source": "Metacritic",
          "Value": "81/100"
        }
      ],
      "Metascore": "81",
      "imdbRating": "8.1",
      "imdbVotes": "262,863",
      "imdbID": "tt1950186",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Chernin Entertainment, 20th Century Fox",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Parasite",
      "Year": "2019",
      "Rated": "R",
      "Released": "08 Nov 2019",
      "Runtime": "132 min",
      "Genre": "Comedy, Drama, Thriller",
      "Director": "Bong Joon Ho",
      "Writer": "Bong Joon Ho (story), Bong Joon Ho (screenplay), Jin Won Han (screenplay)",
      "Actors": "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo, Woo-sik Choi",
      "Plot": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      "Language": "Korean, English",
      "Country": "South Korea",
      "Awards": "Won 4 Oscars. Another 270 wins & 253 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.6/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "98%"
        },
        {
          "Source": "Metacritic",
          "Value": "96/100"
        }
      ],
      "Metascore": "96",
      "imdbRating": "8.6",
      "imdbVotes": "481,492",
      "imdbID": "tt6751668",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "CJ Entertainment, TMS Entertainment",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Portrait of a Lady on Fire",
      "Year": "2019",
      "Rated": "R",
      "Released": "14 Feb 2020",
      "Runtime": "122 min",
      "Genre": "Drama, Romance",
      "Director": "Céline Sciamma",
      "Writer": "Céline Sciamma",
      "Actors": "Noémie Merlant, Adèle Haenel, Luàna Bajrami, Valeria Golino",
      "Plot": "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
      "Language": "French, Italian",
      "Country": "France",
      "Awards": "Nominated for 1 Golden Globe. Another 44 wins & 125 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNjkwOWYtYmM3My00NzI1LTk5OGItYWY0OTMyZTY4OTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.1/10"
        },
        {
          "Source": "Metacritic",
          "Value": "95/100"
        }
      ],
      "Metascore": "95",
      "imdbRating": "8.1",
      "imdbVotes": "52,761",
      "imdbID": "tt8613070",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Avengers: Endgame",
      "Year": "2019",
      "Rated": "PG-13",
      "Released": "26 Apr 2019",
      "Runtime": "181 min",
      "Genre": "Action, Adventure, Drama, Sci-Fi",
      "Director": "Anthony Russo, Joe Russo",
      "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora & Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",
      "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
      "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      "Language": "English, Japanese, Xhosa, German",
      "Country": "USA",
      "Awards": "Nominated for 1 Oscar. Another 65 wins & 103 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "94%"
        },
        {
          "Source": "Metacritic",
          "Value": "78/100"
        }
      ],
      "Metascore": "78",
      "imdbRating": "8.4",
      "imdbVotes": "762,149",
      "imdbID": "tt4154796",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Marvel Studios, Walt Disney Pictures",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Spider-Man: Into the Spider-Verse",
      "Year": "2018",
      "Rated": "PG",
      "Released": "14 Dec 2018",
      "Runtime": "117 min",
      "Genre": "Animation, Action, Adventure, Family, Sci-Fi",
      "Director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
      "Writer": "Phil Lord (screenplay by), Rodney Rothman (screenplay by), Phil Lord (story by)",
      "Actors": "Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
      "Plot": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      "Language": "English, Spanish",
      "Country": "USA",
      "Awards": "Won 1 Oscar. Another 79 wins & 55 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.4/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "97%"
        },
        {
          "Source": "Metacritic",
          "Value": "87/100"
        }
      ],
      "Metascore": "87",
      "imdbRating": "8.4",
      "imdbVotes": "338,166",
      "imdbID": "tt4633694",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Sony Pictures Animation, Avi Arad, Pascal Pictures, Lord Miller",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Andhadhun",
      "Year": "2018",
      "Rated": "Not Rated",
      "Released": "05 Oct 2018",
      "Runtime": "139 min",
      "Genre": "Crime, Thriller",
      "Director": "Sriram Raghavan",
      "Writer": "Arijit Biswas, Yogesh Chandekar, Sriram Raghavan, Hemanth M. Rao, Pooja Ladha Surti, Olivier Treiner (based on the story by)",
      "Actors": "Ayushmann Khurrana, Tabu, Radhika Apte, Anil Dhawan",
      "Plot": "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing of.",
      "Language": "Hindi, English",
      "Country": "India",
      "Awards": "25 wins & 25 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "8.3/10"
        },
        {
          "Source": "Rotten Tomatoes",
          "Value": "100%"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "8.3",
      "imdbVotes": "67,068",
      "imdbID": "tt8108198",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "Matchbox Pictures Inc., Viacom 18 Motion Pictures",
      "Website": "N/A",
      "Response": "True"
    }
  ]

// JSON data som mock från API: OMDb
// för att visa fulla plot
const movieWithFullPlot = [
  {
    "Title": "The Social Network",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "01 Oct 2010",
    "Runtime": "120 min",
    "Genre": "Biography, Drama",
    "Director": "David Fincher",
    "Writer": "Aaron Sorkin (screenplay), Ben Mezrich (book)",
    "Actors": "Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
    "Plot": "On a fall night in 2003, Harvard undergrad and computer programming genius Mark Zuckerberg sits down at his computer and heatedly begins working on a new idea. In a fury of blogging and programming, what begins in his dorm room soon becomes a global social network and a revolution in communication. A mere six years and 500 million friends later, Mark Zuckerberg is the youngest billionaire in history... but for this entrepreneur, success leads to both personal and legal complications.",
    "Language": "English, French",
    "Country": "USA",
    "Awards": "Won 3 Oscars. Another 171 wins & 184 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "96%"
        },
        {
            "Source": "Metacritic",
            "Value": "95/100"
        }
    ],
    "Metascore": "95",
    "imdbRating": "7.7",
    "imdbVotes": "611,384",
    "imdbID": "tt1285016",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "Scott Rudin Productions, Trigger Street Productions, Michael De Luca",
    "Website": "N/A",
    "Response": "True"
}
]
  // JSON data som mock från API: OMDb.
  // för att visa sökresultatsidan 
const searchMoviesFixturePage1 =[

            {
                "Title": "Harry Potter and the Deathly Hallows: Part 2",
                "Year": "2011",
                "imdbID": "tt1201607",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
            },
            {
                "Title": "Harry Potter and the Sorcerer's Stone",
                "Year": "2001",
                "imdbID": "tt0241527",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
            },
            {
                "Title": "Harry Potter and the Chamber of Secrets",
                "Year": "2002",
                "imdbID": "tt0295297",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"
            },
            {
                "Title": "Harry Potter and the Prisoner of Azkaban",
                "Year": "2004",
                "imdbID": "tt0304141",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"
            },
            {
                "Title": "Harry Potter and the Goblet of Fire",
                "Year": "2005",
                "imdbID": "tt0330373",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Harry Potter and the Order of the Phoenix",
                "Year": "2007",
                "imdbID": "tt0373889",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"
            },
            {
                "Title": "Harry Potter and the Deathly Hallows: Part 1",
                "Year": "2010",
                "imdbID": "tt0926084",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
            },
            {
                "Title": "Harry Potter and the Half-Blood Prince",
                "Year": "2009",
                "imdbID": "tt0417741",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
            },
            {
                "Title": "Harry Potter and the Chamber of Secrets",
                "Year": "2002",
                "imdbID": "tt0304140",
                "Type": "game",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNTM4NzQ2NjA4NV5BMl5BanBnXkFtZTgwODAwMjE4MDE@._V1_SX300.jpg"
            },
            {
                "Title": "Harry Potter and the Forbidden Journey",
                "Year": "2010",
                "imdbID": "tt1756545",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg"
            }   
                     
]

const searchMoviesFixturePage2 = [
    {
        "Title": "Harry Potter and the Order of the Phoenix",
        "Year": "2007",
        "imdbID": "tt0944836",
        "Type": "game",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2VhOGI0OTItZjVhMC00MThmLWI5YzEtYTk5ZTFhMjEzOGEzXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Prisoner of Azkaban",
        "Year": "2004",
        "imdbID": "tt0414084",
        "Type": "game",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA3MDM2NTAzNl5BMl5BanBnXkFtZTcwMDkzMjYyMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Sorcerer's Stone",
        "Year": "2001",
        "imdbID": "tt0304142",
        "Type": "game",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWVhMzA3NDAtMDZmZC00OWJlLTg1NmYtMTI4MTVkOTJlNmNjXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Goblet of Fire",
        "Year": "2005",
        "imdbID": "tt0764644",
        "Type": "game",
        "Poster": "N/A"
    },
    {
        "Title": "Harry Potter and the Escape from Gringotts",
        "Year": "2014",
        "imdbID": "tt3731688",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTJmOTRjMDEtMjg1YS00YzJjLTk5MWYtZmQzMTBiNGQxYzZhXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter and the Deathly Hallows: Part II",
        "Year": "2011",
        "imdbID": "tt1680310",
        "Type": "game",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4NTcwNTk4OV5BMl5BanBnXkFtZTgwMDg3NzAwMTE@._V1_SX300.jpg"
    },
    {
        "Title": "Fantastic Beasts and Where to Find Them: Before Harry Potter",
        "Year": "2017",
        "imdbID": "tt7467820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWUxNDcxOGEtZTRmOS00OTY3LTk4YTUtZTE4ZjNiMzM5YjVjXkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg"
    },
    {
        "Title": "I Am Harry Potter",
        "Year": "2010",
        "imdbID": "tt1810644",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDcwNDA4ZmYtZDI4My00ZTQ0LThmZDItY2Y4Y2E4ZDBjYjc2XkEyXkFqcGdeQXVyMjM4NjM5OA@@._V1_SX300.jpg"
    },
    {
        "Title": "Harry Potter: Witchcraft Repackaged",
        "Year": "2001",
        "imdbID": "tt0301380",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTgxMjI3MTM5M15BMl5BanBnXkFtZTcwMTA1NDkxMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Lego Harry Potter: Years 1-4",
        "Year": "2010",
        "imdbID": "tt1454016",
        "Type": "game",
        "Poster": "N/A"
    }
]

// JSON data från API: CMDb
const likeDislikeFixture = [
  {
      "imdbID": "tt8503618",  //Hamilton
      "numberOfLikes": 9,
      "numberOfDislikes": 1
  }

]

// Klassen 
export default class Model {

    constructor(){
        console.log('model created')
    }

    async getMoviesbyTitle(username){
        return new Promise(function(resolve, reject) {
          setTimeout(() => {
              if (username === 'error') reject({})
              resolve(moviesFixture)
          }, 800)
  
      })
    }

    async getSearchResult(searchWord){

        return new Promise(function(resolve, reject) {
          setTimeout(() => {
              if (searchWord === 'error') reject({})
              resolve(searchMoviesFixturePage1)
          }, 800)
  
      })
      }    
      
    async getMovieDetail(imdbID){

        return new Promise(function(resolve, reject) {
          setTimeout(() => {
              if (imdbID === 'error') reject({})
              resolve(movieWithFullPlot)
          }, 800)
  
      })
      }  
    
    async getSearchResultbyPageNumber(searchWord, pageNumber){

        return new Promise(function(resolve, reject) {
          setTimeout(() => {
              if ((searchWord === 'error')|| (pageNumber === 0)){reject({})} 
              resolve(searchMoviesFixturePage2)
          }, 800)
  
      })
      }    
    
    async getLikeDislike(imdbID){

        return new Promise(function(resolve, reject) {
          setTimeout(() => {
              if (imdbID === 'error') reject({})
              resolve(likeDislikeFixture)
          }, 800)
  
      })
      } 
}