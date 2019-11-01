import User from '../models/User';

class UserController {
    async store(req, res) {
        const userExist = await User.findOne({ where: { email: req.body.email } });

        if (userExist) {
            return res.status(400).json({ error: 'Usuário existente' });
        }
        const { id, name, email, admin } = await User.create(req.body);
        return res.json({ id, name, email, admin });
    }
}

export default new UserController();