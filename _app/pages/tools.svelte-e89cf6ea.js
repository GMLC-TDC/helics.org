import{S as cs,i as ds,s as us,e as a,t as s,j as c,c as o,a as r,g as l,d as t,l as d,b as n,f as ps,J as e,M as rr}from"../chunks/vendor-a01b4930.js";function ms(hs){let i,Ye,gt,bt,qe,St,Lt,G,yt,_t,x,Ct,It,v,m,F,At,Tt,O,Ve,Pt,Dt,Ot,j,Ht,kt,N,Mt,Rt,U,Gt,xt,Ft,H,W,jt,Nt,g,z,J,Ut,Wt,zt,X,Y,Jt,Xt,Yt,q,V,qt,Vt,Bt,B,Kt,Qt,u,b,K,Zt,$t,k,Be,ea,ta,aa,oa,M,Q,ra,sa,Z,la,na,$,ee,ia,ha,ca,S,te,da,ua,ae,pa,ma,fa,oe,re,wa,va,Ea,se,le,ga,ba,Sa,ne,ie,La,ya,_a,R,he,Ca,Ia,L,Ke,Aa,Ta,Qe,Pa,Da,ce,Oa,Ha,y,de,ue,ka,Ma,Ra,pe,me,Ga,xa,Fa,fe,ja,Na,f,we,ve,Ua,Wa,za,Ee,ge,Ja,Xa,Ya,be,Se,qa,Va,Ba,Le,ye,Ka,Qa,Za,_e,$a,eo,_,Ce,Ie,to,ao,oo,Ae,Te,ro,so,lo,Pe,no,io,E,Ze,ho,co,C,De,uo,po,Oe,mo,fo,wo,I,He,vo,Eo,ke,go,bo,So,Me,Lo,yo,A,$e,Re,_o,Co,et,Ge,Io,Ao,xe,To,Po,T,tt,Fe,Do,Oo,je,Ne,Ho,ko,Mo,Ue,Ro,Go,P,at,We,xo,Fo,ot,ze,jo;return{c(){i=a("article"),Ye=a("h2"),gt=s("Tools integrated with HELICS"),bt=c(),qe=a("p"),St=s(`The following list of tools is a list of tools that have worked with HELICS at some level either
    on current projects or in the past, or in some cases funded projects that will be working with
    certain tools. These tools are in various levels of development. Check the corresponding links
    for more information.`),Lt=c(),G=a("h3"),yt=s("Power Systems Tools"),_t=c(),x=a("h4"),Ct=s("Electric Distribution System Simulation"),It=c(),v=a("ul"),m=a("li"),F=a("a"),At=s("GridLAB-D"),Tt=s(`, an open-source tool for distribution
      power-flow, DER models, basic house thermal and end-use load models, and more. HELICS support
      currently (8/15/2018) provided in the
      `),O=a("a"),Ve=a("code"),Pt=s("develop"),Dt=s(" branch"),Ot=s(`
      which you have to build yourself as described
      `),j=a("a"),Ht=s("here"),kt=s(`. Or a CMake
      based `),N=a("a"),Mt=s("branch"),Rt=s(` maintained as part of the
      `),U=a("a"),Gt=s("GMLC-TDC organization"),xt=s("."),Ft=c(),H=a("li"),W=a("a"),jt=s("OpenDSS"),Nt=s(`, an open-source tool for
      distribution powerflow, DER models, harmonics, and other capabilities traditionally found in
      commercial distribution analysis tools. There are two primary interfaces with HELICS support:
      `),g=a("ul"),z=a("li"),J=a("a"),Ut=s("OpenDSSDirect.py"),Wt=s(` which provides
          a \u201Cdirect\u201D interface to interact with the OpenDSS engine enabling support for non-Windows (Linux,
          OSX) systems.`),zt=c(),X=a("li"),Y=a("a"),Jt=s("PyDSS"),Xt=s(` which builds on OpenDSSDirect to provide
          enhanced advanced inverter models and significantly more robust convergence with high-penetration
          DER controls along with flexible support for user-defined controls and visualization.`),Yt=c(),q=a("li"),V=a("a"),qt=s("CYME"),Vt=s(` has been used in connection with a python
      wrapper interface and through FMI wrapper.`),Bt=c(),B=a("h4"),Kt=s("Electric Transmission System Simulation"),Qt=c(),u=a("ul"),b=a("li"),K=a("a"),Zt=s("GridDyn"),$t=s(`, an open-source transmission power flow
      and dynamics simulator. HELICS support provided through the
      `),k=a("a"),Be=a("code"),ea=s("cmake_updates"),ta=s(" branch"),aa=s("."),oa=c(),M=a("li"),Q=a("a"),ra=s("PSST"),sa=s(`, an open-source python-based
      unit-commitment and dispatch market simulator. HELICS examples are included in the
      `),Z=a("a"),la=s("HELICS-Tutorial."),na=c(),$=a("li"),ee=a("a"),ia=s("MATPOWER"),ha=s(`, an open-source Matlab based
      power flow and optimal power flow tool. HELICS support under development.`),ca=c(),S=a("li"),te=a("a"),da=s("InterPSS"),ua=s(`, a Java-based power systems simulator. HELICS
      support under development.
      `),ae=a("a"),pa=s("Use case instructions"),ma=s("."),fa=c(),oe=a("li"),re=a("a"),wa=s("PSLF"),va=s(` has some level of support using the
      experimental python interface.`),Ea=c(),se=a("li"),le=a("a"),ga=s("PSS/E"),ba=s("."),Sa=c(),ne=a("li"),ie=a("a"),La=s("PowerWorld"),ya=s(` Simulator is an interactive power system simulation
      package designed to simulate high voltage power system operation on a time frame ranging from several
      minutes to several days.`),_a=c(),R=a("li"),he=a("a"),Ca=s("PyPower"),Ia=s(` does not have a standard HELICS
      integration but it has been used on various projects. PYPOWER is a power flow and Optimal
      Power Flow (OPF) solver. It is a port of MATPOWER to the Python programming language. Current
      features include:
      `),L=a("ul"),Ke=a("li"),Aa=s("DC and AC (Newton\u2019s method & Fast Decoupled) power flow and"),Ta=c(),Qe=a("li"),Pa=s("DC and AC optimal power flow (OPF)"),Da=c(),ce=a("h4"),Oa=s("Real time simulators"),Ha=c(),y=a("ul"),de=a("li"),ue=a("a"),ka=s("OpalRT"),Ma=s(` A few projects are using HELICS
      to allow connections between Opal RT and other simulations.`),Ra=c(),pe=a("li"),me=a("a"),Ga=s("RTDS"),xa=s(` Some planning or testing for RTDS linkages to HELICS is
      underway and will be required for some known projects.`),Fa=c(),fe=a("h4"),ja=s("Electric Power Market simulation"),Na=c(),f=a("ul"),we=a("li"),ve=a("a"),Ua=s("FESTIV"),Wa=s(`, the Flexible Energy Scheduling Tool
      for Integrating Variable Generation, provides multi-timescale steady-state power system
      operations simulations that aims to replicate the full time spectrum of scheduling and reserve
      processes (multi-step commitment and dispatch plus simplified AGC) to meet energy and
      reliability needs of the bulk power system.`),za=c(),Ee=a("li"),ge=a("a"),Ja=s("PLEXOS"),Xa=s(`, a commercial production
      cost simulator. Support via OpenPLEXOS is under development.`),Ya=c(),be=a("li"),Se=a("a"),qa=s("MATPOWER"),Va=s(` (described above) also includes basic
      optimal powerflow support.`),Ba=c(),Le=a("li"),ye=a("a"),Ka=s("PyPower"),Qa=s(` (described above) also includes basic AC
      and DC optimal powerflow solvers.`),Za=c(),_e=a("h4"),$a=s("Contingency Analysis tools"),eo=c(),_=a("ul"),Ce=a("li"),Ie=a("a"),to=s("CAPE"),ao=s(" protection system modeling."),oo=c(),Ae=a("li"),Te=a("a"),ro=s("DCAT"),so=s(" Dynamic contingency analysis tool."),lo=c(),Pe=a("h3"),no=s("Communication Tools"),io=c(),E=a("ul"),Ze=a("li"),ho=s(`HELICS provides built-in support for simple communications manipulations such as delays, lossy
      channels, etc. through its built-in filters.`),co=c(),C=a("li"),De=a("a"),uo=s("ns-3"),po=s(`, a discrete-event communication network simulator.
      This is supported via the
      `),Oe=a("a"),mo=s("HELICS ns-3 module"),fo=s("."),wo=c(),I=a("li"),He=a("a"),vo=s("OMNet++"),Eo=s(` is a public-source, component-based, modular and
      open-architecture simulation environment with strong GUI support and an embeddable simulation
      kernel. Its primary application area is the simulation of communication networks, but it has
      been successfully used in other areas like the simulation of IT systems, queueing networks,
      hardware architectures and business processes as well. Early stage development with OMNET++
      and HELICS is underway and a prototype example is available in
      `),ke=a("a"),go=s("HELICS-omnetpp"),bo=s("."),So=c(),Me=a("h3"),Lo=s("Gas Pipeline Modeling"),yo=c(),A=a("ul"),$e=a("li"),Re=a("a"),_o=s("NGFAST"),Co=c(),et=a("li"),Ge=a("a"),Io=s("GasModels.jl"),Ao=c(),xe=a("h3"),To=s("Optimization packages"),Po=c(),T=a("ul"),tt=a("li"),Fe=a("a"),Do=s("GAMS"),Oo=c(),je=a("li"),Ne=a("a"),Ho=s("JuMP"),ko=s(" support is provided through the HELICS Julia interface"),Mo=c(),Ue=a("h3"),Ro=s("Transportation modeling"),Go=c(),P=a("ul"),at=a("li"),We=a("a"),xo=s("BEAM."),Fo=c(),ot=a("li"),ze=a("a"),jo=s("POLARIS."),this.h()},l(rt){i=o(rt,"ARTICLE",{class:!0});var h=r(i);Ye=o(h,"H2",{});var sr=r(Ye);gt=l(sr,"Tools integrated with HELICS"),sr.forEach(t),bt=d(h),qe=o(h,"P",{});var lr=r(qe);St=l(lr,`The following list of tools is a list of tools that have worked with HELICS at some level either
    on current projects or in the past, or in some cases funded projects that will be working with
    certain tools. These tools are in various levels of development. Check the corresponding links
    for more information.`),lr.forEach(t),Lt=d(h),G=o(h,"H3",{id:!0});var nr=r(G);yt=l(nr,"Power Systems Tools"),nr.forEach(t),_t=d(h),x=o(h,"H4",{id:!0});var ir=r(x);Ct=l(ir,"Electric Distribution System Simulation"),ir.forEach(t),It=d(h),v=o(h,"UL",{class:!0});var Je=r(v);m=o(Je,"LI",{});var w=r(m);F=o(w,"A",{href:!0});var hr=r(F);At=l(hr,"GridLAB-D"),hr.forEach(t),Tt=l(w,`, an open-source tool for distribution
      power-flow, DER models, basic house thermal and end-use load models, and more. HELICS support
      currently (8/15/2018) provided in the
      `),O=o(w,"A",{href:!0});var No=r(O);Ve=o(No,"CODE",{});var cr=r(Ve);Pt=l(cr,"develop"),cr.forEach(t),Dt=l(No," branch"),No.forEach(t),Ot=l(w,`
      which you have to build yourself as described
      `),j=o(w,"A",{href:!0});var dr=r(j);Ht=l(dr,"here"),dr.forEach(t),kt=l(w,`. Or a CMake
      based `),N=o(w,"A",{href:!0});var ur=r(N);Mt=l(ur,"branch"),ur.forEach(t),Rt=l(w,` maintained as part of the
      `),U=o(w,"A",{href:!0});var pr=r(U);Gt=l(pr,"GMLC-TDC organization"),pr.forEach(t),xt=l(w,"."),w.forEach(t),Ft=d(Je),H=o(Je,"LI",{});var ht=r(H);W=o(ht,"A",{href:!0});var mr=r(W);jt=l(mr,"OpenDSS"),mr.forEach(t),Nt=l(ht,`, an open-source tool for
      distribution powerflow, DER models, harmonics, and other capabilities traditionally found in
      commercial distribution analysis tools. There are two primary interfaces with HELICS support:
      `),g=o(ht,"UL",{class:!0});var ct=r(g);z=o(ct,"LI",{});var Uo=r(z);J=o(Uo,"A",{href:!0});var fr=r(J);Ut=l(fr,"OpenDSSDirect.py"),fr.forEach(t),Wt=l(Uo,` which provides
          a \u201Cdirect\u201D interface to interact with the OpenDSS engine enabling support for non-Windows (Linux,
          OSX) systems.`),Uo.forEach(t),zt=d(ct),X=o(ct,"LI",{});var Wo=r(X);Y=o(Wo,"A",{href:!0});var wr=r(Y);Jt=l(wr,"PyDSS"),wr.forEach(t),Xt=l(Wo,` which builds on OpenDSSDirect to provide
          enhanced advanced inverter models and significantly more robust convergence with high-penetration
          DER controls along with flexible support for user-defined controls and visualization.`),Wo.forEach(t),ct.forEach(t),ht.forEach(t),Yt=d(Je),q=o(Je,"LI",{});var zo=r(q);V=o(zo,"A",{href:!0});var vr=r(V);qt=l(vr,"CYME"),vr.forEach(t),Vt=l(zo,` has been used in connection with a python
      wrapper interface and through FMI wrapper.`),zo.forEach(t),Je.forEach(t),Bt=d(h),B=o(h,"H4",{id:!0});var Er=r(B);Kt=l(Er,"Electric Transmission System Simulation"),Er.forEach(t),Qt=d(h),u=o(h,"UL",{class:!0});var p=r(u);b=o(p,"LI",{});var st=r(b);K=o(st,"A",{href:!0});var gr=r(K);Zt=l(gr,"GridDyn"),gr.forEach(t),$t=l(st,`, an open-source transmission power flow
      and dynamics simulator. HELICS support provided through the
      `),k=o(st,"A",{href:!0});var Jo=r(k);Be=o(Jo,"CODE",{});var br=r(Be);ea=l(br,"cmake_updates"),br.forEach(t),ta=l(Jo," branch"),Jo.forEach(t),aa=l(st,"."),st.forEach(t),oa=d(p),M=o(p,"LI",{});var dt=r(M);Q=o(dt,"A",{href:!0});var Sr=r(Q);ra=l(Sr,"PSST"),Sr.forEach(t),sa=l(dt,`, an open-source python-based
      unit-commitment and dispatch market simulator. HELICS examples are included in the
      `),Z=o(dt,"A",{href:!0});var Lr=r(Z);la=l(Lr,"HELICS-Tutorial."),Lr.forEach(t),dt.forEach(t),na=d(p),$=o(p,"LI",{});var Xo=r($);ee=o(Xo,"A",{href:!0});var yr=r(ee);ia=l(yr,"MATPOWER"),yr.forEach(t),ha=l(Xo,`, an open-source Matlab based
      power flow and optimal power flow tool. HELICS support under development.`),Xo.forEach(t),ca=d(p),S=o(p,"LI",{});var lt=r(S);te=o(lt,"A",{href:!0});var _r=r(te);da=l(_r,"InterPSS"),_r.forEach(t),ua=l(lt,`, a Java-based power systems simulator. HELICS
      support under development.
      `),ae=o(lt,"A",{href:!0});var Cr=r(ae);pa=l(Cr,"Use case instructions"),Cr.forEach(t),ma=l(lt,"."),lt.forEach(t),fa=d(p),oe=o(p,"LI",{});var Yo=r(oe);re=o(Yo,"A",{href:!0});var Ir=r(re);wa=l(Ir,"PSLF"),Ir.forEach(t),va=l(Yo,` has some level of support using the
      experimental python interface.`),Yo.forEach(t),Ea=d(p),se=o(p,"LI",{});var qo=r(se);le=o(qo,"A",{href:!0});var Ar=r(le);ga=l(Ar,"PSS/E"),Ar.forEach(t),ba=l(qo,"."),qo.forEach(t),Sa=d(p),ne=o(p,"LI",{});var Vo=r(ne);ie=o(Vo,"A",{href:!0});var Tr=r(ie);La=l(Tr,"PowerWorld"),Tr.forEach(t),ya=l(Vo,` Simulator is an interactive power system simulation
      package designed to simulate high voltage power system operation on a time frame ranging from several
      minutes to several days.`),Vo.forEach(t),_a=d(p),R=o(p,"LI",{});var ut=r(R);he=o(ut,"A",{href:!0});var Pr=r(he);Ca=l(Pr,"PyPower"),Pr.forEach(t),Ia=l(ut,` does not have a standard HELICS
      integration but it has been used on various projects. PYPOWER is a power flow and Optimal
      Power Flow (OPF) solver. It is a port of MATPOWER to the Python programming language. Current
      features include:
      `),L=o(ut,"UL",{class:!0});var pt=r(L);Ke=o(pt,"LI",{});var Dr=r(Ke);Aa=l(Dr,"DC and AC (Newton\u2019s method & Fast Decoupled) power flow and"),Dr.forEach(t),Ta=d(pt),Qe=o(pt,"LI",{});var Or=r(Qe);Pa=l(Or,"DC and AC optimal power flow (OPF)"),Or.forEach(t),pt.forEach(t),ut.forEach(t),p.forEach(t),Da=d(h),ce=o(h,"H4",{id:!0});var Hr=r(ce);Oa=l(Hr,"Real time simulators"),Hr.forEach(t),Ha=d(h),y=o(h,"UL",{class:!0});var mt=r(y);de=o(mt,"LI",{});var Bo=r(de);ue=o(Bo,"A",{href:!0});var kr=r(ue);ka=l(kr,"OpalRT"),kr.forEach(t),Ma=l(Bo,` A few projects are using HELICS
      to allow connections between Opal RT and other simulations.`),Bo.forEach(t),Ra=d(mt),pe=o(mt,"LI",{});var Ko=r(pe);me=o(Ko,"A",{href:!0});var Mr=r(me);Ga=l(Mr,"RTDS"),Mr.forEach(t),xa=l(Ko,` Some planning or testing for RTDS linkages to HELICS is
      underway and will be required for some known projects.`),Ko.forEach(t),mt.forEach(t),Fa=d(h),fe=o(h,"H4",{id:!0});var Rr=r(fe);ja=l(Rr,"Electric Power Market simulation"),Rr.forEach(t),Na=d(h),f=o(h,"UL",{class:!0});var D=r(f);we=o(D,"LI",{});var Qo=r(we);ve=o(Qo,"A",{href:!0});var Gr=r(ve);Ua=l(Gr,"FESTIV"),Gr.forEach(t),Wa=l(Qo,`, the Flexible Energy Scheduling Tool
      for Integrating Variable Generation, provides multi-timescale steady-state power system
      operations simulations that aims to replicate the full time spectrum of scheduling and reserve
      processes (multi-step commitment and dispatch plus simplified AGC) to meet energy and
      reliability needs of the bulk power system.`),Qo.forEach(t),za=d(D),Ee=o(D,"LI",{});var Zo=r(Ee);ge=o(Zo,"A",{href:!0});var xr=r(ge);Ja=l(xr,"PLEXOS"),xr.forEach(t),Xa=l(Zo,`, a commercial production
      cost simulator. Support via OpenPLEXOS is under development.`),Zo.forEach(t),Ya=d(D),be=o(D,"LI",{});var $o=r(be);Se=o($o,"A",{href:!0});var Fr=r(Se);qa=l(Fr,"MATPOWER"),Fr.forEach(t),Va=l($o,` (described above) also includes basic
      optimal powerflow support.`),$o.forEach(t),Ba=d(D),Le=o(D,"LI",{});var er=r(Le);ye=o(er,"A",{href:!0});var jr=r(ye);Ka=l(jr,"PyPower"),jr.forEach(t),Qa=l(er,` (described above) also includes basic AC
      and DC optimal powerflow solvers.`),er.forEach(t),D.forEach(t),Za=d(h),_e=o(h,"H4",{id:!0});var Nr=r(_e);$a=l(Nr,"Contingency Analysis tools"),Nr.forEach(t),eo=d(h),_=o(h,"UL",{class:!0});var ft=r(_);Ce=o(ft,"LI",{});var tr=r(Ce);Ie=o(tr,"A",{href:!0});var Ur=r(Ie);to=l(Ur,"CAPE"),Ur.forEach(t),ao=l(tr," protection system modeling."),tr.forEach(t),oo=d(ft),Ae=o(ft,"LI",{});var ar=r(Ae);Te=o(ar,"A",{href:!0});var Wr=r(Te);ro=l(Wr,"DCAT"),Wr.forEach(t),so=l(ar," Dynamic contingency analysis tool."),ar.forEach(t),ft.forEach(t),lo=d(h),Pe=o(h,"H3",{id:!0});var zr=r(Pe);no=l(zr,"Communication Tools"),zr.forEach(t),io=d(h),E=o(h,"UL",{class:!0});var Xe=r(E);Ze=o(Xe,"LI",{});var Jr=r(Ze);ho=l(Jr,`HELICS provides built-in support for simple communications manipulations such as delays, lossy
      channels, etc. through its built-in filters.`),Jr.forEach(t),co=d(Xe),C=o(Xe,"LI",{});var nt=r(C);De=o(nt,"A",{href:!0});var Xr=r(De);uo=l(Xr,"ns-3"),Xr.forEach(t),po=l(nt,`, a discrete-event communication network simulator.
      This is supported via the
      `),Oe=o(nt,"A",{href:!0});var Yr=r(Oe);mo=l(Yr,"HELICS ns-3 module"),Yr.forEach(t),fo=l(nt,"."),nt.forEach(t),wo=d(Xe),I=o(Xe,"LI",{});var it=r(I);He=o(it,"A",{href:!0});var qr=r(He);vo=l(qr,"OMNet++"),qr.forEach(t),Eo=l(it,` is a public-source, component-based, modular and
      open-architecture simulation environment with strong GUI support and an embeddable simulation
      kernel. Its primary application area is the simulation of communication networks, but it has
      been successfully used in other areas like the simulation of IT systems, queueing networks,
      hardware architectures and business processes as well. Early stage development with OMNET++
      and HELICS is underway and a prototype example is available in
      `),ke=o(it,"A",{href:!0});var Vr=r(ke);go=l(Vr,"HELICS-omnetpp"),Vr.forEach(t),bo=l(it,"."),it.forEach(t),Xe.forEach(t),So=d(h),Me=o(h,"H3",{id:!0});var Br=r(Me);Lo=l(Br,"Gas Pipeline Modeling"),Br.forEach(t),yo=d(h),A=o(h,"UL",{class:!0});var wt=r(A);$e=o(wt,"LI",{});var Kr=r($e);Re=o(Kr,"A",{href:!0});var Qr=r(Re);_o=l(Qr,"NGFAST"),Qr.forEach(t),Kr.forEach(t),Co=d(wt),et=o(wt,"LI",{});var Zr=r(et);Ge=o(Zr,"A",{href:!0});var $r=r(Ge);Io=l($r,"GasModels.jl"),$r.forEach(t),Zr.forEach(t),wt.forEach(t),Ao=d(h),xe=o(h,"H3",{id:!0});var es=r(xe);To=l(es,"Optimization packages"),es.forEach(t),Po=d(h),T=o(h,"UL",{class:!0});var vt=r(T);tt=o(vt,"LI",{});var ts=r(tt);Fe=o(ts,"A",{href:!0});var as=r(Fe);Do=l(as,"GAMS"),as.forEach(t),ts.forEach(t),Oo=d(vt),je=o(vt,"LI",{});var or=r(je);Ne=o(or,"A",{href:!0});var os=r(Ne);Ho=l(os,"JuMP"),os.forEach(t),ko=l(or," support is provided through the HELICS Julia interface"),or.forEach(t),vt.forEach(t),Mo=d(h),Ue=o(h,"H3",{id:!0});var rs=r(Ue);Ro=l(rs,"Transportation modeling"),rs.forEach(t),Go=d(h),P=o(h,"UL",{class:!0});var Et=r(P);at=o(Et,"LI",{});var ss=r(at);We=o(ss,"A",{href:!0});var ls=r(We);xo=l(ls,"BEAM."),ls.forEach(t),ss.forEach(t),Fo=d(Et),ot=o(Et,"LI",{});var ns=r(ot);ze=o(ns,"A",{href:!0});var is=r(ze);jo=l(is,"POLARIS."),is.forEach(t),ns.forEach(t),Et.forEach(t),h.forEach(t),this.h()},h(){n(G,"id","power-systems-tools"),n(x,"id","electric-distribution-system-simulation"),n(F,"href","https://www.gridlabd.org/"),n(O,"href","https://github.com/gridlab-d/gridlab-d/tree/develop"),n(j,"href","https://github.com/GMLC-TDC/HELICS-Tutorial/tree/master/setup"),n(N,"href","https://github.com/GMLC-TDC/gridlab-d"),n(U,"href","https://github.com/GMLC-TDC"),n(W,"href","https://smartgrid.epri.com/SimulationTool.aspx"),n(J,"href","https://github.com/dss-extensions/OpenDSSDirect.py"),n(Y,"href","https://github.com/NREL/PyDSS"),n(g,"class","list-circ"),n(V,"href","http://www.cyme.com/software/cymdist/"),n(v,"class","list-disc"),n(B,"id","electric-transmission-system-simulation"),n(K,"href","https://github.com/LLNL/GridDyn"),n(k,"href","https://github.com/LLNL/GridDyn/tree/cmake_update"),n(Q,"href","https://github.com/kdheepak/psst"),n(Z,"href","https://github.com/GMLC-TDC/HELICS-Tutorial"),n(ee,"href","http://www.pserc.cornell.edu/matpower/"),n(te,"href","http://www.interpss.org/"),n(ae,"href","https://gmlc-tdc.github.io/HELICS-Use-Cases/PNNL-TD-Dynamic-Load/index.html"),n(re,"href","https://github.com/GMLC-TDC/PSLF-wrapper"),n(le,"href","https://new.siemens.com/global/en/products/energy/services/transmission-distribution-smart-grid/consulting-and-planning/pss-software/pss-e.html"),n(ie,"href","https://www.powerworld.com/"),n(he,"href","https://pypi.org/project/PYPOWER/"),n(L,"class","list-circ"),n(u,"class","list-disc"),n(ce,"id","real-time-simulators"),n(ue,"href","https://www.opal-rt.com/hardware-in-the-loop/"),n(me,"href","https://www.rtds.com/"),n(y,"class","list-disc"),n(fe,"id","electric-power-market-simulation"),n(ve,"href","https://github.com/NREL/FESTIV_MODEL"),n(ge,"href","https://energyexemplar.com/solutions/plexos/"),n(Se,"href","http://www.pserc.cornell.edu/matpower/"),n(ye,"href","https://pypi.org/project/PYPOWER/"),n(f,"class","list-disc"),n(_e,"id","contingency-analysis-tools"),n(Ie,"href","https://new.siemens.com/global/en/products/energy/services/transmission-distribution-smart-grid/consulting-and-planning/pss-software/psscape.html"),n(Te,"href","https://www.pnnl.gov/main/publications/external/technical_reports/PNNL-26197.pdf"),n(_,"class","list-disc"),n(Pe,"id","communication-tools"),n(De,"href","https://www.nsnam.org/"),n(Oe,"href","https://github.com/GMLC-TDC/helics-ns3"),n(He,"href","https://omnetpp.org/"),n(ke,"href","https://github.com/GMLC-TDC/helics-omnetpp"),n(E,"class","list-disc"),n(Me,"id","gas-pipeline-modeling"),n(Re,"href","http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.172.1169"),n(Ge,"href","https://github.com/lanl-ansi/GasModels.jl"),n(A,"class","list-disc"),n(xe,"id","optimization-packages"),n(Fe,"href","https://www.gams.com/"),n(Ne,"href","https://www.juliaopt.org/"),n(T,"class","list-disc"),n(Ue,"id","transportation-modeling"),n(We,"href","http://beam.lbl.gov/"),n(ze,"href","https://www.anl.gov/es/polaris-transportation-system-simulation-tool"),n(P,"class","list-disc"),n(i,"class","prose prose-lg max-w-none")},m(rt,h){ps(rt,i,h),e(i,Ye),e(Ye,gt),e(i,bt),e(i,qe),e(qe,St),e(i,Lt),e(i,G),e(G,yt),e(i,_t),e(i,x),e(x,Ct),e(i,It),e(i,v),e(v,m),e(m,F),e(F,At),e(m,Tt),e(m,O),e(O,Ve),e(Ve,Pt),e(O,Dt),e(m,Ot),e(m,j),e(j,Ht),e(m,kt),e(m,N),e(N,Mt),e(m,Rt),e(m,U),e(U,Gt),e(m,xt),e(v,Ft),e(v,H),e(H,W),e(W,jt),e(H,Nt),e(H,g),e(g,z),e(z,J),e(J,Ut),e(z,Wt),e(g,zt),e(g,X),e(X,Y),e(Y,Jt),e(X,Xt),e(v,Yt),e(v,q),e(q,V),e(V,qt),e(q,Vt),e(i,Bt),e(i,B),e(B,Kt),e(i,Qt),e(i,u),e(u,b),e(b,K),e(K,Zt),e(b,$t),e(b,k),e(k,Be),e(Be,ea),e(k,ta),e(b,aa),e(u,oa),e(u,M),e(M,Q),e(Q,ra),e(M,sa),e(M,Z),e(Z,la),e(u,na),e(u,$),e($,ee),e(ee,ia),e($,ha),e(u,ca),e(u,S),e(S,te),e(te,da),e(S,ua),e(S,ae),e(ae,pa),e(S,ma),e(u,fa),e(u,oe),e(oe,re),e(re,wa),e(oe,va),e(u,Ea),e(u,se),e(se,le),e(le,ga),e(se,ba),e(u,Sa),e(u,ne),e(ne,ie),e(ie,La),e(ne,ya),e(u,_a),e(u,R),e(R,he),e(he,Ca),e(R,Ia),e(R,L),e(L,Ke),e(Ke,Aa),e(L,Ta),e(L,Qe),e(Qe,Pa),e(i,Da),e(i,ce),e(ce,Oa),e(i,Ha),e(i,y),e(y,de),e(de,ue),e(ue,ka),e(de,Ma),e(y,Ra),e(y,pe),e(pe,me),e(me,Ga),e(pe,xa),e(i,Fa),e(i,fe),e(fe,ja),e(i,Na),e(i,f),e(f,we),e(we,ve),e(ve,Ua),e(we,Wa),e(f,za),e(f,Ee),e(Ee,ge),e(ge,Ja),e(Ee,Xa),e(f,Ya),e(f,be),e(be,Se),e(Se,qa),e(be,Va),e(f,Ba),e(f,Le),e(Le,ye),e(ye,Ka),e(Le,Qa),e(i,Za),e(i,_e),e(_e,$a),e(i,eo),e(i,_),e(_,Ce),e(Ce,Ie),e(Ie,to),e(Ce,ao),e(_,oo),e(_,Ae),e(Ae,Te),e(Te,ro),e(Ae,so),e(i,lo),e(i,Pe),e(Pe,no),e(i,io),e(i,E),e(E,Ze),e(Ze,ho),e(E,co),e(E,C),e(C,De),e(De,uo),e(C,po),e(C,Oe),e(Oe,mo),e(C,fo),e(E,wo),e(E,I),e(I,He),e(He,vo),e(I,Eo),e(I,ke),e(ke,go),e(I,bo),e(i,So),e(i,Me),e(Me,Lo),e(i,yo),e(i,A),e(A,$e),e($e,Re),e(Re,_o),e(A,Co),e(A,et),e(et,Ge),e(Ge,Io),e(i,Ao),e(i,xe),e(xe,To),e(i,Po),e(i,T),e(T,tt),e(tt,Fe),e(Fe,Do),e(T,Oo),e(T,je),e(je,Ne),e(Ne,Ho),e(je,ko),e(i,Mo),e(i,Ue),e(Ue,Ro),e(i,Go),e(i,P),e(P,at),e(at,We),e(We,xo),e(P,Fo),e(P,ot),e(ot,ze),e(ze,jo)},p:rr,i:rr,o:rr,d(rt){rt&&t(i)}}}class ws extends cs{constructor(i){super();ds(this,i,null,ms,us,{})}}export{ws as default};