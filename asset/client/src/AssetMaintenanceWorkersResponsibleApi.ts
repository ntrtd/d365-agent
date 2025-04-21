/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkersResponsible } from './AssetMaintenanceWorkersResponsible';
import { AssetMaintenanceWorkersResponsibleRequestBuilder } from './AssetMaintenanceWorkersResponsibleRequestBuilder';
import { AssetMaintenanceJobTypesApi } from './AssetMaintenanceJobTypesApi';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
import { AssetMaintenanceJobTradesApi } from './AssetMaintenanceJobTradesApi';
import { AssetMaintenanceJobVariantsApi } from './AssetMaintenanceJobVariantsApi';
import { AssetMaintenanceAssetsApi } from './AssetMaintenanceAssetsApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceAssetTypesApi } from './AssetMaintenanceAssetTypesApi';
import { AssetMaintenanceWorkersApi } from './AssetMaintenanceWorkersApi';
import { AssetMaintenanceJobGroupsApi } from './AssetMaintenanceJobGroupsApi';
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
export class AssetMaintenanceWorkersResponsibleApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
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
  ): AssetMaintenanceWorkersResponsibleApi<DeSerializersT> {
    return new AssetMaintenanceWorkersResponsibleApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_V_3: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_VARIANT: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_GROUP: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceJobTypesApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>,
      AssetMaintenanceJobTradesApi<DeSerializersT>,
      AssetMaintenanceJobVariantsApi<DeSerializersT>,
      AssetMaintenanceAssetsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceAssetTypesApi<DeSerializersT>,
      AssetMaintenanceWorkersApi<DeSerializersT>,
      AssetMaintenanceJobGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_JOB_TYPE: new OneToOneLink(
        'AssetMaintenanceJobType',
        this,
        linkedApis[0]
      ),
      MAINTENANCE_ASSET_V_3: new OneToOneLink(
        'MaintenanceAssetV3',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_JOB_TRADE: new OneToOneLink(
        'AssetMaintenanceJobTrade',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_JOB_VARIANT: new OneToOneLink(
        'AssetMaintenanceJobVariant',
        this,
        linkedApis[3]
      ),
      ASSET_MAINTENANCE_ASSET: new OneToOneLink(
        'AssetMaintenanceAsset',
        this,
        linkedApis[4]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: new OneToOneLink(
        'AssetMaintenanceFunctionalLocation',
        this,
        linkedApis[5]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE: new OneToOneLink(
        'AssetMaintenanceAssetType',
        this,
        linkedApis[6]
      ),
      ASSET_MAINTENANCE_WORKER: new OneToOneLink(
        'AssetMaintenanceWorker',
        this,
        linkedApis[7]
      ),
      ASSET_MAINTENANCE_JOB_GROUP: new OneToOneLink(
        'AssetMaintenanceJobGroup',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWorkersResponsible;

  requestBuilder(): AssetMaintenanceWorkersResponsibleRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkersResponsibleRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkersResponsible<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkersResponsible<DeSerializersT>,
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
    typeof AssetMaintenanceWorkersResponsible,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkersResponsible,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkersResponsible<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkersResponsible<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkersResponsible<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_GROUP_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkersResponsible<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkersResponsible<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkersResponsible<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkersResponsible<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkersResponsible<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkersResponsible<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_GROUP_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkersResponsible<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_V_3: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_VARIANT: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORKER: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_GROUP: OneToOneLink<
      AssetMaintenanceWorkersResponsible<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceWorkersResponsible<DeSerializers>>;
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
         * Static representation of the {@link maintenanceAssetTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'JobGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'JobVariantId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobTradeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TRADE_ID: fieldBuilder.buildEdmTypeField(
          'JobTradeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'WorkerGroupId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWorkersResponsible)
      };
    }

    return this._schema;
  }
}
