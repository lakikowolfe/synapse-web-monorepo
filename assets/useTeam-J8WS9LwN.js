import{l as o,S as u}from"./useFiles-D8yf2tkg.js";import"./VerificationSubmission-BnFne12N.js";import"./StringUtils-CXT0ex8W.js";import"./OrientationBanner-D36M4lTd.js";import"./index-Dl6G-zuu.js";import{u as n}from"./useQuery-6SsvXKRa.js";import{u as i}from"./utils-Bx1BRerw.js";import{u as m}from"./useMutation-DjwfMZ6R.js";import"./jsx-runtime-Du8NFWEI.js";function K(e,t){const{accessToken:r,keyFactory:a}=o();return n({...t,queryKey:a.getTeamQueryKey(e),queryFn:()=>u.getTeam(e,r)})}function S(e){const{accessToken:t,keyFactory:r}=o(),a=i();return m({...e,mutationFn:s=>u.createTeam(s,t),onSuccess:async(s,y,c)=>{await a.invalidateQueries({queryKey:r.getAllUserTeamsQueryKey()})}})}export{S as a,K as u};
