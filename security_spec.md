# Security Spec

Data Invariants:
1. Only authenticated users can read categories and diseases.
2. Only authenticated admins ('salahmohamedzouagui@gmail.com' or role='admin') can write to categories and diseases.
3. Users can only manage their own favorites inside `users/{userId}/favorites`.
4. Users can only edit their own profile if they are the owner, and cannot escalate privileges to "admin".

Dirty Dozen Payloads:
1. Unauthenticated read of category
2. Authenticated non-admin write to category
3. Admin writes invalid data to category
4. Authenticated write to another user's profile
5. Authenticated read of another user's favorites
6. Authenticated write to another user's favorites
7. Escalating privilege (setting role='admin' on own user profile)
8. Authenticated user updating disease schema with invalid fields
9. Poisoning IDs with 2MB string
10. Shadow update: inserting extra invisible fields not defined
11. Update gap: skipping timestamp update
12. Relational Orphan: linking a disease to a non-existent category
