/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportAsFinishedProductionJournalEntries } from './ReportAsFinishedProductionJournalEntries';
import { ReportAsFinishedProductionJournalEntriesRequestBuilder } from './ReportAsFinishedProductionJournalEntriesRequestBuilder';
import { WarehousesApi } from './WarehousesApi';
import { ItemBatchesApi } from './ItemBatchesApi';
import { OperationalSitesApi } from './OperationalSitesApi';
import { ProductSizesApi } from './ProductSizesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductVersionsApi } from './ProductVersionsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductStylesApi } from './ProductStylesApi';
import { ProductionOrderHeadersApi } from './ProductionOrderHeadersApi';
import { PmfProductType } from './PmfProductType';
import { NoYes } from './NoYes';
import { ProdErrorCause } from './ProdErrorCause';
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
export class ReportAsFinishedProductionJournalEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
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
  ): ReportAsFinishedProductionJournalEntriesApi<DeSerializersT> {
    return new ReportAsFinishedProductionJournalEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_SITE: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehousesApi<DeSerializersT>,
      ItemBatchesApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductVersionsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      ProductionOrderHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[0]),
      ITEM_BATCH: new OneToOneLink('ItemBatch', this, linkedApis[1]),
      PRODUCTION_SITE: new OneToOneLink('ProductionSite', this, linkedApis[2]),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[3]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[4]),
      PRODUCT_VERSION: new OneToOneLink('ProductVersion', this, linkedApis[5]),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[6]
      ),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[7]),
      PRODUCTION_ORDER_HEADER: new OneToOneLink(
        'ProductionOrderHeader',
        this,
        linkedApis[8]
      )
    };
    return this;
  }

  entityConstructor = ReportAsFinishedProductionJournalEntries;

  requestBuilder(): ReportAsFinishedProductionJournalEntriesRequestBuilder<DeSerializersT> {
    return new ReportAsFinishedProductionJournalEntriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReportAsFinishedProductionJournalEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReportAsFinishedProductionJournalEntries<DeSerializersT>,
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
    typeof ReportAsFinishedProductionJournalEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReportAsFinishedProductionJournalEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_LINE_NUMBER: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED_DATE_TIME: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCTION_TYPE: EnumField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      PmfProductType,
      true,
      true
    >;
    IS_POSTED: EnumField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_DESCRIPTION: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_NUMBER: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTED_GOOD_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTED_GOOD_INVENTORY_QUANTITY: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_PICKING_LIST_JOURNAL_NUMBER: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTED_ERROR_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_AS_FINISHED_DATE: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_AS_FINISHED_POSTING_ACCEPT_QUANTITY_ERROR: EnumField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_RECEIPT_RETURNED: EnumField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_LAST_REPORT_AS_FINISHED: EnumField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR_CAUSE: EnumField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      ProdErrorCause,
      true,
      true
    >;
    REPORTED_ERROR_INVENTORY_QUANTITY: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REPORT_AS_FINISHED_POSTING_AUTOMATICALLY_POST_PICKING_LIST: EnumField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTED_USER_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ReportAsFinishedProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_SITE: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      ReportAsFinishedProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ReportAsFinishedProductionJournalEntries<DeSerializers>
    >;
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
         * Static representation of the {@link journalLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalLineNumber',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link postedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PostedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_TYPE: fieldBuilder.buildEnumField(
          'ProductionType',
          PmfProductType,
          true
        ),
        /**
         * Static representation of the {@link isPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTED: fieldBuilder.buildEnumField('IsPosted', NoYes, true),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
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
         * Static representation of the {@link journalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JournalDescription',
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
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_NUMBER: fieldBuilder.buildEdmTypeField(
          'VoucherNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportedGoodCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_GOOD_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedGoodCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportedGoodInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_GOOD_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedGoodInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivedInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ReceivedInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionPickingListJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_PICKING_LIST_JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionPickingListJournalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportedErrorCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_ERROR_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedErrorCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
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
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportAsFinishedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_AS_FINISHED_DATE: fieldBuilder.buildEdmTypeField(
          'ReportAsFinishedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willAsFinishedPostingAcceptQuantityError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_AS_FINISHED_POSTING_ACCEPT_QUANTITY_ERROR:
          fieldBuilder.buildEnumField(
            'WillAsFinishedPostingAcceptQuantityError',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isReceiptReturned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECEIPT_RETURNED: fieldBuilder.buildEnumField(
          'IsReceiptReturned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isLastReportAsFinished} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LAST_REPORT_AS_FINISHED: fieldBuilder.buildEnumField(
          'IsLastReportAsFinished',
          NoYes,
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
         * Static representation of the {@link errorCause} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CAUSE: fieldBuilder.buildEnumField(
          'ErrorCause',
          ProdErrorCause,
          true
        ),
        /**
         * Static representation of the {@link reportedErrorInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_ERROR_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedErrorInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willReportAsFinishedPostingAutomaticallyPostPickingList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REPORT_AS_FINISHED_POSTING_AUTOMATICALLY_POST_PICKING_LIST:
          fieldBuilder.buildEnumField(
            'WillReportAsFinishedPostingAutomaticallyPostPickingList',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link postedUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_USER_ID: fieldBuilder.buildEdmTypeField(
          'PostedUserId',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', ReportAsFinishedProductionJournalEntries)
      };
    }

    return this._schema;
  }
}
