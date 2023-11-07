Movie
-
_id PK ObjectId
title String
genre String
language String
releaseDate Date
duration Number
description String

Theater
-
_id PK ObjectId
name String
city String
address String
capacity Number

Showtime
-
_id PK ObjectId
movieId ObjectId FK >- Movie._id
theaterId ObjectId FK >- Theater._id
showtime Date
ticketPrice Number
availableSeats Number