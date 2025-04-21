/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetSensorAnomalyDetectionParameters } from './AssetSensorAnomalyDetectionParameters';
import { AssetSensorAnomalyDetectionParametersRequestBuilder } from './AssetSensorAnomalyDetectionParametersRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class AssetSensorAnomalyDetectionParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetSensorAnomalyDetectionParameters<DeSerializersT>,
      DeSerializersT
    >
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
  ): AssetSensorAnomalyDetectionParametersApi<DeSerializersT> {
    return new AssetSensorAnomalyDetectionParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetSensorAnomalyDetectionParameters;

  requestBuilder(): AssetSensorAnomalyDetectionParametersRequestBuilder<DeSerializersT> {
    return new AssetSensorAnomalyDetectionParametersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetSensorAnomalyDetectionParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetSensorAnomalyDetectionParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetSensorAnomalyDetectionParameters<DeSerializersT>,
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
    typeof AssetSensorAnomalyDetectionParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetSensorAnomalyDetectionParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SENSOR_ID: OrderableEdmTypeField<
      AssetSensorAnomalyDetectionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTER_MAX_ANOMALY_RATIO_VALUE: OrderableEdmTypeField<
      AssetSensorAnomalyDetectionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTER_SENSITIVITY_VALUE: OrderableEdmTypeField<
      AssetSensorAnomalyDetectionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COUNTER_NAME: OrderableEdmTypeField<
      AssetSensorAnomalyDetectionParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetSensorAnomalyDetectionParameters<DeSerializers>>;
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
         * Static representation of the {@link counterMaxAnomalyRatioValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_MAX_ANOMALY_RATIO_VALUE: fieldBuilder.buildEdmTypeField(
          'CounterMaxAnomalyRatioValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link counterSensitivityValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_SENSITIVITY_VALUE: fieldBuilder.buildEdmTypeField(
          'CounterSensitivityValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link counterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_NAME: fieldBuilder.buildEdmTypeField(
          'CounterName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetSensorAnomalyDetectionParameters)
      };
    }

    return this._schema;
  }
}
