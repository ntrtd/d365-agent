/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendInvoiceInfoLineBiEntities } from './VendInvoiceInfoLineBiEntities';
import { VendInvoiceInfoLineBiEntitiesRequestBuilder } from './VendInvoiceInfoLineBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { PurchInvoiceLineType } from './PurchInvoiceLineType';
import { VendInvoiceRequestStatus } from './VendInvoiceRequestStatus';
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
export class VendInvoiceInfoLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendInvoiceInfoLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): VendInvoiceInfoLineBiEntitiesApi<DeSerializersT> {
    return new VendInvoiceInfoLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendInvoiceInfoLineBiEntities;

  requestBuilder(): VendInvoiceInfoLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new VendInvoiceInfoLineBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendInvoiceInfoLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendInvoiceInfoLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendInvoiceInfoLineBiEntities<DeSerializersT>,
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
    typeof VendInvoiceInfoLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendInvoiceInfoLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADVANCE_APPLICATION_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VEND_DIRECTIVE_PSN: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DELIVERY_POSTAL_ADDRESS: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PURCH_COMMITMENT_LINE_PSN: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CLOSED: EnumField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMAIN_BEFORE_INVENT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PSA_RELEASE_PERCENT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_MARKUP: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYROLL_LEDGER_DIMENSION_VALUES_JSON: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CALCULATION_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_TABLE_REF: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_PURCH_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_UNIT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CALCULATED_UNIT_PRICE: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_AUTOGENERATED: EnumField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_GROUP: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSA_IS_FINAL: EnumField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_DISC: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTI_LN_DISC: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_LINE_LINE_NUMBER: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_1099_BOX_DETAIL: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_RECEIVE_NOW: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGREEMENT_LINE_PSN: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_1099_FIELDS: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ORIG_COUNTRY_REGION_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_TYPE: EnumField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      PurchInvoiceLineType,
      true,
      true
    >;
    REMAIN_AFTER: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PSA_RETAINAGE_PERCENT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_ACCOUNT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_PRICE: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTY_ORIG_DEST: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_STATE_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_REF_REC_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REMAIN_BEFORE: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PSA_RELEASE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_REMAIN_AFTER: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_STATE: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PDS_CW_REMAIN_BEFORE: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUEST_STATUS: EnumField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      VendInvoiceRequestStatus,
      true,
      true
    >;
    PSA_RETAINAGE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_LINE_REC_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARM_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_WITHHOLD_ITEM_GROUP_HEADING_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PSA_RETAINAGE_BALANCE: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_1099_STATE_AMOUNT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTRASTAT_COMMODITY: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CHANGED_MANUALLY: EnumField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCUREMENT_CATEGORY: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_1099_AMOUNT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERRIDE_SALES_TAX: EnumField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REMAIN_AFTER_INVENT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTI_LN_PERCENT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVE_NOW: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STAT_PROC_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAIN_BEFORE_INVENT_PHYSICAL: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TABLE_REF_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_RESERVATION_LINE_PSN: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSACTION_CODE: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_NOW: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_PERCENT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_LINE_NUM: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORT: OrderableEdmTypeField<
      VendInvoiceInfoLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendInvoiceInfoLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link advanceApplicationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_APPLICATION_ID: fieldBuilder.buildEdmTypeField(
          'AdvanceApplicationId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link vendDirectivePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_DIRECTIVE_PSN: fieldBuilder.buildEdmTypeField(
          'VendDirective_PSN',
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
         * Static representation of the {@link purchCommitmentLinePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_COMMITMENT_LINE_PSN: fieldBuilder.buildEdmTypeField(
          'PurchCommitmentLine_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link closed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED: fieldBuilder.buildEnumField('closed', NoYes, true),
        /**
         * Static representation of the {@link remainBeforeInvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_BEFORE_INVENT: fieldBuilder.buildEdmTypeField(
          'RemainBeforeInvent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link psaReleasePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_RELEASE_PERCENT: fieldBuilder.buildEdmTypeField(
          'PSAReleasePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT: fieldBuilder.buildEdmTypeField(
          'Transport',
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
         * Static representation of the {@link payrollLedgerDimensionValuesJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_LEDGER_DIMENSION_VALUES_JSON: fieldBuilder.buildEdmTypeField(
          'PayrollLedgerDimensionValuesJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCalculationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CALCULATION_ID: fieldBuilder.buildEdmTypeField(
          'PDSCalculationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonTableRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_TABLE_REF: fieldBuilder.buildEdmTypeField(
          'ReasonTableRef',
          'Edm.Int64',
          false
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
         * Static representation of the {@link origPurchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_PURCH_ID: fieldBuilder.buildEdmTypeField(
          'OrigPurchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCalculatedUnitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CALCULATED_UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'PDSCalculatedUnitPrice',
          'Edm.Decimal',
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
         * Static representation of the {@link isAutogenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTOGENERATED: fieldBuilder.buildEnumField(
          'IsAutogenerated',
          NoYes,
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
         * Static representation of the {@link priceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PriceUnit',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link taxWithholdGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxWithholdGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psaIsFinal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_IS_FINAL: fieldBuilder.buildEnumField('PSAIsFinal', NoYes, true),
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
         * Static representation of the {@link multiLnDisc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LN_DISC: fieldBuilder.buildEdmTypeField(
          'MultiLnDisc',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseLineLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_LINE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseLineLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link tax1099BoxDetail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_BOX_DETAIL: fieldBuilder.buildEdmTypeField(
          'Tax1099BoxDetail',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCwReceiveNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_RECEIVE_NOW: fieldBuilder.buildEdmTypeField(
          'PdsCWReceiveNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link agreementLinePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_LINE_PSN: fieldBuilder.buildEdmTypeField(
          'AgreementLine_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link tax1099Fields} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_FIELDS: fieldBuilder.buildEdmTypeField(
          'Tax1099Fields',
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
         * Static representation of the {@link origCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'OrigCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          PurchInvoiceLineType,
          true
        ),
        /**
         * Static representation of the {@link remainAfter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_AFTER: fieldBuilder.buildEdmTypeField(
          'RemainAfter',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link psaRetainagePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_RETAINAGE_PERCENT: fieldBuilder.buildEdmTypeField(
          'PSARetainagePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'OrderAccount',
          'Edm.String',
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
         * Static representation of the {@link countyOrigDest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ORIG_DEST: fieldBuilder.buildEdmTypeField(
          'CountyOrigDest',
          'Edm.String',
          true
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
         * Static representation of the {@link addressRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link remainBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_BEFORE: fieldBuilder.buildEdmTypeField(
          'RemainBefore',
          'Edm.Decimal',
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
         * Static representation of the {@link psaReleaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_RELEASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PSAReleaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsCwRemainAfter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_REMAIN_AFTER: fieldBuilder.buildEdmTypeField(
          'PdsCWRemainAfter',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099State} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE: fieldBuilder.buildEdmTypeField(
          'Tax1099State',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pdsCwRemainBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_REMAIN_BEFORE: fieldBuilder.buildEdmTypeField(
          'PdsCWRemainBefore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_STATUS: fieldBuilder.buildEnumField(
          'RequestStatus',
          VendInvoiceRequestStatus,
          true
        ),
        /**
         * Static representation of the {@link psaRetainageAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_RETAINAGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PSARetainageAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'PurchLineRecId',
          'Edm.Int64',
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
         * Static representation of the {@link parmId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARM_ID: fieldBuilder.buildEdmTypeField('ParmId', 'Edm.String', true),
        /**
         * Static representation of the {@link taxWithholdItemGroupHeadingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_ITEM_GROUP_HEADING_ID: fieldBuilder.buildEdmTypeField(
          'TaxWithholdItemGroupHeadingId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link psaRetainageBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_RETAINAGE_BALANCE: fieldBuilder.buildEdmTypeField(
          'PSARetainageBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tax1099StateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_STATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099StateAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link sourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link changedManually} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGED_MANUALLY: fieldBuilder.buildEnumField(
          'changedManually',
          NoYes,
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'currencyCode',
          'Edm.String',
          true
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link tax1099Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Tax1099Amount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link remainAfterInvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_AFTER_INVENT: fieldBuilder.buildEdmTypeField(
          'RemainAfterInvent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link multiLnPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTI_LN_PERCENT: fieldBuilder.buildEdmTypeField(
          'MultiLnPercent',
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
         * Static representation of the {@link receiveNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVE_NOW: fieldBuilder.buildEdmTypeField(
          'ReceiveNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statProcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAT_PROC_ID: fieldBuilder.buildEdmTypeField(
          'StatProcId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainBeforeInventPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_BEFORE_INVENT_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'RemainBeforeInventPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tableRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_REF_ID: fieldBuilder.buildEdmTypeField(
          'TableRefId',
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
         * Static representation of the {@link transactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_NOW: fieldBuilder.buildEdmTypeField(
          'InventNow',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link invoiceLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'InvoiceLineNum',
          'Edm.Decimal',
          false
        ),
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
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendInvoiceInfoLineBiEntities)
      };
    }

    return this._schema;
  }
}
