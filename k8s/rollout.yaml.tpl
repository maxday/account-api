apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: account
spec:
  replicas: 2
  strategy:
    canary:
      analysis:
        templates:
        - templateName: error-rate
        startingStep: 1
        args:
        - name: service-name
          value: account-api
      steps:
      - setWeight: 50
      - pause: {duration: 2m}
  revisionHistoryLimit: 2
  selector:
    matchLabels:
      app: account
  template:
    metadata:
      labels:
        app: account
    spec:
      containers:
      - name: account
        image: maxday/account-api:___VERSION___
        env:
          - name: DD_AGENT_HOST
            valueFrom:
              fieldRef:
                fieldPath: status.hostIP
        ports:
        - name: http
          containerPort: 3000
          protocol: TCP
        resources:
          requests:
            memory: 32Mi
            cpu: 5m