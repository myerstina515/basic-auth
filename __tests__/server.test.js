'use strict';

require('@code-fellows/supergoose');

const User = require('../model/signin');
const { server } = require('../server');
const agent = supergoose(server);



describe('basic auth', () => {
    it('should respond with a new user on /POST to /signup', async () => {
        const newUser = {"username": "tina", "password": "hello"};
        const data = await agent.post('/signup').query(newUser);
        expect(data).toBeDefined;    
    })
});
