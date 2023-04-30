---
title: Tổng quan
tags: [docker, docker-compose]
---

## Tại sao mình lại làm series này?

### Quá khứ của kẻ "lười vọc"

Trong quá trình học hỏi và làm việc với **Docker**, mình nhận ra sự tuyệt vời của công cụ này mà trước đó mình chưa biết đến, hoặc biết đến nhưng chưa có đủ thời gian, đủ kiến thức để vọc vạch.

Như trước kia, mình chỉ dùng **Docker** cho việc container hóa vài ứng dụng đơn giản, đặc biệt là các ứng dụng Web, chỉ với config vài dòng với các ứng dụng đơn giản như **NodeJs**, **React App**, **MySQL**,....

Thú thực thì... trông cũng có vẻ ngầu đấy (vì khoe là làm việc với **Docker**) nhưng nó chả giúp ích gì cho mình ngoài việc đỡ phải cài thêm một số môi trường như **NodeJS**, **Database** (thứ mà mình đã cài trước đó 😂), bù lại mất công suy nghĩ thêm vấn đề về config _environment variables_ (biến môi trường), _persisting data_ (lưu lại dữ liệu khi container bị xóa), xem _logs_, hay thậm chí là fix một vài bug vặt trong quá trình runtime.

### Ủa, thế bạn định dùng nó cho thứ gì cao siêu hơn à?

Không, không hề, chỉ là ở series này mình sẽ có vài tutorial nhỏ để giúp các bạn sử dụng một số môi trường, một số service, app phổ biến mà gần như không cần cài thêm bất cứ gì (tất nhiên là có **Docker** rồi hehe).

Một số thứ có thể kể đến như:

- [Nginx](https://hub.docker.com/_/nginx/): Rất nhiều tutorial trên google, tuy nhiên mình thấy nhiều bạn gặp vướng mắc khi phải confg thêm SSL
- [Redis Stack](https://hub.docker.com/u/redislabs): Một stack gồm cả **Redis** server và **Redis Insight** của **Redislab**. Cách cài đặt **Redis** không khó, tuy nhiên có thể nhiều bạn không biết, mất công cài cái service Redis trên máy chính mình, rồi lại phải kiếm thêm một cái app có GUI để quản lý, theo dõi, hay phân vân giữa các app GUI.
- [Mosquitto](https://hub.docker.com/_/eclipse-mosquitto): Một MQTT Broker rất phổ biến, cũng dễ dàng config, tuy nhiên cũng giống Nginx, mình sẽ dễ confuse khi làm thêm SSL, hay config authen cho nó.
- Ba chấm...

và tất nhiên còn nhiều stack khác mình sẽ chưa kể tên, nhưng mình sẽ cố gắng dành thời gian để update series này thường xuyên.

### Tại sao lại là "Stack Docker"?

Nếu các bạn dẫn tới đọc bài viết này, chắc hẳn các bạn đã nghe đến các thành phần, hay khái niệm cơ bản của **Docker** như _image_, _container_, _volume_, _network_,... và chẳng có cái khái niệm nào là **stack** cả 😁.

Lí do mình để "**Stack Docker**" là do thói quen sử dụng công cụ `docker-compose` để quản lý các _container_, _volume_, _network_,... trong một project, và tất nhiên nhiều project sẽ run nhiều _image_ cùng 1 lúc => mình đặt ra thuật ngữ "**stack**" cho tiện nói 😃.

Và cũng giới thiệu luôn mình sẽ hầu như sử dụng công cụ này trong các bài viết tiếp theo thay vì các lệnh `docker run`, `docker network`, `docker volume` rồi pass các params, arguments tùm lum, khó hiểu 😂.

## Vậy series này dành cho ai?

Tất nhiên câu trả lời sẽ luôn là "Everyone", tuy nhiên để cụ thể hơn, mình nghĩ những "đối tượng" có thể phù hợp với series là:

- Các dev đang học/làm việc với **Docker**, nhưng chưa tận dụng nhiều các image thông dụng có sẵn.
- Các dev gặp khó khăn trong quá trình config một số service, app thông dụng có sẵn, đặc biệt là trên một server trên cloud mới tinh (VPS ấy :D).

## Chốt

Series mang tính chủ quan, tính tham khảo và hoàn toàn không có mục đích khoe khoang, hay làm màu gì cả, chỉ là mình muốn chia sẻ lại những gì mình đã học được, và cũng là để mình có thêm động lực để học hỏi thêm nhiều thứ mới mẻ hơn. Các kiến thức mình trình bày chưa bao giờ, và sẽ không bao giờ là "best", là tốt nhất, mà chỉ là "good enough" để các bạn có thể tham khảo, và có thể tự tìm hiểu thêm.

Ở phía dưới bài viết, các bạn hoàn toàn có thể chỉnh sửa bài viết, và tạo **pull request** để mình ghi nhận lại những góp ý, đóng góp của các bạn. (Chức năng _comment_ hiện đang trong quá trình phát triển, lí do lượng người đọc chắc mới đếm trên đầu ngón tay 😂)

Ngoài ra, toàn bộ example cho phần config các stack tiếp theo, mình sẽ để ở repo này trên github, nếu thấy hữu ích, các bạn có thể **star** repo này cũng như tạo **issue** để mình nhận ra khiếm khuyết của chúng nhé.

Link repo: [https://github.com/buiducnhat/useful-docker-stacks](https://github.com/buiducnhat/useful-docker-stacks)
