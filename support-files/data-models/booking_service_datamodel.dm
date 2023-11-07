Customer
-
_id PK ObjectId
name String
email String
phone String
address String

Theater
-
_id PK ObjectId
name String
city String
address String
capacity Number

Movie
-
_id PK ObjectId
title String
genre String
language String
releaseDate Date
duration Number
description String

Showtime
-
_id PK ObjectId
movieId ObjectId FK >- Movie._id
theaterId ObjectId FK >- Theater._id
showtime Date
ticketPrice Number
availableSeats Number

Booking
-
_id PK ObjectId
customerId ObjectId FK >- Customer._id
showtimeId ObjectId FK >- Showtime._id
seatNumbers [Strings]
totalAmount Number
bookingDate Date