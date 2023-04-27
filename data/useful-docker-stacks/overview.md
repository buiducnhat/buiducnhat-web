---
title: Tổng quan Series
---

## Tại sao mình lại làm series này?

### Quá khứ của kẻ "lười vọc"

Trong quá trình học hỏi và làm việc với Docker, mình nhận ra sự tuyệt vời của công cụ này mà trước đó mình chưa biết đến, hoặc biết đến nhưng chưa có đủ thời gian, đủ kiến thức để vọc vạch (sở thích của mình 😃).

Như trước kia, mình chỉ dùng Docker cho việc Container hóa vài ứng dụng đơn giản, đặc biệt là các ứng dụng Web, chỉ với config vài dòng với các ứng dụng đơn giản như NodeJs, React App, MySQL,....

Thú thực thì... trông cũng có vẻ ngầu đấy (vì khoe là làm việc với Docker) nhưng nó chả giúp ích gì cho mình ngoài việc đỡ phải cài thêm một số môi trường như NodeJS, Database (thứ mà mình đã cài trước đó 😂), bù lại mất công suy nghĩ thêm vấn đề về config environment variables (biến môi trường), persisting data (lưu lại dữ liệu khi container bị xóa), xem logs, hay thậm chí là fix một vài bug vặt trong quá trình runtime.

### Ủa, vậy bạn định dùng nó cho thứ gì cao siêu hơn à?

Không, không hề, chỉ là ở series này mình sẽ có vài tutorial nhỏ để giúp các bạn sử dụng một số môi trường, một số service, app phổ biến mà gần như không cần cài thêm bất cứ gì (tất nhiên là có Docker rồi hehe).

Một số thứ có thể kể đến như:

- Nginx: Rất nhiều tutorial trên google, tuy nhiên mình thấy nhiều bạn gặp vướng mắc khi phải confg thêm SSL
- Redis Stack: Một stack có sẵn của RedisLab, tuy nhiên có thể nhiều bạn không biết, mất công cài cái service Redis trên máy chính mình, rồi lại phải kiếm thêm một cái app có GUI để quản lý, theo dõi.
- Mosquitto: Một MQTT Broker rất phổ biến, cũng dễ dàng config, tuy nhiên cũng giống Nginx, mình sẽ dễ confuse khi làm thêm SSL, hay config authen cho nó.
- Ba chấm...

và tất nhiên còn nhiều stack khác mình sẽ chưa kể tên, nhưng mình sẽ cố gắng dành thời gian đê update series này thường xuyên.

## Vậy series này dành cho ai?

Tất nhiên câu trả lời sẽ luôn là "Everyone", tuy nhiên để cụ thể hơn, mình sẽ liệt kê một số trường hợp mà mình nghĩ sẽ phù hợp với series này dựa trên kinh nghiệm của mình:

- Các dev đang học/làm việc với Docker, nhưng chưa tận dụng nhiều các image thông dụng có sẵn.
- Các dev gặp khó khăn trong quá trình config một số service, app thông dụng có sẵn, đặc biệt là trên một server trên cloud mới tinh (VPS ấy :D).
