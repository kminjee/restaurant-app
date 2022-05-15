import User from './model/user';

export const resolvers = {
    Query: {
        async allUser() {
            return await User.find();
        },
        async getUser(root, { id, password }) {
            return await User.findById(id, password);
        }
    },
    Mutation: {
        async createUser(root, { input }) {
            return await User.create(input);
        },
        async updateUser(root, { id, input }) {
            return await User.findOneAndUpdate(
                { id },
                input,
                { new: true }
            );
        },
        async deleteUser(root, { id }) {
            return await User.findOneAndDelete({ id });
        }
    }
};
