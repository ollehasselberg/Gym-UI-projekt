 -- KLASSER & DOMÄNMODELL --

1. Member

	memberId: int
	name: string
	email: string
	bookings: Booking[]

2. Booking

	bookingId: int
	bookingDate: Date
	status: BookingStatus - (enum)
	gymClass: GymClass

3. GymClass

	classId: int
	title: string
	instructor: string
	time: DateTime
	capacity: int

4. Admin

	adminId: int
	name: string
	email: string
	managedClasses: GymClass[]

5. Domänmodell
	| Klass    | Attribut									  | Relation       |
	| -------- | -------------------------------------------- | -------------- | 
	| Member   | memberId, name, email                        | 1 → * Booking  |
	| Booking  | bookingId, date, status                      | 1 → 1 GymClass |
	| GymClass | classId, title, instructor                   |                |
	| Admin    | adminId, name, email                         | 1 → * GymClass |
	| Enum     | BookingStatus: PENDING, CONFIRMED, CANCELLED |                |