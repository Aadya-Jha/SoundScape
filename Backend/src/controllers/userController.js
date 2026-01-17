export const getUserProfile = (req, res) => {
  const user = [
    {
      username: "john123",
      name: "John Doe",
      email: "john@example.com",
      bio: "Music lover and developer",
      avatarURL: "https://example.com/john-avatar.jpg",
    }
  ];
  res.json(user);
};

export const otherUsersProfile = (req, res) => {
  const { username } = req.params;
  const user = [
    {
      username,
      bio: "xyz",
    },
  ];
  res.json(user);
};

export const userSignin = (req, res) => {
  const { email, password } = req.body;
  res.json({
    message: "user signed in",
    user: {
      email,
      password,
    },
  });
};
