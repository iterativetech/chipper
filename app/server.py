from fastapi import FastAPI
from json import load, dumps
from flask import jsonify
from fastapi.middleware.cors import CORSMiddleware
from dataclasses import dataclass, field, asdict

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200",
    "http://localhost:8000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@dataclass
class Solution:
    messages: list = field(default_factory=list)
    valid_solution: bool = field(default_factory=bool)
    submitted_solution: str = field(default_factory=str)
    flag: str = field(default_factory=str)
    next_level: int = field(default_factory=int)

@app.get("/solve")
async def solve(level: int = 0, solution: str = ''):
    response = {}
    if level == 1 and solution == 'A':
        response = asdict(Solution(
            messages=['This is a valid solution'],
            valid_solution=True,
            submitted_solution=solution,
            flag='A',
            next_level=level+1
            ))
    else:
        response = asdict(Solution(
            messages=[
                'This is an invalid solution.',
                'Too much fun generated.',
                'Not enough heat generated.',
                'Too many invalid circuits',
                'This is an invalid solution.',
                'Too much fun generated.',
                'Not enough heat generated.',
                'Too many invalid circuits',
                'This is an invalid solution.',
                'Too much fun generated.',
                'Not enough heat generated.',
                'Too many invalid circuits',
                'This is an invalid solution.',
                'Too much fun generated.',
                'Not enough heat generated.',
                'Too many invalid circuits',
                'This is an invalid solution.',
                'Too much fun generated.',
                'Not enough heat generated.',
                'Too many invalid circuits',
                'This is an invalid solution.',
                'Too much fun generated.',
                'Not enough heat generated.',
                'Too many invalid circuits',
                'This is an invalid solution.',
                'Too much fun generated.',
                'Not enough heat generated.',
                'Too many invalid circuits',
                'This is an invalid solution.',
                'Too much fun generated.',
                'Not enough heat generated.',
                'Too many invalid circuits',
                ],
            valid_solution=False,
            submitted_solution=solution,
            flag='',
        ))    

    return response

@app.get("/config")
async def get_config(level: int = 0):
    
    master_config = load(open("configs.json", 'rt'))
    if str(level) in master_config.keys():
        print("I know this level")
        return master_config[str(level)]
    else:
        print("I do not know this level")
        return {'foo': "bar"}