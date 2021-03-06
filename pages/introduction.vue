<template>
  <b-container style="padding-top: 60px;">
    <b-row>
      <b-col class="mt-3 ml-0 mr-0" cols="12">
        <b-row class="mt-2 mb-0 ml-0 mr-0">
          <h3>Getting Started</h3>
        </b-row>
        <b-row class="mt-2 mb-0 ml-0 mr-0">
          <p>The following is useful information to getting started with the HELICS co-simulation library.</p>
        </b-row>
        <b-row class="mt-2 mb-4 ml-0 mr-0">
          <b-col class="ml-0 mr-0">
            <b-row class="ml-0">
              <h5 class="mb-4">Introduction</h5>
              <p>Basic introduction to HELICS language, installation instructions and anything else you need to get started.</p>
              <p>
                &raquo;
                <a
                  href="https://helics.readthedocs.io/en/latest/installation/index.html"
                >Installation</a>
                <br />&raquo;
                <a
                  href="https://helics.readthedocs.io/en/latest/introduction/terminology.html"
                >Terminology</a>
                <br />&raquo;
                <a
                  href="https://helics.readthedocs.io/en/latest/introduction/python.html"
                >Hello World in Python</a>
                <br />&raquo;
                <a
                  href="https://beta.mybinder.org/v2/gh/kdheepak/openmod-2019-helics-tutorial/master?urlpath=lab/tree/notebooks/cosimulation-introduction.ipynb"
                >Try HELICS online</a>
                <!-- <br />&raquo;
                <a
                  href="https://helics.readthedocs.io/en/latest/introduction/editors-and-ides.html"
                  disabled
                >Editors and IDEs</a>
                -->
              </p>
            </b-row>
          </b-col>
          <b-col class="ml-0 mr-0">
            <b-row class="ml-0">
              <h5 class="mb-4">User Guide</h5>
              <p>A user guide for HELICS. This assumes a familiarity with general programming concepts, and some familiarity with domain tools.</p>
              <p>
                &raquo;
                <a
                  href="https://helics.readthedocs.io/en/latest/user-guide/co-simulation_overview.html"
                >Co-simulation Overview</a>
                <br />&raquo;
                <a
                  href="https://helics.readthedocs.io/en/latest/user-guide/helics_key_concepts.html"
                >Key Concepts</a>
                <br />&raquo;
                <a
                  href="https://helics.readthedocs.io/en/latest/user-guide/helics_co-sim_sequence.html"
                >Co-Simulation Walkthrough</a>
                <br />&raquo;
                <a
                  href="https://helics.readthedocs.io/en/latest/user-guide/timing.html"
                >Co-Simulation Timing</a>
              </p>
            </b-row>
          </b-col>
          <b-col class="ml-0 mr-0">
            <b-row class="ml-0">
              <h5 class="mb-4">API</h5>
              <p>
                Complete API documentation for the
                <a
                  href="https://helics.readthedocs.io/en/latest/c-api-reference/index.html"
                >HELICS Library</a>.
              </p>
              <p>
                &raquo;
                <a
                  href="https://helics.readthedocs.io/en/latest/c-api-reference/index.html"
                >C API Documentation</a>
                <br />&raquo;
                <a
                  href="https://gmlc-tdc.github.io/HELICS.jl/latest/api/"
                >Julia API Documentation</a>
                <br />&raquo;
                <a
                  href="https://helics.readthedocs.io/en/latest/doxygen/index.html"
                >C++ Doxygen Documentation</a>
              </p>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mt-2 mb-4 ml-0 mr-0">
          <b-col class="ml-0 mr-0">
            <b-row class="ml-0">
              <h5 class="mb-4">Want to know more?</h5>
              <ul>
                <li>
                  <p>
                    <strong>Looking for tutorials/code snippets?</strong> Check out our
                    <a
                      href="https://github.com/GMLC-TDC/HELICS-Examples"
                    >HELICS Examples Repository</a>.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Looking for videos?</strong> Check out
                    <a
                      href="https://www.youtube.com/channel/UCPa81c4BVXEYXt2EShTzbcg"
                    >HELICS Tutorials playlist</a> section.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Want to ask a question?</strong> Come find us on
                    <a
                      href="https://gitter.im/GMLC-TDC/HELICS"
                    >gitter and get in touch</a>.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Have a feature request or bug report? Want to make a contribution or provide feedback?</strong> All development is open source and publically available, check out the sources over at
                    <a
                      href="https://github.com/GMLC-TDC/HELICS"
                    >our GitHub organization</a>.
                  </p>
                </li>
              </ul>
            </b-row>
          </b-col>
          <b-col class="ml-0 mr-0">
            <b-row class="ml-0">
              <h5 class="mb-4">Additional Information</h5>
              <ul>
                <li>
                  <p>
                    <a
                      href="https://anaconda.org/gmlc-tdc/helics"
                    >Use Conda to install HELICS for Python</a>.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://github.com/GMLC-TDC/HELICS/releases/latest"
                    >Check out our Windows installers for C/C++ Shared Libraries with Python, MATLAB, and Java language bindings</a>.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://github.com/GMLC-TDC/HELICSBuilder/releases/latest"
                    >Download precompiled C/C++ Shared Libraries for Windows, Mac, Linux platforms to link in your application</a>.
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://github.com/GMLC-TDC/HELICS.jl">Try HELICS in Julia</a>.
                  </p>
                </li>
              </ul>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
</script>

<style>
img {
  max-width: 240px;
  max-height: 200px;
  width: auto;
  height: auto;
}
h5 {
  text-decoration: underline;
}
</style>
