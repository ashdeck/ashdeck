import Helmet from 'react-helmet'

export default function NewWidget(){
    return (
        <div className='bg-primary-dark-alt w-full flex justify-center items-center'>
            <div className='mx-auto py-28'>
                <div id="getWaitlistContainer" data-waitlist_id="20409" data-widget_type="WIDGET_1"></div>
                <Helmet>
                <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"/>
                <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
                </Helmet>
            </div>
        </div>
    )
}