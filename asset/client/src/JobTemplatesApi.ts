/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobTemplates } from './JobTemplates';
import { JobTemplatesRequestBuilder } from './JobTemplatesRequestBuilder';
import { JobTemplateResponsibilitiesApi } from './JobTemplateResponsibilitiesApi';
import { AdaRequirementReportsApi } from './AdaRequirementReportsApi';
import { JobTemplateExamsApi } from './JobTemplateExamsApi';
import { JobTemplateTasksApi } from './JobTemplateTasksApi';
import { JobTemplateEducationDisciplinesApi } from './JobTemplateEducationDisciplinesApi';
import { JobTemplateCertificatesApi } from './JobTemplateCertificatesApi';
import { JobTemplateAdaRequirementsApi } from './JobTemplateAdaRequirementsApi';
import { JobTemplateSkillsApi } from './JobTemplateSkillsApi';
import { JobTemplateScreeningsApi } from './JobTemplateScreeningsApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class JobTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobTemplates<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): JobTemplatesApi<DeSerializersT> {
    return new JobTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateResponsibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_RESPONSIBILITIES: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateResponsibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplateAdaRequirementReport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_ADA_REQUIREMENT_REPORT: OneToOneLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      AdaRequirementReportsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateExams} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_EXAMS: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_TASKS: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateEducationDisciplines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_EDUCATION_DISCIPLINES: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateEducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateCertificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_CERTIFICATES: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplateAdaRequirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_ADA_REQUIREMENT: OneToOneLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateAdaRequirementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_SKILLS: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateScreenings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_SCREENINGS: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateScreeningsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobTemplateResponsibilitiesApi<DeSerializersT>,
      AdaRequirementReportsApi<DeSerializersT>,
      JobTemplateExamsApi<DeSerializersT>,
      JobTemplateTasksApi<DeSerializersT>,
      JobTemplateEducationDisciplinesApi<DeSerializersT>,
      JobTemplateCertificatesApi<DeSerializersT>,
      JobTemplateAdaRequirementsApi<DeSerializersT>,
      JobTemplateSkillsApi<DeSerializersT>,
      JobTemplateScreeningsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_TEMPLATE_RESPONSIBILITIES: new OneToManyLink(
        'JobTemplateResponsibilities',
        this,
        linkedApis[0]
      ),
      JOB_TEMPLATE_ADA_REQUIREMENT_REPORT: new OneToOneLink(
        'JobTemplateADARequirementReport',
        this,
        linkedApis[1]
      ),
      JOB_TEMPLATE_EXAMS: new OneToManyLink(
        'JobTemplateExams',
        this,
        linkedApis[2]
      ),
      JOB_TEMPLATE_TASKS: new OneToManyLink(
        'JobTemplateTasks',
        this,
        linkedApis[3]
      ),
      JOB_TEMPLATE_EDUCATION_DISCIPLINES: new OneToManyLink(
        'JobTemplateEducationDisciplines',
        this,
        linkedApis[4]
      ),
      JOB_TEMPLATE_CERTIFICATES: new OneToManyLink(
        'JobTemplateCertificates',
        this,
        linkedApis[5]
      ),
      JOB_TEMPLATE_ADA_REQUIREMENT: new OneToOneLink(
        'JobTemplateADARequirement',
        this,
        linkedApis[6]
      ),
      JOB_TEMPLATE_SKILLS: new OneToManyLink(
        'JobTemplateSkills',
        this,
        linkedApis[7]
      ),
      JOB_TEMPLATE_SCREENINGS: new OneToManyLink(
        'JobTemplateScreenings',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = JobTemplates;

  requestBuilder(): JobTemplatesRequestBuilder<DeSerializersT> {
    return new JobTemplatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobTemplates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JobTemplates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JobTemplates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(JobTemplates, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TEMPLATE: OrderableEdmTypeField<
      JobTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      JobTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      JobTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateResponsibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_RESPONSIBILITIES: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateResponsibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplateAdaRequirementReport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_ADA_REQUIREMENT_REPORT: OneToOneLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      AdaRequirementReportsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateExams} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_EXAMS: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateExamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_TASKS: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateEducationDisciplines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_EDUCATION_DISCIPLINES: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateEducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateCertificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_CERTIFICATES: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplateAdaRequirement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_ADA_REQUIREMENT: OneToOneLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateAdaRequirementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateSkills} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_SKILLS: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateSkillsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateScreenings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_SCREENINGS: OneToManyLink<
      JobTemplates<DeSerializersT>,
      DeSerializersT,
      JobTemplateScreeningsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobTemplates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'JobTemplate',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobTemplates)
      };
    }

    return this._schema;
  }
}
