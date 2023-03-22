# User cards list React component

This app implements the rendering of the list of user cards with follow view:

![user card](./assets/usercard.png)

Every user card has an interactive featire when you hover the user avatar. Card
styles can be easily changed by using a `ThemeProvider`.

The main component `UserList` accepts only one prop, which is an array of
objects of the following format:

```json
{
  "id": "user id",
  "user": "User Name",
  "tweets": 777,
  "followers": 100500,
  "avatar": "https://i.ibb.co/mN5WsQQ/elon.png"
}
```

The component supports responsive layout, retina devices and can be used in any
other application.
