/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2024-10-06 22:23:28
 * @LastEditors: zouwenqin
 * @LastEditTime: 2024-10-06 23:06:53
 */
type IFontSize = 'sm' | 'md' | 'lg'

type IFontWeight = 'default' | 'bold' 

type IMarginBottom = 'none' | 'wide' | 'huge'

const fontSizeMap: Record<IFontSize, 18 | 22 | 28> = {
    'sm': 18,
    'md': 22,
    'lg': 28
}

const fontWeightMap: Record<IFontWeight, 400 | 700> = {
    'default': 400,
    'bold': 700
}

const marginBottomMap: Record<IMarginBottom, 0 | 10 | 20> = {
    'none': 0,
    'wide': 10,
    'huge': 20
}
interface ITextLineStyle{
    fontSize: IFontSize;
    fontWeight: IFontWeight;
    color: string;
    marginBottom: IMarginBottom;
}
interface ITextLine{
    text: string,
    style?: Partial<ITextLineStyle>
}
const LineBreakSymbol = '\n'
const LineBreak = (props: { text: string }) => {
    const lines = props.text.split(LineBreakSymbol).map((line: string, index: number) => {
        return <div key={index} style={line ? {} : { height: 32 }}>{ line }</div>
    })
    return <div>{ lines }</div>;
}
const TextLine = (props: ITextLine) => {
    const {
        color,
        fontSize = 'sm',
        fontWeight = 'default',
        marginBottom = 'none'
    } = props.style || {}
    return (
        <div className="text-line"
        style={
            {
                color,
                fontSize: fontSizeMap[fontSize],
                fontWeight: fontWeightMap[fontWeight],
                marginBottom: marginBottomMap[marginBottom]
            }
        }>
            <LineBreak text={props.text}/>
        </div>
    )
}
export default TextLine;