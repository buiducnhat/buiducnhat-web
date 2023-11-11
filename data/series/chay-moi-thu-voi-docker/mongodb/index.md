---
title: MongoDB và Mongo Express
tags: ['docker', 'docker-compose', 'database', 'mongodb', 'nosql', 'mongo-express']
---

## Mở bài

Ở bài [trước](../postgresql-va-pgadmin), mình có tutorial về stack **Postgresql**, **pgAdmin**, coi như postgresql sẽ đại diện cho SQL Database, và pgAdmin đại diện cho SQL Client. Trong bài này, mình sẽ giới thiệu về **MongoDB** và **Mongo Express**, sẽ tương ứng với một NoSQL Database và NoSQL Client.

Về MongoDB là gì, hay NoSQL là gì, các bạn chịu khó tìm đọc tài liệu trên internet nhé, vì mình chủ yếu focus vào cách để deploy chúng trên Docker thôi hehe 😁.

## Thân bài

### Cấu trúc project

Vẫn như thường lệ, ta sẽ bắt đầu với cấu trúc project, ta cần những file nào?

```
.
├── docker-compose.yml
└── .env
```
