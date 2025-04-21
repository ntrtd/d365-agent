/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceStopObjects } from './AssetMaintenanceStopObjects';
import { AssetMaintenanceStopObjectsRequestBuilder } from './AssetMaintenanceStopObjectsRequestBuilder';
import { AssetMaintenanceAssetsApi } from './AssetMaintenanceAssetsApi';
import { AssetMaintenanceStopsApi } from './AssetMaintenanceStopsApi';
import { AssetMaintenanceAssetsV3Api } from './AssetMaintenanceAssetsV3Api';
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
export class AssetMaintenanceStopObjectsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceStopObjects<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceStopObjectsApi<DeSerializersT> {
    return new AssetMaintenanceStopObjectsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceStopObjects<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceStop} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_STOP: OneToOneLink<
      AssetMaintenanceStopObjects<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceStopsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_V_3: OneToOneLink<
      AssetMaintenanceStopObjects<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceAssetsApi<DeSerializersT>,
      AssetMaintenanceStopsApi<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_ASSET: new OneToOneLink(
        'AssetMaintenanceAsset',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_STOP: new OneToOneLink(
        'AssetMaintenanceStop',
        this,
        linkedApis[1]
      ),
      MAINTENANCE_ASSET_V_3: new OneToOneLink(
        'MaintenanceAssetV3',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceStopObjects;

  requestBuilder(): AssetMaintenanceStopObjectsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceStopObjectsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceStopObjects<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceStopObjects<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceStopObjects<DeSerializersT>,
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
    typeof AssetMaintenanceStopObjects,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceStopObjects,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceStopObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_STOP_ID: OrderableEdmTypeField<
      AssetMaintenanceStopObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceStopObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceStopObjects<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceStop} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_STOP: OneToOneLink<
      AssetMaintenanceStopObjects<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceStopsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link maintenanceAssetV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_V_3: OneToOneLink<
      AssetMaintenanceStopObjects<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceStopObjects<DeSerializers>>;
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
         * Static representation of the {@link maintenanceStopId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_STOP_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceStopId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceStopObjects)
      };
    }

    return this._schema;
  }
}
