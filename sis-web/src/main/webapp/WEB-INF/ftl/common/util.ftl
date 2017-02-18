
<#ftl strip_whitespace=true>
<#--    util.ftl    -->
<#--@Author:    wuyu-->
<#--@Date:      2010-03-26  -->


<#macro showMessage key="messageKey" classOrStyle="">
    <#if .globals[key]?exists>
        <#if classOrStyle == "">
        <b>${.globals[key]}</b>
            <#else>
                <#if classOrStyle?index_of(":") == -1><#assign attr="class"><#else><#assign attr="style"></#if>
            <span ${attr}="${classOrStyle}">${.globals[key]}</span>
        </#if>
    </#if>
</#macro>

<#macro showMessages key="messagesKey" separator="" classOrStyle="">
    <#if .globals[key]?exists>
        <#list .globals[key] as msg>
            <#if msg?exists>
                <#if classOrStyle == "">
                <b>${msg}</b>
                    <#else>
                        <#if classOrStyle?index_of(":") == -1><#assign attr="class"><#else><#assign attr="style"></#if>
                    <span ${attr}="${classOrStyle}">${msg}</span>
                </#if>
            </#if>
            <#if msg_has_next>${separator}</#if>
        </#list>
    </#if>
</#macro>

<#--拷贝自spring.ftl，供其他宏能够获取status-->
<#macro bind path>
    <#if htmlEscape?exists>
        <#assign status = springMacroRequestContext.getBindStatus(path, htmlEscape)>
        <#else>
            <#assign status = springMacroRequestContext.getBindStatus(path)>
    </#if>
<#-- assign a temporary value, forcing a string representation for any
kind of variable. This temp value is only used in this macro lib -->
    <#if status.value?exists && status.value?is_boolean>
        <#assign stringStatusValue=status.value?string>
        <#else>
            <#assign stringStatusValue=status.value?default("")>
    </#if>
</#macro>

<#macro closeTag>
    <#if xhtmlCompliant?exists && xhtmlCompliant>/><#else>></#if>
</#macro>

<#--拷贝自spring.ftl，使用了缺省的contains方法。原因：由于spring缺省获取到的status value是一个String，而不是什么list或者数组-->
<#macro formMultiSelect path options attributes="">
<@bind path/>
<select multiple="multiple" id="${status.expression}" name="${status.expression}" ${attributes}>
    <#list options?keys as value>
        <#assign isSelected = status.value?contains(value)>
        <option value="${value?html}"<#if isSelected> selected="selected"</#if>>${options[value]?html}</option>
    </#list>
</select>
</#macro>

<#macro formCheckboxes path options separator attributes="">
<@bind path/>
    <#list options?keys as value>
        <#assign id="${status.expression}${value_index}">
        <#assign isSelected = status.value?contains(value) >
            <input type="checkbox" id="${id}" name="${status.expression}" value="${value?html}"<#if isSelected>
                   checked="checked"</#if> ${attributes}<@closeTag/>
    <label for="${id}">${options[value]?html}</label>${separator}
    </#list>
<input type="hidden" name="_${status.expression}" value="on"/>
</#macro>

<#macro formCheckboxesSpan path options separator attributes="">
<@bind path/>
    <#list options?keys as value>
        <#assign id="${status.expression}${value_index}">
        <#assign isSelected = status.value?contains(value) >
            <input style="width:5%;display:inline-block;" type="checkbox" id="${id}" name="${status.expression}" value="${value?html}"<#if isSelected>
                   checked="checked"</#if> ${attributes}<@closeTag/>
    <span for="${id}">${options[value]?html}</span>${separator}
    </#list>
<input type="hidden" name="_${status.expression}" value="on"/>
</#macro>

<#macro showErrors separator classOrStyle="">
    <#list status.errorMessages as error>
        <#if classOrStyle == "">
        <b>${error}</b>
            <#else>
                <#if classOrStyle?index_of(":") == -1><#assign attr="class"><#else><#assign attr="style"></#if>
            <span ${attr}="${classOrStyle}">${error}</span>
        </#if>
        <#if error_has_next>${separator}</#if>
    </#list>
</#macro>