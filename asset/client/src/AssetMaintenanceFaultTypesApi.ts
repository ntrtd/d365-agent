/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFaultTypes } from './AssetMaintenanceFaultTypes';
import { AssetMaintenanceFaultTypesRequestBuilder } from './AssetMaintenanceFaultTypesRequestBuilder';
import { AssetMaintenanceWorkOrderAssetFaultsApi } from './AssetMaintenanceWorkOrderAssetFaultsApi';
import { AssetMaintenanceRequestAssetFaultsApi } from './AssetMaintenanceRequestAssetFaultsApi';
import { AssetMaintenanceAssetTypeFaultTypesApi } from './AssetMaintenanceAssetTypeFaultTypesApi';
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
export class AssetMaintenanceFaultTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceFaultTypes<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceFaultTypesApi<DeSerializersT> {
    return new AssetMaintenanceFaultTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link faultTypeMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_TYPE_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultTypeMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_TYPE_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_TYPE: OneToManyLink<
      AssetMaintenanceFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceAssetTypeFaultTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FAULT_TYPE_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: new OneToManyLink(
        'FaultType_MaintenanceWorkOrderAssetFaults',
        this,
        linkedApis[0]
      ),
      FAULT_TYPE_MAINTENANCE_REQUEST_ASSET_FAULTS: new OneToManyLink(
        'FaultType_MaintenanceRequestAssetFaults',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE_FAULT_TYPE: new OneToManyLink(
        'AssetMaintenanceAssetTypeFaultType',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFaultTypes;

  requestBuilder(): AssetMaintenanceFaultTypesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFaultTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFaultTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFaultTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFaultTypes<DeSerializersT>,
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
    typeof AssetMaintenanceFaultTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFaultTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFaultTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFaultTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceFaultTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultTypeMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_TYPE_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultTypeMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_TYPE_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_TYPE: OneToManyLink<
      AssetMaintenanceFaultTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceFaultTypes<DeSerializers>>;
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
         * Static representation of the {@link faultTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FaultTypeId',
          'Edm.String',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceFaultTypes)
      };
    }

    return this._schema;
  }
}
