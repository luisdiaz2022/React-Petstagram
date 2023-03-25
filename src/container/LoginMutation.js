import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLoginMutation = () => {
  const [
    loginMutation,
    {
      data: loginMutationData,
      loading: loginMutationLoading,
      error: loginMutationError,
    },
  ] = useMutation(LOGIN);
  return {
    loginMutation,
    loginMutationData,
    loginMutationLoading,
    loginMutationError,
  };
};
