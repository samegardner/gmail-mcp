// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'get_profile',
    endpoint: '/users/{userId}/profile',
    httpMethod: 'get',
    summary: 'Get Profile',
    description: "Gets the current user's Gmail profile (email address, message count, etc.)",
    stainlessPath: '(resource) users > (method) get_profile',
    qualified: 'client.users.getProfile',
    params: ['userId: string;'],
    response: '{ emailAddress?: string; historyId?: string; messagesTotal?: number; threadsTotal?: number; }',
    markdown:
      "## get_profile\n\n`client.users.getProfile(userId: string): { emailAddress?: string; historyId?: string; messagesTotal?: number; threadsTotal?: number; }`\n\n**get** `/users/{userId}/profile`\n\nGets the current user's Gmail profile (email address, message count, etc.)\n\n### Parameters\n\n- `userId: string`\n\n### Returns\n\n- `{ emailAddress?: string; historyId?: string; messagesTotal?: number; threadsTotal?: number; }`\n  User's Gmail profile information\n\n  - `emailAddress?: string`\n  - `historyId?: string`\n  - `messagesTotal?: number`\n  - `threadsTotal?: number`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst response = await client.users.getProfile('userId');\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/users/{userId}/messages/{id}',
    httpMethod: 'get',
    summary: 'Get Message',
    description: 'Gets a specific message by ID, including headers, body, and attachments.',
    stainlessPath: '(resource) users.messages > (method) retrieve',
    qualified: 'client.users.messages.retrieve',
    params: [
      'userId: string;',
      'id: string;',
      "format?: 'full' | 'metadata' | 'minimal' | 'raw';",
      'metadataHeaders?: string[];',
    ],
    response:
      '{ id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }',
    markdown:
      "## retrieve\n\n`client.users.messages.retrieve(userId: string, id: string, format?: 'full' | 'metadata' | 'minimal' | 'raw', metadataHeaders?: string[]): { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n\n**get** `/users/{userId}/messages/{id}`\n\nGets a specific message by ID, including headers, body, and attachments.\n\n### Parameters\n\n- `userId: string`\n\n- `id: string`\n\n- `format?: 'full' | 'metadata' | 'minimal' | 'raw'`\n  The format to return the message in\n\n- `metadataHeaders?: string[]`\n  When format is METADATA, only include these headers\n\n### Returns\n\n- `{ id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n  An email message\n\n  - `id?: string`\n  - `historyId?: string`\n  - `internalDate?: string`\n  - `labelIds?: string[]`\n  - `payload?: { body?: { attachmentId?: string; data?: string; size?: number; }; filename?: string; headers?: { name?: string; value?: string; }[]; mimeType?: string; partId?: string; parts?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }[]; }`\n  - `raw?: string`\n  - `sizeEstimate?: number`\n  - `snippet?: string`\n  - `threadId?: string`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst message = await client.users.messages.retrieve('id', { userId: 'userId' });\n\nconsole.log(message);\n```",
  },
  {
    name: 'list',
    endpoint: '/users/{userId}/messages',
    httpMethod: 'get',
    summary: 'List Messages',
    description: "Lists messages in the user's mailbox. Use 'q' parameter for Gmail search queries.",
    stainlessPath: '(resource) users.messages > (method) list',
    qualified: 'client.users.messages.list',
    params: [
      'userId: string;',
      'includeSpamTrash?: boolean;',
      'labelIds?: string[];',
      'maxResults?: number;',
      'pageToken?: string;',
      'q?: string;',
    ],
    response:
      '{ messages?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }[]; nextPageToken?: string; resultSizeEstimate?: number; }',
    markdown:
      "## list\n\n`client.users.messages.list(userId: string, includeSpamTrash?: boolean, labelIds?: string[], maxResults?: number, pageToken?: string, q?: string): { messages?: message[]; nextPageToken?: string; resultSizeEstimate?: number; }`\n\n**get** `/users/{userId}/messages`\n\nLists messages in the user's mailbox. Use 'q' parameter for Gmail search queries.\n\n### Parameters\n\n- `userId: string`\n\n- `includeSpamTrash?: boolean`\n  Include messages from SPAM and TRASH\n\n- `labelIds?: string[]`\n  Only return messages with these label IDs\n\n- `maxResults?: number`\n  Maximum number of messages to return (default 100, max 500)\n\n- `pageToken?: string`\n  Page token for pagination\n\n- `q?: string`\n  Gmail search query (e.g., 'from:sender@example.com', 'is:unread', 'subject:hello')\n\n### Returns\n\n- `{ messages?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }[]; nextPageToken?: string; resultSizeEstimate?: number; }`\n  Response for listing messages\n\n  - `messages?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }[]`\n  - `nextPageToken?: string`\n  - `resultSizeEstimate?: number`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst messages = await client.users.messages.list('userId');\n\nconsole.log(messages);\n```",
  },
  {
    name: 'delete',
    endpoint: '/users/{userId}/messages/{id}',
    httpMethod: 'delete',
    summary: 'Delete Message',
    description: 'Immediately and permanently deletes a message (cannot be undone).',
    stainlessPath: '(resource) users.messages > (method) delete',
    qualified: 'client.users.messages.delete',
    params: ['userId: string;', 'id: string;'],
    markdown:
      "## delete\n\n`client.users.messages.delete(userId: string, id: string): void`\n\n**delete** `/users/{userId}/messages/{id}`\n\nImmediately and permanently deletes a message (cannot be undone).\n\n### Parameters\n\n- `userId: string`\n\n- `id: string`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nawait client.users.messages.delete('id', { userId: 'userId' })\n```",
  },
  {
    name: 'get_attachment',
    endpoint: '/users/{userId}/messages/{messageId}/attachments/{id}',
    httpMethod: 'get',
    summary: 'Get Attachment',
    description: 'Gets a specific message attachment.',
    stainlessPath: '(resource) users.messages > (method) get_attachment',
    qualified: 'client.users.messages.getAttachment',
    params: ['userId: string;', 'messageId: string;', 'id: string;'],
    response: '{ attachmentId?: string; data?: string; size?: number; }',
    markdown:
      "## get_attachment\n\n`client.users.messages.getAttachment(userId: string, messageId: string, id: string): { attachmentId?: string; data?: string; size?: number; }`\n\n**get** `/users/{userId}/messages/{messageId}/attachments/{id}`\n\nGets a specific message attachment.\n\n### Parameters\n\n- `userId: string`\n\n- `messageId: string`\n\n- `id: string`\n\n### Returns\n\n- `{ attachmentId?: string; data?: string; size?: number; }`\n  The body of a MIME message part\n\n  - `attachmentId?: string`\n  - `data?: string`\n  - `size?: number`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst response = await client.users.messages.getAttachment('id', { userId: 'userId', messageId: 'messageId' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'send',
    endpoint: '/users/{userId}/messages/send',
    httpMethod: 'post',
    summary: 'Send Message',
    description: 'Sends an email to recipients specified in To, Cc, and Bcc headers.',
    stainlessPath: '(resource) users.messages > (method) send',
    qualified: 'client.users.messages.send',
    params: [
      'userId: string;',
      'id?: string;',
      'historyId?: string;',
      'internalDate?: string;',
      'labelIds?: string[];',
      'payload?: { body?: { attachmentId?: string; data?: string; size?: number; }; filename?: string; headers?: { name?: string; value?: string; }[]; mimeType?: string; partId?: string; parts?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }[]; };',
      'raw?: string;',
      'sizeEstimate?: number;',
      'snippet?: string;',
      'threadId?: string;',
    ],
    response:
      '{ id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }',
    markdown:
      "## send\n\n`client.users.messages.send(userId: string, id?: string, historyId?: string, internalDate?: string, labelIds?: string[], payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }, raw?: string, sizeEstimate?: number, snippet?: string, threadId?: string): { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n\n**post** `/users/{userId}/messages/send`\n\nSends an email to recipients specified in To, Cc, and Bcc headers.\n\n### Parameters\n\n- `userId: string`\n\n- `id?: string`\n  The immutable message ID\n\n- `historyId?: string`\n  The history record ID\n\n- `internalDate?: string`\n  Internal message creation timestamp (epoch ms)\n\n- `labelIds?: string[]`\n  List of label IDs applied to this message\n\n- `payload?: { body?: { attachmentId?: string; data?: string; size?: number; }; filename?: string; headers?: { name?: string; value?: string; }[]; mimeType?: string; partId?: string; parts?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }[]; }`\n  A single MIME message part\n  - `body?: { attachmentId?: string; data?: string; size?: number; }`\n    The body of a MIME message part\n  - `filename?: string`\n    The filename of the attachment (if applicable)\n  - `headers?: { name?: string; value?: string; }[]`\n    List of headers for this part\n  - `mimeType?: string`\n    The MIME type of this part\n  - `partId?: string`\n    The part ID\n  - `parts?: { body?: { attachmentId?: string; data?: string; size?: number; }; filename?: string; headers?: { name?: string; value?: string; }[]; mimeType?: string; partId?: string; parts?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }[]; }[]`\n    Child MIME parts (for multipart messages)\n\n- `raw?: string`\n  The entire email in RFC 2822 format, base64url encoded\n\n- `sizeEstimate?: number`\n  Estimated size in bytes\n\n- `snippet?: string`\n  A short excerpt from the message body\n\n- `threadId?: string`\n  The thread ID this message belongs to\n\n### Returns\n\n- `{ id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n  An email message\n\n  - `id?: string`\n  - `historyId?: string`\n  - `internalDate?: string`\n  - `labelIds?: string[]`\n  - `payload?: { body?: { attachmentId?: string; data?: string; size?: number; }; filename?: string; headers?: { name?: string; value?: string; }[]; mimeType?: string; partId?: string; parts?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }[]; }`\n  - `raw?: string`\n  - `sizeEstimate?: number`\n  - `snippet?: string`\n  - `threadId?: string`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst message = await client.users.messages.send('userId');\n\nconsole.log(message);\n```",
  },
  {
    name: 'trash',
    endpoint: '/users/{userId}/messages/{id}/trash',
    httpMethod: 'post',
    summary: 'Trash Message',
    description: 'Moves a message to the trash.',
    stainlessPath: '(resource) users.messages > (method) trash',
    qualified: 'client.users.messages.trash',
    params: ['userId: string;', 'id: string;'],
    response:
      '{ id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }',
    markdown:
      "## trash\n\n`client.users.messages.trash(userId: string, id: string): { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n\n**post** `/users/{userId}/messages/{id}/trash`\n\nMoves a message to the trash.\n\n### Parameters\n\n- `userId: string`\n\n- `id: string`\n\n### Returns\n\n- `{ id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n  An email message\n\n  - `id?: string`\n  - `historyId?: string`\n  - `internalDate?: string`\n  - `labelIds?: string[]`\n  - `payload?: { body?: { attachmentId?: string; data?: string; size?: number; }; filename?: string; headers?: { name?: string; value?: string; }[]; mimeType?: string; partId?: string; parts?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }[]; }`\n  - `raw?: string`\n  - `sizeEstimate?: number`\n  - `snippet?: string`\n  - `threadId?: string`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst message = await client.users.messages.trash('id', { userId: 'userId' });\n\nconsole.log(message);\n```",
  },
  {
    name: 'create',
    endpoint: '/users/{userId}/drafts',
    httpMethod: 'post',
    summary: 'Create Draft',
    description: 'Creates a new draft email.',
    stainlessPath: '(resource) users.drafts > (method) create',
    qualified: 'client.users.drafts.create',
    params: [
      'userId: string;',
      'id?: string;',
      'message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; };',
    ],
    response:
      '{ id?: string; message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }; }',
    markdown:
      "## create\n\n`client.users.drafts.create(userId: string, id?: string, message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }): { id?: string; message?: message; }`\n\n**post** `/users/{userId}/drafts`\n\nCreates a new draft email.\n\n### Parameters\n\n- `userId: string`\n\n- `id?: string`\n  The draft ID\n\n- `message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n  An email message\n  - `id?: string`\n    The immutable message ID\n  - `historyId?: string`\n    The history record ID\n  - `internalDate?: string`\n    Internal message creation timestamp (epoch ms)\n  - `labelIds?: string[]`\n    List of label IDs applied to this message\n  - `payload?: { body?: { attachmentId?: string; data?: string; size?: number; }; filename?: string; headers?: { name?: string; value?: string; }[]; mimeType?: string; partId?: string; parts?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }[]; }`\n    A single MIME message part\n  - `raw?: string`\n    The entire email in RFC 2822 format, base64url encoded\n  - `sizeEstimate?: number`\n    Estimated size in bytes\n  - `snippet?: string`\n    A short excerpt from the message body\n  - `threadId?: string`\n    The thread ID this message belongs to\n\n### Returns\n\n- `{ id?: string; message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }; }`\n  A draft email message\n\n  - `id?: string`\n  - `message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst draft = await client.users.drafts.create('userId');\n\nconsole.log(draft);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/users/{userId}/drafts/{id}',
    httpMethod: 'get',
    summary: 'Get Draft',
    description: 'Gets a specific draft by ID.',
    stainlessPath: '(resource) users.drafts > (method) retrieve',
    qualified: 'client.users.drafts.retrieve',
    params: ['userId: string;', 'id: string;', "format?: 'full' | 'metadata' | 'minimal' | 'raw';"],
    response:
      '{ id?: string; message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }; }',
    markdown:
      "## retrieve\n\n`client.users.drafts.retrieve(userId: string, id: string, format?: 'full' | 'metadata' | 'minimal' | 'raw'): { id?: string; message?: message; }`\n\n**get** `/users/{userId}/drafts/{id}`\n\nGets a specific draft by ID.\n\n### Parameters\n\n- `userId: string`\n\n- `id: string`\n\n- `format?: 'full' | 'metadata' | 'minimal' | 'raw'`\n  The format to return the draft in\n\n### Returns\n\n- `{ id?: string; message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }; }`\n  A draft email message\n\n  - `id?: string`\n  - `message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst draft = await client.users.drafts.retrieve('id', { userId: 'userId' });\n\nconsole.log(draft);\n```",
  },
  {
    name: 'update',
    endpoint: '/users/{userId}/drafts/{id}',
    httpMethod: 'put',
    summary: 'Update Draft',
    description: "Replaces a draft's content.",
    stainlessPath: '(resource) users.drafts > (method) update',
    qualified: 'client.users.drafts.update',
    params: [
      'userId: string;',
      'id: string;',
      'id?: string;',
      'message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; };',
    ],
    response:
      '{ id?: string; message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }; }',
    markdown:
      "## update\n\n`client.users.drafts.update(userId: string, id: string, id?: string, message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }): { id?: string; message?: message; }`\n\n**put** `/users/{userId}/drafts/{id}`\n\nReplaces a draft's content.\n\n### Parameters\n\n- `userId: string`\n\n- `id: string`\n\n- `id?: string`\n  The draft ID\n\n- `message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n  An email message\n  - `id?: string`\n    The immutable message ID\n  - `historyId?: string`\n    The history record ID\n  - `internalDate?: string`\n    Internal message creation timestamp (epoch ms)\n  - `labelIds?: string[]`\n    List of label IDs applied to this message\n  - `payload?: { body?: { attachmentId?: string; data?: string; size?: number; }; filename?: string; headers?: { name?: string; value?: string; }[]; mimeType?: string; partId?: string; parts?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }[]; }`\n    A single MIME message part\n  - `raw?: string`\n    The entire email in RFC 2822 format, base64url encoded\n  - `sizeEstimate?: number`\n    Estimated size in bytes\n  - `snippet?: string`\n    A short excerpt from the message body\n  - `threadId?: string`\n    The thread ID this message belongs to\n\n### Returns\n\n- `{ id?: string; message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }; }`\n  A draft email message\n\n  - `id?: string`\n  - `message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst draft = await client.users.drafts.update('id', { userId: 'userId' });\n\nconsole.log(draft);\n```",
  },
  {
    name: 'list',
    endpoint: '/users/{userId}/drafts',
    httpMethod: 'get',
    summary: 'List Drafts',
    description: "Lists drafts in the user's mailbox.",
    stainlessPath: '(resource) users.drafts > (method) list',
    qualified: 'client.users.drafts.list',
    params: ['userId: string;', 'maxResults?: number;', 'pageToken?: string;', 'q?: string;'],
    response:
      '{ drafts?: { id?: string; message?: message; }[]; nextPageToken?: string; resultSizeEstimate?: number; }',
    markdown:
      "## list\n\n`client.users.drafts.list(userId: string, maxResults?: number, pageToken?: string, q?: string): { drafts?: draft[]; nextPageToken?: string; resultSizeEstimate?: number; }`\n\n**get** `/users/{userId}/drafts`\n\nLists drafts in the user's mailbox.\n\n### Parameters\n\n- `userId: string`\n\n- `maxResults?: number`\n  Maximum number of drafts to return\n\n- `pageToken?: string`\n  Page token for pagination\n\n- `q?: string`\n  Gmail search query to filter drafts\n\n### Returns\n\n- `{ drafts?: { id?: string; message?: message; }[]; nextPageToken?: string; resultSizeEstimate?: number; }`\n  Response for listing drafts\n\n  - `drafts?: { id?: string; message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }; }[]`\n  - `nextPageToken?: string`\n  - `resultSizeEstimate?: number`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst drafts = await client.users.drafts.list('userId');\n\nconsole.log(drafts);\n```",
  },
  {
    name: 'delete',
    endpoint: '/users/{userId}/drafts/{id}',
    httpMethod: 'delete',
    summary: 'Delete Draft',
    description: 'Immediately and permanently deletes a draft.',
    stainlessPath: '(resource) users.drafts > (method) delete',
    qualified: 'client.users.drafts.delete',
    params: ['userId: string;', 'id: string;'],
    markdown:
      "## delete\n\n`client.users.drafts.delete(userId: string, id: string): void`\n\n**delete** `/users/{userId}/drafts/{id}`\n\nImmediately and permanently deletes a draft.\n\n### Parameters\n\n- `userId: string`\n\n- `id: string`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nawait client.users.drafts.delete('id', { userId: 'userId' })\n```",
  },
  {
    name: 'send',
    endpoint: '/users/{userId}/drafts/send',
    httpMethod: 'post',
    summary: 'Send Draft',
    description: 'Sends a draft to the recipients in To, Cc, and Bcc headers.',
    stainlessPath: '(resource) users.drafts > (method) send',
    qualified: 'client.users.drafts.send',
    params: [
      'userId: string;',
      'id?: string;',
      'message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; };',
    ],
    response:
      '{ id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }',
    markdown:
      "## send\n\n`client.users.drafts.send(userId: string, id?: string, message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }): { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: message_part; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n\n**post** `/users/{userId}/drafts/send`\n\nSends a draft to the recipients in To, Cc, and Bcc headers.\n\n### Parameters\n\n- `userId: string`\n\n- `id?: string`\n  The draft ID\n\n- `message?: { id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n  An email message\n  - `id?: string`\n    The immutable message ID\n  - `historyId?: string`\n    The history record ID\n  - `internalDate?: string`\n    Internal message creation timestamp (epoch ms)\n  - `labelIds?: string[]`\n    List of label IDs applied to this message\n  - `payload?: { body?: { attachmentId?: string; data?: string; size?: number; }; filename?: string; headers?: { name?: string; value?: string; }[]; mimeType?: string; partId?: string; parts?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }[]; }`\n    A single MIME message part\n  - `raw?: string`\n    The entire email in RFC 2822 format, base64url encoded\n  - `sizeEstimate?: number`\n    Estimated size in bytes\n  - `snippet?: string`\n    A short excerpt from the message body\n  - `threadId?: string`\n    The thread ID this message belongs to\n\n### Returns\n\n- `{ id?: string; historyId?: string; internalDate?: string; labelIds?: string[]; payload?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }; raw?: string; sizeEstimate?: number; snippet?: string; threadId?: string; }`\n  An email message\n\n  - `id?: string`\n  - `historyId?: string`\n  - `internalDate?: string`\n  - `labelIds?: string[]`\n  - `payload?: { body?: { attachmentId?: string; data?: string; size?: number; }; filename?: string; headers?: { name?: string; value?: string; }[]; mimeType?: string; partId?: string; parts?: { body?: object; filename?: string; headers?: object[]; mimeType?: string; partId?: string; parts?: message_part[]; }[]; }`\n  - `raw?: string`\n  - `sizeEstimate?: number`\n  - `snippet?: string`\n  - `threadId?: string`\n\n### Example\n\n```typescript\nimport GmailMcp from 'gmail-mcp';\n\nconst client = new GmailMcp();\n\nconst message = await client.users.drafts.send('userId');\n\nconsole.log(message);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
