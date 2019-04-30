<template>
    <el-row v-if="form !== null">
        <!-- collapse layout -->
        <el-col :span="12" class="sectionItem" v-if="form.layout === 'collapse1'">
        <!-- <div class="col-md-12 sectionItem" v-if="form.layout === 'collapse'"> -->
            <collapse-section-layout v-for="(section) in form.sections"
                                     :key="section.name"
                                     :section="section">
            </collapse-section-layout>
        <!-- </div> -->
        </el-col>

        <!-- tab layout-->
        <el-col :span="12" class="sectionItem" v-if="form.layout === 'tab'">
        <!-- <div class="col-md-12 sectionItem" v-if="form.layout === 'tab'"> -->
            <tab-header-section-layout :sections="form.sections"></tab-header-section-layout>

            <div class="tab-content">
                <tab-body-section-layout v-for="(section, index) in form.sections"
                                         :key="section.name"
                                         :section="section"
                                         :is-first="index === 0">
                </tab-body-section-layout>
            </div>
        <!-- </div> -->
        </el-col>
    </el-row>
</template>

<script>
    import TabHeaderSectionLayout from "./sections/TabHeaderSectionLayout";
    import TabBodySectionLayout from "./sections/TabBodySectionLayout";
    import CollapseSectionLayout from "./sections/CollapseSectionLayout";
    export default {
        name: "SectionComponent",
        components: {CollapseSectionLayout, TabBodySectionLayout, TabHeaderSectionLayout},
        props: {
            form: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>
