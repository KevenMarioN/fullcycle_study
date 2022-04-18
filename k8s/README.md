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

## Pods

  - Uma "caixa" que contém um docker
## ReplicaSet

  - É possível subir varios pods com um único script
    - Defeito: Caso subir uma nova versão só será gerado se o pod "morrer"
    - Vantagem: Caso um pod pare de funcionar, outro será levantado imediatamente
## Deployment
  - É um ReplicaSet inteligente, ao subir uma nova versão o  deployment criar novos pods gradativamente,
  ao criar um novo pod, elimina o atingo, até que todos os pods sejam da versão nova
  - Um deployment contém o replicaset por baixo
    - Se executar `kubectl get replicasets` vera que existe a replicaset, mesmo que você crie apartir de um arquivo yaml com kide to tipo Deployment
## Services
  - Services é a porta de entrada, o próprio service é como um loadbalance
  -ClusterIP

## Comandos

__Criar um cluster com apenas um node__
~~~bash
kind create cluster
~~~
__Criar cluster com suas configurações__
~~~bash
kind create cluster --config=kind.yaml --name=fullcycle
~~~
__Lista todos os clusters__
~~~bash
kubectl config get-clusters 
~~~
__Seleciona o cluster__
~~~bash
kubectl config use-context namecluster
~~~
__Ver o historico de uma deployment__
~~~bash
kubectl rollout history deployment goserver
~~~
__Voltar o ultima versão do deplyment__
~~~bash
kubectl rollout undo deployment goserver
~~~
__Voltar uma versão especifica do deplyment__
~~~bash
kubectl rollout undo deployment goserver --to-revision
~~~

