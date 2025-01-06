/*********************************** Theory ****************************************************
 ** File Options : How Typescript treat typescript files
 ** Type Options : How typecript work with different types. Optional to alter behaviour to work with types
 ** File Watcher : How to use during development
 ** Source Maps  : How to use durgin development
 ** Including and Excluding Files
    **exclude:
    * value of exclue is any array of files names in string format
    * If file available in root just use the file name with .ts extension
    * If Not available in root the you need to give the absolute path of the file
    * Compiler will ignore these files
    * You can exlude directory as well
    * node_modules directory by default excluded by typescript
    * But if your using exclue property in your tyspcript.config then you need explicitly exlude node_modules directory
    * Astrick (*) work like a wild card here which you can use to exlcude *.exlude.ts file 
    * you can apply Astrick (*) at directory level as well with the help of "**`/"*.exclude.ts file"
    * 
 ** rootDir and outDir
 ** Setting a Compilation Targe
 ** Typscript Core Libs
 ** Type Checking Options
    No implicitly any
    strictNullChecks
    noUnusedLocals
    noUnusedParameters
    noImplicitReturns
    alloUnreachableCode
    sourcemaps : it will generate a file for source map of your source code with filename.js.map , 
    which you can be used by your chrome browser for debugging

 ** JS in Browser using Liver Server
 ** Understanding Source Maps
 ** Reference Link : https://github.com/tsconfig/bases
*/

/*********************************** Theory End *************************************************/
/********************************** Practical  *************************************************/


/***  */
/*************************************Practial End ********************************************/
/****************************** Practice  *****************************************************/