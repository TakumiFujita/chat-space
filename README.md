## Usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: , add_index: true|
|email|string|null: false, add_index: true|
|password|integer|null: false, add_index: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :member
- has_many :messages
- has_many :groups through: :members




## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user




## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :members
- has_many :messages
- has_many :users, through: :members
- accepts_nested_attributes_for :members



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|string||
|image|integer|null: false|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
