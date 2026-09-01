# Changelog

## 0.3.0 (2026-09-01)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/samegardner/gmail-mcp/compare/v0.2.0...v0.3.0)

### Features

* **api:** undo ([f172e5a](https://github.com/samegardner/gmail-mcp/commit/f172e5a0102d560f8a5cb6ae829f9d29503c161b))
* **mcp:** add an option to disable code tool ([21d7f6a](https://github.com/samegardner/gmail-mcp/commit/21d7f6af70fcac3b482c69d609ca086042b6ff25))
* **mcp:** add initial server instructions ([e7fc68a](https://github.com/samegardner/gmail-mcp/commit/e7fc68ab99376cc6e974dbf3f038fe0bbf2c6673))
* **stlc:** configurable CI runner and private-production-repo support in workflow templates ([e565f77](https://github.com/samegardner/gmail-mcp/commit/e565f77a56cdc1138562d6a943888aef515cd181))
* support setting headers via env ([c76a2c9](https://github.com/samegardner/gmail-mcp/commit/c76a2c96641e9eda5bc241e58251fe4c5348ef56))


### Bug Fixes

* **ci:** bump @arethetypeswrong/cli to ^0.18.0 and run CI workflows on Node 24 ([589407c](https://github.com/samegardner/gmail-mcp/commit/589407c51bfc93df39dce6c83ba41d1b6b95b415))
* **client:** avoid memory leak with abort signals ([326358b](https://github.com/samegardner/gmail-mcp/commit/326358bc19bc4a3726fe5b9adff21efe7dfbd432))
* **client:** avoid removing abort listener too early ([72600ef](https://github.com/samegardner/gmail-mcp/commit/72600efc1510c00cb2a1bccced1eaab66deb5f70))
* **client:** improve parameter names ([03042b0](https://github.com/samegardner/gmail-mcp/commit/03042b0e3ad25e1ff87fefd08cf8540a1f383d5c))
* **client:** preserve URL params already embedded in path ([5d68806](https://github.com/samegardner/gmail-mcp/commit/5d68806279f6e6935b038d3b109f917471f074cd))
* **client:** send content-type header for requests with an omitted optional body ([7d01c87](https://github.com/samegardner/gmail-mcp/commit/7d01c87b62a5ca7a84e212530465bce4f42055aa))
* **docs/contributing:** correct pnpm link command ([9e601e8](https://github.com/samegardner/gmail-mcp/commit/9e601e880b319598fe32692823562b27f3a11c00))
* **docs:** fix mcp installation instructions for remote servers ([78b2d15](https://github.com/samegardner/gmail-mcp/commit/78b2d15940573e8660744ccb359c7293947e73a9))
* **mcp:** allow falling back for required env variables ([0301a36](https://github.com/samegardner/gmail-mcp/commit/0301a36a696ac8af1b2fbb65a9241fe6d8085f1a))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([55ff35f](https://github.com/samegardner/gmail-mcp/commit/55ff35f3db50ec581457b96f5616e0ebf96844bf))
* **mcp:** update prompt ([bb02c33](https://github.com/samegardner/gmail-mcp/commit/bb02c3323dce258ad9035ad0d378b4836347bb0a))
* **typescript:** upgrade tsc-multi so that it works with Node 26 ([309e699](https://github.com/samegardner/gmail-mcp/commit/309e6990b981315733275d6cac1c7d7236969bef))


### Chores

* avoid formatting file that gets changed during releases ([c4875ad](https://github.com/samegardner/gmail-mcp/commit/c4875ad7ff84cdddb03ad2d2664ee4b66a0d9c3c))
* **ci:** skip lint on metadata-only changes ([7dfa360](https://github.com/samegardner/gmail-mcp/commit/7dfa36058c123a89e6e27f1d0ca75c29da779996))
* **ci:** skip uploading artifacts on stainless-internal branches ([90c70b7](https://github.com/samegardner/gmail-mcp/commit/90c70b7afbcf760462d70d2ab912e66ed6acfbc1))
* **ci:** upgrade `actions/github-script` ([69fe0c1](https://github.com/samegardner/gmail-mcp/commit/69fe0c15cf3e702bc47212b9fdb99eab20137d10))
* **client:** do not parse responses with empty content-length ([6cac6bb](https://github.com/samegardner/gmail-mcp/commit/6cac6bb51435a6f385f53f455c4b6eaab0067448))
* **client:** restructure abort controller binding ([22718a1](https://github.com/samegardner/gmail-mcp/commit/22718a15e2601502cddda5980110e6db99ef99a7))
* **format:** run eslint and prettier separately ([9f57873](https://github.com/samegardner/gmail-mcp/commit/9f57873db7e1ea197eb6279cd3cb1d3953a83aa2))
* **internal/client:** fix form-urlencoded requests ([e021ca4](https://github.com/samegardner/gmail-mcp/commit/e021ca48dc3606a7b27bfd51173fbc0e1c7c2821))
* **internal:** add health check to MCP server when running in HTTP mode ([9bf8e79](https://github.com/samegardner/gmail-mcp/commit/9bf8e79f04ed02c52ae649359756e2d104c1f76b))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([4c0c188](https://github.com/samegardner/gmail-mcp/commit/4c0c1884e2a64e3e90fe85dac03a53915ecb0c0d))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([8f458f3](https://github.com/samegardner/gmail-mcp/commit/8f458f3c37242c714c5e5640e07672bd96c2350e))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([2a34d4d](https://github.com/samegardner/gmail-mcp/commit/2a34d4deb478c330abd9dc47c5b9fe58594a68a0))
* **internal:** avoid type checking errors with ts-reset ([70ed191](https://github.com/samegardner/gmail-mcp/commit/70ed19110c7f9a5aecd7adaa06b71180145efbc6))
* **internal:** cache fetch instruction calls in MCP server ([a8b6012](https://github.com/samegardner/gmail-mcp/commit/a8b601206653e3ef4d1aa4e5ff46840cecb4217a))
* **internal:** codegen related update ([fb83e90](https://github.com/samegardner/gmail-mcp/commit/fb83e9033ec8d6cf944b61254c05b34c0a21c9bf))
* **internal:** codegen related update ([06bcdb9](https://github.com/samegardner/gmail-mcp/commit/06bcdb9dbcee8539be9a0b92094b748ba45cca40))
* **internal:** codegen related update ([3e8a63f](https://github.com/samegardner/gmail-mcp/commit/3e8a63f8271c52f3cd81c022889fa0d4276d8f54))
* **internal:** codegen related update ([ae8c8e8](https://github.com/samegardner/gmail-mcp/commit/ae8c8e88caef5ab1d526b72dbe93fc02e821a10c))
* **internal:** codegen related update ([f8e5632](https://github.com/samegardner/gmail-mcp/commit/f8e5632683980ff5434240fcc9c496082a909df0))
* **internal:** codegen related update ([884bee9](https://github.com/samegardner/gmail-mcp/commit/884bee9caaef5e04532acf2a7fb11aadee948ef6))
* **internal:** codegen related update ([03f42b6](https://github.com/samegardner/gmail-mcp/commit/03f42b6671733acbef2e47c49eac80660b69077d))
* **internal:** codegen related update ([94d2f86](https://github.com/samegardner/gmail-mcp/commit/94d2f867927da42516b21e258797c4cd71e046c3))
* **internal:** codegen related update ([9b65e5c](https://github.com/samegardner/gmail-mcp/commit/9b65e5cc7f94136d947d106a51c0c0e8c62f984e))
* **internal:** codegen related update ([5be84f2](https://github.com/samegardner/gmail-mcp/commit/5be84f28deee30446c9e8363426749c1c63482dc))
* **internal:** codegen related update ([da1e7c1](https://github.com/samegardner/gmail-mcp/commit/da1e7c121349363f7b9590723ea884c3e2e80d67))
* **internal:** codegen related update ([1d51a51](https://github.com/samegardner/gmail-mcp/commit/1d51a51662b52e81dbf750ac24ec3a365f5c873c))
* **internal:** codegen related update ([f01343c](https://github.com/samegardner/gmail-mcp/commit/f01343caf7d5e0ddd7575616fc10713385db130b))
* **internal:** codegen related update ([e82717c](https://github.com/samegardner/gmail-mcp/commit/e82717c30d49995fcb4b82658aa7647dd69de2dd))
* **internal:** codegen related update ([847fc29](https://github.com/samegardner/gmail-mcp/commit/847fc290209f6fced1cae2710fca899f2318ebb8))
* **internal:** codegen related update ([dd43571](https://github.com/samegardner/gmail-mcp/commit/dd43571d89287eaf238eb12073f0bbe8bf021cbb))
* **internal:** codegen related update ([7af87d4](https://github.com/samegardner/gmail-mcp/commit/7af87d4d7ba339b2cea6515f1ae002c9aee2cb2b))
* **internal:** codegen related update ([30944ba](https://github.com/samegardner/gmail-mcp/commit/30944ba4a8f2a6986018ff06af700c3bbc1bdf73))
* **internal:** codegen related update ([5d29efa](https://github.com/samegardner/gmail-mcp/commit/5d29efaac255b44383fb6312d51d75b8e2c10078))
* **internal:** codegen related update ([90d34b2](https://github.com/samegardner/gmail-mcp/commit/90d34b20e71479f9b4dac74744d559a0d1828be6))
* **internal:** codegen related update ([7aaad38](https://github.com/samegardner/gmail-mcp/commit/7aaad384925411346b2f846b618fa8680a7ff36f))
* **internal:** codegen related update ([a360ac3](https://github.com/samegardner/gmail-mcp/commit/a360ac3f7cbc10059b2e6bda03c2e0fb86834bb9))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([123a0f7](https://github.com/samegardner/gmail-mcp/commit/123a0f7b538c14371244b27d600111b7fa1e79cb))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([b678426](https://github.com/samegardner/gmail-mcp/commit/b678426a311a27a0415624f90942dbd09a022b58))
* **internal:** fix MCP server import ordering ([b85596e](https://github.com/samegardner/gmail-mcp/commit/b85596e148ad531d3524a0fac2ab6cc6707eb1f4))
* **internal:** fix MCP server TS errors that occur with required client options ([78ca42e](https://github.com/samegardner/gmail-mcp/commit/78ca42e060fb82ea36150783d3d6c951d0edcd52))
* **internal:** improve layout of generated MCP server files ([187d256](https://github.com/samegardner/gmail-mcp/commit/187d25665483d5d407afe6397326e62dd7e2df8e))
* **internal:** improve local docs search for MCP servers ([ed501df](https://github.com/samegardner/gmail-mcp/commit/ed501df9916c0bd6227f0c4e33d7b50aff23d91f))
* **internal:** improve local docs search for MCP servers ([035f41c](https://github.com/samegardner/gmail-mcp/commit/035f41c60eb48ea7793df6e4144b2a0761d06f20))
* **internal:** improve reliability of MCP servers when using local code mode execution ([a06b608](https://github.com/samegardner/gmail-mcp/commit/a06b608acf3c2396747b2fab75e1cdcc5ccf3356))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([80bcc0a](https://github.com/samegardner/gmail-mcp/commit/80bcc0a7c4c98aaff7faea319697c2772b3fca35))
* **internal:** make MCP code execution location configurable via a flag ([5097b13](https://github.com/samegardner/gmail-mcp/commit/5097b13cbf6037322c632d248529d78c0e33b6c7))
* **internal:** more robust bootstrap script ([058cfe6](https://github.com/samegardner/gmail-mcp/commit/058cfe67e7378b1b9bdef7c49495484f3c70d731))
* **internal:** move stringifyQuery implementation to internal function ([6c8c0a9](https://github.com/samegardner/gmail-mcp/commit/6c8c0a9d5971a38830b662211b8da41fff7af7b4))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([38a25d1](https://github.com/samegardner/gmail-mcp/commit/38a25d13139519144d1783e023ce151addd82d22))
* **internal:** remove mock server code ([57cdc71](https://github.com/samegardner/gmail-mcp/commit/57cdc71ce69f7031b038071396c6815d9f9631f1))
* **internal:** show error causes in MCP servers when running in local mode ([295e202](https://github.com/samegardner/gmail-mcp/commit/295e2022e67ac93df8685274bbcc6fd52b2954d3))
* **internal:** support custom-instructions-path flag in MCP servers ([598b7fb](https://github.com/samegardner/gmail-mcp/commit/598b7fb2254d56e4509aa232ac5f81e31aede0c7))
* **internal:** support local docs search in MCP servers ([8035649](https://github.com/samegardner/gmail-mcp/commit/8035649be8c694559440709d4eff17298f99e6f7))
* **internal:** support oauth authorization code flow for MCP servers ([dbe4594](https://github.com/samegardner/gmail-mcp/commit/dbe45949a982ada6bf3710fca2c63ae2ba5391bb))
* **internal:** support type annotations when running MCP in local execution mode ([f08f51f](https://github.com/samegardner/gmail-mcp/commit/f08f51f3a121c65f3f8746366ceb14e6c38d4d32))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([9c97f70](https://github.com/samegardner/gmail-mcp/commit/9c97f700ec2abe4ca90eb53e69c4f0b8aefb4e1b))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([fa5ca3d](https://github.com/samegardner/gmail-mcp/commit/fa5ca3d5fed401c496fda2f2f81e3ce7d9bc3219))
* **internal:** tweak CI branches ([b1246b8](https://github.com/samegardner/gmail-mcp/commit/b1246b881a7a5acefe910246980d77cb22a68803))
* **internal:** update `actions/checkout` version ([1dd67b9](https://github.com/samegardner/gmail-mcp/commit/1dd67b92de8a0d7c91bb293a9afd54e153c17c4b))
* **internal:** update dependencies to address dependabot vulnerabilities ([5055b0a](https://github.com/samegardner/gmail-mcp/commit/5055b0aca59de83ae479268823101d1205c5a72f))
* **internal:** update docs ordering ([a589124](https://github.com/samegardner/gmail-mcp/commit/a58912489341dbf676b61b6113aa21e2afed4b18))
* **internal:** update gitignore ([f33bee2](https://github.com/samegardner/gmail-mcp/commit/f33bee2f49dd3d02196b399872b278b81e9b0b28))
* **internal:** update lock file ([f747b45](https://github.com/samegardner/gmail-mcp/commit/f747b4585d39c109b53777170e1d2c9e28a7c010))
* **internal:** update lock file ([18854b7](https://github.com/samegardner/gmail-mcp/commit/18854b724964a64137ed8c1db4aa4eda2d3adb4f))
* **internal:** update lockfile ([95e062f](https://github.com/samegardner/gmail-mcp/commit/95e062fbc11112fcc3b22eb0c38d5552719afe76))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([d5199c0](https://github.com/samegardner/gmail-mcp/commit/d5199c0081bdecc2279beff4b636156431622479))
* **internal:** upgrade babel, qs, js-yaml ([029d881](https://github.com/samegardner/gmail-mcp/commit/029d881f7f9b0a6b919e51e02d8704f870fbe62b))
* **internal:** upgrade brace-expansion and @babel/helpers ([af86e77](https://github.com/samegardner/gmail-mcp/commit/af86e77f78c016683ed51485941be1a3720885a1))
* **internal:** upgrade pnpm ([bb613d8](https://github.com/samegardner/gmail-mcp/commit/bb613d89cf2719dbfe20f9b67f2e50faa306a6e7))
* **internal:** upgrade pnpm version ([720f611](https://github.com/samegardner/gmail-mcp/commit/720f61106e5da4e80a96a9cea142c4124c24e6a3))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([73e3a04](https://github.com/samegardner/gmail-mcp/commit/73e3a04ac1f233949806992cbca515fcb5bc377d))
* **mcp-server:** add support for session id, forward client info ([5e6790a](https://github.com/samegardner/gmail-mcp/commit/5e6790ae844dc9ccea603881ca77daf11ea86b1e))
* **mcp-server:** improve instructions ([4d237e9](https://github.com/samegardner/gmail-mcp/commit/4d237e905dc61ade119903c692ad6e14abc3096c))
* **mcp-server:** increase local docs search result count from 5 to 10 ([62ab270](https://github.com/samegardner/gmail-mcp/commit/62ab2704a683110897e5385d0b20d5184eaf5762))
* **mcp-server:** log client info ([8da3d06](https://github.com/samegardner/gmail-mcp/commit/8da3d060c46f9517fca9fa4ec9386a8401046fa0))
* **mcp-server:** return access instructions for 404 without API key ([7d2fd88](https://github.com/samegardner/gmail-mcp/commit/7d2fd88a5215465cda5ef3abe70c9ef541b62a22))
* **mcp:** add intent param to execute tool ([ae94afd](https://github.com/samegardner/gmail-mcp/commit/ae94afd5baddfc9d71975b470c5be478d247d58f))
* **mcp:** correctly update version in sync with sdk ([12be12c](https://github.com/samegardner/gmail-mcp/commit/12be12c326186bd49196e409b1c45f4831264387))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([7bcd847](https://github.com/samegardner/gmail-mcp/commit/7bcd84783cc2e84d0287161d3c764a63921a48e1))
* **mcp:** pass intent param to execute handler ([aa7c34d](https://github.com/samegardner/gmail-mcp/commit/aa7c34df34ae7769809fdcfa3570edf48d3349bc))
* **mcp:** up tsconfig lib version to es2022 ([9bea506](https://github.com/samegardner/gmail-mcp/commit/9bea506291850e4d5f20f0264ea84e98b2ba7ef0))
* **mcp:** upgrade dependencies ([656b9a9](https://github.com/samegardner/gmail-mcp/commit/656b9a9b65c11f94ce39826d85e951b3fe236e17))
* redact api-key headers in debug logs ([3dc373e](https://github.com/samegardner/gmail-mcp/commit/3dc373e7e8ff86775cf096051889c3e9cfc128f2))
* restructure docs search code ([c50602d](https://github.com/samegardner/gmail-mcp/commit/c50602dcfe1bb90152a1725261774f60a8aed9a7))
* **tests:** remove redundant File import ([eba6bc9](https://github.com/samegardner/gmail-mcp/commit/eba6bc9cbecf0c12d355d1e51b83fee97826ae54))
* update CLI documentation ([f4fdef3](https://github.com/samegardner/gmail-mcp/commit/f4fdef3d472a4f76cdb96540754e2270be3f3955))
* update mock server docs ([8800cc2](https://github.com/samegardner/gmail-mcp/commit/8800cc2c9c1d01cae0e6a87f404816f4d11897f1))


### Documentation

* **mcp:** document code execution modes and the local code runner ([677464c](https://github.com/samegardner/gmail-mcp/commit/677464c78a6433ec367ceb623407ab14e9c5ee8b))


### Refactors

* update sdk ([14a4441](https://github.com/samegardner/gmail-mcp/commit/14a4441c950642397c634e372f5e6bb8a4f29e51))

## 0.2.0 (2026-01-10)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/samegardner/gmail-mcp/compare/v0.1.0...v0.2.0)

### Features

* **api:** manual updates ([386c758](https://github.com/samegardner/gmail-mcp/commit/386c758a41e46872477424c54b80469562b1ac84))
* **api:** manual updates ([4801710](https://github.com/samegardner/gmail-mcp/commit/480171010fa6b24cfb2fb2d72d636e634a2dbf93))
* **api:** manual updates ([52fd5b5](https://github.com/samegardner/gmail-mcp/commit/52fd5b5b5095ee6d2587bee20f58a54e42abd137))
* get it to use bearerAuth ([fa919cb](https://github.com/samegardner/gmail-mcp/commit/fa919cbe10b2d3a068f737bc568a9b46c56c471e))


### Bug Fixes

* **mcp:** update code tool prompt ([93c2890](https://github.com/samegardner/gmail-mcp/commit/93c2890d0f914ed8591718080324ca5f52c36210))


### Chores

* **internal:** configure MCP Server hosting ([e24c0e7](https://github.com/samegardner/gmail-mcp/commit/e24c0e7afe4d203b130635b30987938877f29415))
* **internal:** configure MCP Server hosting ([a79437b](https://github.com/samegardner/gmail-mcp/commit/a79437b85971d5d6987b5e452c31374befc9d54c))

## 0.1.0 (2026-01-07)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/samegardner/gmail-mcp/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([4533d0c](https://github.com/samegardner/gmail-mcp/commit/4533d0cd186712b2f2a9dc7d2e258b174d817e00))


### Bug Fixes

* **mcp:** correct code tool api output types ([3158bdf](https://github.com/samegardner/gmail-mcp/commit/3158bdf9b362ea678a325ea2f8ff88061e3e462e))
* **mcp:** fix options parsing ([0bc2b3a](https://github.com/samegardner/gmail-mcp/commit/0bc2b3a2b29a8c446b637f63146162e3612e4f1c))


### Chores

* break long lines in snippets into multiline ([216c910](https://github.com/samegardner/gmail-mcp/commit/216c910cb15f7dfc7d7d4912b6909de9e5c6ced6))
* configure new SDK language ([ffdf261](https://github.com/samegardner/gmail-mcp/commit/ffdf261a6e2adc58afbcde30c5cc747b03f75935))
* **internal:** codegen related update ([27ef5c1](https://github.com/samegardner/gmail-mcp/commit/27ef5c1f28aab1cea5b3a17568f9e84260e5a2ef))
* **internal:** configure MCP Server hosting ([c56afdf](https://github.com/samegardner/gmail-mcp/commit/c56afdf6023c7c4afd31365c2a01f095c2ef8c2e))
* **internal:** fix dockerfile ([7e85503](https://github.com/samegardner/gmail-mcp/commit/7e85503fb4b84a39cb3bde34b043e0dbe37b49ac))
* **internal:** unconfigure MCP Server hosting ([7d80236](https://github.com/samegardner/gmail-mcp/commit/7d80236fb6d8dc7ba12e1284fad89464be7d876e))
* update SDK settings ([fd539af](https://github.com/samegardner/gmail-mcp/commit/fd539afbd94e0019243c6e29bbd0de08f5508398))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([0d36147](https://github.com/samegardner/gmail-mcp/commit/0d3614731e4934b67ed78aa9e545381b5c6528a5))
