## Usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: , add_index: true|
|e-mail|string|null: false, add_index:true|
|password|integer|null: false, add_index:true|

### Association
- belongs_to :member
- has_many :messages




## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- has_many :users




## grounpsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :members




## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|string|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
