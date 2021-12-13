import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from '../../../store/auth/auth';

export const useLayout = () => {
   const currentYear = useMemo(() => new Date().getFullYear(), []);
   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(() => {
      const user = localStorage.getItem('auth');
      if (user) {
         const seedKey = JSON.parse(user).profileSeedKey;
         dispatch(authActions.fetchPersonalData(seedKey));
         dispatch(authActions.setAuthorized(true));
      }
   }, [dispatch])

   const checkAuthorization = useCallback(() => {
      const user = localStorage.getItem('auth');

      if (!user) {

         history.push('/');
         dispatch(authActions.setAuthorized(false));
         return;
      }
      const seedKey = JSON.parse(user).profileSeedKey;

      dispatch(authActions.fetchPersonalData(seedKey));
      dispatch(authActions.setAuthorized(true));
      history.push('/profile');

   }, [dispatch, history])

   useEffect(() => {
      window.addEventListener('storage', checkAuthorization);

      return () => {
         window.removeEventListener('storage', checkAuthorization);
      }
   }, [checkAuthorization])

   return currentYear;
}