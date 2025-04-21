/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFaultCauses } from './AssetMaintenanceFaultCauses';
import { AssetMaintenanceFaultCausesRequestBuilder } from './AssetMaintenanceFaultCausesRequestBuilder';
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
export class AssetMaintenanceFaultCausesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceFaultCauses<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceFaultCausesApi<DeSerializersT> {
    return new AssetMaintenanceFaultCausesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link faultCauseMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_CAUSE_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultCauses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultCauseMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_CAUSE_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultCauses<DeSerializersT>,
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
      FAULT_CAUSE_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: new OneToManyLink(
        'FaultCause_MaintenanceWorkOrderAssetFaults',
        this,
        linkedApis[0]
      ),
      FAULT_CAUSE_MAINTENANCE_REQUEST_ASSET_FAULTS: new OneToManyLink(
        'FaultCause_MaintenanceRequestAssetFaults',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFaultCauses;

  requestBuilder(): AssetMaintenanceFaultCausesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFaultCausesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFaultCauses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFaultCauses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFaultCauses<DeSerializersT>,
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
    typeof AssetMaintenanceFaultCauses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFaultCauses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFaultCauses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_CAUSE_ID: OrderableEdmTypeField<
      AssetMaintenanceFaultCauses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceFaultCauses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultCauseMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_CAUSE_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultCauses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultCauseMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_CAUSE_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultCauses<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceFaultCauses<DeSerializers>>;
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
         * Static representation of the {@link faultCauseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_CAUSE_ID: fieldBuilder.buildEdmTypeField(
          'FaultCauseId',
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
        ALL_FIELDS: new AllFields('*', AssetMaintenanceFaultCauses)
      };
    }

    return this._schema;
  }
}
