/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SensorMaintenanceAssetCounterMappings } from './SensorMaintenanceAssetCounterMappings';
import { SensorMaintenanceAssetCounterMappingsRequestBuilder } from './SensorMaintenanceAssetCounterMappingsRequestBuilder';
import { AssetMaintenanceAssetCountersApi } from './AssetMaintenanceAssetCountersApi';
import { SensorsApi } from './SensorsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SensorMaintenanceAssetCounterMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SensorMaintenanceAssetCounterMappings<DeSerializersT>,
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
  ): SensorMaintenanceAssetCounterMappingsApi<DeSerializersT> {
    return new SensorMaintenanceAssetCounterMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetCounter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_COUNTER: OneToOneLink<
      SensorMaintenanceAssetCounterMappings<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCountersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sensor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR: OneToOneLink<
      SensorMaintenanceAssetCounterMappings<DeSerializersT>,
      DeSerializersT,
      SensorsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetCountersApi<DeSerializersT>,
      SensorsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MAINTENANCE_ASSET_COUNTER: new OneToOneLink(
        'MaintenanceAssetCounter',
        this,
        linkedApis[0]
      ),
      SENSOR: new OneToOneLink('Sensor', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SensorMaintenanceAssetCounterMappings;

  requestBuilder(): SensorMaintenanceAssetCounterMappingsRequestBuilder<DeSerializersT> {
    return new SensorMaintenanceAssetCounterMappingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SensorMaintenanceAssetCounterMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SensorMaintenanceAssetCounterMappings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SensorMaintenanceAssetCounterMappings<DeSerializersT>,
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
    typeof SensorMaintenanceAssetCounterMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SensorMaintenanceAssetCounterMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SENSOR_ID: OrderableEdmTypeField<
      SensorMaintenanceAssetCounterMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_COUNTER_ID: OrderableEdmTypeField<
      SensorMaintenanceAssetCounterMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAINTENANCE_ASSET_COUNTER_DATA_AREA_ID: OrderableEdmTypeField<
      SensorMaintenanceAssetCounterMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetCounter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_COUNTER: OneToOneLink<
      SensorMaintenanceAssetCounterMappings<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetCountersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sensor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR: OneToOneLink<
      SensorMaintenanceAssetCounterMappings<DeSerializersT>,
      DeSerializersT,
      SensorsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SensorMaintenanceAssetCounterMappings<DeSerializers>>;
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
         * Static representation of the {@link maintenanceAssetCounterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_COUNTER_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetCounterId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maintenanceAssetCounterDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_COUNTER_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetCounterDataAreaId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SensorMaintenanceAssetCounterMappings)
      };
    }

    return this._schema;
  }
}
