import * as React from "react";
import { PropertyControls, ControlType } from "framer";



export class Pagination extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
      //Default width
      width:192,
      //Default height
      height:32,
      //Total number of the pages
      pagesCount: 17,
      //Current page index
      currentPage: 1,
      //How many pages will be shown near the current page
      neighboursCount: 3,
      //Size of the cells;
      size: 32,
      //Font size of the cells
      fontSize: 12,
      //Margin between the pages
      margin: 0,
      //Background color of the cells
      bgColor:"#000000",
      //Font color of the cells
      fontColor:"#ffffff",
      //Component alignment
      align: "Center",
      //Border radius of the cells
      borderSize:0,
      //Border color of the cells
      borderColor:"rgba(0,0,0,0)",
      //Background color of the current cell
      currentBgColor:"#479BFA",
      //Font color of the current cells
      currentColor:"#ffffff",
      //Radius of the cells
      borderRadius:0;
    }



    static propertyControls: PropertyControls = {
      pagesCount: { type: ControlType.Number, title: "Pages",min: 1, max: 99 },
      currentPage: { type: ControlType.Number, max:99, title: "Current", min: 0, max:99 },
      neighboursCount: { type: ControlType.Number, title: "Neighbours", min:0, max: 100 },
      margin: { type: ControlType.Number, title: "Margin", min:0 },


      align: {
           type: ControlType.SegmentedEnum,
           title: "Align",
           options: ["Left", "Center", "Right"],
       },
      fontSize: { type: ControlType.Number, title: "Font Size", min:4, max:96 },
      fontColor: {type:ControlType.Color, title: "Font Color"},
      currentColor: {type:ControlType.Color, title: "Curr. Font Color"},


      size: { type: ControlType.Number, title: "Cell Size" , min:8},
      bgColor: {type:ControlType.Color, title: "Cell Color"},
      currentBgColor: {type:ControlType.Color, title: "Curr. Color"},


      borderColor: {type:ControlType.Color, title: "Border Color"},
      borderSize: { type: ControlType.Number, title: "Border Size", max: 2, min: 0, step: 0.5 },
      borderRadius: { type: ControlType.Number, title: "Radius", min:0 }

    }

    render() {

      var paginatorArray = [];
      var tempColor = "#000000";
      var tempFontColor = "#000000";
      var neighbours = 1+this.props.neighboursCount;
      var title = "";

      for (var i = 0; i < this.props.pagesCount; i++) {

        if((i==0)||(i==this.props.pagesCount-1)|| ( (i>=this.props.currentPage-1-neighbours)&&(i<=this.props.currentPage-1+neighbours)   )){

          if(i==(this.props.currentPage-1)){
            tempColor = this.props.currentBgColor;
            tempFontColor = this.props.currentColor;
          }
          else{
            tempColor =  this.props.bgColor;
            tempFontColor = this.props.fontColor;
          }

          if( (i==this.props.currentPage-1-neighbours) && (i!==0) ) {
            title="..."
          }
          else if ( (i==this.props.currentPage-1+neighbours) && (i!==this.props.pagesCount-1) ){
            title="..."
          }
          else{
            title=i+1
          }

          paginatorArray.push(
            <button type="button" className="square" key={i} style={{borderStyle:"solid", borderWidth:this.props.borderSize, borderColor:this.props.borderColor, borderRadius:this.props.borderRadius, color:tempFontColor, background:tempColor, minWidth: this.props.size, fontSize:this.props.fontSize, minHeight:this.props.size, margin:this.props.margin;}}>
              {title}
              </button>
            );
          }
        }

        return <div style={{textAlign: this.props.align}}>{paginatorArray}</div>;
      }
    }
