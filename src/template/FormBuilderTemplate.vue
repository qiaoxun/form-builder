<template>
    <el-row>
        <el-col :span="18" style="padding: 0 20px">
            <section-component :form="form" :preview="preview" ref="SectionComponent"></section-component>
        </el-col>
        <el-col :span="6">
            <sidebar-component></sidebar-component>
        </el-col>

        <preview-component ref="PreviewComponent" :form="form"></preview-component>
    </el-row>
</template>

<script>
    import SectionComponent from "./ui/SectionComponent";
    import { dom } from '@fortawesome/fontawesome-svg-core'
    import SidebarComponent from "./ui/SidebarComponent";
    import PreviewComponent from "./ui/PreviewComponent";
    dom.watch();

    export default {
        name: "form-builder-template",
        components: {
            PreviewComponent,
            SidebarComponent,
            SectionComponent
        },
        props: {
            form: {
                type: Object
            }
        },
        // data: () => ({
        //     form: {
        //         sections: [],
        //         layout: "",
        //         _uniqueId: Math.random()
        //     }
        // }),
        methods: {
            getValue() {
                return this.form;
            },
            setValue(val) {
                this.form = val;
            },
            preview() {
                this.$refs.PreviewComponent.openModal(this.form);
            },
            test() {
              console.log('test')
            }
        }
    }
</script>

<style scoped>

</style>
