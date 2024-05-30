import User from "../models/User";
import Project from "../models/Project";

const resolvers = {
  Query: {
    projects: async () =>
      await Project.findAll({ include: [{ model: User, as: "user" }] }),
    users: async () =>
      await User.findAll({ include: [{ model: Project, as: "projects" }] }),
  },
  Mutation: {
    createUser: async (_: any, { name, email }: any) => {
      return await User.create({ name, email });
    },
    createProject: async (_: any, { name, price, userId }: any) => {
      const user = await User.findByPk(userId);
      if (!user) throw new Error("User not found");
      return await Project.create({ name, price, userId });
    },
  },
  User: {
    projects: async (parent: any) => {
      return await parent.getProjects();
    },
  },
  Project: {
    user: async (project: any) => await User.findByPk(project.userId),
  },
};

export default resolvers;
