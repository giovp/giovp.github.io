---
layout: page
title: Giovanni Palla
subtitle:
---

I am a Research Scientist
I have completed my PhD under the supervision of [Fabian Theis][1] at the [Computational Health Center, Helmholtz Munich][2] and the [Munich School for Data Science][3]. Additionally, I am co-founder and core developer of [scverse][4], an open-source ecosystem for single-cell data analysis.

[vitae][cv] / [scholar][scholar] / [github][github] / [linkedin][linkedin]

I am interested in **AI** and **Software** for **Computational Biology**, [endurance sports](https://www.strava.com/athletes/75519614) and [books](https://www.goodreads.com/user/show/172611807-giovanni-palla).


[1]: https://www.helmholtz-munich.de/en/icb/research-groups/theis-lab
[2]: https://www.helmholtz-munich.de/en/computational-health-center
[3]: https://www.mu-ds.de/
[4]: https://scverse.org/people/

[cv]: /assets/vitae.pdf
[scholar]: https://scholar.google.com/citations?user=20uwxzkAAAAJ&hl=en
[github]: https://github.com/giovp
[linkedin]: https://www.linkedin.com/in/giovanni-palla-25541578/

{% assign sorted_projects = site.projects | sort: 'order' | reverse %}
{% for project in sorted_projects %}
  {% include project-item.html 
    title=project.title 
    image=project.image 
    description=project.description 
    project_link=project.project_link 
    video_link=project.video_link 
    paper_link=project.paper_link
    journal=project.journal
    year=project.year 
  %}
{% endfor %}

### News
* **[September 2024]** I have joined the [Chan Zuckerberg Initiative](https://chanzuckerberg.com/) AI/ML team as Research Scientist.
* **[October 2023]** I am presenting a poster on [Moscot](https://moscot.readthedocs.io/) at [Single Cell Genomics 2023](https://conferences.weizmann.ac.il/SCG2023/single-cell-genomics-2023) in Engelberg, Switzerland.
* **[July 2023]** I am presenting a poster on [Moscot](https://moscot.readthedocs.io/) and [SpatialData](https://spatialdata.scverse.org/en/latest/) at the Human Cell Atlas [General Meeting 2023](https://events.humancellatlas.org/2023gm), in Toronto.
* **[June 2023]** I am joining the [BioML team](https://www.microsoft.com/en-us/research/theme/biomedical-ml/), at Microsoft Research New England in Boston, for 3 months.
* **[February 2023]** Talk at the [Statistical Methods for Post Genomic Data workshop](https://smpgd2023.sciencesconf.org/), Ghent, 2022.
* **[December 2022]** [Contributed talk](https://openreview.net/forum?id=3ZcryDcnoW2) at [NeurIPS 2022 - LMRL workshop](https://www.lmrl.org/papers2022) - **Modeling Single-Cell Dynamics Using Unbalanced Parameterized Monge Maps**.
* **[September 2022]** Talk at the [ECCB 2022 - Workshop on Spatial Transcriptomics and cell-cell
    communication modelling](https://eccb2022.org/ntb-w04/).
* **[August 2022]** Contributed to workshop on [Spatial Omics Data Analysis 2022](https://uppsala.instructure.com/courses/58516/pages/schedule).
* **[July 2022]** [Poster](https://icml-compbio.github.io/2022/papers/WCBICML2022_paper_44.pdf) at [ICML 2022 - Workshop on Computational Biology](https://icml-compbio.github.io/index.html) - 
    **Uncertainty Quantification for Atlas-Level Cell Type Transfer**.
* **[May 2022]** Organized virtual workshop **Spatial transcriptomics data analysis in Python** [Single Cell Omics Germany](https://www.singlecell.de/index.php/events/scog-virtual-workshop-spatial-transcriptomics-data-analysis-in-python/).
* **[April 2022]** Instructor at the Swiss Institute for Bioinformatics
    [course](https://www.sib.swiss/training/course/20220426_ADVSC) on **Advanced topics in single-cell analysis** in Basel.

<!-- bundle exec jekyll serve -->