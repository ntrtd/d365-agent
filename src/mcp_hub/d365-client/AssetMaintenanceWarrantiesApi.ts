/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWarranties } from './AssetMaintenanceWarranties';
import { AssetMaintenanceWarrantiesRequestBuilder } from './AssetMaintenanceWarrantiesRequestBuilder';
import { AssetMaintenanceWarrantyLinesApi } from './AssetMaintenanceWarrantyLinesApi';
import { AssetMaintenanceAssetsApi } from './AssetMaintenanceAssetsApi';
import { AssetMaintenanceAssetsV2Api } from './AssetMaintenanceAssetsV2Api';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceWarrantiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceWarranties<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceWarrantiesApi<DeSerializersT> {
    return new AssetMaintenanceWarrantiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWarrantyLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WARRANTY_LINE: OneToManyLink<
      AssetMaintenanceWarranties<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWarrantyLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToManyLink<
      AssetMaintenanceWarranties<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableEntityWarranty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_ENTITY_WARRANTY: OneToManyLink<
      AssetMaintenanceWarranties<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableV3EntityWarranty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_WARRANTY: OneToManyLink<
      AssetMaintenanceWarranties<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceWarrantyLinesApi<DeSerializersT>,
      AssetMaintenanceAssetsApi<DeSerializersT>,
      AssetMaintenanceAssetsV2Api<DeSerializersT>,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_WARRANTY_LINE: new OneToManyLink(
        'AssetMaintenanceWarrantyLine',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_ASSET: new OneToManyLink(
        'AssetMaintenanceAsset',
        this,
        linkedApis[1]
      ),
      ENT_ASSET_OBJECT_TABLE_ENTITY_WARRANTY: new OneToManyLink(
        'EntAssetObjectTableEntity_Warranty',
        this,
        linkedApis[2]
      ),
      ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_WARRANTY: new OneToManyLink(
        'EntAssetObjectTableV3Entity_Warranty',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceWarranties;

  requestBuilder(): AssetMaintenanceWarrantiesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWarrantiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWarranties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWarranties<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWarranties<DeSerializersT>,
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
    typeof AssetMaintenanceWarranties,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWarranties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWarranties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_ID: OrderableEdmTypeField<
      AssetMaintenanceWarranties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetMaintenanceWarranties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWarrantyLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WARRANTY_LINE: OneToManyLink<
      AssetMaintenanceWarranties<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWarrantyLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToManyLink<
      AssetMaintenanceWarranties<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableEntityWarranty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_ENTITY_WARRANTY: OneToManyLink<
      AssetMaintenanceWarranties<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetObjectTableV3EntityWarranty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_OBJECT_TABLE_V_3_ENTITY_WARRANTY: OneToManyLink<
      AssetMaintenanceWarranties<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceWarranties<DeSerializers>>;
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
         * Static representation of the {@link warrantyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_ID: fieldBuilder.buildEdmTypeField(
          'WarrantyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceWarranties)
      };
    }

    return this._schema;
  }
}
