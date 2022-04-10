#!/usr/bin/env node

import { rules, generateData } from '../src/games/progression.js';
import engine from '../src/index.js';

engine(rules, generateData);
