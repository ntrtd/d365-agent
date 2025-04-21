/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobTemplateEducationDisciplines } from './JobTemplateEducationDisciplines';
import { JobTemplateEducationDisciplinesRequestBuilder } from './JobTemplateEducationDisciplinesRequestBuilder';
import { EducationDisciplinesApi } from './EducationDisciplinesApi';
import { JobTemplatesApi } from './JobTemplatesApi';
import { HrmSkillImportance } from './HrmSkillImportance';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class JobTemplateEducationDisciplinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<JobTemplateEducationDisciplines<DeSerializersT>, DeSerializersT>
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
  ): JobTemplateEducationDisciplinesApi<DeSerializersT> {
    return new JobTemplateEducationDisciplinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link educationDiscipline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE: OneToOneLink<
      JobTemplateEducationDisciplines<DeSerializersT>,
      DeSerializersT,
      EducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateEducationDisciplines<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EducationDisciplinesApi<DeSerializersT>,
      JobTemplatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EDUCATION_DISCIPLINE: new OneToOneLink(
        'EducationDiscipline',
        this,
        linkedApis[0]
      ),
      JOB_TEMPLATE: new OneToOneLink('JobTemplate', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobTemplateEducationDisciplines;

  requestBuilder(): JobTemplateEducationDisciplinesRequestBuilder<DeSerializersT> {
    return new JobTemplateEducationDisciplinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    JobTemplateEducationDisciplines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      JobTemplateEducationDisciplines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobTemplateEducationDisciplines<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof JobTemplateEducationDisciplines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobTemplateEducationDisciplines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TEMPLATE_ID: OrderableEdmTypeField<
      JobTemplateEducationDisciplines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EDUCATION_ID: OrderableEdmTypeField<
      JobTemplateEducationDisciplines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORTANCE: EnumField<
      JobTemplateEducationDisciplines<DeSerializers>,
      DeSerializersT,
      HrmSkillImportance,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link educationDiscipline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE: OneToOneLink<
      JobTemplateEducationDisciplines<DeSerializersT>,
      DeSerializersT,
      EducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateEducationDisciplines<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobTemplateEducationDisciplines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'JobTemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link educationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_ID: fieldBuilder.buildEdmTypeField(
          'EducationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link importance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTANCE: fieldBuilder.buildEnumField(
          'Importance',
          HrmSkillImportance,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobTemplateEducationDisciplines)
      };
    }

    return this._schema;
  }
}
