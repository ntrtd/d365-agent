/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SensorJobExecutions } from './SensorJobExecutions';
import { SensorJobExecutionsRequestBuilder } from './SensorJobExecutionsRequestBuilder';
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
export class SensorJobExecutionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SensorJobExecutions<DeSerializersT>, DeSerializersT>
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
  ): SensorJobExecutionsApi<DeSerializersT> {
    return new SensorJobExecutionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SensorJobExecutions;

  requestBuilder(): SensorJobExecutionsRequestBuilder<DeSerializersT> {
    return new SensorJobExecutionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SensorJobExecutions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SensorJobExecutions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SensorJobExecutions<DeSerializersT>,
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
    typeof SensorJobExecutions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SensorJobExecutions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SENSOR_ID: OrderableEdmTypeField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_REGISTRATION_START_DATE_TIME: OrderableEdmTypeField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESSING_TIME_IN_HOURS: OrderableEdmTypeField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_QUANTITY: OrderableEdmTypeField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_ID: OrderableEdmTypeField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_RATE_DEVIATION_THRESHOLD: OrderableEdmTypeField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_JOB_COMPLETED: EnumField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_REGISTRATION_STOP_DATE_TIME: OrderableEdmTypeField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_LAST_REGISTRATION_DATE_TIME: OrderableEdmTypeField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_DATA_AREA_ID: OrderableEdmTypeField<
      SensorJobExecutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SensorJobExecutions<DeSerializers>>;
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
         * Static representation of the {@link jobRegistrationStartDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_REGISTRATION_START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'JobRegistrationStartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link processingTimeInHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_TIME_IN_HOURS: fieldBuilder.buildEdmTypeField(
          'ProcessingTimeInHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RequestedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ID: fieldBuilder.buildEdmTypeField('OrderId', 'Edm.String', true),
        /**
         * Static representation of the {@link productionRateDeviationThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_RATE_DEVIATION_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'ProductionRateDeviationThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isJobCompleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JOB_COMPLETED: fieldBuilder.buildEnumField(
          'IsJobCompleted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link jobRegistrationStopDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_REGISTRATION_STOP_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'JobRegistrationStopDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobLastRegistrationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_LAST_REGISTRATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'JobLastRegistrationDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'JobDataAreaId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SensorJobExecutions)
      };
    }

    return this._schema;
  }
}
