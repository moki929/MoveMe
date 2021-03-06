import React from 'react'
import { FinalCanvas } from ".";


const FinalImgArea = ({finalImgUrl,
    finalText,
    finalFont,
    finalFontSize,
    finalFontWeight,
    finalTextColor,
    finalMargin,
    finalBgColor,
    finalBgOpacity,
    generateFinalCanvas,photographer}) => {
    return (
        <div>
            <FinalCanvas
                    finalImgUrl={finalImgUrl}
                    finalText={finalText}
                    finalFont={finalFont}
                    finalFontSize={finalFontSize}
                    finalFontWeight={finalFontWeight}
                    finalTextColor={finalTextColor}
                    width={window.outerWidth}
                    finalMargin = {finalMargin}
                    finalBgColor= {finalBgColor}
                    finalBgOpacity = {finalBgOpacity}
                    generateFinalCanvas={generateFinalCanvas}
                    photographer = {photographer}
                    id="finalCanvas"
                /> 
        </div>
    )
}

export default FinalImgArea
