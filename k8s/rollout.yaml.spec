apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: account-api
spec:
  replicas: 2
  strategy:
    canary:
      steps:
      - setWeight: 50
      - pause: {}
  revisionHistoryLimit: 2
  selector:
    matchLabels:
      app: account-api
  template:
    metadata:
      labels:
        app: account-api
    spec:
      containers:
      - name: account-api
        image: maxday/account-api:COMMIT_SHA
        ports:
        - name: http
          containerPort: 3000
          protocol: TCP
        resources:
          requests:
            memory: 32Mi
            cpu: 5m