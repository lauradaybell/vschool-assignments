const express = require('express');
const app = express();
const uuid = require('uuid/v4')

const bounty = [
    {
        firstName: '',
        lastName: '',
        living: true,
        bountyAmount: 200,
        type: 'Sith',
        _id: uuid()
    }
]