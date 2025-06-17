export default async function Preflight({ req }) {
	return {
	  pageTitle: getPageTitle(req.path)
	}
  }
  
  function getPageTitle(path) {
	const titleMap = {
	  '/': 'ShawnHosea'
	}
  
	return titleMap[path]
  }
  