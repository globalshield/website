
# GlobalShield website

Source code for the [Globalshield.io](https://globalshield.io) website.

---

## Russia has attacked a democratic European country.

### Introduction

We need tools to help fight propaganda and spread the word to the Russian population about the attack that's
been going on since the 24th of February 2022.

This repository holds a micro-service to scan the internet for latest news articles containing keywords and phrases
which are likely to be used to hide the fact that Russia is the aggressor and there is no peace-making mission happening
in Ukraine. It is an **occupation** of Ukrainian lands and people.

**Europe as well as the rest of the world are with Ukraine.**

### Contribution

To say pseudo-anonymous I have created a separate Github account, you can do the same.

### Generate a private key

```shell
ssh-keygen -t ed25519 -C "someemail@mailservice.com"
```

Run `git` commands with the following Docker image.

### Run Git commands in a container

```shell
docker build -t gs-git -f Dockerfile-git .
```

Run Git command:
```shell
docker run --rm -it -v ~/.ssh/gs.key:/root/.ssh/ed25519 -v $(pwd):/app gs-git <command>
```

To commit:
```shell
docker run --rm -it -v ~/.ssh/gs.key:/root/.ssh/ed25519 -v $(pwd):/app gs-git commit -m 'message'
```

To push:
```shell
docker run --rm -it -v ~/.ssh/gs.key:/root/.ssh/ed25519 -v $(pwd):/app gs-git push origin main
```

[comment]: <> (remote add origin git@github.com:globalshield/website.git)

---

Get in touch: [hello@globalshield.io](mailto:hello@globalshield.io)
