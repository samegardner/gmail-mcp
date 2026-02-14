// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.users.getProfile',
    fullyQualifiedName: 'users.getProfile',
    httpMethod: 'get',
    httpPath: '/users/{userId}/profile',
  },
  {
    clientCallName: 'client.users.messages.retrieve',
    fullyQualifiedName: 'users.messages.retrieve',
    httpMethod: 'get',
    httpPath: '/users/{userId}/messages/{id}',
  },
  {
    clientCallName: 'client.users.messages.list',
    fullyQualifiedName: 'users.messages.list',
    httpMethod: 'get',
    httpPath: '/users/{userId}/messages',
  },
  {
    clientCallName: 'client.users.messages.delete',
    fullyQualifiedName: 'users.messages.delete',
    httpMethod: 'delete',
    httpPath: '/users/{userId}/messages/{id}',
  },
  {
    clientCallName: 'client.users.messages.getAttachment',
    fullyQualifiedName: 'users.messages.getAttachment',
    httpMethod: 'get',
    httpPath: '/users/{userId}/messages/{messageId}/attachments/{id}',
  },
  {
    clientCallName: 'client.users.messages.send',
    fullyQualifiedName: 'users.messages.send',
    httpMethod: 'post',
    httpPath: '/users/{userId}/messages/send',
  },
  {
    clientCallName: 'client.users.messages.trash',
    fullyQualifiedName: 'users.messages.trash',
    httpMethod: 'post',
    httpPath: '/users/{userId}/messages/{id}/trash',
  },
  {
    clientCallName: 'client.users.drafts.create',
    fullyQualifiedName: 'users.drafts.create',
    httpMethod: 'post',
    httpPath: '/users/{userId}/drafts',
  },
  {
    clientCallName: 'client.users.drafts.retrieve',
    fullyQualifiedName: 'users.drafts.retrieve',
    httpMethod: 'get',
    httpPath: '/users/{userId}/drafts/{id}',
  },
  {
    clientCallName: 'client.users.drafts.update',
    fullyQualifiedName: 'users.drafts.update',
    httpMethod: 'put',
    httpPath: '/users/{userId}/drafts/{id}',
  },
  {
    clientCallName: 'client.users.drafts.list',
    fullyQualifiedName: 'users.drafts.list',
    httpMethod: 'get',
    httpPath: '/users/{userId}/drafts',
  },
  {
    clientCallName: 'client.users.drafts.delete',
    fullyQualifiedName: 'users.drafts.delete',
    httpMethod: 'delete',
    httpPath: '/users/{userId}/drafts/{id}',
  },
  {
    clientCallName: 'client.users.drafts.send',
    fullyQualifiedName: 'users.drafts.send',
    httpMethod: 'post',
    httpPath: '/users/{userId}/drafts/send',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
