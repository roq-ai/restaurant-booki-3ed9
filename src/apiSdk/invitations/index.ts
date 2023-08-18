import axios from 'axios';
import queryString from 'query-string';
import { InvitationInterface, InvitationGetQueryInterface } from 'interfaces/invitation';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInvitations = async (
  query?: InvitationGetQueryInterface,
): Promise<PaginatedInterface<InvitationInterface>> => {
  const response = await axios.get('/api/invitations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createInvitation = async (invitation: InvitationInterface) => {
  const response = await axios.post('/api/invitations', invitation);
  return response.data;
};

export const updateInvitationById = async (id: string, invitation: InvitationInterface) => {
  const response = await axios.put(`/api/invitations/${id}`, invitation);
  return response.data;
};

export const getInvitationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/invitations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInvitationById = async (id: string) => {
  const response = await axios.delete(`/api/invitations/${id}`);
  return response.data;
};
