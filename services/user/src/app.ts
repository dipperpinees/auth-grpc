import 'reflect-metadata';
import { GrpcServer } from './loaders';
import Container from "typedi";

Container.get(GrpcServer).start();