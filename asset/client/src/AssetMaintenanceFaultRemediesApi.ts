/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFaultRemedies } from './AssetMaintenanceFaultRemedies';
import { AssetMaintenanceFaultRemediesRequestBuilder } from './AssetMaintenanceFaultRemediesRequestBuilder';
import { AssetMaintenanceWorkOrderAssetFaultsApi } from './AssetMaintenanceWorkOrderAssetFaultsApi';
import { AssetMaintenanceRequestAssetFaultsApi } from './AssetMaintenanceRequestAssetFaultsApi';
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
export class AssetMaintenanceFaultRemediesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceFaultRemedies<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceFaultRemediesApi<DeSerializersT> {
    return new AssetMaintenanceFaultRemediesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link faultRemedyMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_REMEDY_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultRemedies<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultRemedyMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_REMEDY_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultRemedies<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FAULT_REMEDY_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: new OneToManyLink(
        'FaultRemedy_MaintenanceWorkOrderAssetFaults',
        this,
        linkedApis[0]
      ),
      FAULT_REMEDY_MAINTENANCE_REQUEST_ASSET_FAULTS: new OneToManyLink(
        'FaultRemedy_MaintenanceRequestAssetFaults',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFaultRemedies;

  requestBuilder(): AssetMaintenanceFaultRemediesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFaultRemediesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFaultRemedies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFaultRemedies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFaultRemedies<DeSerializersT>,
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
    typeof AssetMaintenanceFaultRemedies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFaultRemedies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFaultRemedies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_REMEDY_ID: OrderableEdmTypeField<
      AssetMaintenanceFaultRemedies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceFaultRemedies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultRemedyMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_REMEDY_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultRemedies<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultRemedyMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_REMEDY_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultRemedies<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceFaultRemedies<DeSerializers>>;
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
         * Static representation of the {@link faultRemedyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_REMEDY_ID: fieldBuilder.buildEdmTypeField(
          'FaultRemedyId',
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
        ALL_FIELDS: new AllFields('*', AssetMaintenanceFaultRemedies)
      };
    }

    return this._schema;
  }
}
