/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxTransInBiEntities } from './TaxTransInBiEntities';
import { TaxTransInBiEntitiesRequestBuilder } from './TaxTransInBiEntitiesRequestBuilder';
import { ExciseRecordTypeIn } from './ExciseRecordTypeIn';
import { ExciseTypeIn } from './ExciseTypeIn';
import { NoYes } from './NoYes';
import { TaxTypeIn } from './TaxTypeIn';
import { VatGoodsTypeIn } from './VatGoodsTypeIn';
import { DisposalTypeIn } from './DisposalTypeIn';
import { TaxModuleType } from './TaxModuleType';
import { ServiceCategoryIn } from './ServiceCategoryIn';
import { DirectionIn } from './DirectionIn';
import { CustomerCalculationDateTypeIn } from './CustomerCalculationDateTypeIn';
import { LedgerJournalType } from './LedgerJournalType';
import { TaxCalculationDateType } from './TaxCalculationDateType';
import { ItcCategoryIn } from './ItcCategoryIn';
import { TaxDirection } from './TaxDirection';
import { TaxOrigin } from './TaxOrigin';
import { ExciseRegisterIn } from './ExciseRegisterIn';
import { VendorCalculationDateTypeIn } from './VendorCalculationDateTypeIn';
import { GtaServiceCategoryIn } from './GtaServiceCategoryIn';
import { DirectSettlementIn } from './DirectSettlementIn';
import { PriceTypeIn } from './PriceTypeIn';
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
export class TaxTransInBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxTransInBiEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxTransInBiEntitiesApi<DeSerializersT> {
    return new TaxTransInBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxTransInBiEntities;

