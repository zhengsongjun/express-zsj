# express-video 接口文档
## 接口说明
* 基于RESTful API接口规范
* 基于JWT身份认证
* 使用CORS跨域
* 接口基础请求地址 : 'http://127.0.0.1:3000/api/v1'
* 使用JSON格式进行数据通信


### 用户注册
path: '/user/registers' <br />
method: post <br />
是否认证: 否
请求体:
```
{
    "username":"bbbccc",
    "age":188,
    "email":"11568700481115@qq.com",
    "password":"4828733",
    "phone":"15209894194"
}
```
| 字段名称 | 数据类型 | 是否必须 | 
| :---        |    :----:   |          ---: |
| username | string | true |
| age | number | true |
| email | string | true |
| password | string | true |
| phone | string | true |
| image | string | false |

响应示例：
```
// error
{
    "error": [
        {
            "value": "15209894194",
            "msg": "手机号已注册",
            "param": "phone",
            "location": "body"
        },
        {
            "value": "11568700481115@qq.com",
            "msg": "邮箱已被注册",
            "param": "email",
            "location": "body"
        }
    ]
}
```

```
// success
{
    "userDbBack": {
        "username": "bbbcscc",
        "age": 18,
        "email": "1156870048111a5@qq.com",
        "phone": "1522209894194",
        "image": null,
        "createAt": "2023-03-22T03:13:12.017Z",
        "updateAt": "2023-03-22T03:13:12.017Z",
        "_id": "641a74b0e5eaaa2668163145",
        "__v": 0
    }
}
```

