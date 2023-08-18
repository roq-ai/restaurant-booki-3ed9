import axios from 'axios';
import queryString from 'query-string';
import { TableInterface, TableGetQueryInterface } from 'interfaces/table';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTables = async (query?: TableGetQueryInterface): Promise<PaginatedInterface<TableInterface>> => {
  const response = await axios.get('/api/tables', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTable = async (table: TableInterface) => {
  const response = await axios.post('/api/tables', table);
  return response.data;
};

export const updateTableById = async (id: string, table: TableInterface) => {
  const response = await axios.put(`/api/tables/${id}`, table);
  return response.data;
};

export const getTableById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/tables/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTableById = async (id: string) => {
  const response = await axios.delete(`/api/tables/${id}`);
  return response.data;
};
