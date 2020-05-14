# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, index: true, unique: true|
|email|string|null: false, index: true, unique: true|
|password|string|null: false|

### Association
 - has_many: messages
 - has_manay: groups, through: users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|img|string|null: false|
|user_id|integer|foreign_key: true, null: false|
|group_id|integer|foreign_key: true, null: false|

### Association
 - belongs_to: user
 - belongs_to: group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
 - has_many: messages
 - has_many: users, through: users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
 - belongs_to:user
 - belongs_to:group




* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
