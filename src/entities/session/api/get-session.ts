// 'use server';
//
// export const getSessionUser = async () => {
//   const session = await supabase.auth.getSession();
//   if (session.error) {
//     throw session.error;
//   }
//   return session.data.session?.user ?? null;
// };
