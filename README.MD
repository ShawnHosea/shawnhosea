# ShawnHosea

### Official
- **staging**: https://staging.shawnhosea.com/
- **production**: https://shawnhosea.com/

### AWS
- **staging:** 	https://e1z9wl71we.execute-api.us-west-2.amazonaws.com/
- **production:** https://hnw0fkepb9.execute-api.us-west-2.amazonaws.com/

### Deploy
git commit -a -m "wip" --no-verify && git push origin HEAD

- arc deploy --staging
- arc deploy --production

### Logs
- arc logs staging app/get-index
- arc logs production src/http/get-index
