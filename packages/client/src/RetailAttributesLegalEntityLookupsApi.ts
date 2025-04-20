/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailAttributesLegalEntityLookups } from './RetailAttributesLegalEntityLookups';
import { RetailAttributesLegalEntityLookupsRequestBuilder } from './RetailAttributesLegalEntityLookupsRequestBuilder';
import { NoYes } from './NoYes';
import { Abc } from './Abc';
import { PdsVendorCheckItem } from './PdsVendorCheckItem';
import { RetailPriceKeyingRequirement } from './RetailPriceKeyingRequirement';
import { SalesPriceModelBasic } from './SalesPriceModelBasic';
import { RetailQtyKeyingRequirement } from './RetailQtyKeyingRequirement';
import { ItemNumAlternative } from './ItemNumAlternative';
import { SalesPriceModel } from './SalesPriceModel';
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
export class RetailAttributesLegalEntityLookupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailAttributesLegalEntityLookups<DeSerializersT>,
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
  ): RetailAttributesLegalEntityLookupsApi<DeSerializersT> {
    return new RetailAttributesLegalEntityLookupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailAttributesLegalEntityLookups;

  requestBuilder(): RetailAttributesLegalEntityLookupsRequestBuilder<DeSerializersT> {
    return new RetailAttributesLegalEntityLookupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailAttributesLegalEntityLookups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailAttributesLegalEntityLookups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailAttributesLegalEntityLookups<DeSerializersT>,
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
    typeof RetailAttributesLegalEntityLookups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailAttributesLegalEntityLookups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_START_DATE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETAIL_LIFE_FROM: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETAIL_BAR_CODE_USE_EAN_STANDARD: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ALT_INVENT_SIZE_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_DATE_BLOCKED: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_MULTI_LINE_DISCOUNT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_DATE_TO_ACTIVATE_ITEM: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENTORY_UNDERDELIVERY_PCT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_UNDERDELIVERY_PCT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_PRICE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_COMPARISON_UNIT_SYMBOL: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PERCENT_MARKUP: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_INTER_COMPANY_BLOCKED: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ALT_INVENT_COLOR_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_COUNTING: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_WEIGHT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_BUYER_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_MARKUP: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_VEND_REBATE_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_MARKUP: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERIAL_NUM_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_DATE_TO_BE_BLOCKED: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_END_DATE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_TOTAL_DISCOUNT: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_MULTI_LINE_DISC: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_ITEM_GROUP: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_MODEL: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_CONTRIBUTION_RATIO: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_POLICY_NUMBER: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_INSTALLMENT_ELIGIBLE: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_ALLOCATE_MARKUP: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_RETAIL_INVENTORY_AVAILABILITY_LEVEL_PROFILE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARA_WEIGHT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ABC_TIE_UP: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_MODEL: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_PRICE_UNIT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_PRICE_DATE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GROSS_DEPTH: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_PDS_PRICING_PRECISION: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_SUPP_ITEM_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE_MARKUP_QUANTITY: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_FTC_EXEMPT: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_CONTINUITY_SCHEDULE_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_PRICE_DATE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GROUP_COVERAGE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE_SALES: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_WAREHOUSE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_END_DISC: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_ALLOCATE_MARKUP: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACKAGING_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_MARKUP_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_VOLUME: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_UNDERDELIVERY_PCT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_SUPP_ITEM_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_POS_MUST_KEY_IN_COMMENT: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ABC_VALUE: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    REPLENISHMENT_RULE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PDS_FREIGHT_ALLOCATION_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_VENDOR_CHECK_ITEM: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      PdsVendorCheckItem,
      true,
      true
    >;
    SALES_PDS_ITEM_REBATE_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_INTER_COMPANY_BLOCKED: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_PRICE_DATE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_LINE_DISC: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_INVENTORY_MODEL: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_POS_KEYING_IN_PRICE: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      RetailPriceKeyingRequirement,
      true,
      true
    >;
    TAX_PACKAGING_QTY: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_BLOCKED_AT_REGISTER: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_POS_DISALLOW_DISCOUNT: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_MARKUP_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABC_REVENUE: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    WMS_ARRIVAL_HANDLING_TIME: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_POS_DISALLOW_MANUAL_DISCOUNT: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_PRICE_MARKUP: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_PRICE_TOLERANCE_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_WAREHOUSE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_PRICE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_POS_ALLOW_NEGATIVE_QUANTITY: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_BASE_PRICE_MODEL: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      SalesPriceModelBasic,
      true,
      true
    >;
    SALES_ALT_ITEM_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SORT_CODE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ALT_CONFIG_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_PRICE_QTY: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_LIFE_TO: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GROSS_WIDTH: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_WAREHOUSE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ALLOW_PRICE_ADJUST: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESERVATION_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_LEGAL_ENTITY: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABC_CONTRIBUTION_MARGIN: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP_SALES: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_SHELF_LABEL: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_OVERDELIVERY_PCT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_PRINT_VARIANTS_SHELF_LABELS: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_COMMISION_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_NUM_GROUP_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_POS_IS_ZERO_PRICE_VALID: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_OVERDELIVERY_PCT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORT_ITEM_LABEL: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_POS_IS_SCALE_ITEM: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRIMARY_VENDOR_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIALS_UNIT_SYMBOL: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_SEASON_CODE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OVERDELIVERY_PCT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_LINE_DISCOUNT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BAR_CODE_SETUP: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_RETAIL_INVENTORY_AVAILABILITY_BUFFER: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ALT_INVENT_STYLE_ID: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ALLOCATE_MARKUP: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_PDS_PRICING_PRECISION: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_POS_KEYING_IN_QUANTITY: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      RetailQtyKeyingRequirement,
      true,
      true
    >;
    SALES_USE_ALT_ITEM_ID: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      ItemNumAlternative,
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP_PURCHASE: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_PRICE_QTY: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE_MODEL: EnumField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      SalesPriceModel,
      true,
      true
    >;
    GROSS_HEIGHT: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      RetailAttributesLegalEntityLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailAttributesLegalEntityLookups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_START_DATE: fieldBuilder.buildEdmTypeField(
          'SalesStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retailLifeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_LIFE_FROM: fieldBuilder.buildEdmTypeField(
          'RetailLifeFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retailBarCodeUseEanStandard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_BAR_CODE_USE_EAN_STANDARD: fieldBuilder.buildEnumField(
          'RetailBarCodeUseEANStandard',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesAltInventSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ALT_INVENT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'SalesAltInventSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailDateBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_DATE_BLOCKED: fieldBuilder.buildEdmTypeField(
          'RetailDateBlocked',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesMultiLineDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MULTI_LINE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'SalesMultiLineDiscount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailDateToActivateItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_DATE_TO_ACTIVATE_ITEM: fieldBuilder.buildEdmTypeField(
          'RetailDateToActivateItem',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventoryUnderdeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNDERDELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'InventoryUnderdeliveryPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesUnderdeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNDERDELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'SalesUnderdeliveryPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PRICE: fieldBuilder.buildEdmTypeField(
          'InventoryPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', true),
        /**
         * Static representation of the {@link baseComparisonUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_COMPARISON_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BaseComparisonUnitSymbol',
          'Edm.String',
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
         * Static representation of the {@link salesInterCompanyBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INTER_COMPANY_BLOCKED: fieldBuilder.buildEnumField(
          'SalesInterCompanyBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesAltInventColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ALT_INVENT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'SalesAltInventColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupCounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_COUNTING: fieldBuilder.buildEdmTypeField(
          'GroupCounting',
          'Edm.String',
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
         * Static representation of the {@link itemBuyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemBuyerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_MARKUP: fieldBuilder.buildEdmTypeField(
          'PurchaseMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemVendRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_VEND_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ItemVendRebateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_MARKUP: fieldBuilder.buildEdmTypeField(
          'InventoryMarkup',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link retailDateToBeBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_DATE_TO_BE_BLOCKED: fieldBuilder.buildEdmTypeField(
          'RetailDateToBeBlocked',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_END_DATE: fieldBuilder.buildEdmTypeField(
          'SalesEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesTotalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TOTAL_DISCOUNT: fieldBuilder.buildEnumField(
          'SalesTotalDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseMultiLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_MULTI_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'PurchaseMultiLineDisc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'GroupItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_MODEL: fieldBuilder.buildEnumField('PurchModel', NoYes, true),
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
         * Static representation of the {@link returnPolicyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_POLICY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReturnPolicyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesInstallmentEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INSTALLMENT_ELIGIBLE: fieldBuilder.buildEnumField(
          'SalesInstallmentEligible',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryAllocateMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ALLOCATE_MARKUP: fieldBuilder.buildEnumField(
          'InventoryAllocateMarkup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesRetailInventoryAvailabilityLevelProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_RETAIL_INVENTORY_AVAILABILITY_LEVEL_PROFILE:
          fieldBuilder.buildEdmTypeField(
            'SalesRetailInventoryAvailabilityLevelProfile',
            'Edm.String',
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
         * Static representation of the {@link abcTieUp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABC_TIE_UP: fieldBuilder.buildEnumField('ABCTieUp', Abc, true),
        /**
         * Static representation of the {@link salesUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'SalesUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_MODEL: fieldBuilder.buildEnumField('CostModel', NoYes, true),
        /**
         * Static representation of the {@link inventoryPriceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'InventoryPriceUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchasePriceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_DATE: fieldBuilder.buildEdmTypeField(
          'PurchasePriceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link grossDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_DEPTH: fieldBuilder.buildEdmTypeField(
          'GrossDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchasePdsPricingPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PDS_PRICING_PRECISION: fieldBuilder.buildEdmTypeField(
          'PurchasePDSPricingPrecision',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesSuppItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SUPP_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesSuppItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPriceMarkupQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_MARKUP_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesPriceMarkupQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesFtcExempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_FTC_EXEMPT: fieldBuilder.buildEnumField(
          'SalesFTCExempt',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesContinuityScheduleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CONTINUITY_SCHEDULE_ID: fieldBuilder.buildEdmTypeField(
          'SalesContinuityScheduleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryPriceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PRICE_DATE: fieldBuilder.buildEdmTypeField(
          'InventoryPriceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link groupCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_COVERAGE: fieldBuilder.buildEdmTypeField(
          'GroupCoverage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitPriceSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE_SALES: fieldBuilder.buildEdmTypeField(
          'UnitPriceSales',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'InventoryWarehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseEndDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_END_DISC: fieldBuilder.buildEnumField(
          'PurchaseEndDisc',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseAllocateMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ALLOCATE_MARKUP: fieldBuilder.buildEnumField(
          'PurchaseAllocateMarkup',
          NoYes,
          true
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
         * Static representation of the {@link purchaseMarkupGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_MARKUP_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseMarkupGroupId',
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
         * Static representation of the {@link unitVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_VOLUME: fieldBuilder.buildEdmTypeField(
          'UnitVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseUnderdeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNDERDELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'PurchaseUnderdeliveryPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseSuppItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_SUPP_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseSuppItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailPosMustKeyInComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_POS_MUST_KEY_IN_COMMENT: fieldBuilder.buildEnumField(
          'RetailPOSMustKeyInComment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link abcValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABC_VALUE: fieldBuilder.buildEnumField('ABCValue', Abc, true),
        /**
         * Static representation of the {@link replenishmentRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_RULE: fieldBuilder.buildEdmTypeField(
          'ReplenishmentRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPdsFreightAllocationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PDS_FREIGHT_ALLOCATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesPdsFreightAllocationGroupId',
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
         * Static representation of the {@link salesPdsItemRebateGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PDS_ITEM_REBATE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesPdsItemRebateGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseInterCompanyBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_INTER_COMPANY_BLOCKED: fieldBuilder.buildEnumField(
          'PurchaseInterCompanyBlocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesPriceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_DATE: fieldBuilder.buildEdmTypeField(
          'SalesPriceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchaseLineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_LINE_DISC: fieldBuilder.buildEdmTypeField(
          'PurchaseLineDisc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupInventoryModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_INVENTORY_MODEL: fieldBuilder.buildEdmTypeField(
          'GroupInventoryModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailPosKeyingInPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_POS_KEYING_IN_PRICE: fieldBuilder.buildEnumField(
          'RetailPOSKeyingInPrice',
          RetailPriceKeyingRequirement,
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
         * Static representation of the {@link retailBlockedAtRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_BLOCKED_AT_REGISTER: fieldBuilder.buildEnumField(
          'RetailBlockedAtRegister',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailPosDisallowDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_POS_DISALLOW_DISCOUNT: fieldBuilder.buildEnumField(
          'RetailPOSDisallowDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesMarkupGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MARKUP_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesMarkupGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link abcRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABC_REVENUE: fieldBuilder.buildEnumField('ABCRevenue', Abc, true),
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
         * Static representation of the {@link retailPosDisallowManualDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_POS_DISALLOW_MANUAL_DISCOUNT: fieldBuilder.buildEnumField(
          'RetailPOSDisallowManualDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesPriceMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_MARKUP: fieldBuilder.buildEdmTypeField(
          'SalesPriceMarkup',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link salesWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'SalesWarehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchasePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE: fieldBuilder.buildEdmTypeField(
          'PurchasePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailPosAllowNegativeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_POS_ALLOW_NEGATIVE_QUANTITY: fieldBuilder.buildEnumField(
          'RetailPOSAllowNegativeQuantity',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesBasePriceModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_BASE_PRICE_MODEL: fieldBuilder.buildEnumField(
          'SalesBasePriceModel',
          SalesPriceModelBasic,
          true
        ),
        /**
         * Static representation of the {@link salesAltItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ALT_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'SalesAltItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sortCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_CODE: fieldBuilder.buildEdmTypeField(
          'SortCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesAltConfigId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ALT_CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'SalesAltConfigId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryPriceQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PRICE_QTY: fieldBuilder.buildEdmTypeField(
          'InventoryPriceQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailLifeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_LIFE_TO: fieldBuilder.buildEdmTypeField(
          'RetailLifeTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link grossWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_WIDTH: fieldBuilder.buildEdmTypeField(
          'GrossWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'PurchaseWarehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesAllowPriceAdjust} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ALLOW_PRICE_ADJUST: fieldBuilder.buildEnumField(
          'SalesAllowPriceAdjust',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reservationHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'ReservationHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'ItemLegalEntity',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link itemSalesTaxGroupSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP_SALES: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroupSales',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportShelfLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_SHELF_LABEL: fieldBuilder.buildEdmTypeField(
          'ReportShelfLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOverdeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OVERDELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'SalesOverdeliveryPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailPrintVariantsShelfLabels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRINT_VARIANTS_SHELF_LABELS: fieldBuilder.buildEnumField(
          'RetailPrintVariantsShelfLabels',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesCommisionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_COMMISION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesCommisionGroupId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailPosIsZeroPriceValid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_POS_IS_ZERO_PRICE_VALID: fieldBuilder.buildEnumField(
          'RetailPOSIsZeroPriceValid',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseOverdeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_OVERDELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'PurchaseOverdeliveryPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportItemLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_ITEM_LABEL: fieldBuilder.buildEdmTypeField(
          'ReportItemLabel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailPosIsScaleItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_POS_IS_SCALE_ITEM: fieldBuilder.buildEnumField(
          'RetailPOSIsScaleItem',
          NoYes,
          true
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
         * Static representation of the {@link billOfMaterialsUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIALS_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialsUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailSeasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_SEASON_CODE: fieldBuilder.buildEdmTypeField(
          'RetailSeasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryOverdeliveryPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OVERDELIVERY_PCT: fieldBuilder.buildEdmTypeField(
          'InventoryOverdeliveryPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesLineDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LINE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'SalesLineDiscount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barCodeSetup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE_SETUP: fieldBuilder.buildEdmTypeField(
          'BarCodeSetup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesRetailInventoryAvailabilityBuffer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_RETAIL_INVENTORY_AVAILABILITY_BUFFER:
          fieldBuilder.buildEdmTypeField(
            'SalesRetailInventoryAvailabilityBuffer',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link salesAltInventStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ALT_INVENT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'SalesAltInventStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesAllocateMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ALLOCATE_MARKUP: fieldBuilder.buildEnumField(
          'SalesAllocateMarkup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesPdsPricingPrecision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PDS_PRICING_PRECISION: fieldBuilder.buildEdmTypeField(
          'SalesPDSPricingPrecision',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link retailPosKeyingInQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_POS_KEYING_IN_QUANTITY: fieldBuilder.buildEnumField(
          'RetailPOSKeyingInQuantity',
          RetailQtyKeyingRequirement,
          true
        ),
        /**
         * Static representation of the {@link salesUseAltItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_USE_ALT_ITEM_ID: fieldBuilder.buildEnumField(
          'SalesUseAltItemId',
          ItemNumAlternative,
          true
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroupPurchase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP_PURCHASE: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroupPurchase',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchasePriceQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PRICE_QTY: fieldBuilder.buildEdmTypeField(
          'PurchasePriceQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesPriceModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_MODEL: fieldBuilder.buildEnumField(
          'SalesPriceModel',
          SalesPriceModel,
          true
        ),
        /**
         * Static representation of the {@link grossHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_HEIGHT: fieldBuilder.buildEdmTypeField(
          'GrossHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'InventoryUnitSymbol',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailAttributesLegalEntityLookups)
      };
    }

    return this._schema;
  }
}
