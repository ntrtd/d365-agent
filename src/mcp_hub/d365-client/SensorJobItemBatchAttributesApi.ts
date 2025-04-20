/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SensorJobItemBatchAttributes } from './SensorJobItemBatchAttributes';
import { SensorJobItemBatchAttributesRequestBuilder } from './SensorJobItemBatchAttributesRequestBuilder';
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
export class SensorJobItemBatchAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SensorJobItemBatchAttributes<DeSerializersT>, DeSerializersT>
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
  ): SensorJobItemBatchAttributesApi<DeSerializersT> {
    return new SensorJobItemBatchAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SensorJobItemBatchAttributes;

  requestBuilder(): SensorJobItemBatchAttributesRequestBuilder<DeSerializersT> {
    return new SensorJobItemBatchAttributesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SensorJobItemBatchAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SensorJobItemBatchAttributes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SensorJobItemBatchAttributes<DeSerializersT>,
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
    typeof SensorJobItemBatchAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SensorJobItemBatchAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SENSOR_ID: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_DATA_AREA_ID: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPTIMAL_BATCH_ATTRIBUTE_VALUE: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_BATCH_ATTRIBUTE_TOLERANCE: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOB_REGISTRATION_START_DATE_TIME: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORDER_ID: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_JOB_COMPLETED: EnumField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_REGISTRATION_STOP_DATE_TIME: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_LAST_REGISTRATION_DATE_TIME: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_BATCH_ATTRIBUTE_TOLERANCE: OrderableEdmTypeField<
      SensorJobItemBatchAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SensorJobItemBatchAttributes<DeSerializers>>;
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link optimalBatchAttributeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTIMAL_BATCH_ATTRIBUTE_VALUE: fieldBuilder.buildEdmTypeField(
          'OptimalBatchAttributeValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumBatchAttributeTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_BATCH_ATTRIBUTE_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MaximumBatchAttributeTolerance',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link orderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ID: fieldBuilder.buildEdmTypeField('OrderId', 'Edm.String', true),
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
         * Static representation of the {@link attributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumBatchAttributeTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BATCH_ATTRIBUTE_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MinimumBatchAttributeTolerance',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SensorJobItemBatchAttributes)
      };
    }

    return this._schema;
  }
}
