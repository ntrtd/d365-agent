/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFaultSymptoms } from './AssetMaintenanceFaultSymptoms';
import { AssetMaintenanceFaultSymptomsRequestBuilder } from './AssetMaintenanceFaultSymptomsRequestBuilder';
import { AssetMaintenanceWorkOrderAssetFaultsApi } from './AssetMaintenanceWorkOrderAssetFaultsApi';
import { AssetMaintenanceRequestAssetFaultsApi } from './AssetMaintenanceRequestAssetFaultsApi';
import { AssetMaintenanceAssetTypeFaultTypesApi } from './AssetMaintenanceAssetTypeFaultTypesApi';
import { AssetMaintenanceAssetTypeFaultAreasApi } from './AssetMaintenanceAssetTypeFaultAreasApi';
import { AssetMaintenanceAssetTypeFaultSymptomsApi } from './AssetMaintenanceAssetTypeFaultSymptomsApi';
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
export class AssetMaintenanceFaultSymptomsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceFaultSymptoms<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceFaultSymptomsApi<DeSerializersT> {
    return new AssetMaintenanceFaultSymptomsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link faultSymptomMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_SYMPTOM_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultSymptomMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_SYMPTOM_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_TYPE: OneToManyLink<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_AREA: OneToManyLink<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultSymptom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_SYMPTOM: OneToManyLink<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultSymptomsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>,
      AssetMaintenanceAssetTypeFaultTypesApi<DeSerializersT>,
      AssetMaintenanceAssetTypeFaultAreasApi<DeSerializersT>,
      AssetMaintenanceAssetTypeFaultSymptomsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FAULT_SYMPTOM_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: new OneToManyLink(
        'FaultSymptom_MaintenanceWorkOrderAssetFaults',
        this,
        linkedApis[0]
      ),
      FAULT_SYMPTOM_MAINTENANCE_REQUEST_ASSET_FAULTS: new OneToManyLink(
        'FaultSymptom_MaintenanceRequestAssetFaults',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE_FAULT_TYPE: new OneToManyLink(
        'AssetMaintenanceAssetTypeFaultType',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE_FAULT_AREA: new OneToManyLink(
        'AssetMaintenanceAssetTypeFaultArea',
        this,
        linkedApis[3]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE_FAULT_SYMPTOM: new OneToManyLink(
        'AssetMaintenanceAssetTypeFaultSymptom',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFaultSymptoms;

  requestBuilder(): AssetMaintenanceFaultSymptomsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFaultSymptomsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFaultSymptoms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFaultSymptoms<DeSerializersT>,
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
    typeof AssetMaintenanceFaultSymptoms,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFaultSymptoms,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFaultSymptoms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FAULT_SYMPTOM_ID: OrderableEdmTypeField<
      AssetMaintenanceFaultSymptoms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      AssetMaintenanceFaultSymptoms<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceFaultSymptoms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultSymptomMaintenanceWorkOrderAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_SYMPTOM_MAINTENANCE_WORK_ORDER_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultSymptomMaintenanceRequestAssetFaults} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_SYMPTOM_MAINTENANCE_REQUEST_ASSET_FAULTS: OneToManyLink<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRequestAssetFaultsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_TYPE: OneToManyLink<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_AREA: OneToManyLink<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultAreasApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAssetTypeFaultSymptom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE_FAULT_SYMPTOM: OneToManyLink<
      AssetMaintenanceFaultSymptoms<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypeFaultSymptomsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceFaultSymptoms<DeSerializers>>;
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
         * Static representation of the {@link faultSymptomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAULT_SYMPTOM_ID: fieldBuilder.buildEdmTypeField(
          'FaultSymptomId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
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
        ALL_FIELDS: new AllFields('*', AssetMaintenanceFaultSymptoms)
      };
    }

    return this._schema;
  }
}
