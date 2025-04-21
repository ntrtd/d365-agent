/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceAssetBillOfMaterials } from './AssetMaintenanceAssetBillOfMaterials';
import { AssetMaintenanceAssetBillOfMaterialsRequestBuilder } from './AssetMaintenanceAssetBillOfMaterialsRequestBuilder';
import { AssetMaintenanceAssetsApi } from './AssetMaintenanceAssetsApi';
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
export class AssetMaintenanceAssetBillOfMaterialsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceAssetBillOfMaterials<DeSerializersT>,
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
  ): AssetMaintenanceAssetBillOfMaterialsApi<DeSerializersT> {
    return new AssetMaintenanceAssetBillOfMaterialsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterials<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AssetMaintenanceAssetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_ASSET: new OneToOneLink(
        'AssetMaintenanceAsset',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceAssetBillOfMaterials;

  requestBuilder(): AssetMaintenanceAssetBillOfMaterialsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceAssetBillOfMaterialsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceAssetBillOfMaterials<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceAssetBillOfMaterials<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceAssetBillOfMaterials<DeSerializersT>,
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
    typeof AssetMaintenanceAssetBillOfMaterials,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceAssetBillOfMaterials,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BILL_OF_MATERIAL_QUANTITY: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_NUMBER_REPLACED_BY: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVENTORY_STYLE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_VERSION_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SERIAL_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_VERSION_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_COLOR_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SIZE_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_BATCH_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_CONFIG_ID: OrderableEdmTypeField<
      AssetMaintenanceAssetBillOfMaterials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET: OneToOneLink<
      AssetMaintenanceAssetBillOfMaterials<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceAssetBillOfMaterials<DeSerializers>>;
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
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link billOfMaterialQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lineNumberReplacedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER_REPLACED_BY: fieldBuilder.buildEdmTypeField(
          'LineNumberReplacedBy',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link inventoryStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'InventVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventorySerialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'InventorySerialId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'InventoryVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'InventoryColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventorySizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link inventoryBatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_BATCH_ID: fieldBuilder.buildEdmTypeField(
          'InventoryBatchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryConfigId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'InventoryConfigId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceAssetBillOfMaterials)
      };
    }

    return this._schema;
  }
}
