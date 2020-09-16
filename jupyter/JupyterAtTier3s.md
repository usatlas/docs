# Jupyter At US ATLAS AFs
One of the services available at the US ATLAS analysis facilities is the Jupyter Lab enviroment. Some of the Jupyter kernels available there includes:

1. python2 with pyroot and uproot, some allows users to load an ATLAS analysis releases in order to access xAODs.
2. python3 with pyroot and uproot.
3. python3 with ML packages such as Tensorflow and Keras, with support of Nvidia GPUs.
4. Terminal console for simple interactive use, e.g. file managements.

Use the following links to access the Jupyter environment at the AFs, or access site specific documents on Jupyter.

* [BNL JupyterLab](https://jupyter.sdcc.bnl.gov) and [documents](BNLjupyter.md).
* [SLAC JupyterLab](https://sdf.slac.stanford.edu) and [documents](SLACjupyter.md).
   * The SLAC JupyterLab link will change in the near future as we move to [SDF](../README.md). You can explore it now by going to [Jupyter page on SDF and click "Jupyter portal"](https://ondemand-dev.slac.stanford.edu/public/doc/#/interactive-compute?id=jupyter). When asked to choose an identity provider, please choose "SLAC National Accelerator Laboratory" and then use your ["SLAC ID"](../README.md) to login.

# Examples of using Jupyter to analyze xAODs

* [How to get information about an xAOD in python](examples/xAODcheck.md)
* [Read xAODs using PyROOT](https://github.com/usatlas/tier3docs/blob/master/jupyter/examples/pyROOT_example.ipynb)
* [Info about uproot and xAOD](examples/convert_specific_variables.py.txt)
