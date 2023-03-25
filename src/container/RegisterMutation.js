import { useMutation, gql } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterMutation = () => {
  const [
    registerMutation,
    {
      data: registerMutationData,
      loading: registerMutationLoading,
      error: registerMutationError,
    },
  ] = useMutation(REGISTER);
  return {
    registerMutation,
    registerMutationData,
    registerMutationLoading,
    registerMutationError,
  };
};
