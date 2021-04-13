apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: account
labels:
  tags.datadoghq.com/env: "non-prod"
  tags.datadoghq.com/version: "account-api:___VERSION___"
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
          - name: DD_ENV
            valueFrom:
              fieldRef:
                fieldPath: metadata.labels['tags.datadoghq.com/env']
          - name: DD_VERSION
            valueFrom:
              fieldRef:
                fieldPath: metadata.labels['tags.datadoghq.com/version']
        ports:
        - name: http
          containerPort: 3000
          protocol: TCP
        resources:
          requests:
            memory: 32Mi
            cpu: 5m