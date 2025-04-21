/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetSensorDowntimeThresholds } from './AssetSensorDowntimeThresholds';
import { AssetSensorDowntimeThresholdsRequestBuilder } from './AssetSensorDowntimeThresholdsRequestBuilder';
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
export class AssetSensorDowntimeThresholdsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetSensorDowntimeThresholds<DeSerializersT>, DeSerializersT>
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
  ): AssetSensorDowntimeThresholdsApi<DeSerializersT> {
    return new AssetSensorDowntimeThresholdsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetSensorDowntimeThresholds;

  requestBuilder(): AssetSensorDowntimeThresholdsRequestBuilder<DeSerializersT> {
    return new AssetSensorDowntimeThresholdsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetSensorDowntimeThresholds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetSensorDowntimeThresholds<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetSensorDowntimeThresholds<DeSerializersT>,
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
    typeof AssetSensorDowntimeThresholds,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetSensorDowntimeThresholds,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SENSOR_ID: OrderableEdmTypeField<
      AssetSensorDowntimeThresholds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSET_NOT_RESPONDING_THRESHOLD_MINS: OrderableEdmTypeField<
      AssetSensorDowntimeThresholds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AssetSensorDowntimeThresholds<DeSerializers>>;
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
         * Static representation of the {@link assetNotRespondingThresholdMins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_NOT_RESPONDING_THRESHOLD_MINS: fieldBuilder.buildEdmTypeField(
          'AssetNotRespondingThresholdMins',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetSensorDowntimeThresholds)
      };
    }

    return this._schema;
  }
}
