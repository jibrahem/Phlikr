# SoundCloud
(link coming soon)
## Minimum Viable Product:
- [ ] Song CRUD - full crud
- [ ] Playing songs with progress bar with continuous play
- [ ] Comments - full crud 
- [ ] User Pages - partial crud (watch-list: update profile, delete account)
- [ ] Likes - partial crud
- [ ] Playlist - full crud, if time permits

## User CRUD
- [ ] User auth
- [ ] create User model
- [ ] sign up/login/logout
- [ ] User page

### User endpoints
- [ ] GET: /{user}
- Display user songs, Name, bio ect.
- [ ] UPDATE: /{user}
- To edit user bio related  

## Song CRUD
- [ ] create Song model & DB seeds
- [ ] AWS DB for songs

### Song Endpoints:
- [ ] GET: /{user}/{song}
- [ ] POST: /{user}/upload
- [ ] UPDATE: /{user}/{song.id}/
-   Edit song desc & title
- [ ] DELETE: /{user}/{song.id}


##Comments CRUD:
- [ ] create comments by a logged-in user
- [ ] update comments by a logged-in user
- [ ] delete comments by a logged-in user
- [ ] read comments for a song by a logged-in user

###Comments Endpoints: 
- [ ] GET: /api/songs/song.id/comments
- [ ] POST:　／api/songs/song.id/
- [ ] UPDATE: /api/comments/comment.id 
- [ ] DELETE: /api/comments/comment.id


##Likes CRUD:

- [ ] GET: /api/user/likes
- [ ] POST: /
- [ ] DELETE: /


