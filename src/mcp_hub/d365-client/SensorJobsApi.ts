/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SensorJobs } from './SensorJobs';
import { SensorJobsRequestBuilder } from './SensorJobsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class SensorJobsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SensorJobs<DeSerializersT>, DeSerializersT>
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
  ): SensorJobsApi<DeSerializersT> {
    return new SensorJobsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SensorJobs;

  requestBuilder(): SensorJobsRequestBuilder<DeSerializersT> {
    return new SensorJobsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SensorJobs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SensorJobs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SensorJobs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SensorJobs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SensorJobs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SENSOR_ID: OrderableEdmTypeField<
      SensorJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      SensorJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_DATA_AREA_ID: OrderableEdmTypeField<
      SensorJobs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MACHINE_NOT_REPORTING_THRESHOLD: OrderableEdmTypeField<
      SensorJobs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_JOB_IN_PROGRESS: EnumField<
      SensorJobs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SensorJobs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sensorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENSOR_ID: fieldBuilder.buildEdmTypeField(
          'SensorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
        /**
         * Static representation of the {@link jobDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'JobDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link machineNotReportingThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MACHINE_NOT_REPORTING_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'MachineNotReportingThreshold',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isJobInProgress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JOB_IN_PROGRESS: fieldBuilder.buildEnumField(
          'IsJobInProgress',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SensorJobs)
      };
    }

    return this._schema;
  }
}
