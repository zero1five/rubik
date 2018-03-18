/**
 * Modules constructor function
 * 
 * @module { M }
 * @see module: *
 */

/** @constructor */
const M = ( global => {
    'use strict'
    
    /**  @function Refresh Pull down to refresh */
    function Refresh () {

    }

    /** 
     * Create workers 
     * @param { string } FileName - Worker file path.
     * @param { object } Data - Pending data.
     * @param { function } Callback - Callback function with Processed data.
     */
    function CreateWorker ( FileName, Data, Callback ) {
        
        if ( typeof FileName != 'string' || typeof Callback != 'function' ) {
            console.warn('The parameter is wrong...')
            return
        }

        let worker = new Worker( FileName ),
            vessel = null;
        
        worker.postMessage( Data )

        /** 
         * This callback function returns data and closes the worker
         * @param { object } ev.data - Processed data.
         * @param { object } worker - Current worker, Because you need to close it.
         * @method worker.terminate()
         */
        worker.onmessage = ev => Callback( ev.data, worker ) 

        return vessel
    }

    /** 
     * @function FilterData 
     * @param { Array } Data - Unprocessed data.
     * @param { string } Condition - Analyzing conditions.
     * @param { Array } Mirror - Reserved data.
     */
    function FilterData ( Data, Condition, Mirror ) {

        if ( typeof Data != 'object' ) {
            console.warn('The data format is incorrect, please try again...')
            return
        } 

        Mirror = Mirror || []
        let newArr = []

        /** @description Grammar rules - Comparison of ele.Attributes with Which Values */
        Data.forEach( ele => eval(Condition) ? newArr.push(ele) : Mirror.push(ele) )

        return newArr
    }
    
    return {
        Refresh,
        CreateWorker,
        FilterData,
    }

})(window)
