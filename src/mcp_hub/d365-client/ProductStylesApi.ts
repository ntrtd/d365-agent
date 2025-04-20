/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductStyles } from './ProductStyles';
import { ProductStylesRequestBuilder } from './ProductStylesRequestBuilder';
import { RouteCardProductionJournalEntriesApi } from './RouteCardProductionJournalEntriesApi';
import { ProductAllocationLinesApi } from './ProductAllocationLinesApi';
import { ReleasedProductVariantExternalCodesApi } from './ReleasedProductVariantExternalCodesApi';
import { ProductSpecificOrderSettingsV3Api } from './ProductSpecificOrderSettingsV3Api';
import { BundleSalesOrderConfirmationBundleParentLinesApi } from './BundleSalesOrderConfirmationBundleParentLinesApi';
import { CycleCountingWarehouseWorkLinesV2Api } from './CycleCountingWarehouseWorkLinesV2Api';
import { ProductSpecificOrderSettingsV2Api } from './ProductSpecificOrderSettingsV2Api';
import { ItemArrivalJournalLinesV2Api } from './ItemArrivalJournalLinesV2Api';
import { JobCardProductionJournalEntriesApi } from './JobCardProductionJournalEntriesApi';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { ProductMasterStylesApi } from './ProductMasterStylesApi';
import { BundleSalesInvoiceLinesApi } from './BundleSalesInvoiceLinesApi';
import { CatchWeightTagsApi } from './CatchWeightTagsApi';
import { InventoryTagCountingJournalLinesApi } from './InventoryTagCountingJournalLinesApi';
import { ProductionPickingListJournalEntriesApi } from './ProductionPickingListJournalEntriesApi';
import { BillOfMaterialsVersionsV3Api } from './BillOfMaterialsVersionsV3Api';
import { ProductStyleGroupLinesApi } from './ProductStyleGroupLinesApi';
import { ProductBarcodesApi } from './ProductBarcodesApi';
import { BundleSalesInvoiceBundleParentLinesApi } from './BundleSalesInvoiceBundleParentLinesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { ProductBarcodeAssociationsApi } from './ProductBarcodeAssociationsApi';
import { MonthlyCostStatementEntriesApi } from './MonthlyCostStatementEntriesApi';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import { CdsReleasedDistinctProductsApi } from './CdsReleasedDistinctProductsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ReleasedEngineeringProductVersionsApi } from './ReleasedEngineeringProductVersionsApi';
import { AssetMaintenanceReleasedProductsApi } from './AssetMaintenanceReleasedProductsApi';
import { AssetMaintenanceWorkOrderLineProductJournalsApi } from './AssetMaintenanceWorkOrderLineProductJournalsApi';
import { FormulaVersionsApi } from './FormulaVersionsApi';
import { CycleCountingWarehouseWorkLinesV3Api } from './CycleCountingWarehouseWorkLinesV3Api';
import { BundleSalesOrderConfirmationLinesApi } from './BundleSalesOrderConfirmationLinesApi';
import { ProductBarcodesV3Api } from './ProductBarcodesV3Api';
import { BillOfMaterialsVersionsV2Api } from './BillOfMaterialsVersionsV2Api';
import { OrderCommittedLicensePlateReservationsApi } from './OrderCommittedLicensePlateReservationsApi';
import { DvReleasedDistinctProductsApi } from './DvReleasedDistinctProductsApi';
import { BillOfMaterialsVersionsV4Api } from './BillOfMaterialsVersionsV4Api';
import { ProductAllocationLinesV2Api } from './ProductAllocationLinesV2Api';
import { CycleCountingWarehouseWorkLinesApi } from './CycleCountingWarehouseWorkLinesApi';
import { ReportAsFinishedProductionJournalEntriesApi } from './ReportAsFinishedProductionJournalEntriesApi';
import { RebateAndDeductionsAgreementDateSetupCriterionItemsApi } from './RebateAndDeductionsAgreementDateSetupCriterionItemsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductStylesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductStyles<DeSerializersT>, DeSerializersT>
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
  ): ProductStylesApi<DeSerializersT> {
    return new ProductStylesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAllocationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ALLOCATION_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductAllocationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantExternalCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantExternalCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterStyles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_STYLES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductMasterStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link catchWeightTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATCH_WEIGHT_TAGS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      CatchWeightTagsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTagCountingJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TAG_COUNTING_JOURNAL_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      InventoryTagCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_3: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productStyleGroupLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductBarcodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductBarcodeAssociationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link costMontlyStatementEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_MONTLY_STATEMENT_ENTRIES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      MonthlyCostStatementEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsProductStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_PRODUCT_STYLE: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_RELEASED_DISTINCT_PRODUCTS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      CdsReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedEngineeringProductVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSIONS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetReleasedProductsAlternativeProductStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_RELEASED_PRODUCTS_ALTERNATIVE_PRODUCT_STYLE: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderLineProductConsumptionLinesProductStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_PRODUCT_STYLE: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link formulaVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORMULA_VERSIONS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      FormulaVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_3: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductBarcodesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orderCommittedLicensePlateReservations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_COMMITTED_LICENSE_PLATE_RESERVATIONS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      OrderCommittedLicensePlateReservationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_DISTINCT_PRODUCTS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      DvReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_4: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAllocationLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ALLOCATION_LINES_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductAllocationLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaderDateSetupCriterionItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER_DATE_SETUP_CRITERION_ITEMS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupCriterionItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantExternalCodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantExternalCodesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RouteCardProductionJournalEntriesApi<DeSerializersT>,
      ProductAllocationLinesApi<DeSerializersT>,
      ReleasedProductVariantExternalCodesApi<DeSerializersT>,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>,
      ItemArrivalJournalLinesV2Api<DeSerializersT>,
      JobCardProductionJournalEntriesApi<DeSerializersT>,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      ProductMasterStylesApi<DeSerializersT>,
      BundleSalesInvoiceLinesApi<DeSerializersT>,
      CatchWeightTagsApi<DeSerializersT>,
      InventoryTagCountingJournalLinesApi<DeSerializersT>,
      ProductionPickingListJournalEntriesApi<DeSerializersT>,
      BillOfMaterialsVersionsV3Api<DeSerializersT>,
      ProductStyleGroupLinesApi<DeSerializersT>,
      ProductBarcodesApi<DeSerializersT>,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      ProductBarcodeAssociationsApi<DeSerializersT>,
      MonthlyCostStatementEntriesApi<DeSerializersT>,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>,
      CdsReleasedDistinctProductsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>,
      FormulaVersionsApi<DeSerializersT>,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>,
      ProductBarcodesV3Api<DeSerializersT>,
      BillOfMaterialsVersionsV2Api<DeSerializersT>,
      OrderCommittedLicensePlateReservationsApi<DeSerializersT>,
      DvReleasedDistinctProductsApi<DeSerializersT>,
      BillOfMaterialsVersionsV4Api<DeSerializersT>,
      ProductAllocationLinesV2Api<DeSerializersT>,
      CycleCountingWarehouseWorkLinesApi<DeSerializersT>,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>,
      RebateAndDeductionsAgreementDateSetupCriterionItemsApi<DeSerializersT>,
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
      RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES: new OneToManyLink(
        'ReleasedProductVariantExternalCodes',
        this,
        linkedApis[2]
      ),
      PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: new OneToManyLink(
        'ProductSpecificOrderSettingsV3',
        this,
        linkedApis[3]
      ),
      BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationBundleParentLines',
        this,
        linkedApis[4]
      ),
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: new OneToManyLink(
        'CycleCountingWarehouseWorkLinesV2',
        this,
        linkedApis[5]
      ),
      PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: new OneToManyLink(
        'ProductSpecificOrderSettingsV2',
        this,
        linkedApis[6]
      ),
      ITEM_ARRIVAL_JOURNAL_LINES_V_2: new OneToManyLink(
        'ItemArrivalJournalLinesV2',
        this,
        linkedApis[7]
      ),
      JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'JobCardProductionJournalEntries',
        this,
        linkedApis[8]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[9]
      ),
      PRODUCT_MASTER_STYLES: new OneToManyLink(
        'ProductMasterStyles',
        this,
        linkedApis[10]
      ),
      BUNDLE_SALES_INVOICE_LINES: new OneToManyLink(
        'BundleSalesInvoiceLines',
        this,
        linkedApis[11]
      ),
      CATCH_WEIGHT_TAGS: new OneToManyLink(
        'CatchWeightTags',
        this,
        linkedApis[12]
      ),
      INVENTORY_TAG_COUNTING_JOURNAL_LINES: new OneToManyLink(
        'InventoryTagCountingJournalLines',
        this,
        linkedApis[13]
      ),
      PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: new OneToManyLink(
        'ProductionPickingListJournalEntries',
        this,
        linkedApis[14]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_3: new OneToManyLink(
        'BillOfMaterialsVersionsV3',
        this,
        linkedApis[15]
      ),
      PRODUCT_STYLE_GROUP_LINES: new OneToManyLink(
        'ProductStyleGroupLines',
        this,
        linkedApis[16]
      ),
      PRODUCT_BARCODES: new OneToManyLink(
        'ProductBarcodes',
        this,
        linkedApis[17]
      ),
      BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesInvoiceBundleParentLines',
        this,
        linkedApis[18]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[19]
      ),
      PRODUCT_BARCODES_V_2: new OneToManyLink(
        'ProductBarcodesV2',
        this,
        linkedApis[20]
      ),
      COST_MONTLY_STATEMENT_ENTRIES: new OneToManyLink(
        'CostMontlyStatementEntries',
        this,
        linkedApis[21]
      ),
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_PRODUCT_STYLE: new OneToManyLink(
        'MaintenanceAssetBillOfMaterials_ProductStyle',
        this,
        linkedApis[22]
      ),
      CDS_RELEASED_DISTINCT_PRODUCTS: new OneToManyLink(
        'CDSReleasedDistinctProducts',
        this,
        linkedApis[23]
      ),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[24]
      ),
      RELEASED_ENGINEERING_PRODUCT_VERSIONS: new OneToManyLink(
        'ReleasedEngineeringProductVersions',
        this,
        linkedApis[25]
      ),
      ENT_ASSET_RELEASED_PRODUCTS_ALTERNATIVE_PRODUCT_STYLE: new OneToManyLink(
        'EntAssetReleasedProducts_AlternativeProductStyle',
        this,
        linkedApis[26]
      ),
      WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_PRODUCT_STYLE:
        new OneToManyLink(
          'WorkOrderLineProductConsumptionLines_ProductStyle',
          this,
          linkedApis[27]
        ),
      FORMULA_VERSIONS: new OneToManyLink(
        'FormulaVersions',
        this,
        linkedApis[28]
      ),
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: new OneToManyLink(
        'CycleCountingWarehouseWorkLinesV3',
        this,
        linkedApis[29]
      ),
      BUNDLE_SALES_ORDER_CONFIRMATION_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationLines',
        this,
        linkedApis[30]
      ),
      PRODUCT_BARCODES_V_3: new OneToManyLink(
        'ProductBarcodesV3',
        this,
        linkedApis[31]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_2: new OneToManyLink(
        'BillOfMaterialsVersionsV2',
        this,
        linkedApis[32]
      ),
      ORDER_COMMITTED_LICENSE_PLATE_RESERVATIONS: new OneToManyLink(
        'OrderCommittedLicensePlateReservations',
        this,
        linkedApis[33]
      ),
      DV_RELEASED_DISTINCT_PRODUCTS: new OneToManyLink(
        'DVReleasedDistinctProducts',
        this,
        linkedApis[34]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_4: new OneToManyLink(
        'BillOfMaterialsVersionsV4',
        this,
        linkedApis[35]
      ),
      PRODUCT_ALLOCATION_LINES_V_2: new OneToManyLink(
        'ProductAllocationLinesV2',
        this,
        linkedApis[36]
      ),
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES: new OneToManyLink(
        'CycleCountingWarehouseWorkLines',
        this,
        linkedApis[37]
      ),
      REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'ReportAsFinishedProductionJournalEntries',
        this,
        linkedApis[38]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER_DATE_SETUP_CRITERION_ITEMS:
        new OneToManyLink(
          'RebateAndDeductionsAgreementHeaderDateSetupCriterionItems',
          this,
          linkedApis[39]
        ),
      RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES_V_2: new OneToManyLink(
        'ReleasedProductVariantExternalCodesV2',
        this,
        linkedApis[40]
      )
    };
    return this;
  }

  entityConstructor = ProductStyles;

  requestBuilder(): ProductStylesRequestBuilder<DeSerializersT> {
    return new ProductStylesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductStyles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductStyles<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductStyles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductStyles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductStyles, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STYLE_ID: OrderableEdmTypeField<
      ProductStyles<DeSerializers>,
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
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAllocationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ALLOCATION_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductAllocationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantExternalCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantExternalCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_3: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_BUNDLE_PARENT_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificOrderSettingsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_ORDER_SETTINGS_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductSpecificOrderSettingsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterStyles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_STYLES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductMasterStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link catchWeightTags} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CATCH_WEIGHT_TAGS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      CatchWeightTagsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryTagCountingJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TAG_COUNTING_JOURNAL_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      InventoryTagCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_3: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productStyleGroupLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductBarcodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductBarcodeAssociationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link costMontlyStatementEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_MONTLY_STATEMENT_ENTRIES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      MonthlyCostStatementEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsProductStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_PRODUCT_STYLE: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_RELEASED_DISTINCT_PRODUCTS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      CdsReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedEngineeringProductVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSIONS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link entAssetReleasedProductsAlternativeProductStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENT_ASSET_RELEASED_PRODUCTS_ALTERNATIVE_PRODUCT_STYLE: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderLineProductConsumptionLinesProductStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_PRODUCT_STYLE: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link formulaVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORMULA_VERSIONS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      FormulaVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_3: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductBarcodesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orderCommittedLicensePlateReservations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_COMMITTED_LICENSE_PLATE_RESERVATIONS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      OrderCommittedLicensePlateReservationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dvReleasedDistinctProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_DISTINCT_PRODUCTS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      DvReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_4: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productAllocationLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ALLOCATION_LINES_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ProductAllocationLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaderDateSetupCriterionItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADER_DATE_SETUP_CRITERION_ITEMS: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionsAgreementDateSetupCriterionItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantExternalCodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES_V_2: OneToManyLink<
      ProductStyles<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantExternalCodesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductStyles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link styleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE_ID: fieldBuilder.buildEdmTypeField(
          'StyleId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductStyles)
      };
    }

    return this._schema;
  }
}
