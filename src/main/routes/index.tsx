import {
  AboutContent,
  AuthContent,
  ComercialContent,
  ConsultContent,
  FinancialContent,
  HomeContent,
  PanelContent,
  ProductionContent,
  ProfileContent,
  RhContent,
  SgiContent,
  SupplyContent,
  SysAdminContent
} from 'presentation/environment';
import { AdminRoute, LoginRoute, PrivateRoute } from 'main/proxies';
import { AuthTemplate, MainTemplate } from 'presentation/atomic-component/template';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routePaths } from 'main/config';
import type { FC } from 'react';

const RouterConfig: FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Outlet />}>
      <Routes>
        {/* public routes */}
        <Route element={<LoginRoute />}>
          <Route element={<AuthTemplate />}>
            <Route element={<AuthContent />} path={routePaths.login} />
          </Route>
        </Route>

        {/* private routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<MainTemplate />}>
            <Route element={<HomeContent />} path={routePaths.home} />
            <Route element={<ProfileContent />} path={routePaths.profile} />
            <Route element={<ComercialContent />} path={routePaths.comercial} />
            <Route element={<ProductionContent />} path={routePaths.production} />
            <Route element={<FinancialContent />} path={routePaths.financial} />
            <Route element={<SupplyContent />} path={routePaths.supply} />
            <Route element={<ConsultContent />} path={routePaths.consult} />
            <Route element={<RhContent />} path={routePaths.rh} />
            <Route element={<SgiContent />} path={routePaths.sgi} />
            <Route element={<SysAdminContent />} path={routePaths.sysAdmin} />
            <Route element={<AboutContent />} path={routePaths.about} />
          </Route>
        </Route>

        <Route element={<AdminRoute />}>
          <Route element={<MainTemplate />}>
            <Route element={<PanelContent />} path={routePaths.panel} />
          </Route>
        </Route>

        <Route element={<PrivateRoute isRedirect />}>
          <Route element={<> </>} path={'*'} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default RouterConfig;
