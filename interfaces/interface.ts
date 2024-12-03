import { Request, Response } from "express";

export type Login = {
  email: string;
  password: string;
};

export interface IUser {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserModel<T> {
  getUsers: () => void;
  getUser: (id: string) => void;  
  createUser: (params: T) => void;
  updateUser: (id: string, params: T) => void;
  deleteUser: (id: string) => void;
}

export interface UserController {
  getUsers: (req: Request, res: Response) => void;
  getUser: (req: Request, res: Response) => void;
  getCurrentUser: (req: Request, res: Response) => void;
  createUser: (req: Request, res: Response) => void;
  updateUser: (req: Request, res: Response) => void;
  deleteUser: (req: Request, res: Response) => void;
}

export interface IVendors {
  id?: string;
  vendorName?: string;
  address?: string;
  created_at?: string;
  updated_at?: string;
}

export interface VendorModel<T> {
  getVendors: () => void;
  getVendor: (id: string) => void;
  createVendor: (params: T) => void;
  updateVendor: (id: string, params: T) => void;
  deleteVendor: (id: string, params: T) => void;
}

export interface VendorController {
  getVendors: (req: Request, res: Response) => void;
  getVendor: (req: Request, res: Response) => void;
  createVendor: (req: Request, res: Response) => void;
  updateVendor: (req: Request, res: Response) => void;
  deleteVendor: (req: Request, res: Response) => void;
}
