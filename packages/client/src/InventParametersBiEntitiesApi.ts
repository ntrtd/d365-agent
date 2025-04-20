/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventParametersBiEntities } from './InventParametersBiEntities';
import { InventParametersBiEntitiesRequestBuilder } from './InventParametersBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { StockTransferBlockZeroPriceShipmentSetupIn } from './StockTransferBlockZeroPriceShipmentSetupIn';
import { TransferTypeIn } from './TransferTypeIn';
import { CostMovingAverageFallbackSequence } from './CostMovingAverageFallbackSequence';
import { ProdStandardCostVariance } from './ProdStandardCostVariance';
import { WhsQualityOrderFollowWorkInventDim } from './WhsQualityOrderFollowWorkInventDim';
import { CostBreakdown } from './CostBreakdown';
import { ShipCarrierReturnTo } from './ShipCarrierReturnTo';
import { PriceTypeIn } from './PriceTypeIn';
import { InventFiscalLifoCalcPeriod } from './InventFiscalLifoCalcPeriod';
import { WmsPickRouteStatusOnUpdate } from './WmsPickRouteStatusOnUpdate';
import { InventMultiSiteDimensionLink } from './InventMultiSiteDimensionLink';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class InventParametersBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventParametersBiEntities<DeSerializersT>, DeSerializersT>
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
  ): InventParametersBiEntitiesApi<DeSerializersT> {
    return new InventParametersBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventParametersBiEntities;

  requestBuilder(): InventParametersBiEntitiesRequestBuilder<DeSerializersT> {
    return new InventParametersBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventParametersBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventParametersBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventParametersBiEntities<DeSerializersT>,
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
    typeof InventParametersBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventParametersBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_VARIANT_FEATURES_READY: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_PHYSICAL_TAX: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALCOHOL_DECLARAITON_ER_FORMAT_RETAIL_11_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BARCODE_SETUP_ID_PICK: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_ADJUST_CORRECTION: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADD_TRANSACT: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FISCAL_LIFOWIP_PERIOD: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PDS_CW_INVENT_JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_LIFO_JOURNAL_NAME_ID_FINAL: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_OVERHEAD_STRUCTURE_RU: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STOCK_TRANSFER_BLOCK_ZERO_PRICE_SHIPMENT_SETUP_IN: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      StockTransferBlockZeroPriceShipmentSetupIn,
      true,
      true
    >;
    VOLUME_UNIT_SYMBOL: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_TYPE_IN: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      TransferTypeIn,
      true,
      true
    >;
    ALCOHOL_DECLARAITON_ER_FORMAT_WHOLESALE_6_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOM_STATISTIC_CURRENCY_CODE_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_TRANSFER_FINANCIAL_POSTING_RU: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_INVENT_ONHAND_CONSISTENCY_CHECK_CLEAN_UP: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LENGTH_UNIT_SYMBOL: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_EMPTY_ATTRIBUTE_VALUES: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALCOHOL_UNIT_ID_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTI_SITE_DEFAULT_INVENT_SITE_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNERSHIP_CHANGE_JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALCOHOL_DECLARAITON_ER_FORMAT_WHOLESALE_7_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    USE_ADJ_ROUNDING_ACCOUNTS: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_QUALITY_MANAGEMENT: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALCOHOL_DECLARAITON_ER_FORMAT_RETAIL_12_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_VARIANT_SPECIFIC_ORDER_SETTINGS: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_MOVING_AVERAGE_FALLBACK_SEQUENCE: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CostMovingAverageFallbackSequence,
      true,
      true
    >;
    INVENT_TRANSFER_OVER_DELIVERY: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_RETURN_RU: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_PROFILE_USE_RELATED_RU: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BOM_JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROD_STANDARD_COST_VARIANCE: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ProdStandardCostVariance,
      true,
      true
    >;
    TAG_COUNTING_JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_PRICE_HISTORY: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSE_BUNDLE_SIZE: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MUST_CHECK_INVENT_UPDATE_BLOCKED_ITEM: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEST_HOURLY_RATE: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_GROUP_LV: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANSFER_AUTO_RESERVATION: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSE_BATCH_HELPERS: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PACKING_MATERIAL_ENABLED: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FALLBACK_INVENT_LOCATION_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_USE_BOXING_LOGIC: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FISCAL_LIFO_DEVIATION_PERCENT: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DO_PRINT_TRANSPORTATION_DOCUMENT: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSE_BATCH_GROUP_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUALITY_ORDER_WORK_INVENTORY_DIMENSION_POLICY: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      WhsQualityOrderFollowWorkInventDim,
      true,
      true
    >;
    ENABLE_LEDGER_ACCT_SITES: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_BREAKDOWN: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      CostBreakdown,
      true,
      true
    >;
    STORNO_ADJ_POSTING: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_UNIT_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_OVERRIDE_FEFO: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MOVEMENT_JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORNO_PHYSICAL_POSTING_RU: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_PRICE_PCS_MAX_VALUE: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSFER_JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CARRIER_RETURN_TO: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      ShipCarrierReturnTo,
      true,
      true
    >;
    PRICE_TYPE_IN: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      PriceTypeIn,
      true,
      true
    >;
    INVENT_VALUE_BUNDLE_SIZE: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MASS_UNIT_SYMBOL: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTI_SITE_DEFAULT_INVENT_LOCATION_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INTERCOMPANY_ONHAND_SKIP_CLOSED_QTY: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FISCAL_LIFO_CALC_PERIOD: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      InventFiscalLifoCalcPeriod,
      true,
      true
    >;
    FISCAL_LIFO_JOURNAL_NAME_ID_INTERNAL: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_END_ORDER_PICK: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_ITEM_PRICE_ACTIVATION_BUNDLE_SIZE: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENT_TRANSFER_UNDER_DELIVERY: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MANDATORY_ITEM_TAX_GROUP: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_BAILEE_JOURNAL_NAME_ID_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SUM_DATE_FINANCIAL_DIMENSION_FOCUS_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LOSS_PROFIT_JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCK_COUNTING: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSFER_ORDER_PICK_ROUTE_STATUS_ON_UPDATE: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      WmsPickRouteStatusOnUpdate,
      true,
      true
    >;
    RESERVE_ON_ORDERED: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNT_JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALCOHOL_CONSIDER_STRENGTH_RU: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ANALYSIS_DIMENSION_ATTRIBUTE_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BATCH_MERGE_JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALCOHOL_UNIT_ID_DAILY_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALCOHOL_DECLARAITON_ER_FORMAT_WHOLESALE_5_RU: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MULTI_SITE_DIMENSION_LINK: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      InventMultiSiteDimensionLink,
      true,
      true
    >;
    SITE_DIMENSION_ATTRIBUTE: OrderableEdmTypeField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREDIT_STORNO_TRANSFER_JOURNAL_RU: EnumField<
      InventParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventParametersBiEntities<DeSerializers>>;
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
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link productVariantFeaturesReady} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_FEATURES_READY: fieldBuilder.buildEnumField(
          'ProductVariantFeaturesReady',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postPhysicalTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_PHYSICAL_TAX: fieldBuilder.buildEnumField(
          'PostPhysicalTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link alcoholDeclaraitonErFormatRetail11Ru} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_DECLARAITON_ER_FORMAT_RETAIL_11_RU:
          fieldBuilder.buildEdmTypeField(
            'AlcoholDeclaraitonERFormatRetail11_RU',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link barcodeSetupIdPick} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_SETUP_ID_PICK: fieldBuilder.buildEdmTypeField(
          'BarcodeSetupIdPick',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventProfileIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventProfileId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventAdjustCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_ADJUST_CORRECTION: fieldBuilder.buildEnumField(
          'InventAdjustCorrection',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link addTransact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADD_TRANSACT: fieldBuilder.buildEnumField('AddTransact', NoYes, true),
        /**
         * Static representation of the {@link fiscalLifowipPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_LIFOWIP_PERIOD: fieldBuilder.buildEdmTypeField(
          'FiscalLIFOWIPPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link pdsCwInventJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_INVENT_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'PdsCWInventJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalLifoJournalNameIdFinal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_LIFO_JOURNAL_NAME_ID_FINAL: fieldBuilder.buildEdmTypeField(
          'FiscalLIFOJournalNameIdFinal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useOverheadStructureRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_OVERHEAD_STRUCTURE_RU: fieldBuilder.buildEnumField(
          'UseOverheadStructure_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link stockTransferBlockZeroPriceShipmentSetupIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_TRANSFER_BLOCK_ZERO_PRICE_SHIPMENT_SETUP_IN:
          fieldBuilder.buildEnumField(
            'StockTransferBlockZeroPriceShipmentSetup_IN',
            StockTransferBlockZeroPriceShipmentSetupIn,
            true
          ),
        /**
         * Static representation of the {@link volumeUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'VolumeUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferTypeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_TYPE_IN: fieldBuilder.buildEnumField(
          'TransferType_IN',
          TransferTypeIn,
          true
        ),
        /**
         * Static representation of the {@link alcoholDeclaraitonErFormatWholesale6Ru} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_DECLARAITON_ER_FORMAT_WHOLESALE_6_RU:
          fieldBuilder.buildEdmTypeField(
            'AlcoholDeclaraitonERFormatWholesale6_RU',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link customStatisticCurrencyCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_STATISTIC_CURRENCY_CODE_RU: fieldBuilder.buildEdmTypeField(
          'CustomStatisticCurrencyCode_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableTransferFinancialPostingRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_TRANSFER_FINANCIAL_POSTING_RU: fieldBuilder.buildEnumField(
          'enableTransferFinancialPosting_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link skipInventOnhandConsistencyCheckCleanUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_INVENT_ONHAND_CONSISTENCY_CHECK_CLEAN_UP:
          fieldBuilder.buildEnumField(
            'SkipInventOnhandConsistencyCheckCleanUp',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link lengthUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'LengthUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowEmptyAttributeValues} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EMPTY_ATTRIBUTE_VALUES: fieldBuilder.buildEnumField(
          'AllowEmptyAttributeValues',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link alcoholUnitIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_UNIT_ID_RU: fieldBuilder.buildEdmTypeField(
          'AlcoholUnitId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multiSiteDefaultInventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_SITE_DEFAULT_INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'MultiSiteDefaultInventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ownershipChangeJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNERSHIP_CHANGE_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'OwnershipChangeJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alcoholDeclaraitonErFormatWholesale7Ru} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_DECLARAITON_ER_FORMAT_WHOLESALE_7_RU:
          fieldBuilder.buildEdmTypeField(
            'AlcoholDeclaraitonERFormatWholesale7_RU',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link useAdjRoundingAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ADJ_ROUNDING_ACCOUNTS: fieldBuilder.buildEnumField(
          'UseAdjRoundingAccounts',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useQualityManagement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_QUALITY_MANAGEMENT: fieldBuilder.buildEnumField(
          'UseQualityManagement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link alcoholDeclaraitonErFormatRetail12Ru} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_DECLARAITON_ER_FORMAT_RETAIL_12_RU:
          fieldBuilder.buildEdmTypeField(
            'AlcoholDeclaraitonERFormatRetail12_RU',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link productVariantSpecificOrderSettings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_SPECIFIC_ORDER_SETTINGS: fieldBuilder.buildEnumField(
          'ProductVariantSpecificOrderSettings',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link costMovingAverageFallbackSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_MOVING_AVERAGE_FALLBACK_SEQUENCE: fieldBuilder.buildEnumField(
          'CostMovingAverageFallbackSequence',
          CostMovingAverageFallbackSequence,
          true
        ),
        /**
         * Static representation of the {@link inventTransferOverDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANSFER_OVER_DELIVERY: fieldBuilder.buildEnumField(
          'InventTransferOverDelivery',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validateReturnRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_RETURN_RU: fieldBuilder.buildEnumField(
          'ValidateReturn_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventProfileUseRelatedRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_USE_RELATED_RU: fieldBuilder.buildEnumField(
          'InventProfileUseRelated_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bomJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'BOMJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prodStandardCostVariance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_STANDARD_COST_VARIANCE: fieldBuilder.buildEnumField(
          'ProdStandardCostVariance',
          ProdStandardCostVariance,
          true
        ),
        /**
         * Static representation of the {@link tagCountingJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAG_COUNTING_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'TagCountingJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastPriceHistory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PRICE_HISTORY: fieldBuilder.buildEnumField(
          'LastPriceHistory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closeBundleSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_BUNDLE_SIZE: fieldBuilder.buildEdmTypeField(
          'CloseBundleSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mustCheckInventUpdateBlockedItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUST_CHECK_INVENT_UPDATE_BLOCKED_ITEM: fieldBuilder.buildEnumField(
          'MustCheckInventUpdateBlockedItem',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link testHourlyRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEST_HOURLY_RATE: fieldBuilder.buildEdmTypeField(
          'TestHourlyRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesTaxGroupLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_LV: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventTransferAutoReservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANSFER_AUTO_RESERVATION: fieldBuilder.buildEnumField(
          'InventTransferAutoReservation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closeBatchHelpers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_BATCH_HELPERS: fieldBuilder.buildEdmTypeField(
          'CloseBatchHelpers',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link packingMaterialEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_MATERIAL_ENABLED: fieldBuilder.buildEnumField(
          'PackingMaterialEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fallbackInventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FALLBACK_INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FallbackInventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrUseBoxingLogic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_USE_BOXING_LOGIC: fieldBuilder.buildEnumField(
          'MCRUseBoxingLogic',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fiscalLifoDeviationPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_LIFO_DEVIATION_PERCENT: fieldBuilder.buildEdmTypeField(
          'FiscalLIFODeviationPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link doPrintTransportationDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_PRINT_TRANSPORTATION_DOCUMENT: fieldBuilder.buildEnumField(
          'DoPrintTransportationDocument',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closeBatchGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_BATCH_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CloseBatchGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qualityOrderWorkInventoryDimensionPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_ORDER_WORK_INVENTORY_DIMENSION_POLICY:
          fieldBuilder.buildEnumField(
            'QualityOrderWorkInventoryDimensionPolicy',
            WhsQualityOrderFollowWorkInventDim,
            true
          ),
        /**
         * Static representation of the {@link enableLedgerAcctSites} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_LEDGER_ACCT_SITES: fieldBuilder.buildEnumField(
          'EnableLedgerAcctSites',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link costBreakdown} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_BREAKDOWN: fieldBuilder.buildEnumField(
          'CostBreakdown',
          CostBreakdown,
          true
        ),
        /**
         * Static representation of the {@link stornoAdjPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORNO_ADJ_POSTING: fieldBuilder.buildEnumField(
          'StornoAdjPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'DefaultUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsOverrideFefo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_OVERRIDE_FEFO: fieldBuilder.buildEnumField(
          'PdsOverrideFEFO',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link movementJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVEMENT_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'MovementJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stornoPhysicalPostingRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORNO_PHYSICAL_POSTING_RU: fieldBuilder.buildEnumField(
          'StornoPhysicalPosting_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link costPricePcsMaxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PRICE_PCS_MAX_VALUE: fieldBuilder.buildEdmTypeField(
          'CostPricePcsMaxValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transferJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'TransferJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCarrierReturnTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CARRIER_RETURN_TO: fieldBuilder.buildEnumField(
          'ShipCarrierReturnTo',
          ShipCarrierReturnTo,
          true
        ),
        /**
         * Static representation of the {@link priceTypeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TYPE_IN: fieldBuilder.buildEnumField(
          'PriceType_IN',
          PriceTypeIn,
          true
        ),
        /**
         * Static representation of the {@link inventValueBundleSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_VALUE_BUNDLE_SIZE: fieldBuilder.buildEdmTypeField(
          'InventValueBundleSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link massUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASS_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'MassUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multiSiteDefaultInventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_SITE_DEFAULT_INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'MultiSiteDefaultInventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link intercompanyOnhandSkipClosedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_ONHAND_SKIP_CLOSED_QTY: fieldBuilder.buildEnumField(
          'IntercompanyOnhandSkipClosedQty',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fiscalLifoCalcPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_LIFO_CALC_PERIOD: fieldBuilder.buildEnumField(
          'FiscalLIFOCalcPeriod',
          InventFiscalLifoCalcPeriod,
          true
        ),
        /**
         * Static representation of the {@link fiscalLifoJournalNameIdInternal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_LIFO_JOURNAL_NAME_ID_INTERNAL: fieldBuilder.buildEdmTypeField(
          'FiscalLIFOJournalNameIdInternal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoEndOrderPick} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_END_ORDER_PICK: fieldBuilder.buildEnumField(
          'AutoEndOrderPick',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventItemPriceActivationBundleSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_ITEM_PRICE_ACTIVATION_BUNDLE_SIZE:
          fieldBuilder.buildEdmTypeField(
            'InventItemPriceActivationBundleSize',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link inventTransferUnderDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANSFER_UNDER_DELIVERY: fieldBuilder.buildEnumField(
          'InventTransferUnderDelivery',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mandatoryItemTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY_ITEM_TAX_GROUP: fieldBuilder.buildEnumField(
          'MandatoryItemTaxGroup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventBaileeJournalNameIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_BAILEE_JOURNAL_NAME_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventBaileeJournalNameId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSumDateFinancialDimensionFocusRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SUM_DATE_FINANCIAL_DIMENSION_FOCUS_RU:
          fieldBuilder.buildEdmTypeField(
            'InventSumDateFinancialDimensionFocus_RU',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link lossProfitJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOSS_PROFIT_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'LossProfitJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lockCounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCK_COUNTING: fieldBuilder.buildEnumField('LockCounting', NoYes, true),
        /**
         * Static representation of the {@link transferOrderPickRouteStatusOnUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_PICK_ROUTE_STATUS_ON_UPDATE: fieldBuilder.buildEnumField(
          'TransferOrderPickRouteStatusOnUpdate',
          WmsPickRouteStatusOnUpdate,
          true
        ),
        /**
         * Static representation of the {@link reserveOnOrdered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVE_ON_ORDERED: fieldBuilder.buildEnumField(
          'ReserveOnOrdered',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link countJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNT_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'CountJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alcoholConsiderStrengthRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_CONSIDER_STRENGTH_RU: fieldBuilder.buildEnumField(
          'AlcoholConsiderStrength_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link analysisDimensionAttributeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANALYSIS_DIMENSION_ATTRIBUTE_RU: fieldBuilder.buildEdmTypeField(
          'AnalysisDimensionAttribute_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link batchMergeJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_MERGE_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'BatchMergeJournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alcoholUnitIdDailyRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_UNIT_ID_DAILY_RU: fieldBuilder.buildEdmTypeField(
          'AlcoholUnitIdDaily_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alcoholDeclaraitonErFormatWholesale5Ru} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_DECLARAITON_ER_FORMAT_WHOLESALE_5_RU:
          fieldBuilder.buildEdmTypeField(
            'AlcoholDeclaraitonERFormatWholesale5_RU',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link multiSiteDimensionLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_SITE_DIMENSION_LINK: fieldBuilder.buildEnumField(
          'MultiSiteDimensionLink',
          InventMultiSiteDimensionLink,
          true
        ),
        /**
         * Static representation of the {@link siteDimensionAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_DIMENSION_ATTRIBUTE: fieldBuilder.buildEdmTypeField(
          'SiteDimensionAttribute',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link creditStornoTransferJournalRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_STORNO_TRANSFER_JOURNAL_RU: fieldBuilder.buildEnumField(
          'CreditStornoTransferJournal_RU',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventParametersBiEntities)
      };
    }

    return this._schema;
  }
}
