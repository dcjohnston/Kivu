import Header from '/client/components/layout/Header';
import MainLayout from '/client/components/layout/MainLayout';
import Footer from '/client/components/layout/Footer';

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: null,
    footer: <Footer />
  });
}

var privateRoutes = FlowRouter.group({});

privateRoutes.route('/u/:userId', {
  name: 'Dashboard',
  action(params) {
    renderMainLayoutWith();
  }
});

export default privateRoutes;
