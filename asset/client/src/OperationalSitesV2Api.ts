/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OperationalSitesV2 } from './OperationalSitesV2';
import { OperationalSitesV2RequestBuilder } from './OperationalSitesV2RequestBuilder';
import { OpenSalesPriceJournalLinesV2Api } from './OpenSalesPriceJournalLinesV2Api';
import { GupOpenTradeAgreementJournalLinesApi } from './GupOpenTradeAgreementJournalLinesApi';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { BundleSalesInvoiceLinesApi } from './BundleSalesInvoiceLinesApi';
import { BranchesApi } from './BranchesApi';
import { FiscalEstablishmentsApi } from './FiscalEstablishmentsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { BundleSalesInvoiceBundleParentLinesApi } from './BundleSalesInvoiceBundleParentLinesApi';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import { AssetMaintenanceWorkOrderLineProductJournalsApi } from './AssetMaintenanceWorkOrderLineProductJournalsApi';
import { BundleSalesOrderConfirmationLinesApi } from './BundleSalesOrderConfirmationLinesApi';
import { OpenPurchasePriceJournalLinesV2Api } from './OpenPurchasePriceJournalLinesV2Api';
import { Timezone } from './Timezone';
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
export class OperationalSitesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OperationalSitesV2<DeSerializersT>, DeSerializersT>
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
  ): OperationalSitesV2Api<DeSerializersT> {
    return new OperationalSitesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link gupOpenTradeAgreementJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUP_OPEN_TRADE_AGREEMENT_JOURNAL_LINE: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      GupOpenTradeAgreementJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxBranch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_BRANCH: OneToOneLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      BranchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalEstablishment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_ESTABLISHMENT: OneToOneLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      FiscalEstablishmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSION: OneToOneLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsOperationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_OPERATIONAL_SITE: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderLineProductConsumptionLinesStorageProductSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_STORAGE_PRODUCT_SITE: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>,
      GupOpenTradeAgreementJournalLinesApi<DeSerializersT>,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      BundleSalesInvoiceLinesApi<DeSerializersT>,
      BranchesApi<DeSerializersT>,
      FiscalEstablishmentsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>,
      OpenPurchasePriceJournalLinesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OPEN_SALES_PRICE_JOURNAL_LINE_V_2: new OneToManyLink(
        'OpenSalesPriceJournalLineV2',
        this,
        linkedApis[0]
      ),
      GUP_OPEN_TRADE_AGREEMENT_JOURNAL_LINE: new OneToManyLink(
        'GUPOpenTradeAgreementJournalLine',
        this,
        linkedApis[1]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[2]
      ),
      BUNDLE_SALES_INVOICE_LINES: new OneToManyLink(
        'BundleSalesInvoiceLines',
        this,
        linkedApis[3]
      ),
      TAX_BRANCH: new OneToOneLink('TaxBranch', this, linkedApis[4]),
      FISCAL_ESTABLISHMENT: new OneToOneLink(
        'FiscalEstablishment',
        this,
        linkedApis[5]
      ),
      DEFAULT_DIMENSION: new OneToOneLink(
        'DefaultDimension',
        this,
        linkedApis[6]
      ),
      BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: new OneToManyLink(
        'BundleSalesInvoiceBundleParentLines',
        this,
        linkedApis[7]
      ),
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_OPERATIONAL_SITE: new OneToManyLink(
        'MaintenanceAssetBillOfMaterials_OperationalSite',
        this,
        linkedApis[8]
      ),
      WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_STORAGE_PRODUCT_SITE:
        new OneToManyLink(
          'WorkOrderLineProductConsumptionLines_StorageProductSite',
          this,
          linkedApis[9]
        ),
      BUNDLE_SALES_ORDER_CONFIRMATION_LINES: new OneToManyLink(
        'BundleSalesOrderConfirmationLines',
        this,
        linkedApis[10]
      ),
      OPEN_PURCHASE_PRICE_JOURNAL_LINE_V_2: new OneToManyLink(
        'OpenPurchasePriceJournalLineV2',
        this,
        linkedApis[11]
      )
    };
    return this;
  }

  entityConstructor = OperationalSitesV2;

  requestBuilder(): OperationalSitesV2RequestBuilder<DeSerializersT> {
    return new OperationalSitesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OperationalSitesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<OperationalSitesV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OperationalSitesV2<DeSerializersT>,
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
    typeof OperationalSitesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OperationalSitesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_SITE_DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_PRIMARY_ADDRESS: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_ESTABLISHMENT_ID: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITE_TIMEZONE: EnumField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRIMARY_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_MASTER_PLANNED_INTRA_SITE_MOVEMENTS_USE_TRANSFER_JOURNALS: EnumField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_ENTRY_DEADLINE_GROUP_ID: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LOCATION_ROLES: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RECEIVING_WAREHOUSE_OVERRIDE_ALLOWED: EnumField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SITE_NAME: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_BRANCH_CODE: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_ADDRESS_ASSIGNED: EnumField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_ADDRESS_TIME_ZONE: EnumField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PRIMARY_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      OperationalSitesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link gupOpenTradeAgreementJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUP_OPEN_TRADE_AGREEMENT_JOURNAL_LINE: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      GupOpenTradeAgreementJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_LINES: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxBranch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_BRANCH: OneToOneLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      BranchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalEstablishment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_ESTABLISHMENT: OneToOneLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      FiscalEstablishmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSION: OneToOneLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesInvoiceBundleParentLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_INVOICE_BUNDLE_PARENT_LINES: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      BundleSalesInvoiceBundleParentLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsOperationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_OPERATIONAL_SITE: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderLineProductConsumptionLinesStorageProductSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_STORAGE_PRODUCT_SITE: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bundleSalesOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUNDLE_SALES_ORDER_CONFIRMATION_LINES: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      BundleSalesOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchasePriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      OperationalSitesV2<DeSerializersT>,
      DeSerializersT,
      OpenPurchasePriceJournalLinesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OperationalSitesV2<DeSerializers>>;
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
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', false),
        /**
         * Static representation of the {@link primaryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventSiteDefaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_DEFAULT_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'InventSiteDefaultDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link formattedPrimaryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_PRIMARY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedPrimaryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link siteTimezone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_TIMEZONE: fieldBuilder.buildEnumField(
          'SiteTimezone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLocationSalesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LOCATION_SALES_TAX_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'PrimaryAddressLocationSalesTaxGroupCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link defaultInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willMasterPlannedIntraSiteMovementsUseTransferJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_MASTER_PLANNED_INTRA_SITE_MOVEMENTS_USE_TRANSFER_JOURNALS:
          fieldBuilder.buildEnumField(
            'WillMasterPlannedIntraSiteMovementsUseTransferJournals',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link primaryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderEntryDeadlineGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ENTRY_DEADLINE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'OrderEntryDeadlineGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLocationRoles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LOCATION_ROLES: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLocationRoles',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReceivingWarehouseOverrideAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECEIVING_WAREHOUSE_OVERRIDE_ALLOWED: fieldBuilder.buildEnumField(
          'IsReceivingWarehouseOverrideAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link siteName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_NAME: fieldBuilder.buildEdmTypeField(
          'SiteName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxBranchCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BRANCH_CODE: fieldBuilder.buildEdmTypeField(
          'TaxBranchCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimaryAddressAssigned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_ADDRESS_ASSIGNED: fieldBuilder.buildEnumField(
          'IsPrimaryAddressAssigned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'PrimaryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link primaryAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'PrimaryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OperationalSitesV2)
      };
    }

    return this._schema;
  }
}
