/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetCounters } from './AssetMaintenanceAssetCounters';
import { AssetMaintenanceAssetCountersRequestBuilder } from './AssetMaintenanceAssetCountersRequestBuilder';
import { AssetMaintenanceAssetTypeCounterAssociationsApi } from './AssetMaintenanceAssetTypeCounterAssociationsApi';
import { SensorMaintenanceAssetCounterMappingsApi } from './SensorMaintenanceAssetCounterMappingsApi';
import { AssetMaintenanceWorkOrderLineChecklistsApi } from './AssetMaintenanceWorkOrderLineChecklistsApi';
import { EntAssetObjectCounterUpdate } from './EntAssetObjectCounterUpdate';
import { NoYes } from './NoYes';
import { EntAssetInfoType } from './EntAssetInfoType';
import { EntAssetCounterAggregate } from './EntAssetCounterAggregate';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceAssetCountersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceAssetCounters<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceAssetCountersApi<DeSerializersT> {
    return new AssetMaintenanceAssetCountersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeCounterAssociation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_COUNTER_ASSOCIATION: OneToManyLink<
      AssetMaintenanceAssetCounters<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeCounterAssociationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorMaintenanceAssetCounterMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_MAINTENANCE_ASSET_COUNTER_MAPPINGS: OneToManyLink<
      AssetMaintenanceAssetCounters<DeSerializersT>,
      DeSerializersT,
      SensorMaintenanceAssetCounterMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobChecklistLinesCounterType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_LINES_COUNTER_TYPE: OneToManyLink<
      AssetMaintenanceAssetCounters<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobChecklistLinesMeasurementCounter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_LINES_MEASUREMENT_COUNTER: OneToManyLink<
      AssetMaintenanceAssetCounters<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetTypeCounterAssociationsApi<DeSerializersT>,
      SensorMaintenanceAssetCounterMappingsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_ASSET_TYPE_COUNTER_ASSOCIATION: new OneToManyLink(
        'AssetMaintenanceAssetTypeCounterAssociation',
        this,
        linkedApis[0]
      ),
      SENSOR_MAINTENANCE_ASSET_COUNTER_MAPPINGS: new OneToManyLink(
        'SensorMaintenanceAssetCounterMappings',
        this,
        linkedApis[1]
      ),
      JOB_CHECKLIST_LINES_COUNTER_TYPE: new OneToManyLink(
        'JobChecklistLines_CounterType',
        this,
        linkedApis[2]
      ),
      JOB_CHECKLIST_LINES_MEASUREMENT_COUNTER: new OneToManyLink(
        'JobChecklistLines_MeasurementCounter',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetCounters;

  requestBuilder(): AssetMaintenanceAssetCountersRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetCountersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetCounters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetCounters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetCounters<DeSerializersT>,
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
    typeof AssetMaintenanceAssetCounters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetCounters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTER_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTER_UPDATE: EnumField<
      AssetMaintenanceAssetCounters<DeSerializers>,
      DeSerializersT,
      EntAssetObjectCounterUpdate,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceAssetCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INHERIT: EnumField<
      AssetMaintenanceAssetCounters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALUE_DEVIATION_UNDER: OrderableEdmTypeField<
      AssetMaintenanceAssetCounters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE_DEVIATION_OVER: OrderableEdmTypeField<
      AssetMaintenanceAssetCounters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE_DEVIATION_INFO_TYPE: EnumField<
      AssetMaintenanceAssetCounters<DeSerializers>,
      DeSerializersT,
      EntAssetInfoType,
      true,
      true
    >;
    COUNTER_AGGREGATE: EnumField<
      AssetMaintenanceAssetCounters<DeSerializers>,
      DeSerializersT,
      EntAssetCounterAggregate,
      true,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetCounters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeCounterAssociation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_COUNTER_ASSOCIATION: OneToManyLink<
      AssetMaintenanceAssetCounters<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeCounterAssociationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sensorMaintenanceAssetCounterMappings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR_MAINTENANCE_ASSET_COUNTER_MAPPINGS: OneToManyLink<
      AssetMaintenanceAssetCounters<DeSerializersT>,
      DeSerializersT,
      SensorMaintenanceAssetCounterMappingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobChecklistLinesCounterType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_LINES_COUNTER_TYPE: OneToManyLink<
      AssetMaintenanceAssetCounters<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobChecklistLinesMeasurementCounter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CHECKLIST_LINES_MEASUREMENT_COUNTER: OneToManyLink<
      AssetMaintenanceAssetCounters<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineChecklistsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceAssetCounters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link counterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_ID: fieldBuilder.buildEdmTypeField(
          'CounterId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link counterUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_UPDATE: fieldBuilder.buildEnumField(
          'CounterUpdate',
          EntAssetObjectCounterUpdate,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link inherit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INHERIT: fieldBuilder.buildEnumField('Inherit', NoYes, true),
        /**
         * Static representation of the {@link valueDeviationUnder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_DEVIATION_UNDER: fieldBuilder.buildEdmTypeField(
          'ValueDeviationUnder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link valueDeviationOver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_DEVIATION_OVER: fieldBuilder.buildEdmTypeField(
          'ValueDeviationOver',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link valueDeviationInfoType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_DEVIATION_INFO_TYPE: fieldBuilder.buildEnumField(
          'ValueDeviationInfoType',
          EntAssetInfoType,
          true
        ),
        /**
         * Static representation of the {@link counterAggregate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTER_AGGREGATE: fieldBuilder.buildEnumField(
          'CounterAggregate',
          EntAssetCounterAggregate,
          true
        ),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetCounters)
      };
    }

    return this._schema;
  }
}
