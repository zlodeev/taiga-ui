(window.webpackJsonp=window.webpackJsonp||[]).push([[1847],{SuFU:function(n,e,a){"use strict";a.r(e),e.default="# Taiga UI \u2014 i18n\n\n[![npm version](https://img.shields.io/npm/v/@taiga-ui/cdk.svg)](https://npmjs.com/package/@taiga-ui/i18n)\n[![Discord](https://img.shields.io/discord/748677963142135818?color=7289DA&label=%23taiga-ui&logo=discord&logoColor=white)](https://discord.gg/Us8d8JVaTg)\n\n[Website](https://taiga-ui.dev) \u2022 [Documentation](https://taiga-ui.dev/getting-started) \u2022\n[CDK Wiki](https://github.com/tinkoff/taiga-ui/wiki) \u2022 [Core team](https://github.com/tinkoff/taiga-ui/#core-team)\n\n\x3c!-- Do not change next line without i18n demo page --\x3e\n\n> A package with tools for Taiga UI library i18n\n\nSupported languages:\n\n| Language             |      Constant name      | Coverage |\n| -------------------- | :---------------------: | -------: |\n| English (by default) |  TUI_ENGLISH_LANGUAGE   |     100% |\n| Russian              |  TUI_RUSSIAN_LANGUAGE   |     100% |\n| Spanish              |  TUI_SPANISH_LANGUAGE   |     100% |\n| German               |   TUI_GERMAN_LANGUAGE   |     100% |\n| Turkish              |  TUI_TURKISH_LANGUAGE   |     100% |\n| Dutch                |   TUI_DUTCH_LANGUAGE    |     100% |\n| Ukrainian            | TUI_UKRAINIAN_LANGUAGE  |     100% |\n| French               |   TUI_FRENCH_LANGUAGE   |     100% |\n| Vietnamese           | TUI_VIETNAMESE_LANGUAGE |     100% |\n| Portuguese           | TUI_PORTUGUESE_LANGUAGE |     100% |\n| Italian              |  TUI_ITALIAN_LANGUAGE   |     100% |\n| Polish               |   TUI_POLISH_LANGUAGE   |     100% |\n\n\x3c!-- Do not change next line without i18n demo page --\x3e\n\nIt's a part of [**Taiga UI**](https://github.com/tinkoff/taiga-ui) that is fully-treeshakable Angular UI Kit consisting\nof multiple base libraries and several add-ons\n\n## How to install\n\nIf you have [@taiga-ui/core](https://npmjs.com/package/@taiga-ui/core) in your app, you do not need to install anything.\ni18n package is included as a dependency.\n\n## How to use\n\nYou have English by default.\n\nIf you want to change it, you need to provide `TUI_LANGUAGE` token in your app.module:\n\n```ts\nimport {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';\n\n// app.module\n@NgModule({\n  // ...\n  providers: [\n    {\n      provide: TUI_LANGUAGE,\n      useValue: of(TUI_RUSSIAN_LANGUAGE),\n    },\n  ],\n})\nexport class AppModule {}\n```\n\nYou can also switch languages on the fly. Use `useFactory` or `useClass` with a service to make a stream of\ndictionaries.\n\n## How to add a language\n\nFeel free to add new languages!\n\n1. Go to `languages` folder\n2. Copy `english` folder and rename new folder with the name of language you speak\n3. Translate entities in files. If you need some clarification, take a look at interfaces of entities. If you need more,\n   please write to us via issues or any other way of contact :)\n\nThank you!\n"}}]);