/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemBatches } from './ItemBatches';
import { ItemBatchesRequestBuilder } from './ItemBatchesRequestBuilder';
import { RouteCardProductionJournalEntriesApi } from './RouteCardProductionJournalEntriesApi';
import { ItemBatchAttributeValuesV2Api } from './ItemBatchAttributeValuesV2Api';
import { JobCardProductionJournalEntriesApi } from './JobCardProductionJournalEntriesApi';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { CatchWeightTagsApi } from './CatchWeightTagsApi';
import { ProductionPickingListJournalEntriesApi } from './ProductionPickingListJournalEntriesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ReportAsFinishedProductionJournalEntriesApi } from './ReportAsFinishedProductionJournalEntriesApi';
import { NoYes } from './NoYes';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ItemBatchesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ItemBatches<DeSerializersT>, DeSerializersT>
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
  ): ItemBatchesApi<DeSerializersT> {
    return new ItemBatchesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemBatchAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH_ATTRIBUTE_VALUES: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      ItemBatchAttributeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link catchWeightTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATCH_WEIGHT_TAGS: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      CatchWeightTagsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsItemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_ITEM_BATCH: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link primaryVendorOriginCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_VENDOR_ORIGIN_COUNTRY_REGION: OneToOneLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RouteCardProductionJournalEntriesApi<DeSerializersT>,
      ItemBatchAttributeValuesV2Api<DeSerializersT>,
      JobCardProductionJournalEntriesApi<DeSerializersT>,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      CatchWeightTagsApi<DeSerializersT>,
      ProductionPickingListJournalEntriesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>,
      AddressCountryRegionsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'RouteCardProductionJournalEntries',
        this,
        linkedApis[0]
      ),
      ITEM_BATCH_ATTRIBUTE_VALUES: new OneToManyLink(
        'ItemBatchAttributeValues',
        this,
        linkedApis[1]
      ),
      JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'JobCardProductionJournalEntries',
        this,
        linkedApis[2]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[3]
      ),
      CATCH_WEIGHT_TAGS: new OneToManyLink(
        'CatchWeightTags',
        this,
        linkedApis[4]
      ),
      PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: new OneToManyLink(
        'ProductionPickingListJournalEntries',
        this,
        linkedApis[5]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[6]
      ),
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_ITEM_BATCH: new OneToManyLink(
        'MaintenanceAssetBillOfMaterials_ItemBatch',
        this,
        linkedApis[7]
      ),
      PRIMARY_VENDOR_ORIGIN_COUNTRY_REGION: new OneToOneLink(
        'PrimaryVendorOriginCountryRegion',
        this,
        linkedApis[8]
      ),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[9]
      ),
      REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'ReportAsFinishedProductionJournalEntries',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = ItemBatches;

  requestBuilder(): ItemBatchesRequestBuilder<DeSerializersT> {
    return new ItemBatchesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemBatches<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ItemBatches<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ItemBatches<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ItemBatches, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ItemBatches, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BATCH_NUMBER: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_VENDOR_ORIGIN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEST_BEFORE_DATE: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BATCH_DISPOSITION_CODE: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_BATCH_NUMBER: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_BATCH_DATE: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MANUFACTURING_DATE: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_MANUFACTURING_DATE_VENDOR_BATCH_DATE: EnumField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BATCH_DESCRIPTION: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_BATCH_ATTRIBUTES_INHERITED: EnumField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VENDOR_EXPIRATION_DATE: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_EXPIRATION_DATE_VENDOR_EXPIRATION_DATE: EnumField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BATCH_EXPIRATION_DATE: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ARE_SHELF_LIFE_DATES_INHERITED: EnumField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHELF_LIFE_ADVICE_DATE: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SECONDARY_VENDOR_ORIGIN_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOST_RECENT_TEST_DATE: OrderableEdmTypeField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_BATCH_CONSOLIDATED: EnumField<
      ItemBatches<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemBatchAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH_ATTRIBUTE_VALUES: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      ItemBatchAttributeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link catchWeightTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATCH_WEIGHT_TAGS: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      CatchWeightTagsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsItemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_ITEM_BATCH: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link primaryVendorOriginCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_VENDOR_ORIGIN_COUNTRY_REGION: OneToOneLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ItemBatches<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ItemBatches<DeSerializers>>;
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link batchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'BatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link primaryVendorOriginCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_VENDOR_ORIGIN_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryVendorOriginCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bestBeforeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEST_BEFORE_DATE: fieldBuilder.buildEdmTypeField(
          'BestBeforeDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link batchDispositionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_DISPOSITION_CODE: fieldBuilder.buildEdmTypeField(
          'BatchDispositionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorBatchDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_BATCH_DATE: fieldBuilder.buildEdmTypeField(
          'VendorBatchDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link manufacturingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURING_DATE: fieldBuilder.buildEdmTypeField(
          'ManufacturingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isManufacturingDateVendorBatchDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MANUFACTURING_DATE_VENDOR_BATCH_DATE: fieldBuilder.buildEnumField(
          'IsManufacturingDateVendorBatchDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link batchDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BatchDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areBatchAttributesInherited} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_BATCH_ATTRIBUTES_INHERITED: fieldBuilder.buildEnumField(
          'AreBatchAttributesInherited',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendorExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'VendorExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isExpirationDateVendorExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPIRATION_DATE_VENDOR_EXPIRATION_DATE: fieldBuilder.buildEnumField(
          'IsExpirationDateVendorExpirationDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link batchExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'BatchExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link areShelfLifeDatesInherited} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_SHELF_LIFE_DATES_INHERITED: fieldBuilder.buildEnumField(
          'AreShelfLifeDatesInherited',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shelfLifeAdviceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_LIFE_ADVICE_DATE: fieldBuilder.buildEdmTypeField(
          'ShelfLifeAdviceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link secondaryVendorOriginCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECONDARY_VENDOR_ORIGIN_COUNTRY_REGION_ID:
          fieldBuilder.buildEdmTypeField(
            'SecondaryVendorOriginCountryRegionId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link mostRecentTestDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOST_RECENT_TEST_DATE: fieldBuilder.buildEdmTypeField(
          'MostRecentTestDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isBatchConsolidated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_CONSOLIDATED: fieldBuilder.buildEnumField(
          'IsBatchConsolidated',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemBatches)
      };
    }

    return this._schema;
  }
}
