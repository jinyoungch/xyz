---
title: on growth
date: oct 03 2022
tldr: navigating on-the-job learning.
tag: career
---

I have found myself navigating through a fair amount of career-related life changes since my last [/thoughts](../thoughts) entry.

Few months after competing in my first [hackathon](https://devpost.com/software/cv_tailor), I started my first software engineering job at Babbel: the cross-platform language learning product.

Although I started remotely from [Asheville](https://jinyoung.xyz/thoughts/on-reconnecting), I, along with my cat [Pecan](https://photos.app.goo.gl/uJpisfaPcUG4PWzy8), relocated to NYC earlier in February to work out of Babbel's US office.

Maybe the reason why it took so long for me to return to this blog is that life has really picked up since I moved to the city.

Professionally, I've been expanding my software engineering toolkit to backend engineering and cloud computing; and this is entirely by design.

When I signed my offer with Babbel, I was intentional about landing a domain-agnostic software engineer role for three main reasons:

• I felt like I'm too early in my career to specialise my skillset when I had not exposed myself to other software engineering disciplines

• I've always been curious about server-side and cloud technologies, in particular the relationship between those domains and the question of scalability

• Lastly, since Babbel has a smaller workforce as a pre-IPO startup, I believed that a software engineer exposing himself to a wide range of skills would be much encouraged

Coming up to my first year as a software engineer, I will say that the constant learning that I had expected on this job has, in fact, been the most empowering aspect of my work-life.

Just recently, I've had the chance to lead a [Headless CMS](https://youtu.be/-Uor3I0n_vQ?t=11) integration for one of our client-side applications that logs around half a million monthly users.

On the surface, the project initially appeared to require skills on frontend development— a domain that my self-education was once focused on:

*...query the exposed endpoint of the CMS, have the client handle the JSON API response, re-work state management to update rendering logic...*

While the above was the gist of the task at hand, I quickly learned that this project additionally involved **making adaptations to Babbel's broader infrastructure**.

In this case, the client-side application in question is served via an [AWS Lambda](https://aws.amazon.com/lambda/) function routed by [Amazon API Gateway](https://aws.amazon.com/api-gateway/).

Babbel, as an organization, provisions its AWS resources via Terraform (following a convention known as [Infrastructure as Code](https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code)), which means that navigating and introducing a change to our cloud infrastructure required cross-referencing and creating Pull Requests (PRs) written in the HashiCorp Configuration Language [(HCL)](https://www.terraform.io/language#about-the-terraform-language).

Not to mention throwing into the mix an additional AWS service, namely the AWS Secrets Manager, which was used on the server-side to securely store the confidential API key required for the CMS query.

Coming into this job around a year ago, I did anticipate that a bulk of my work-life would consist of building and maintaining software that had already been brought into existence by people other than myself.

Those people being folk who are experienced and with informed perspectives on how to implement solutions in algorithmically optimised ways.

To this end, I would like to acknowledge how life-changing it has been to learn from experienced software engineers and to collaborate with them.

Being one of only a handful of early-career software engineers in a company of ~300 engineers, I feel a unique sense of privilege that has empowered me to soak up as much knowledge as I can during my time here.

Most importantly, the more I immerse myself in this career path, the more I'm slowly coming to terms with how highly valued ones interpersonal skills are when backed by strong technical skills.

By the time I leave Babbel, I hope to grow into a stronger software engineer in both camps.

More on this next time. 🏕
