export interface myUsersType {
    id: number,
    userName: string,
    password: string,
    email: string,
    bio: string,
    roles: string,
    active: boolean,
  }

export interface BlogType {
    id: number,
    title: string,
    body: string,
    publishedDate: string,
    published: boolean,
    myUsers: {
      id: number,
      userName: string,
      password: string,
      email: string,
      bio: string,
      roles: string,
      active: boolean,
  }
}

export interface LikeStatusType {
        id: number,
        blog: {
          id: number,
          title: string,
          body: string,
          publishedDate: string,
          published: boolean,
          myUsers: {
            id: number,
            userName: string,
            password: string,
            email: string,
            bio: string,
            roles: string,
            active: boolean,
        },
        },
        likedBy: {
            id: number,
            userName: string,
            password: string,
            email: string,
            bio: string,
            roles: string,
            active: boolean,
        },
        unlikedBy: {
            id: number,
            userName: string,
            password: string,
            email: string,
            bio: string,
            roles: string,
            active: boolean,
        }
}

export interface ConnectionType {
  id: number,
  receiver: {
      id: number,
      userName: string,
      password: string,
      email: string,
      bio: string,
      roles: string,
      active: boolean,
  },
  sender: {
      id: number,
      userName: string,
      password: string,
      email: string,
      bio: string,
      roles: string,
      active: boolean,
  },
  requested: boolean,
  accepted: boolean,
  following: boolean,
}
export interface ConnectionsStatusTypes {
    id: number,
    receiver: {
      id: number,
      userName: string,
      password: string,
      email: string,
      bio: string,
      roles: string,
      active: boolean,
    },
    sender: {
      id: number,
      userName: string,
      password: string,
      email: string,
      bio: string,
      roles: string,
      active: boolean,
    },
    requested: boolean,
    accepted: boolean,
    following: boolean,
}