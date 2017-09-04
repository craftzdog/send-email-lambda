# send-email-lambda

Simple email sender running on Lambda.
It sends emails via AWS SES.

## Prerequisites

 * Apex - http://apex.run/
 * An email address verified with AWS SES

## Configure

Edit `functions/submit/function.json` as you like:

```
{
  "environment": {
    "SES_REGION": "us-west-2",
    "FROM_NAME": "Craftzdog Contact Form",
    "FROM_EMAIL": "<YOUR_AUTOMATED_EMAIL_SENDER>",
    "TO_EMAIL": "<EMAIL_TO_RECEIVE>"
  }
}
```

## Deploy

At the project top directory:

```sh
apex deploy
```

Add following policy to use SES.sendEmail to your lambda role with policy name `send-email_submit`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1504526549000",
            "Effect": "Allow",
            "Action": [
                "ses:SendEmail"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```

Configure your API Gateway like this:

![API Gateway](./_images/api_gateway.png)

And deploy the API.

## API

### POST `<YOUR_API_ENTRYPOINT>/submit`

It accepts JSON data with 2 fields:

 * `title`: The message title
 * `body`: The message body

## License

MIT, Copyright 2017 by Takuya Matsuyama<hi@craftz.dog>
