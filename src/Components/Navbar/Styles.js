import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        height: 55,
        boxShadow: 'none',
        backgroundColor: 'rgba(67, 129, 168, 0.5)'

      },
      toolbar: {
        flexWrap: 'wrap',
        color: 'white'
      },
      toolbarTitle: {
        flexGrow: 1,
        color: 'white'
      },
      link: {
        margin: theme.spacing(1, 1.5),
        color: 'white',
      },
}))