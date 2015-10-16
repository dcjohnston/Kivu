import Header from '/client/components/layout/Header';
import MainLayout from '/client/components/layout/MainLayout';
import Footer from '/client/components/layout/Footer';
import UserDash from '/client/components/DashBoard/DashBoardContent';
import SubmissionForm from '/client/components/Submission/SubmissionForm';

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}

var privateRoutes = FlowRouter.group({});

privateRoutes.route('/u/:userId', {
  name: 'Dashboard',
  action(params) {
    renderMainLayoutWith(<UserDash />);
  }
});

privateRoutes.route('/u/:userId/submit', {
  name: "Submission",
  action(params) {
    renderMainLayoutWith(<SubmissionForm />);
  }
});

export default privateRoutes;
