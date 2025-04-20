/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sensors } from './Sensors';
import { SensorsRequestBuilder } from './SensorsRequestBuilder';
import { SensorItemBatchAttributeMappingsApi } from './SensorItemBatchAttributeMappingsApi';
import { SensorMaintenanceAssetCounterMappingsApi } from './SensorMaintenanceAssetCounterMappingsApi';
import { SensorOperationsResourceMappingsApi } from './SensorOperationsResourceMappingsApi';
import { SensorScenarioMappingsApi } from './SensorScenarioMappingsApi';
import { SensorMaintenanceAssetMappingsApi } from './SensorMaintenanceAssetMappingsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class SensorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Sensors<DeSerializersT>, DeSerializersT>
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
  ): SensorsApi<DeSerializersT> {
    return new SensorsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link sensorItemBatchAttributeMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_ITEM_BATCH_ATTRIBUTE_MAPPINGS: OneToManyLink<
      Sensors<DeSerializersT>,
      DeSerializersT,
      SensorItemBatchAttributeMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorMaintenanceAssetCounterMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_MAINTENANCE_ASSET_COUNTER_MAPPINGS: OneToManyLink<
      Sensors<DeSerializersT>,
      DeSerializersT,
      SensorMaintenanceAssetCounterMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorOperationsResourceMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_OPERATIONS_RESOURCE_MAPPINGS: OneToManyLink<
      Sensors<DeSerializersT>,
      DeSerializersT,
      SensorOperationsResourceMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorScenarioMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_SCENARIO_MAPPINGS: OneToManyLink<
      Sensors<DeSerializersT>,
      DeSerializersT,
      SensorScenarioMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorMaintenanceAssetMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_MAINTENANCE_ASSET_MAPPINGS: OneToManyLink<
      Sensors<DeSerializersT>,
      DeSerializersT,
      SensorMaintenanceAssetMappingsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SensorItemBatchAttributeMappingsApi<DeSerializersT>,
      SensorMaintenanceAssetCounterMappingsApi<DeSerializersT>,
      SensorOperationsResourceMappingsApi<DeSerializersT>,
      SensorScenarioMappingsApi<DeSerializersT>,
      SensorMaintenanceAssetMappingsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SENSOR_ITEM_BATCH_ATTRIBUTE_MAPPINGS: new OneToManyLink(
        'SensorItemBatchAttributeMappings',
        this,
        linkedApis[0]
      ),
      SENSOR_MAINTENANCE_ASSET_COUNTER_MAPPINGS: new OneToManyLink(
        'SensorMaintenanceAssetCounterMappings',
        this,
        linkedApis[1]
      ),
      SENSOR_OPERATIONS_RESOURCE_MAPPINGS: new OneToManyLink(
        'SensorOperationsResourceMappings',
        this,
        linkedApis[2]
      ),
      SENSOR_SCENARIO_MAPPINGS: new OneToManyLink(
        'SensorScenarioMappings',
        this,
        linkedApis[3]
      ),
      SENSOR_MAINTENANCE_ASSET_MAPPINGS: new OneToManyLink(
        'SensorMaintenanceAssetMappings',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = Sensors;

  requestBuilder(): SensorsRequestBuilder<DeSerializersT> {
    return new SensorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Sensors<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Sensors<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Sensors<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Sensors, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Sensors, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SENSOR_ID: OrderableEdmTypeField<
      Sensors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SENSOR_DESCRIPTION: OrderableEdmTypeField<
      Sensors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorItemBatchAttributeMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_ITEM_BATCH_ATTRIBUTE_MAPPINGS: OneToManyLink<
      Sensors<DeSerializersT>,
      DeSerializersT,
      SensorItemBatchAttributeMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorMaintenanceAssetCounterMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_MAINTENANCE_ASSET_COUNTER_MAPPINGS: OneToManyLink<
      Sensors<DeSerializersT>,
      DeSerializersT,
      SensorMaintenanceAssetCounterMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorOperationsResourceMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_OPERATIONS_RESOURCE_MAPPINGS: OneToManyLink<
      Sensors<DeSerializersT>,
      DeSerializersT,
      SensorOperationsResourceMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorScenarioMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_SCENARIO_MAPPINGS: OneToManyLink<
      Sensors<DeSerializersT>,
      DeSerializersT,
      SensorScenarioMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorMaintenanceAssetMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_MAINTENANCE_ASSET_MAPPINGS: OneToManyLink<
      Sensors<DeSerializersT>,
      DeSerializersT,
      SensorMaintenanceAssetMappingsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Sensors<DeSerializers>>;
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
         * Static representation of the {@link sensorDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENSOR_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SensorDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Sensors)
      };
    }

    return this._schema;
  }
}
