## Mock API for a Hello World WSDL

Simple node js app to serve a response mocking a web service.

## To run
```
npm install
npm run dev
```

## To invoke

```sh
curl -H 'Content-Type: application/xml' -d "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:hel='http://www.example.org/helloWorld/'>
                                               <soapenv:Header/>
                                               <soapenv:Body>
                                                  <hel:NewOperation>
                                                     <in>hello</in>
                                                  </hel:NewOperation>
                                               </soapenv:Body>
                                            </soapenv:Envelope>" http://localhost:50003/helloworld
```