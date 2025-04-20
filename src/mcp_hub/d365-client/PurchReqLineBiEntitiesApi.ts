/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchReqLineBiEntities } from './PurchReqLineBiEntities';
import { PurchReqLineBiEntitiesRequestBuilder } from './PurchReqLineBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { PurchReqRequisitionStatus } from './PurchReqRequisitionStatus';
import { RequisitionPurpose } from './RequisitionPurpose';
import { UnknownNoYes } from './UnknownNoYes';
import { PurchReqLineType } from './PurchReqLineType';
import { PurchReqRfqRequirement } from './PurchReqRfqRequirement';
import { PurchReqConsolidationStatus } from './PurchReqConsolidationStatus';
import { PurchReqPriceDiscountTransfer } from './PurchReqPriceDiscountTransfer';
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
export class PurchReqLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PurchReqLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): PurchReqLineBiEntitiesApi<DeSerializersT> {
    return new PurchReqLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchReqLineBiEntities;

  requestBuilder(): PurchReqLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new PurchReqLineBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchReqLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchReqLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchReqLineBiEntities<DeSerializersT>,
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
    typeof PurchReqLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchReqLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCH_REQ_TABLE: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUSINESS_JUSTIFICATION: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_CATEGORY_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_REF_REC_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VEND_ACCOUNT_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIM_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_QTY: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRE_PAYMENT_DETAILS: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_ITEM_GROUP_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_RFQ_CASE_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_GROUP_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_OPERATING_UNIT: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_SUPPLIER_AUX_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_DATE: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MODIFIED: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_RFQ_CASE_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUISITION_STATUS: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchReqRequisitionStatus,
      true,
      true
    >;
    PURCH_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUISITION_PURPOSE: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      RequisitionPurpose,
      true,
      true
    >;
    PROJ_TAX_ITEM_GROUP_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_MARKUP: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ID_NON_CATALOG: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_RESERVATION_LINE_PSN: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVITY_NUMBER_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_REF_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ATTENTION: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CFOP_TABLE_BR: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROCUREMENT_CATEGORY: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_SALES_PRICE: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRE_ENCUMBRANCE_REQUIRED: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_COMPLETE: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CFPS_TABLE_BR: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VEND_QUOTE_NUMBER: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_SALES_UNIT_OF_MEASURE: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_AGREEMENT: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_UNIT_OF_MEASURE: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_LINE_PROPERTY_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PURCHASE_ORDER_GENERATION_MANUAL: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUYING_LEGAL_ENTITY: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchReqLineType,
      true,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_REQUIREMENT: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchReqRfqRequirement,
      true,
      true
    >;
    LINE_PERCENT: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSET_GROUP: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_SERVICE_CODE_BR: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_GROUP_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TRANS_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_LINE_PROPERTY_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SAVED: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_SALES_CURRENCY_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_LINE_CREATED: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCH_REQ_CONSOLIDATION_STATUS: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchReqConsolidationStatus,
      true,
      true
    >;
    ASSET_RULE_QUALIFIER_OPTION_LOCAL: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ASSET_RULE_QUALIFIER_OPTION: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRICE_DISCOUNT_TRANSFER: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchReqPriceDiscountTransfer,
      true,
      true
    >;
    PURCH_PRICE: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_GROUP_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PREPAYMENT: EnumField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUISITIONER: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PURCH_OPERATION_TYPE_BR: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDRESS_REF_REC_ID: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_GROUP_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PurchReqLineBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link purchReqTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_REQ_TABLE: fieldBuilder.buildEdmTypeField(
          'PurchReqTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link priceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PriceUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link businessJustification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_JUSTIFICATION: fieldBuilder.buildEdmTypeField(
          'BusinessJustification',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projCategoryIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ProjCategoryIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'ReasonRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link vendAccountDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'VendAccountDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'InventDimIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_QTY: fieldBuilder.buildEdmTypeField(
          'PurchQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link prePaymentDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRE_PAYMENT_DETAILS: fieldBuilder.buildEdmTypeField(
          'PrePaymentDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projTaxItemGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_ITEM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjTaxItemGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchRfqCaseIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_RFQ_CASE_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'PurchRFQCaseIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projTaxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProjTaxGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivingOperatingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_OPERATING_UNIT: fieldBuilder.buildEdmTypeField(
          'ReceivingOperatingUnit',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchSupplierAuxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_SUPPLIER_AUX_ID: fieldBuilder.buildEdmTypeField(
          'PurchSupplierAuxId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requiredDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_DATE: fieldBuilder.buildEdmTypeField(
          'RequiredDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ProjTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MODIFIED: fieldBuilder.buildEnumField('IsModified', NoYes, true),
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
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchRfqCaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_RFQ_CASE_ID: fieldBuilder.buildEdmTypeField(
          'PurchRFQCaseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requisitionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_STATUS: fieldBuilder.buildEnumField(
          'RequisitionStatus',
          PurchReqRequisitionStatus,
          true
        ),
        /**
         * Static representation of the {@link purchIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'PurchIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requisitionPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_PURPOSE: fieldBuilder.buildEnumField(
          'RequisitionPurpose',
          RequisitionPurpose,
          true
        ),
        /**
         * Static representation of the {@link projTaxItemGroupIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_ITEM_GROUP_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ProjTaxItemGroupIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_MARKUP: fieldBuilder.buildEdmTypeField(
          'PurchMarkup',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemIdNonCatalog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID_NON_CATALOG: fieldBuilder.buildEdmTypeField(
          'ItemIdNonCatalog',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetReservationLinePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_RESERVATION_LINE_PSN: fieldBuilder.buildEdmTypeField(
          'BudgetReservationLine_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link activityNumberDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ActivityNumberDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_REF_ID: fieldBuilder.buildEdmTypeField(
          'LineRefId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link attention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTENTION: fieldBuilder.buildEdmTypeField(
          'Attention',
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
         * Static representation of the {@link cfopTableBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_TABLE_BR: fieldBuilder.buildEdmTypeField(
          'CFOPTable_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link procurementCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProcurementCategory',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'ProjSalesPrice',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link isPreEncumbranceRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRE_ENCUMBRANCE_REQUIRED: fieldBuilder.buildEnumField(
          'IsPreEncumbranceRequired',
          UnknownNoYes,
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
         * Static representation of the {@link lineComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_COMPLETE: fieldBuilder.buildEnumField('LineComplete', NoYes, true),
        /**
         * Static representation of the {@link cfpsTableBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFPS_TABLE_BR: fieldBuilder.buildEdmTypeField(
          'CFPSTable_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link vendQuoteNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_QUOTE_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendQuoteNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projSalesUnitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SALES_UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'ProjSalesUnitOfMeasure',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'PurchAgreement',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link purchUnitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'PurchUnitOfMeasure',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link deliveryPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'DeliveryPostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link externalItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjLinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPurchaseOrderGenerationManual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_ORDER_GENERATION_MANUAL: fieldBuilder.buildEnumField(
          'IsPurchaseOrderGenerationManual',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link buyingLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYING_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'BuyingLegalEntity',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          PurchReqLineType,
          true
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link rfqRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_REQUIREMENT: fieldBuilder.buildEnumField(
          'RFQRequirement',
          PurchReqRfqRequirement,
          true
        ),
        /**
         * Static representation of the {@link linePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PERCENT: fieldBuilder.buildEdmTypeField(
          'LinePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assetGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP: fieldBuilder.buildEdmTypeField(
          'AssetGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link inventLocationIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'InventLocationIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link assetGroupDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'AssetGroupDataArea',
          'Edm.String',
          true
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
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link projTransIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ProjTransIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projLinePropertyIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LINE_PROPERTY_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ProjLinePropertyIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSaved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SAVED: fieldBuilder.buildEnumField('IsSaved', NoYes, true),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
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
         * Static representation of the {@link projSalesCurrencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SALES_CURRENCY_ID: fieldBuilder.buildEdmTypeField(
          'ProjSalesCurrencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link taxItemGroupDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'TaxItemGroupDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchLineCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_LINE_CREATED: fieldBuilder.buildEnumField(
          'PurchLineCreated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchReqConsolidationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_REQ_CONSOLIDATION_STATUS: fieldBuilder.buildEnumField(
          'PurchReqConsolidationStatus',
          PurchReqConsolidationStatus,
          true
        ),
        /**
         * Static representation of the {@link assetRuleQualifierOptionLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_RULE_QUALIFIER_OPTION_LOCAL: fieldBuilder.buildEdmTypeField(
          'AssetRuleQualifierOptionLocal',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link assetRuleQualifierOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_RULE_QUALIFIER_OPTION: fieldBuilder.buildEdmTypeField(
          'AssetRuleQualifierOption',
          'Edm.Int64',
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
         * Static representation of the {@link accountingDistributionTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionTemplate',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link priceDiscountTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DISCOUNT_TRANSFER: fieldBuilder.buildEnumField(
          'PriceDiscountTransfer',
          PurchReqPriceDiscountTransfer,
          true
        ),
        /**
         * Static representation of the {@link purchPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_PRICE: fieldBuilder.buildEdmTypeField(
          'PurchPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxGroupDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'TaxGroupDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ProjIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverrideSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPrepayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PREPAYMENT: fieldBuilder.buildEnumField('IsPrepayment', NoYes, true),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link requisitioner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITIONER: fieldBuilder.buildEdmTypeField(
          'Requisitioner',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lineDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DISC: fieldBuilder.buildEdmTypeField(
          'LineDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'InventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPurchOperationTypeBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PURCH_OPERATION_TYPE_BR: fieldBuilder.buildEdmTypeField(
          'SalesPurchOperationType_BR',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link addressRefTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link addressRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link itemIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ItemIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projTaxGroupIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_GROUP_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ProjTaxGroupIdDataArea',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchReqLineBiEntities)
      };
    }

    return this._schema;
  }
}
