# Changelog

## [1.2.0](https://github.com/whispir/openapi/compare/v1.1.3...v1.2.0) (2023-02-12)


### Features

* WFT-335 Add Keys CRUD API ([#187](https://github.com/whispir/openapi/issues/187)) ([c60daf8](https://github.com/whispir/openapi/commit/c60daf8e497effdd01902d2571ef93bf921558f0))


### Bug Fixes

* camelCased operationIds ([#178](https://github.com/whispir/openapi/issues/178)) ([57b9f95](https://github.com/whispir/openapi/commit/57b9f9525c20cdbadbbec7ac3b03cdea4646b5d8))
* Include resource prefix in all model names ([#169](https://github.com/whispir/openapi/issues/169)) ([c11781c](https://github.com/whispir/openapi/commit/c11781ca36f43f1783f20602eff5e0a5316b9ebc))
* **openapi:** Add readonly flag to DeliveryReceipt schema properties ([#183](https://github.com/whispir/openapi/issues/183)) ([ac454dc](https://github.com/whispir/openapi/commit/ac454dca1775e6bab56f60e943fe300388bacbef))
* **openapi:** Operation operationId and sdkOperation spectral rule application ([#172](https://github.com/whispir/openapi/issues/172)) ([33bb630](https://github.com/whispir/openapi/commit/33bb63004985a002b28c7d6e1a4bf7d8d934971e))
* **openapi:** Reordering callback retrieve params ([#185](https://github.com/whispir/openapi/issues/185)) ([e3e234e](https://github.com/whispir/openapi/commit/e3e234e68c215828e34687b40e1cbdc37c6bda26))
* Operation list schema title ([#177](https://github.com/whispir/openapi/issues/177)) ([08c2ae0](https://github.com/whispir/openapi/commit/08c2ae0a8439bd11314a93aea414306fdc8968fd))
* Remove id from schema spec ([#182](https://github.com/whispir/openapi/issues/182)) ([a4d1248](https://github.com/whispir/openapi/commit/a4d12484bfd281dbd99586427974e71ac6700510))
* Removed the use of Request body schema or PUT and POST endpoint ([#175](https://github.com/whispir/openapi/issues/175)) ([715d977](https://github.com/whispir/openapi/commit/715d977099696094b8d5f20cbb693350484201c8))
* Reorder params to have id last in order ([#184](https://github.com/whispir/openapi/issues/184)) ([ec666c3](https://github.com/whispir/openapi/commit/ec666c3f8a887b3cf95060550f53566e24fcdaae))
* Schema key names to PascalCase & title duplication removal ([#179](https://github.com/whispir/openapi/issues/179)) ([292b86b](https://github.com/whispir/openapi/commit/292b86b33a0f33e0f53c265ead5ba87bd389d92a))

## [1.1.3](https://github.com/whispir/openapi/compare/v1.1.2...v1.1.3) (2022-12-06)


### Bug Fixes

* Modular model references ([#166](https://github.com/whispir/openapi/issues/166)) ([b00f303](https://github.com/whispir/openapi/commit/b00f30318e0a8e8c2390dc520b012d3a48554722))

## [1.1.2](https://github.com/whispir/openapi/compare/v1.1.1...v1.1.2) (2022-11-22)


### Bug Fixes

* **node:** Fix nested array model reference ([#160](https://github.com/whispir/openapi/issues/160)) ([47f78af](https://github.com/whispir/openapi/commit/47f78afe344c5e644ab5b8c76f3113c5579ef8e1))

## [1.1.1](https://github.com/whispir/openapi/compare/v1.1.0...v1.1.1) (2022-11-22)


### Bug Fixes

* Specify readonly attributes ([#158](https://github.com/whispir/openapi/issues/158)) ([0347f83](https://github.com/whispir/openapi/commit/0347f8343bc9978a0612c57cc2d20b44570de7de))
* Update content example keys to match accept & content-type header ([#155](https://github.com/whispir/openapi/issues/155)) ([1521bee](https://github.com/whispir/openapi/commit/1521beec89a4e01c52d79dff7b5757fe7f3ede22))

## [1.1.0](https://github.com/whispir/openapi/compare/v1.0.4...v1.1.0) (2022-11-21)


### Features

* Add Node SDK Client templates ([#152](https://github.com/whispir/openapi/issues/152)) ([4772ca3](https://github.com/whispir/openapi/commit/4772ca37de2c68a987e6490f66dc62acc6982208))
* Add sdk operation extension ([#149](https://github.com/whispir/openapi/issues/149)) ([5fb2d26](https://github.com/whispir/openapi/commit/5fb2d2662cfc67a0bde4c17cc7bda8fe4a3ab395))


### Bug Fixes

* Add default value for all Content-Type and Accept headers ([#151](https://github.com/whispir/openapi/issues/151)) ([afd327a](https://github.com/whispir/openapi/commit/afd327a7e4d163a9a43e092543d7030c7bcc2bfb))
* remove defaults from getActivities operation ([#146](https://github.com/whispir/openapi/issues/146)) ([8659db1](https://github.com/whispir/openapi/commit/8659db17a4ea8c3e33c95640a6149b9b182e1987))

## [1.0.4](https://github.com/whispir/openapi/compare/v1.0.3...v1.0.4) (2022-11-08)


### Bug Fixes

* SDK release workflows ([#143](https://github.com/whispir/openapi/issues/143)) ([67514ee](https://github.com/whispir/openapi/commit/67514ee4e071921ae62965e2168fbdb436cb2d21))

## [1.0.3](https://github.com/whispir/openapi/compare/v1.0.2...v1.0.3) (2022-11-03)


### Bug Fixes

* updated generate node and java sdk workflows ([#139](https://github.com/whispir/openapi/issues/139)) ([3903252](https://github.com/whispir/openapi/commit/390325219b6eeaa7ab018347e1d68c7bed374fd3))

## [1.0.2](https://github.com/whispir/openapi/compare/v1.0.1...v1.0.2) (2022-11-02)


### Bug Fixes

* utilize PAT to trigger other workflows ([#137](https://github.com/whispir/openapi/issues/137)) ([85d6180](https://github.com/whispir/openapi/commit/85d6180cb2a0641f8d1f45863d12a808a77d1174))

## [1.0.1](https://github.com/whispir/openapi/compare/v1.0.0...v1.0.1) (2022-11-02)


### Bug Fixes

* Trigger sdk PRs on publish event ([#135](https://github.com/whispir/openapi/issues/135)) ([60fbfa3](https://github.com/whispir/openapi/commit/60fbfa35edb8bad4295bdc04031c3811a1aaffb6))

## 1.0.0 (2022-11-01)


### Features

* add conventional commit action ([#121](https://github.com/whispir/openapi/issues/121)) ([c45ff87](https://github.com/whispir/openapi/commit/c45ff877b4b925ec9beef034898d5977f29c6a6c))
* added changelog and release workflows ([#122](https://github.com/whispir/openapi/issues/122)) ([94de301](https://github.com/whispir/openapi/commit/94de301365f747004a206a3c078803c1571385a7))
* added contribution guidelines and issue templates ([#124](https://github.com/whispir/openapi/issues/124)) ([a0c0d3d](https://github.com/whispir/openapi/commit/a0c0d3d459495f6fd8cce8dbd018813740071377))
* **sdk:** added java-sdk workflow actions ([#117](https://github.com/whispir/openapi/issues/117)) ([e20a0b6](https://github.com/whispir/openapi/commit/e20a0b68eda8d156c5e3a4f08e4a3d216e34bd1f))


### Bug Fixes

* Add json path for openapi.yaml version ([#125](https://github.com/whispir/openapi/issues/125)) ([88385c4](https://github.com/whispir/openapi/commit/88385c4654b8a80d23e9bc9b2202061355e2aafd))
* Change release type to simple ([#128](https://github.com/whispir/openapi/issues/128)) ([a394b8e](https://github.com/whispir/openapi/commit/a394b8ee2b10eff033a1f58f919f6b2127520561))
* extra files syntax ([#127](https://github.com/whispir/openapi/issues/127)) ([5d91ebe](https://github.com/whispir/openapi/commit/5d91ebe2f70ef95e3dcaaeeef5aa760b7a2f4aab))
* fix action errors ([7b65b82](https://github.com/whispir/openapi/commit/7b65b821960ff61ecf058378143f65be9babc37a))
* fix error for changelog commit ([b3fca41](https://github.com/whispir/openapi/commit/b3fca416d1152f5b16617ce0749ccf7bf4acfd64))
* fix node-sdk.yml ([89c3c0a](https://github.com/whispir/openapi/commit/89c3c0a55a230f0fd98c1958c172671ef804f91a))
* fix spaces ([e8a1cd8](https://github.com/whispir/openapi/commit/e8a1cd854c6cbc80ace4a74acee66bb3c14bd6be))
* fix uuid-action from v1 to main ([cfba8be](https://github.com/whispir/openapi/commit/cfba8be3c4a6a9a17da8a87e7e7abfb58d09711f))
* use release trigger for sdk PRs ([#123](https://github.com/whispir/openapi/issues/123)) ([744b9ee](https://github.com/whispir/openapi/commit/744b9eebca2631087ead4fa9b6ba43f57a18338d))
