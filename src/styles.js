//@import '~Styles/colors.module';


const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'stretch'
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTitleText: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  errorMessageText: {
    fontSize: 16
  },
  loaderContainer: {
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    width: 50,
    height: 50,
  }
}

export default styles;