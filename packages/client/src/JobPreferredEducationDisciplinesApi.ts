/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobPreferredEducationDisciplines } from './JobPreferredEducationDisciplines';
import { JobPreferredEducationDisciplinesRequestBuilder } from './JobPreferredEducationDisciplinesRequestBuilder';
import { EducationDisciplinesApi } from './EducationDisciplinesApi';
import { JobsApi } from './JobsApi';
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
export class JobPreferredEducationDisciplinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<JobPreferredEducationDisciplines<DeSerializersT>, DeSerializersT>
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
  ): JobPreferredEducationDisciplinesApi<DeSerializersT> {
    return new JobPreferredEducationDisciplinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link educationDiscipline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE: OneToOneLink<
      JobPreferredEducationDisciplines<DeSerializersT>,
      DeSerializersT,
      EducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobPreferredEducationDisciplines<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EducationDisciplinesApi<DeSerializersT>,
      JobsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EDUCATION_DISCIPLINE: new OneToOneLink(
        'EducationDiscipline',
        this,
        linkedApis[0]
      ),
      JOB: new OneToOneLink('Job', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobPreferredEducationDisciplines;

  requestBuilder(): JobPreferredEducationDisciplinesRequestBuilder<DeSerializersT> {
    return new JobPreferredEducationDisciplinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    JobPreferredEducationDisciplines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      JobPreferredEducationDisciplines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobPreferredEducationDisciplines<DeSerializersT>,
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
    typeof JobPreferredEducationDisciplines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobPreferredEducationDisciplines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      JobPreferredEducationDisciplines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EDUCATION_ID: OrderableEdmTypeField<
      JobPreferredEducationDisciplines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORTANCE: EnumField<
      JobPreferredEducationDisciplines<DeSerializers>,
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
      JobPreferredEducationDisciplines<DeSerializersT>,
      DeSerializersT,
      EducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobPreferredEducationDisciplines<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobPreferredEducationDisciplines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', JobPreferredEducationDisciplines)
      };
    }

    return this._schema;
  }
}
