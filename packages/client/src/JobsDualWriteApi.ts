/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobsDualWrite } from './JobsDualWrite';
import { JobsDualWriteRequestBuilder } from './JobsDualWriteRequestBuilder';
import { JobFunctionsApi } from './JobFunctionsApi';
import { JobTypesApi } from './JobTypesApi';
import { NoYes } from './NoYes';
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
export class JobsDualWriteApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobsDualWrite<DeSerializersT>, DeSerializersT>
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
  ): JobsDualWriteApi<DeSerializersT> {
    return new JobsDualWriteApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FUNCTION: OneToOneLink<
      JobsDualWrite<DeSerializersT>,
      DeSerializersT,
      JobFunctionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE: OneToOneLink<
      JobsDualWrite<DeSerializersT>,
      DeSerializersT,
      JobTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobFunctionsApi<DeSerializersT>, JobTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB_FUNCTION: new OneToOneLink('JobFunction', this, linkedApis[0]),
      JOB_TYPE: new OneToOneLink('JobType', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobsDualWrite;

  requestBuilder(): JobsDualWriteRequestBuilder<DeSerializersT> {
    return new JobsDualWriteRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobsDualWrite<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobsDualWrite<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JobsDualWrite<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JobsDualWrite, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(JobsDualWrite, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_NUMBER_OF_POSITIONS: OrderableEdmTypeField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOB_DESCRIPTION: OrderableEdmTypeField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE_ID: OrderableEdmTypeField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_FUNCTION_ID: OrderableEdmTypeField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_UNLIMITED_POSITIONS: EnumField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_FULL_TIME_EQUIVALENCY: OrderableEdmTypeField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      JobsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FUNCTION: OneToOneLink<
      JobsDualWrite<DeSerializersT>,
      DeSerializersT,
      JobFunctionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE: OneToOneLink<
      JobsDualWrite<DeSerializersT>,
      DeSerializersT,
      JobTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobsDualWrite<DeSerializers>>;
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
         * Static representation of the {@link maximumNumberOfPositions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_NUMBER_OF_POSITIONS: fieldBuilder.buildEdmTypeField(
          'MaximumNumberOfPositions',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link jobDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JobDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link titleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE_ID: fieldBuilder.buildEdmTypeField('TitleId', 'Edm.String', true),
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobFunctionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FUNCTION_ID: fieldBuilder.buildEdmTypeField(
          'JobFunctionId',
          'Edm.String',
          true
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
         * Static representation of the {@link allowUnlimitedPositions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_UNLIMITED_POSITIONS: fieldBuilder.buildEnumField(
          'AllowUnlimitedPositions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultFullTimeEquivalency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FULL_TIME_EQUIVALENCY: fieldBuilder.buildEdmTypeField(
          'DefaultFullTimeEquivalency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobsDualWrite)
      };
    }

    return this._schema;
  }
}
