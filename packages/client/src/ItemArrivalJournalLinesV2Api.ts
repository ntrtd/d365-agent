/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemArrivalJournalLinesV2 } from './ItemArrivalJournalLinesV2';
import { ItemArrivalJournalLinesV2RequestBuilder } from './ItemArrivalJournalLinesV2RequestBuilder';
import { WarehousesApi } from './WarehousesApi';
import { ReturnDispositionCodesApi } from './ReturnDispositionCodesApi';
import { ProductSizesApi } from './ProductSizesApi';
import { ItemArrivalJournalHeadersV2Api } from './ItemArrivalJournalHeadersV2Api';
import { VendorsV2Api } from './VendorsV2Api';
import { ProductColorsApi } from './ProductColorsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductVersionsApi } from './ProductVersionsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { LicensePlatesApi } from './LicensePlatesApi';
import { OperationalSitesApi } from './OperationalSitesApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { NoYes } from './NoYes';
import { InventTransType } from './InventTransType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ItemArrivalJournalLinesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ItemArrivalJournalLinesV2<DeSerializersT>, DeSerializersT>
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
  ): ItemArrivalJournalLinesV2Api<DeSerializersT> {
    return new ItemArrivalJournalLinesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link returnDispositionCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_DISPOSITION_CODE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ReturnDispositionCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemArrivalJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADER: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingLicensePlate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_LICENSE_PLATE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingInventorySite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_INVENTORY_SITE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE_LOCATION: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehousesApi<DeSerializersT>,
      ReturnDispositionCodesApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductVersionsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      LicensePlatesApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RECEIVING_WAREHOUSE: new OneToOneLink(
        'ReceivingWarehouse',
        this,
        linkedApis[0]
      ),
      RETURN_DISPOSITION_CODE: new OneToOneLink(
        'ReturnDispositionCode',
        this,
        linkedApis[1]
      ),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[2]),
      ITEM_ARRIVAL_JOURNAL_HEADER: new OneToOneLink(
        'ItemArrivalJournalHeader',
        this,
        linkedApis[3]
      ),
      VENDOR_V_2: new OneToOneLink('VendorV2', this, linkedApis[4]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[5]),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[6]
      ),
      PRODUCT_VERSION: new OneToOneLink('ProductVersion', this, linkedApis[7]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[8]),
      RECEIVING_LICENSE_PLATE: new OneToOneLink(
        'ReceivingLicensePlate',
        this,
        linkedApis[9]
      ),
      RECEIVING_INVENTORY_SITE: new OneToOneLink(
        'ReceivingInventorySite',
        this,
        linkedApis[10]
      ),
      RECEIVING_WAREHOUSE_LOCATION: new OneToOneLink(
        'ReceivingWarehouseLocation',
        this,
        linkedApis[11]
      )
    };
    return this;
  }

  entityConstructor = ItemArrivalJournalLinesV2;

  requestBuilder(): ItemArrivalJournalLinesV2RequestBuilder<DeSerializersT> {
    return new ItemArrivalJournalLinesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemArrivalJournalLinesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemArrivalJournalLinesV2<DeSerializersT>,
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
    typeof ItemArrivalJournalLinesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemArrivalJournalLinesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_ITEM_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ITEM_MOVED_TO_DEFAULT_ITEM_PICKING_WAREHOUSE_LOCATION: EnumField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REFERENCE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RETURN_ORDER: EnumField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIVING_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_QUANTITY: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_DISPOSITION_CODE_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_REFERENCE_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_INVENTORY_SITE_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_REFERENCE_TYPE: EnumField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      InventTransType,
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVING_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_QUARANTINE_ORDER_CREATED_FOR_RECEIVED_ITEM: EnumField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ItemArrivalJournalLinesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link returnDispositionCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETURN_DISPOSITION_CODE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ReturnDispositionCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemArrivalJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADER: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingLicensePlate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_LICENSE_PLATE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingInventorySite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_INVENTORY_SITE: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link receivingWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVING_WAREHOUSE_LOCATION: OneToOneLink<
      ItemArrivalJournalLinesV2<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ItemArrivalJournalLinesV2<DeSerializers>>;
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
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isItemMovedToDefaultItemPickingWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ITEM_MOVED_TO_DEFAULT_ITEM_PICKING_WAREHOUSE_LOCATION:
          fieldBuilder.buildEnumField(
            'IsItemMovedToDefaultItemPickingWarehouseLocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link referenceInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReturnOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RETURN_ORDER: fieldBuilder.buildEnumField(
          'IsReturnOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receivingLicensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceivingLicensePlateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ItemQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnDispositionCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DISPOSITION_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnDispositionCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link receivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionReferenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingInventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingInventorySiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionReferenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_REFERENCE_TYPE: fieldBuilder.buildEnumField(
          'TransactionReferenceType',
          InventTransType,
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ItemCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivingWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isQuarantineOrderCreatedForReceivedItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUARANTINE_ORDER_CREATED_FOR_RECEIVED_ITEM:
          fieldBuilder.buildEnumField(
            'IsQuarantineOrderCreatedForReceivedItem',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemArrivalJournalLinesV2)
      };
    }

    return this._schema;
  }
}
