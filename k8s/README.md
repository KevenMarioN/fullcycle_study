# Kubernetes
  - Kubernete manda nos dockers
    - É open source utilizado para automatixar a implantação, o dimensionamento e o gerenciamento de aplicativos em contêiner.
## [Kind](https://kind.sigs.k8s.io/)

- Kind simula um ambiente de kubernetes usando docker, sem a necessidade de usar uma hospedagem real para práticar
- Kubernetes é disponibilizado através de um conjunto de API's
- kubectl -> CLI para manipulação do kubernetes
- Kubernetes Master - node
  - Kube-apiserver
  - Kube-controller-maneger
  - Kube-scheduler
- Outris nodes
  - Kubelet
  - Kubeproxy
### Comandos

- Criar um cluster com apenas um node
~~~bash
kind create cluster
~~~
- Criar cluster com suas configurações
~~~bash
kind create cluster --config=kind.yaml --name=fullcycle
~~~
- Lista todos os clusters
~~~bash
kubectl config get-clusters 
~~~
- Seleciona o cluster
~~~bash
kubectl config use-context namecluster
~~~
