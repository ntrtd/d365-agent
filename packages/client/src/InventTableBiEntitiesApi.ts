/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventTableBiEntities } from './InventTableBiEntities';
import { InventTableBiEntitiesRequestBuilder } from './InventTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { Abc } from './Abc';
import { BomWhsReleasePolicy } from './BomWhsReleasePolicy';
import { PmfProductType } from './PmfProductType';
import { InventFiscalLifoNormalValueCalc } from './InventFiscalLifoNormalValueCalc';
import { SalesPriceModel } from './SalesPriceModel';
import { SalesPriceModelBasic } from './SalesPriceModelBasic';
import { FiTaxationOriginBr } from './FiTaxationOriginBr';
import { ProdFlushingPrincipItem } from './ProdFlushingPrincipItem';
import { PurchMatchingPolicyWithNotSetOption } from './PurchMatchingPolicyWithNotSetOption';
import { PdsPotencyAttribRecordingEnum } from './PdsPotencyAttribRecordingEnum';
import { ItemNumAlternative } from './ItemNumAlternative';
import { ScaleIndicatorBr } from './ScaleIndicatorBr';
import { InventBatchMergeDateCalculationMethod } from './InventBatchMergeDateCalculationMethod';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { ItemType } from './ItemType';
import { PdsVendorCheckItem } from './PdsVendorCheckItem';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class InventTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): InventTableBiEntitiesApi<DeSerializersT> {
    return new InventTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventTableBiEntities;

  requestBuilder(): InventTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new InventTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InventTableBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventTableBiEntities<DeSerializersT>,
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
    typeof InventTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCRAP_CONST: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NR_TAX_GROUP_LV: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_MODEL: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXEMPT_IN: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ABC_VALUE: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    DISPLAY_HAZARD_MX: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WMS_ARRIVAL_HANDLING_TIME: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMS_EXPORT_TARIFF_CODE_TABLE_IN: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INTRASTAT_CHARGE_PER_KG: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKAGING_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_BEST_BEFORE: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENT_PRODUCT_TYPE_BR: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_WHS_RELEASE_POLICY: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      BomWhsReleasePolicy,
      true,
      true
    >;
    SYS_CREATED_DATE_TIME: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIG_STATE_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PMF_PRODUCT_TYPE: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      PmfProductType,
      true,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_LIFO_NORMAL_VALUE_CALC: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      InventFiscalLifoNormalValueCalc,
      true,
      true
    >;
    PREVENT_PHYSICAL_DIMENSION_SYNC: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STANDARD_CONFIG_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_MODEL: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      SalesPriceModel,
      true,
      true
    >;
    PMF_YIELD_PCT: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COO_DUAL_USE_CODE: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCEPTION_CODE_BR: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_VOLUME: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKING_RU: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PK_WI_U_CODE_PL: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_MODEL_BASIC: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      SalesPriceModelBasic,
      true,
      true
    >;
    EXCISE_TARIFF_CODES_IN: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_SERVICE_CODE_BR: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXIM_PRODUCT_GROUP_TABLE_IN: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_MODEL: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FISCAL_LIFO_NORMAL_VALUE: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAXATION_ORIGIN_BR: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      FiTaxationOriginBr,
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_ACCOUNTING_CODE_TABLE_IN: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    HEIGHT: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NGP_CODES_TABLE_FR: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSET_ID_RU: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STANDARD_INVENT_VERSION_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SAD_RATE_CODE_PL: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALT_INVENT_STYLE_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_GROUP_ID_RU: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_REPORT_FINISHED: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SKIP_INTRA_COMPANY_SYNC_RU: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROD_FLUSHING_PRINCIP: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      ProdFlushingPrincipItem,
      true,
      true
    >;
    TARA_WEIGHT: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COO_DUAL_USE_PRODUCT: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROD_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_IMPORT_TARIFF_CODE_TABLE_IN: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BOM_MANUAL_RECEIPT: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FISCAL_LIFO_AVOID_CALC: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MATCHING_POLICY: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      PurchMatchingPolicyWithNotSetOption,
      true,
      true
    >;
    MARKUP_CODE_RU: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CODE_TABLE_IN: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PDS_POTENCY_ATTRIB_RECORDING: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      PdsPotencyAttribRecordingEnum,
      true,
      true
    >;
    DEPTH: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERIAL_NUM_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_ALT_ITEM_ID: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      ItemNumAlternative,
      true,
      true
    >;
    DENSITY: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SORT_CODE: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCALE_INDICATOR_BR: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      ScaleIndicatorBr,
      true,
      true
    >;
    SALES_PERCENT_MARKUP: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_SHELF_ADVICE: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BATCH_MERGE_DATE_CALCULATION_METHOD: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      InventBatchMergeDateCalculationMethod,
      true,
      true
    >;
    GROSS_DEPTH: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PMF_PLANNING_ITEM_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_PRICE_TOLERANCE_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_INVENT_SIZE_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WIDTH: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCISE_RECORD_TYPE_IN: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      ExciseRecordTypeIn,
      true,
      true
    >;
    DSA_IN: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIG_COUNTY_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_HEIGHT: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATISTICS_FACTOR: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_FREIGHT_ALLOCATION_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICMS_ON_SERVICE_BR: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HMIM_INDICATOR: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORECAST_DMP_INCLUDE: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SAT_TARIFF_FRACTION_MX: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHANTOM: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRACODE: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROD_POOL_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROX_TAX_VALUE_BR: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALCOHOL_PRODUCTION_TYPE_ID_RU: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_NOTES_GROUP_IT: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_INVENT_STYLE_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_UNIT_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HSN_CODE_TABLE_IN: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMMISSION_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_TYPE: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      ItemType,
      true,
      true
    >;
    PDS_ITEM_REBATE_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABC_TIE_UP: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    ITEM_BUYER_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_CALC_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALCOHOL_MANUFACTURER_ID_RU: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_EXCLUDE: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_PROC_ID_CZ: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABC_REVENUE: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    BOM_LEVEL: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COST_BOM_LEVEL: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PDS_BASE_ATTRIBUTE_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAND_CODE_ID_MX: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_VENDOR_CHECK_ITEM: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      PdsVendorCheckItem,
      true,
      true
    >;
    ALT_CONFIG_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_SHELF_LIFE: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIMARY_VENDOR_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAT_CODE_ID_MX: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_DIM_COST_PRICE: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NET_WEIGHT: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_RATE_TYPE: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQ_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALT_INVENT_SIZE_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALCOHOL_STRENGTH_RU: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MCR_PACKED_EXTENSIONS: EdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    PDS_TARGET_FACTOR: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPERTY_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRASTAT_COMMODITY: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALT_INVENT_VERSION_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CONTRIBUTION_RATIO: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CNPJ_BR: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_NUM_GROUP_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_FISCAL_LIFO_GROUP: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NON_GST_IN: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ABC_CONTRIBUTION_MARGIN: EnumField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    TAX_PACKAGING_QTY: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCRAP_VAR: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALT_ITEM_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_FISCAL_CLASSIFICATION_BR: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_INVENT_COLOR_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_WIDTH: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALT_INVENT_COLOR_ID: OrderableEdmTypeField<
      InventTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link scrapConst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP_CONST: fieldBuilder.buildEdmTypeField(
          'ScrapConst',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nrTaxGroupLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NR_TAX_GROUP_LV: fieldBuilder.buildEdmTypeField(
          'NRTaxGroup_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_MODEL: fieldBuilder.buildEnumField('CostModel', NoYes, true),
        /**
         * Static representation of the {@link exemptIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_IN: fieldBuilder.buildEnumField('Exempt_IN', NoYes, true),
        /**
         * Static representation of the {@link abcValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABC_VALUE: fieldBuilder.buildEnumField('ABCValue', Abc, true),
        /**
         * Static representation of the {@link displayHazardMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_HAZARD_MX: fieldBuilder.buildEnumField(
          'DisplayHazard_MX',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link wmsArrivalHandlingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_ARRIVAL_HANDLING_TIME: fieldBuilder.buildEdmTypeField(
          'WMSArrivalHandlingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customsExportTariffCodeTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_EXPORT_TARIFF_CODE_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'CustomsExportTariffCodeTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link intrastatChargePerKg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_CHARGE_PER_KG: fieldBuilder.buildEdmTypeField(
          'IntrastatChargePerKg',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link packagingGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGING_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PackagingGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsBestBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_BEST_BEFORE: fieldBuilder.buildEdmTypeField(
          'PdsBestBefore',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link inventProductTypeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PRODUCT_TYPE_BR: fieldBuilder.buildEdmTypeField(
          'InventProductType_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomWhsReleasePolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_WHS_RELEASE_POLICY: fieldBuilder.buildEnumField(
          'BomWHSReleasePolicy',
          BomWhsReleasePolicy,
          true
        ),
        /**
         * Static representation of the {@link sysCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link origStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_STATE_ID: fieldBuilder.buildEdmTypeField(
          'OrigStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pmfProductType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PMF_PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'PmfProductType',
          PmfProductType,
          true
        ),
        /**
         * Static representation of the {@link projCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'projCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalLifoNormalValueCalc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_LIFO_NORMAL_VALUE_CALC: fieldBuilder.buildEnumField(
          'FiscalLIFONormalValueCalc',
          InventFiscalLifoNormalValueCalc,
          true
        ),
        /**
         * Static representation of the {@link preventPhysicalDimensionSync} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVENT_PHYSICAL_DIMENSION_SYNC: fieldBuilder.buildEnumField(
          'PreventPhysicalDimensionSync',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link standardConfigId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'StandardConfigId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MODEL: fieldBuilder.buildEnumField(
          'SalesModel',
          SalesPriceModel,
          true
        ),
        /**
         * Static representation of the {@link pmfYieldPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PMF_YIELD_PCT: fieldBuilder.buildEdmTypeField(
          'PmfYieldPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cooDualUseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COO_DUAL_USE_CODE: fieldBuilder.buildEdmTypeField(
          'COODualUseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exceptionCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEPTION_CODE_BR: fieldBuilder.buildEdmTypeField(
          'ExceptionCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_VOLUME: fieldBuilder.buildEdmTypeField(
          'UnitVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link packingRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_RU: fieldBuilder.buildEdmTypeField(
          'Packing_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pkWiUCodePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PK_WI_U_CODE_PL: fieldBuilder.buildEdmTypeField(
          'PKWiUCode_PL',
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
         * Static representation of the {@link salesPriceModelBasic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_MODEL_BASIC: fieldBuilder.buildEnumField(
          'SalesPriceModelBasic',
          SalesPriceModelBasic,
          true
        ),
        /**
         * Static representation of the {@link exciseTariffCodesIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_TARIFF_CODES_IN: fieldBuilder.buildEdmTypeField(
          'ExciseTariffCodes_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxServiceCodeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SERVICE_CODE_BR: fieldBuilder.buildEdmTypeField(
          'TaxServiceCode_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eximProductGroupTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXIM_PRODUCT_GROUP_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'EximProductGroupTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_MODEL: fieldBuilder.buildEnumField('PurchModel', NoYes, true),
        /**
         * Static representation of the {@link fiscalLifoNormalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_LIFO_NORMAL_VALUE: fieldBuilder.buildEdmTypeField(
          'FiscalLIFONormalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxationOriginBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_ORIGIN_BR: fieldBuilder.buildEnumField(
          'TaxationOrigin_BR',
          FiTaxationOriginBr,
          true
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceAccountingCodeTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ACCOUNTING_CODE_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'ServiceAccountingCodeTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link height} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT: fieldBuilder.buildEdmTypeField('Height', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link ngpCodesTableFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NGP_CODES_TABLE_FR: fieldBuilder.buildEdmTypeField(
          'NGPCodesTable_FR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link assetIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID_RU: fieldBuilder.buildEdmTypeField(
          'AssetId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link product} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT: fieldBuilder.buildEdmTypeField('Product', 'Edm.Int64', false),
        /**
         * Static representation of the {@link standardInventVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_INVENT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'StandardInventVersionId',
          'Edm.String',
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
         * Static representation of the {@link sadRateCodePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAD_RATE_CODE_PL: fieldBuilder.buildEdmTypeField(
          'SADRateCode_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link altInventStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALT_INVENT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'AltInventStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetGroupIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP_ID_RU: fieldBuilder.buildEdmTypeField(
          'AssetGroupId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoReportFinished} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_REPORT_FINISHED: fieldBuilder.buildEnumField(
          'AutoReportFinished',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link skipIntraCompanySyncRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_INTRA_COMPANY_SYNC_RU: fieldBuilder.buildEnumField(
          'SkipIntraCompanySync_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prodFlushingPrincip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_FLUSHING_PRINCIP: fieldBuilder.buildEnumField(
          'ProdFlushingPrincip',
          ProdFlushingPrincipItem,
          true
        ),
        /**
         * Static representation of the {@link taraWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARA_WEIGHT: fieldBuilder.buildEdmTypeField(
          'TaraWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cooDualUseProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COO_DUAL_USE_PRODUCT: fieldBuilder.buildEnumField(
          'COODualUseProduct',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prodGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProdGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsImportTariffCodeTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_IMPORT_TARIFF_CODE_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'CustomsImportTariffCodeTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bomManualReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_MANUAL_RECEIPT: fieldBuilder.buildEnumField(
          'BOMManualReceipt',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fiscalLifoAvoidCalc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_LIFO_AVOID_CALC: fieldBuilder.buildEnumField(
          'FiscalLIFOAvoidCalc',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link matchingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_POLICY: fieldBuilder.buildEnumField(
          'MatchingPolicy',
          PurchMatchingPolicyWithNotSetOption,
          true
        ),
        /**
         * Static representation of the {@link markupCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CODE_RU: fieldBuilder.buildEdmTypeField(
          'MarkupCode_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CostGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceCodeTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'ServiceCodeTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link pdsPotencyAttribRecording} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_POTENCY_ATTRIB_RECORDING: fieldBuilder.buildEnumField(
          'PDSPotencyAttribRecording',
          PdsPotencyAttribRecordingEnum,
          true
        ),
        /**
         * Static representation of the {@link depth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPTH: fieldBuilder.buildEdmTypeField('Depth', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link serialNumGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SerialNumGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useAltItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ALT_ITEM_ID: fieldBuilder.buildEnumField(
          'UseAltItemId',
          ItemNumAlternative,
          true
        ),
        /**
         * Static representation of the {@link density} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DENSITY: fieldBuilder.buildEdmTypeField(
          'Density',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sortCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_CODE: fieldBuilder.buildEdmTypeField(
          'sortCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link scaleIndicatorBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCALE_INDICATOR_BR: fieldBuilder.buildEnumField(
          'ScaleIndicator_BR',
          ScaleIndicatorBr,
          true
        ),
        /**
         * Static representation of the {@link salesPercentMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PERCENT_MARKUP: fieldBuilder.buildEdmTypeField(
          'SalesPercentMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsShelfAdvice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_SHELF_ADVICE: fieldBuilder.buildEdmTypeField(
          'PdsShelfAdvice',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link batchMergeDateCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_MERGE_DATE_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'BatchMergeDateCalculationMethod',
          InventBatchMergeDateCalculationMethod,
          true
        ),
        /**
         * Static representation of the {@link grossDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_DEPTH: fieldBuilder.buildEdmTypeField(
          'grossDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pmfPlanningItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PMF_PLANNING_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'PmfPlanningItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemPriceToleranceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_PRICE_TOLERANCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemPriceToleranceGroupId',
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
         * Static representation of the {@link productLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ProductLifecycleStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardInventSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_INVENT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'StandardInventSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link width} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH: fieldBuilder.buildEdmTypeField('Width', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link exciseRecordTypeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_RECORD_TYPE_IN: fieldBuilder.buildEnumField(
          'ExciseRecordType_IN',
          ExciseRecordTypeIn,
          true
        ),
        /**
         * Static representation of the {@link dsaIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DSA_IN: fieldBuilder.buildEnumField('DSA_IN', NoYes, true),
        /**
         * Static representation of the {@link origCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'OrigCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_HEIGHT: fieldBuilder.buildEdmTypeField(
          'grossHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statisticsFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICS_FACTOR: fieldBuilder.buildEdmTypeField(
          'StatisticsFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsFreightAllocationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_FREIGHT_ALLOCATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PdsFreightAllocationGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link icmsOnServiceBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_ON_SERVICE_BR: fieldBuilder.buildEnumField(
          'ICMSOnService_BR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hmimIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HMIM_INDICATOR: fieldBuilder.buildEnumField(
          'HMIMIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link forecastDmpInclude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_DMP_INCLUDE: fieldBuilder.buildEnumField(
          'ForecastDMPInclude',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link satTariffFractionMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_TARIFF_FRACTION_MX: fieldBuilder.buildEdmTypeField(
          'SATTariffFraction_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phantom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHANTOM: fieldBuilder.buildEnumField('Phantom', NoYes, true),
        /**
         * Static representation of the {@link intracode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRACODE: fieldBuilder.buildEdmTypeField(
          'Intracode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prodPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_POOL_ID: fieldBuilder.buildEdmTypeField(
          'ProdPoolId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approxTaxValueBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROX_TAX_VALUE_BR: fieldBuilder.buildEdmTypeField(
          'ApproxTaxValue_BR',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link alcoholProductionTypeIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_PRODUCTION_TYPE_ID_RU: fieldBuilder.buildEdmTypeField(
          'AlcoholProductionTypeId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link freeNotesGroupIt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_NOTES_GROUP_IT: fieldBuilder.buildEdmTypeField(
          'FreeNotesGroup_IT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardInventStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_INVENT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'StandardInventStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'BOMUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hsnCodeTableIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HSN_CODE_TABLE_IN: fieldBuilder.buildEdmTypeField(
          'HSNCodeTable_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link commissionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CommissionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TYPE: fieldBuilder.buildEnumField('ItemType', ItemType, true),
        /**
         * Static representation of the {@link pdsItemRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_ITEM_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PdsItemRebateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link abcTieUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABC_TIE_UP: fieldBuilder.buildEnumField('ABCTieUp', Abc, true),
        /**
         * Static representation of the {@link itemBuyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemBuyerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomCalcGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_CALC_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BOMCalcGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alcoholManufacturerIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_MANUFACTURER_ID_RU: fieldBuilder.buildEdmTypeField(
          'AlcoholManufacturerId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatExclude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_EXCLUDE: fieldBuilder.buildEnumField(
          'IntrastatExclude',
          NoYes,
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
         * Static representation of the {@link intrastatProcIdCz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_PROC_ID_CZ: fieldBuilder.buildEdmTypeField(
          'IntrastatProcId_CZ',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link abcRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABC_REVENUE: fieldBuilder.buildEnumField('ABCRevenue', Abc, true),
        /**
         * Static representation of the {@link bomLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_LEVEL: fieldBuilder.buildEdmTypeField(
          'BOMLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link costBomLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_BOM_LEVEL: fieldBuilder.buildEdmTypeField(
          'CostBOMLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link pdsBaseAttributeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_BASE_ATTRIBUTE_ID: fieldBuilder.buildEdmTypeField(
          'PDSBaseAttributeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brandCodeIdMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAND_CODE_ID_MX: fieldBuilder.buildEdmTypeField(
          'BrandCodeId_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsVendorCheckItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_VENDOR_CHECK_ITEM: fieldBuilder.buildEnumField(
          'PdsVendorCheckItem',
          PdsVendorCheckItem,
          true
        ),
        /**
         * Static representation of the {@link altConfigId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALT_CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'AltConfigId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsShelfLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_SHELF_LIFE: fieldBuilder.buildEdmTypeField(
          'PdsShelfLife',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link primaryVendorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_VENDOR_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryVendorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link satCodeIdMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAT_CODE_ID_MX: fieldBuilder.buildEdmTypeField(
          'SATCodeId_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemDimCostPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DIM_COST_PRICE: fieldBuilder.buildEnumField(
          'ItemDimCostPrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link netWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_WEIGHT: fieldBuilder.buildEdmTypeField(
          'NetWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link origCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OrigCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'TaxRateType',
          'Edm.Int64',
          false
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
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reqGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ReqGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link altInventSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALT_INVENT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'AltInventSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alcoholStrengthRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_STRENGTH_RU: fieldBuilder.buildEdmTypeField(
          'AlcoholStrength_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mcrPackedExtensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_PACKED_EXTENSIONS: fieldBuilder.buildEdmTypeField(
          'MCRPackedExtensions',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link pdsTargetFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_TARGET_FACTOR: fieldBuilder.buildEdmTypeField(
          'PDSTargetFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link propertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'PropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intrastatCommodity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_COMMODITY: fieldBuilder.buildEdmTypeField(
          'IntrastatCommodity',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link altInventVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALT_INVENT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'AltInventVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesContributionRatio} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CONTRIBUTION_RATIO: fieldBuilder.buildEdmTypeField(
          'SalesContributionRatio',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cnpjBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNPJ_BR: fieldBuilder.buildEdmTypeField('CNPJ_BR', 'Edm.String', true),
        /**
         * Static representation of the {@link batchNumGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_NUM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BatchNumGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventFiscalLifoGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_FISCAL_LIFO_GROUP: fieldBuilder.buildEdmTypeField(
          'InventFiscalLIFOGroup',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link nonGstIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_GST_IN: fieldBuilder.buildEnumField('NonGST_IN', NoYes, true),
        /**
         * Static representation of the {@link abcContributionMargin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABC_CONTRIBUTION_MARGIN: fieldBuilder.buildEnumField(
          'ABCContributionMargin',
          Abc,
          true
        ),
        /**
         * Static representation of the {@link taxPackagingQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PACKAGING_QTY: fieldBuilder.buildEdmTypeField(
          'TaxPackagingQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link scrapVar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP_VAR: fieldBuilder.buildEdmTypeField(
          'ScrapVar',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link altItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALT_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'AltItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxFiscalClassificationBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_FISCAL_CLASSIFICATION_BR: fieldBuilder.buildEdmTypeField(
          'TaxFiscalClassification_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardInventColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_INVENT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'StandardInventColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_WIDTH: fieldBuilder.buildEdmTypeField(
          'grossWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link altInventColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALT_INVENT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'AltInventColorId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventTableBiEntities)
      };
    }

    return this._schema;
  }
}
