/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductVersions } from './ProductVersions';
import { ProductVersionsRequestBuilder } from './ProductVersionsRequestBuilder';
import { RouteCardProductionJournalEntriesApi } from './RouteCardProductionJournalEntriesApi';
import { ProductAllocationLinesApi } from './ProductAllocationLinesApi';
import { ProductSpecificOrderSettingsV3Api } from './ProductSpecificOrderSettingsV3Api';
import { BundleSalesOrderConfirmationBundleParentLinesApi } from './BundleSalesOrderConfirmationBundleParentLinesApi';
import { CycleCountingWarehouseWorkLinesV2Api } from './CycleCountingWarehouseWorkLinesV2Api';
import { ItemArrivalJournalLinesV2Api } from './ItemArrivalJournalLinesV2Api';
import { JobCardProductionJournalEntriesApi } from './JobCardProductionJournalEntriesApi';
import { BundleSalesInvoiceLinesApi } from './BundleSalesInvoiceLinesApi';
import { CatchWeightTagsApi } from './CatchWeightTagsApi';
import { InventoryTagCountingJournalLinesApi } from './InventoryTagCountingJournalLinesApi';
import { ProductionPickingListJournalEntriesApi } from './ProductionPickingListJournalEntriesApi';
import { ProductMasterVersionsApi } from './ProductMasterVersionsApi';
import { BillOfMaterialsVersionsV3Api } from './BillOfMaterialsVersionsV3Api';
import { BundleSalesInvoiceBundleParentLinesApi } from './BundleSalesInvoiceBundleParentLinesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { ProductBarcodeAssociationsApi } from './ProductBarcodeAssociationsApi';
import { CdsReleasedDistinctProductsApi } from './CdsReleasedDistinctProductsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { AssetMaintenanceReleasedProductsApi } from './AssetMaintenanceReleasedProductsApi';
import { CycleCountingWarehouseWorkLinesV3Api } from './CycleCountingWarehouseWorkLinesV3Api';
import { BundleSalesOrderConfirmationLinesApi } from './BundleSalesOrderConfirmationLinesApi';
import { ProductBarcodesV3Api } from './ProductBarcodesV3Api';
import { DvReleasedDistinctProductsApi } from './DvReleasedDistinctProductsApi';
import { BillOfMaterialsVersionsV4Api } from './BillOfMaterialsVersionsV4Api';
import { FormulaVersionsV2Api } from './FormulaVersionsV2Api';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
import { ProductAllocationLinesV2Api } from './ProductAllocationLinesV2Api';
import { ReportAsFinishedProductionJournalEntriesApi } from './ReportAsFinishedProductionJournalEntriesApi';
import { ReleasedProductVariantExternalCodesV2Api } from './ReleasedProductVariantExternalCodesV2Api';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductVersionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductVersions<DeSerializersT>, DeSerializersT>
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
  ): ProductVersionsApi<DeSerializersT> {
    return new ProductVersionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAllocationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ALLOCATION_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductAllocationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link catchWeightTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATCH_WEIGHT_TAGS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      CatchWeightTagsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTagCountingJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TAG_COUNTING_JOURNAL_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      InventoryTagCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_VERSIONS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductMasterVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_3: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductBarcodeAssociationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_RELEASED_DISTINCT_PRODUCTS: OneToOneLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      CdsReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetReleasedProductsAlternativeProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_RELEASED_PRODUCTS_ALTERNATIVE_PRODUCT_VERSION: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetReleasedProductsDefaultProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_RELEASED_PRODUCTS_DEFAULT_PRODUCT_VERSION: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_3: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductBarcodesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dvReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_DISTINCT_PRODUCTS: OneToOneLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      DvReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_4: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link formulaVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORMULA_VERSIONS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      FormulaVersionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link currentVersionReplacingEngineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENT_VERSION_REPLACING_ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link newVersionIntroducingEngineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NEW_VERSION_INTRODUCING_ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAllocationLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ALLOCATION_LINES_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductAllocationLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantExternalCodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantExternalCodesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RouteCardProductionJournalEntriesApi<DeSerializersT>,
      ProductAllocationLinesApi<DeSerializersT>,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>,
      ItemArrivalJournalLinesV2Api<DeSerializersT>,
      JobCardProductionJournalEntriesApi<DeSerializersT>,
      BundleSalesInvoiceLinesApi<DeSerializersT>,
      CatchWeightTagsApi<DeSerializersT>,
      InventoryTagCountingJournalLinesApi<DeSerializersT>,
      ProductionPickingListJournalEntriesApi<DeSerializersT>,
      ProductMasterVersionsApi<DeSerializersT>,
      BillOfMaterialsVersionsV3Api<DeSerializersT>,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      ProductBarcodeAssociationsApi<DeSerializersT>,
      CdsReleasedDistinctProductsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>,
      ProductBarcodesV3Api<DeSerializersT>,
      DvReleasedDistinctProductsApi<DeSerializersT>,
      BillOfMaterialsVersionsV4Api<DeSerializersT>,
      FormulaVersionsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>,
      ProductAllocationLinesV2Api<DeSerializersT>,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>,
      ReleasedProductVariantExternalCodesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'RouteCardProductionJournalEntries',
        this,
        linkedApis[0]
      ),
      PRODUCT_ALLOCATION_LINES: new OneToManyLink(
        'ProductAllocationLines',
        this,
        linkedApis[1]
      ),
      PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: new OneToManyLink(
        'ProductSpecificOrderSettingsV3',
        this,
        linkedApis[2]
      ),
      BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationBundleParentLines',
        this,
        linkedApis[3]
      ),
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: new OneToManyLink(
        'CycleCountingWarehouseWorkLinesV2',
        this,
        linkedApis[4]
      ),
      ITEM_ARRIVAL_JOURNAL_LINES_V_2: new OneToManyLink(
        'ItemArrivalJournalLinesV2',
        this,
        linkedApis[5]
      ),
      JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'JobCardProductionJournalEntries',
        this,
        linkedApis[6]
      ),
      BUNDLE_SALES_INVOICE_LINES: new OneToManyLink(
        'BundleSalesInvoiceLines',
        this,
        linkedApis[7]
      ),
      CATCH_WEIGHT_TAGS: new OneToManyLink(
        'CatchWeightTags',
        this,
        linkedApis[8]
      ),
      INVENTORY_TAG_COUNTING_JOURNAL_LINES: new OneToManyLink(
        'InventoryTagCountingJournalLines',
        this,
        linkedApis[9]
      ),
      PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: new OneToManyLink(
        'ProductionPickingListJournalEntries',
        this,
        linkedApis[10]
      ),
      PRODUCT_MASTER_VERSIONS: new OneToManyLink(
        'ProductMasterVersions',
        this,
        linkedApis[11]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_3: new OneToManyLink(
        'BillOfMaterialsVersionsV3',
        this,
        linkedApis[12]
      ),
      BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesInvoiceBundleParentLines',
        this,
        linkedApis[13]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[14]
      ),
      PRODUCT_BARCODES_V_2: new OneToManyLink(
        'ProductBarcodesV2',
        this,
        linkedApis[15]
      ),
      CDS_RELEASED_DISTINCT_PRODUCTS: new OneToOneLink(
        'CDSReleasedDistinctProducts',
        this,
        linkedApis[16]
      ),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[17]
      ),
      ENT_ASSET_RELEASED_PRODUCTS_ALTERNATIVE_PRODUCT_VERSION:
        new OneToManyLink(
          'EntAssetReleasedProducts_AlternativeProductVersion',
          this,
          linkedApis[18]
        ),
      ENT_ASSET_RELEASED_PRODUCTS_DEFAULT_PRODUCT_VERSION: new OneToManyLink(
        'EntAssetReleasedProducts_DefaultProductVersion',
        this,
        linkedApis[19]
      ),
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: new OneToManyLink(
        'CycleCountingWarehouseWorkLinesV3',
        this,
        linkedApis[20]
      ),
      BUNDLE_SALES_ORDER_CONFIRMATION_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationLines',
        this,
        linkedApis[21]
      ),
      PRODUCT_BARCODES_V_3: new OneToManyLink(
        'ProductBarcodesV3',
        this,
        linkedApis[22]
      ),
      DV_RELEASED_DISTINCT_PRODUCTS: new OneToOneLink(
        'DVReleasedDistinctProducts',
        this,
        linkedApis[23]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_4: new OneToManyLink(
        'BillOfMaterialsVersionsV4',
        this,
        linkedApis[24]
      ),
      FORMULA_VERSIONS: new OneToManyLink(
        'FormulaVersions',
        this,
        linkedApis[25]
      ),
      CURRENT_VERSION_REPLACING_ENGINEERING_CHANGE_ORDER_PRODUCTS:
        new OneToManyLink(
          'CurrentVersionReplacingEngineeringChangeOrderProducts',
          this,
          linkedApis[26]
        ),
      NEW_VERSION_INTRODUCING_ENGINEERING_CHANGE_ORDER_PRODUCTS:
        new OneToManyLink(
          'NewVersionIntroducingEngineeringChangeOrderProducts',
          this,
          linkedApis[27]
        ),
      PRODUCT_ALLOCATION_LINES_V_2: new OneToManyLink(
        'ProductAllocationLinesV2',
        this,
        linkedApis[28]
      ),
      REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'ReportAsFinishedProductionJournalEntries',
        this,
        linkedApis[29]
      ),
      RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES_V_2: new OneToManyLink(
        'ReleasedProductVariantExternalCodesV2',
        this,
        linkedApis[30]
      )
    };
    return this;
  }

  entityConstructor = ProductVersions;

  requestBuilder(): ProductVersionsRequestBuilder<DeSerializersT> {
    return new ProductVersionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductVersions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductVersions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductVersions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductVersions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductVersions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VERSION_ID: OrderableEdmTypeField<
      ProductVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAllocationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ALLOCATION_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductAllocationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link catchWeightTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATCH_WEIGHT_TAGS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      CatchWeightTagsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTagCountingJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TAG_COUNTING_JOURNAL_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      InventoryTagCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_VERSIONS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductMasterVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_3: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductBarcodeAssociationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_RELEASED_DISTINCT_PRODUCTS: OneToOneLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      CdsReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetReleasedProductsAlternativeProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_RELEASED_PRODUCTS_ALTERNATIVE_PRODUCT_VERSION: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetReleasedProductsDefaultProductVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_RELEASED_PRODUCTS_DEFAULT_PRODUCT_VERSION: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_3: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductBarcodesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dvReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_DISTINCT_PRODUCTS: OneToOneLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      DvReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_4: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link formulaVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORMULA_VERSIONS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      FormulaVersionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link currentVersionReplacingEngineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENT_VERSION_REPLACING_ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link newVersionIntroducingEngineeringChangeOrderProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NEW_VERSION_INTRODUCING_ENGINEERING_CHANGE_ORDER_PRODUCTS: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAllocationLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ALLOCATION_LINES_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductAllocationLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantExternalCodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES_V_2: OneToManyLink<
      ProductVersions<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantExternalCodesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductVersions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link versionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_ID: fieldBuilder.buildEdmTypeField(
          'VersionId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductVersions)
      };
    }

    return this._schema;
  }
}
