#!/usr/bin/env node

import { rules, generateData } from '../src/games/even.js';
import engine from '../src/index.js';

engine(rules, generateData);