  requestBuilder(): TaxTransInBiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxTransInBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxTransInBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxTransInBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxTransInBiEntities<DeSerializersT>,
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
    typeof TaxTransInBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxTransInBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETENTION_PCT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIVISION_VENDOR_MASTER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_RECORD_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      ExciseRecordTypeIn,
      true,
      true
    >;
    REGISTRATION_NUMBER_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      ExciseTypeIn,
      true,
      true
    >;
    RG_23_DCENVAT_CREDIT_TRANSFERRED_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINOR_HEAD: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_FORM_TYPES: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CHALLAN_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIGURATION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SSI_VALIDITY_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCISE_CREDIT_ENTRY_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKING_LIST_QUANTITY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BILL_OF_MATERIAL_JOURNAL_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHALLAN_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCISE_ENTRY_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INTER_STATE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DSA_ID_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RANGE_VENDOR_MASTER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSET_SERIAL_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ORIGIN: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_VEND_FORM_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_GTD_ID_RU: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RG_23_D_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BSR_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_VOUCHER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_ORDER_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_COMPONENT_TABLE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PLA_ID_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUST_VEND_FORM_SERIES: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_REPORT_PERIOD_IN: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_TRANS_VAT_REF_REC_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSET_LOCATION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      TaxTypeIn,
      true,
      true
    >;
    CUSTOMS_PREFERENTIAL_VALUE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSESSABLE_VALUE_ACCOUNTING_CURRENCY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXEMPT_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ADDRESS: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_LEDGER_ACCOUNT_GROUP: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SSI_VENDOR: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMS_EXCHANGE_RATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_DEF_LINE_TRANSFERRED: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_GOODS_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      VatGoodsTypeIn,
      true,
      true
    >;
    CUSTOMER_TAX_INFORMATION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DIVISION_CUSTOMER_MASTER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPOSAL_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      DisposalTypeIn,
      true,
      true
    >;
    PRODUCTION_ORDER_QTY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_ITEM: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_REF_REC_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVENT_OWNER_ID_RU: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NON_RECOVERABLE_PCT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPENSE_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSFER_ORDER_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_ON_INVENTORY_PERCENT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HSN_CODE_TABLE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_EXCISE_WITHOUT_DUTY: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_PACKING_SLIP_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_VEND_REGISTRATION_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMS_LANDING_CHARGES_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_INVOICE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_INTERNAL_DEFAULT_GROUP: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_STYLE_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TABLE_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_ORDER_QTY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMS_SHIPPING_BILL_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_REGULATE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNMENT: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_STATUS_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_TARIFF_CODES: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMS_SHIPPING_BILL_NUMBER_TABLE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BILL_OF_ENTRY_QTY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ABATEMENT_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PACKING_SLIP_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_COMPOUNDING: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MODEL: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    E_COMMERCE_SALE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RG_23_DCENVAT_CREDIT_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLACED_IN_SERVICE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLA_ENTRY_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_PACKING_SLIP_QUANTITY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SERVICE_CODE_TABLE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ABATEMENT_PERCENT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_TABLE_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      TaxModuleType,
      true,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR_REGULATED: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_INVOICE_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMISSIONARATE_CUSTOMER_MASTER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKED_SETTLE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLA_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CATEGORY: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      ServiceCategoryIn,
      true,
      true
    >;
    NON_BUSINESS_USAGE_PERCENTAGE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMS_DIRECTION: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      DirectionIn,
      true,
      true
    >;
    ABATEMENT_CERTIFICATE_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_REGISTRATION_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RG_23_AI_ID_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFERRED_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_CALCULATION_DATE_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      CustomerCalculationDateTypeIn,
      true,
      true
    >;
    SOURCE_TAX_AMOUNT_CUR: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalType,
      true,
      true
    >;
    COMMISSIONARATE_VENDOR_MASTER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_LOCATION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RG_23_CI_ID_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_ADDRESS: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_REC_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MISC_CHARGE_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_ADDRESS: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLY_EXCISE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOGISTICS_ADDRESS_STATE_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_FOB_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_PERIOD: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RG_23_AI_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_INVOICE_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXEMPT: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_RETAIL_PRICE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RG_23_AII_ID_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CALCULATION_DATE_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      TaxCalculationDateType,
      true,
      true
    >;
    SOURCE_CURRENCY_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_BILL_OF_ENTRY_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIPT_LIST_QUANTITY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CLAIM_PERCENTAGE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MERCHANT_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_TAX_REGULATION_AMOUNT_CUR: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_TAX_INFORMATION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITC_CATEGORY: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      ItcCategoryIn,
      true,
      true
    >;
    TAX_DIRECTION: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      TaxDirection,
      true,
      true
    >;
    ORIGIN: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      TaxOrigin,
      true,
      true
    >;
    PURCHASE_PACKING_SLIP_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_INVOICE_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSACTION_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LICENSE_PLATE_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_REPORT_HIERARCHY_NODE_IN: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_CALCULATION_DATE_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      TaxCalculationDateType,
      true,
      true
    >;
    TAX_VALUE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE_REGISTER: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      ExciseRegisterIn,
      true,
      true
    >;
    VENDOR_CALCULATION_DATE_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      VendorCalculationDateTypeIn,
      true,
      true
    >;
    E_COMMRCE_OPERATOR_GSTIN: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COLOR: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSE_CHARGE_PERCENTAGE_IN: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_DEF_LINE_REF_REC_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMS_CHARGE_AS_EXPENSE_PERCENT_IN: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYM_MODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRAP_QUANTITY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECOVERABLE_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_BANK_ADDRESS: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKING_LIST_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GTA_SERVICE_CATEGORY: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      GtaServiceCategoryIn,
      true,
      true
    >;
    TRANSFERRED: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETENTION_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RG_23_CII_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RANGE_COMPANY_INFORMATION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_SCHEDULE_NAME: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COST_LEDGER_VOUCHER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_ON_INVENTORY_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLA_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNMENT_NOTE_NUM: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RG_23_A_DEFERRED_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANK_REF_NUM: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NON_RECOVERABLE_AMT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_ACCOUNTING_CODE_TABLE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_INVOICE_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MANUFACTURED_QUANTITY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMS_TARIFF_CODE_TABLE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCHASE_PACKING_SLIP_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY_FORM_SERIES: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_CURRENCY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_QUANTITY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIRECT_SETTLEMENT: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      DirectSettlementIn,
      true,
      true
    >;
    RECEIPT_LIST_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMS_IMPORT_INVOICE_NUMBER_TABLE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SALES_ORDER_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY_BANK_NAME: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DSA_ID_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DSA_QUANTITY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RG_23_CI_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RANGE_CUSTOMER_MASTER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NAME: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_BASE_AMOUNT_CUR: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYABLE_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTED_TAX_AMOUT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_CURRENCY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT_SECONDARY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIVISION_COMPANY_INFORMATION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_DEFEREMENT_EXT_TABLE_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_REC_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMS_CIF_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_DEFERMENT_EXT_REC_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RG_23_C_DEFERRED_AMOUNT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PICKING_LIST_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECEIPT_LIST_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_CURRENCY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RG_23_CII_ID_DATE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_PACKING_SLIP_QUANTITY: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BATCH_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_STATE_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAKE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMS_BILL_OF_ENTRY_NUMBER_TABLE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPANY_FORM_NUMBER: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSESSABLE_VALUE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RG_23_AII_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_MAXIMUM_RETAIL_PRICE: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_LOCATION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMS_LANDING_CHARGES_PCT: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMISSIONARATE_COMPANY_INFORMATION: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      PriceTypeIn,
      true,
      true
    >;
    EXCISE_REGISTER_TYPE: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_COMMERCE_OPERATOR: OrderableEdmTypeField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SCRAP: EnumField<
      TaxTransInBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxTransInBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link retentionPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETENTION_PCT: fieldBuilder.buildEdmTypeField(
          'RetentionPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link divisionVendorMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION_VENDOR_MASTER: fieldBuilder.buildEdmTypeField(
          'DivisionVendorMaster',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exciseRecordType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_RECORD_TYPE: fieldBuilder.buildEnumField(
          'ExciseRecordType',
          ExciseRecordTypeIn,
          true
        ),
        /**
         * Static representation of the {@link registrationNumberType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER_TYPE: fieldBuilder.buildEnumField(
          'RegistrationNumberType',
          ExciseTypeIn,
          true
        ),
        /**
         * Static representation of the {@link rg23DcenvatCreditTransferredAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_DCENVAT_CREDIT_TRANSFERRED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RG23DCENVATCreditTransferredAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minorHead} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINOR_HEAD: fieldBuilder.buildEdmTypeField(
          'MinorHead',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxFormTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_FORM_TYPES: fieldBuilder.buildEdmTypeField(
          'SalesTaxFormTypes',
          'Edm.Int64',
          false
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
         * Static representation of the {@link purchaseOrderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link challanNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHALLAN_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChallanNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link configuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIGURATION: fieldBuilder.buildEdmTypeField(
          'Configuration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ssiValidityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SSI_VALIDITY_DATE: fieldBuilder.buildEdmTypeField(
          'SSIValidityDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exciseCreditEntryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_CREDIT_ENTRY_ID: fieldBuilder.buildEdmTypeField(
          'ExciseCreditEntryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickingListQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_LIST_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PickingListQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link party} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY: fieldBuilder.buildEdmTypeField('Party', 'Edm.Int64', false),
        /**
         * Static representation of the {@link billOfMaterialJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialJournalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link challanDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHALLAN_DATE: fieldBuilder.buildEdmTypeField(
          'ChallanDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exciseEntryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_ENTRY_ID: fieldBuilder.buildEdmTypeField(
          'ExciseEntryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInterState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTER_STATE: fieldBuilder.buildEnumField(
          'IsInterState',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link debitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DebitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dsaIdNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DSA_ID_NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'DSAIdNumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'SalesOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rangeVendorMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANGE_VENDOR_MASTER: fieldBuilder.buildEdmTypeField(
          'RangeVendorMaster',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedAssetSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'FixedAssetSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.String', true),
        /**
         * Static representation of the {@link taxOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ORIGIN: fieldBuilder.buildEdmTypeField(
          'TaxOrigin',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custVendFormNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_FORM_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustVendFormNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventGtdIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_GTD_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventGTDId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rg23DNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_D_NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'RG23DNumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bsrCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BSR_CODE: fieldBuilder.buildEdmTypeField('BSRCode', 'Edm.String', true),
        /**
         * Static representation of the {@link taxVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_VOUCHER: fieldBuilder.buildEdmTypeField(
          'TaxVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionOrderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'ProductionOrderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxComponentTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COMPONENT_TABLE: fieldBuilder.buildEdmTypeField(
          'TaxComponentTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link plaIdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLA_ID_DATE: fieldBuilder.buildEdmTypeField(
          'PLAIdDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link custVendFormSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_FORM_SERIES: fieldBuilder.buildEdmTypeField(
          'CustVendFormSeries',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxReportPeriodIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORT_PERIOD_IN: fieldBuilder.buildEdmTypeField(
          'TaxReportPeriod_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxTransVatRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TRANS_VAT_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'TaxTransVATRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link assetLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_LOCATION: fieldBuilder.buildEdmTypeField(
          'AssetLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField('TaxType', TaxTypeIn, true),
        /**
         * Static representation of the {@link customsPreferentialValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_PREFERENTIAL_VALUE: fieldBuilder.buildEdmTypeField(
          'CustomsPreferentialValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assessableValueAccountingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSABLE_VALUE_ACCOUNTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AssessableValueAccountingCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exemptCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_CODE: fieldBuilder.buildEdmTypeField(
          'ExemptCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'CompanyAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxLedgerAccountGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_LEDGER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxLedgerAccountGroup',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ssiVendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SSI_VENDOR: fieldBuilder.buildEnumField('SSIVendor', NoYes, true),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customsExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'CustomsExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatDefLineTransferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DEF_LINE_TRANSFERRED: fieldBuilder.buildEnumField(
          'VATDefLineTransferred',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link vatGoodsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_GOODS_TYPE: fieldBuilder.buildEnumField(
          'VATGoodsType',
          VatGoodsTypeIn,
          true
        ),
        /**
         * Static representation of the {@link customerTaxInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TAX_INFORMATION: fieldBuilder.buildEdmTypeField(
          'CustomerTaxInformation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link divisionCustomerMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION_CUSTOMER_MASTER: fieldBuilder.buildEdmTypeField(
          'DivisionCustomerMaster',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link disposalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_TYPE: fieldBuilder.buildEnumField(
          'DisposalType',
          DisposalTypeIn,
          true
        ),
        /**
         * Static representation of the {@link productionOrderQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_QTY: fieldBuilder.buildEdmTypeField(
          'ProductionOrderQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ITEM: fieldBuilder.buildEdmTypeField(
          'PurchaseItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceRefRecID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link inventOwnerIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_OWNER_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventOwnerId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nonRecoverablePct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_RECOVERABLE_PCT: fieldBuilder.buildEdmTypeField(
          'NonRecoverablePct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expenseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExpenseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transferOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransferOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadOnInventoryPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ON_INVENTORY_PERCENT: fieldBuilder.buildEdmTypeField(
          'LoadOnInventoryPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hsnCodeTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HSN_CODE_TABLE: fieldBuilder.buildEdmTypeField(
          'HSNCodeTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isExciseWithoutDuty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXCISE_WITHOUT_DUTY: fieldBuilder.buildEnumField(
          'IsExciseWithoutDuty',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesPackingSlipNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PACKING_SLIP_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesPackingSlipNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custVendRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_VEND_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustVendRegistrationNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link customsLandingChargesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_LANDING_CHARGES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CustomsLandingChargesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link journalInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_INVOICE: fieldBuilder.buildEdmTypeField(
          'JournalInvoice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link vendInvoiceInternalDefaultGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_INTERNAL_DEFAULT_GROUP: fieldBuilder.buildEdmTypeField(
          'VendInvoiceInternalDefaultGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'InventStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'SourceTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesOrderQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_QTY: fieldBuilder.buildEdmTypeField(
          'SalesOrderQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customsShippingBillDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_SHIPPING_BILL_DATE: fieldBuilder.buildEdmTypeField(
          'CustomsShippingBillDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link creditAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CreditAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceRegulateAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REGULATE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SourceRegulateAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consignment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT: fieldBuilder.buildEnumField('Consignment', NoYes, true),
        /**
         * Static representation of the {@link inventStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exciseTariffCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_TARIFF_CODES: fieldBuilder.buildEdmTypeField(
          'ExciseTariffCodes',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link customsShippingBillNumberTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_SHIPPING_BILL_NUMBER_TABLE: fieldBuilder.buildEdmTypeField(
          'CustomsShippingBillNumberTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link billOfEntryQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_ENTRY_QTY: fieldBuilder.buildEdmTypeField(
          'BillOfEntryQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link abatementAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABATEMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AbatementAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesPackingSlipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PACKING_SLIP_DATE: fieldBuilder.buildEdmTypeField(
          'SalesPackingSlipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isCompounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMPOUNDING: fieldBuilder.buildEnumField(
          'IsCompounding',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link model} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL: fieldBuilder.buildEdmTypeField('Model', 'Edm.String', true),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link eCommerceSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_COMMERCE_SALE: fieldBuilder.buildEnumField(
          'ECommerceSale',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', true),
        /**
         * Static representation of the {@link rg23DcenvatCreditAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_DCENVAT_CREDIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RG23DCENVATCreditAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link placedInService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLACED_IN_SERVICE: fieldBuilder.buildEdmTypeField(
          'PlacedInService',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link plaEntryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLA_ENTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PLAEntryNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchasePackingSlipQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PACKING_SLIP_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchasePackingSlipQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link serviceCodeTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE_TABLE: fieldBuilder.buildEdmTypeField(
          'ServiceCodeTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link abatementPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABATEMENT_PERCENT: fieldBuilder.buildEdmTypeField(
          'AbatementPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'TransTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEnumField('Source', TaxModuleType, true),
        /**
         * Static representation of the {@link sourceBaseAmountCurRegulated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BASE_AMOUNT_CUR_REGULATED: fieldBuilder.buildEdmTypeField(
          'SourceBaseAmountCurRegulated',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link journalInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'JournalInvoiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link commissionarateCustomerMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSIONARATE_CUSTOMER_MASTER: fieldBuilder.buildEdmTypeField(
          'CommissionarateCustomerMaster',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markedSettle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKED_SETTLE: fieldBuilder.buildEnumField('MarkedSettle', NoYes, true),
        /**
         * Static representation of the {@link plaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLA_ID: fieldBuilder.buildEdmTypeField('PLAId', 'Edm.String', true),
        /**
         * Static representation of the {@link serviceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CATEGORY: fieldBuilder.buildEnumField(
          'ServiceCategory',
          ServiceCategoryIn,
          true
        ),
        /**
         * Static representation of the {@link nonBusinessUsagePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_BUSINESS_USAGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'NonBusinessUsagePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customsDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DIRECTION: fieldBuilder.buildEnumField(
          'CustomsDirection',
          DirectionIn,
          true
        ),
        /**
         * Static representation of the {@link abatementCertificateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABATEMENT_CERTIFICATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'AbatementCertificateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CompanyRegistrationNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link rg23AiIdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_AI_ID_DATE: fieldBuilder.buildEdmTypeField(
          'RG23AIIdDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deferredAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DeferredAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerCalculationDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CALCULATION_DATE_TYPE: fieldBuilder.buildEnumField(
          'CustomerCalculationDateType',
          CustomerCalculationDateTypeIn,
          true
        ),
        /**
         * Static representation of the {@link sourceTaxAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TAX_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SourceTaxAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          LedgerJournalType,
          true
        ),
        /**
         * Static representation of the {@link commissionarateVendorMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSIONARATE_VENDOR_MASTER: fieldBuilder.buildEdmTypeField(
          'CommissionarateVendorMaster',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_LOCATION: fieldBuilder.buildEdmTypeField(
          'VendorLocation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link rg23CiIdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_CI_ID_DATE: fieldBuilder.buildEdmTypeField(
          'RG23CIIdDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendorAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ADDRESS: fieldBuilder.buildEdmTypeField(
          'VendorAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SourceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link miscChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MISC_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MiscChargeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ADDRESS: fieldBuilder.buildEdmTypeField(
          'CustomerAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applyExcise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_EXCISE: fieldBuilder.buildEnumField('ApplyExcise', NoYes, true),
        /**
         * Static representation of the {@link logisticsAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'LogisticsAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR: fieldBuilder.buildEdmTypeField('Vendor', 'Edm.String', true),
        /**
         * Static representation of the {@link customsFobAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_FOB_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CustomsFOBAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD: fieldBuilder.buildEdmTypeField(
          'TaxPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rg23AiNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_AI_NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'RG23AINumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'JournalInvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT: fieldBuilder.buildEnumField('Exempt', NoYes, true),
        /**
         * Static representation of the {@link maximumRetailPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_RETAIL_PRICE: fieldBuilder.buildEdmTypeField(
          'MaximumRetailPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rg23AiiIdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_AII_ID_DATE: fieldBuilder.buildEdmTypeField(
          'RG23AIIIdDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link calculationDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_DATE_TYPE: fieldBuilder.buildEnumField(
          'CalculationDateType',
          TaxCalculationDateType,
          true
        ),
        /**
         * Static representation of the {@link sourceCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'SourceCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsBillOfEntryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_BILL_OF_ENTRY_DATE: fieldBuilder.buildEdmTypeField(
          'CustomsBillOfEntryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link receiptListQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_LIST_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReceiptListQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link claimPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ClaimPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link merchantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT_ID: fieldBuilder.buildEdmTypeField(
          'MerchantID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsTaxRegulationAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_TAX_REGULATION_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'CustomsTaxRegulationAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendorTaxInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_TAX_INFORMATION: fieldBuilder.buildEdmTypeField(
          'VendorTaxInformation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link itcCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITC_CATEGORY: fieldBuilder.buildEnumField(
          'ITCCategory',
          ItcCategoryIn,
          true
        ),
        /**
         * Static representation of the {@link taxDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DIRECTION: fieldBuilder.buildEnumField(
          'TaxDirection',
          TaxDirection,
          true
        ),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEnumField('Origin', TaxOrigin, true),
        /**
         * Static representation of the {@link purchasePackingSlipNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PACKING_SLIP_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchasePackingSlipNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'PurchaseInvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transactionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link licensePlateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_ID: fieldBuilder.buildEdmTypeField(
          'LicensePlateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxReportHierarchyNodeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORT_HIERARCHY_NODE_IN: fieldBuilder.buildEdmTypeField(
          'TaxReportHierarchyNode_IN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link taxCalculationDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CALCULATION_DATE_TYPE: fieldBuilder.buildEnumField(
          'TaxCalculationDateType',
          TaxCalculationDateType,
          true
        ),
        /**
         * Static representation of the {@link taxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_VALUE: fieldBuilder.buildEdmTypeField(
          'TaxValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true),
        /**
         * Static representation of the {@link exciseRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_REGISTER: fieldBuilder.buildEnumField(
          'ExciseRegister',
          ExciseRegisterIn,
          true
        ),
        /**
         * Static representation of the {@link vendorCalculationDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_CALCULATION_DATE_TYPE: fieldBuilder.buildEnumField(
          'VendorCalculationDateType',
          VendorCalculationDateTypeIn,
          true
        ),
        /**
         * Static representation of the {@link eCommrceOperatorGstin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_COMMRCE_OPERATOR_GSTIN: fieldBuilder.buildEdmTypeField(
          'ECommrceOperatorGSTIN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link color} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR: fieldBuilder.buildEdmTypeField('Color', 'Edm.String', true),
        /**
         * Static representation of the {@link reverseChargePercentageIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_CHARGE_PERCENTAGE_IN: fieldBuilder.buildEdmTypeField(
          'ReverseChargePercentage_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatDefLineRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DEF_LINE_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'VATDefLineRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link customsChargeAsExpensePercentIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_CHARGE_AS_EXPENSE_PERCENT_IN: fieldBuilder.buildEdmTypeField(
          'CustomsChargeAsExpensePercent_IN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_MODE: fieldBuilder.buildEdmTypeField(
          'PaymMode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scrapQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ScrapQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recoverableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOVERABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecoverableAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link journal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL: fieldBuilder.buildEdmTypeField('Journal', 'Edm.String', true),
        /**
         * Static representation of the {@link invoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyBankAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_BANK_ADDRESS: fieldBuilder.buildEdmTypeField(
          'CompanyBankAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickingListNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_LIST_NUMBER: fieldBuilder.buildEdmTypeField(
          'PickingListNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gtaServiceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GTA_SERVICE_CATEGORY: fieldBuilder.buildEnumField(
          'GTAServiceCategory',
          GtaServiceCategoryIn,
          true
        ),
        /**
         * Static representation of the {@link transferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERRED: fieldBuilder.buildEnumField('Transferred', NoYes, true),
        /**
         * Static representation of the {@link retentionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETENTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RetentionAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rg23CiiNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_CII_NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'RG23CIINumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rangeCompanyInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANGE_COMPANY_INFORMATION: fieldBuilder.buildEdmTypeField(
          'RangeCompanyInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatScheduleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_SCHEDULE_NAME: fieldBuilder.buildEdmTypeField(
          'VATScheduleName',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link costLedgerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_LEDGER_VOUCHER: fieldBuilder.buildEdmTypeField(
          'CostLedgerVoucher',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadOnInventoryAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ON_INVENTORY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LoadOnInventoryAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plaAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLA_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PLAAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consignmentNoteNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_NOTE_NUM: fieldBuilder.buildEdmTypeField(
          'ConsignmentNoteNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rg23ADeferredAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_A_DEFERRED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RG23ADeferredAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankRefNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_REF_NUM: fieldBuilder.buildEdmTypeField(
          'BankRefNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nonRecoverableAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_RECOVERABLE_AMT: fieldBuilder.buildEdmTypeField(
          'NonRecoverableAmt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceAccountingCodeTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ACCOUNTING_CODE_TABLE: fieldBuilder.buildEdmTypeField(
          'ServiceAccountingCodeTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesInvoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'SalesInvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link manufacturedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ManufacturedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customsTariffCodeTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_TARIFF_CODE_TABLE: fieldBuilder.buildEdmTypeField(
          'CustomsTariffCodeTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchasePackingSlipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_PACKING_SLIP_DATE: fieldBuilder.buildEdmTypeField(
          'PurchasePackingSlipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link companyFormSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_FORM_SERIES: fieldBuilder.buildEdmTypeField(
          'CompanyFormSeries',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customsCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_CURRENCY: fieldBuilder.buildEdmTypeField(
          'CustomsCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link directSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_SETTLEMENT: fieldBuilder.buildEnumField(
          'DirectSettlement',
          DirectSettlementIn,
          true
        ),
        /**
         * Static representation of the {@link receiptListDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_LIST_DATE: fieldBuilder.buildEdmTypeField(
          'ReceiptListDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customsImportInvoiceNumberTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_IMPORT_INVOICE_NUMBER_TABLE: fieldBuilder.buildEdmTypeField(
          'CustomsImportInvoiceNumberTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link salesOrderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'SalesOrderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link companyBankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_BANK_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyBankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dsaIdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DSA_ID_DATE: fieldBuilder.buildEdmTypeField(
          'DSAIdDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dsaQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DSA_QUANTITY: fieldBuilder.buildEdmTypeField(
          'DSAQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rg23CiNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_CI_NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'RG23CINumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rangeCustomerMaster} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANGE_CUSTOMER_MASTER: fieldBuilder.buildEdmTypeField(
          'RangeCustomerMaster',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NAME: fieldBuilder.buildEdmTypeField(
          'BankName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceBaseAmountCur} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BASE_AMOUNT_CUR: fieldBuilder.buildEdmTypeField(
          'SourceBaseAmountCur',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link payableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PayableAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postedTaxAmout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_TAX_AMOUT: fieldBuilder.buildEdmTypeField(
          'PostedTaxAmout',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TaxCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmountSecondary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_SECONDARY: fieldBuilder.buildEdmTypeField(
          'TaxAmountSecondary',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link divisionCompanyInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION_COMPANY_INFORMATION: fieldBuilder.buildEdmTypeField(
          'DivisionCompanyInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatDeferementExtTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DEFEREMENT_EXT_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'VATDeferementExtTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link transRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'TransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link customsCifAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_CIF_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CustomsCIFAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vatDefermentExtRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DEFERMENT_EXT_REC_ID: fieldBuilder.buildEdmTypeField(
          'VATDefermentExtRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link rg23CDeferredAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_C_DEFERRED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RG23CDeferredAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pickingListDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_LIST_DATE: fieldBuilder.buildEdmTypeField(
          'PickingListDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link receiptListNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_LIST_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReceiptListNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_CURRENCY: fieldBuilder.buildEdmTypeField(
          'VoucherCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rg23CiiIdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_CII_ID_DATE: fieldBuilder.buildEdmTypeField(
          'RG23CIIIdDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesPackingSlipQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PACKING_SLIP_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesPackingSlipQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link batchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'BatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumptionStateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_STATE_CODE: fieldBuilder.buildEdmTypeField(
          'ConsumptionStateCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link make} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAKE: fieldBuilder.buildEdmTypeField('Make', 'Edm.String', true),
        /**
         * Static representation of the {@link customsBillOfEntryNumberTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_BILL_OF_ENTRY_NUMBER_TABLE: fieldBuilder.buildEdmTypeField(
          'CustomsBillOfEntryNumberTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link companyFormNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_FORM_NUMBER: fieldBuilder.buildEdmTypeField(
          'CompanyFormNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assessableValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSABLE_VALUE: fieldBuilder.buildEdmTypeField(
          'AssessableValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rg23AiiNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RG_23_AII_NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'RG23AIINumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalMaximumRetailPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MAXIMUM_RETAIL_PRICE: fieldBuilder.buildEdmTypeField(
          'TotalMaximumRetailPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_LOCATION: fieldBuilder.buildEdmTypeField(
          'CustomerLocation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link customsLandingChargesPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_LANDING_CHARGES_PCT: fieldBuilder.buildEdmTypeField(
          'CustomsLandingChargesPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link commissionarateCompanyInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMISSIONARATE_COMPANY_INFORMATION: fieldBuilder.buildEdmTypeField(
          'CommissionarateCompanyInformation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TYPE: fieldBuilder.buildEnumField('PriceType', PriceTypeIn, true),
        /**
         * Static representation of the {@link exciseRegisterType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE_REGISTER_TYPE: fieldBuilder.buildEnumField(
          'ExciseRegisterType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link eCommerceOperator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_COMMERCE_OPERATOR: fieldBuilder.buildEdmTypeField(
          'ECommerceOperator',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isScrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SCRAP: fieldBuilder.buildEnumField('IsScrap', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxTransInBiEntities)
      };
    }

    return this._schema;
  }
}
