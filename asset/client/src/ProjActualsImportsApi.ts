/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjActualsImports } from './ProjActualsImports';
import { ProjActualsImportsRequestBuilder } from './ProjActualsImportsRequestBuilder';
import { ProjCdsTransType } from './ProjCdsTransType';
import { NoYes } from './NoYes';
import { ProjBillingType } from './ProjBillingType';
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
export class ProjActualsImportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjActualsImports<DeSerializersT>, DeSerializersT>
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
  ): ProjActualsImportsApi<DeSerializersT> {
    return new ProjActualsImportsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjActualsImports;

  requestBuilder(): ProjActualsImportsRequestBuilder<DeSerializersT> {
    return new ProjActualsImportsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjActualsImports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjActualsImports<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjActualsImports<DeSerializersT>,
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
    typeof ProjActualsImports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjActualsImports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTUALS_IMPORT_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXTERNAL_DESCRIPTION: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_REFERENCE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCING_COMPANY: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS_REASON: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OWNING_USER: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PROJECT_DATA_AREA_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      ProjCdsTransType,
      true,
      true
    >;
    EXTERNAL_ORIGIN_REFERENCE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUBCONTRACT_LINE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_NUMBER: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE_MST: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_CLASSIFICATION: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BOOKABLE_RESOURCE_NAME: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CONTRACTING_UNIT: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SUB_CON_INVOICE_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_JOURNALIZED: EnumField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_TAX_AMOUNT: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESOURCE_OPERATION_UNIT_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    EXCHANGE_RATE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_LINE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCHANGE_RATE_DATE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CATEGORY_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJ_ACTUALS_IMPORT_SYNC: EnumField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TASK_NUMBER: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_STATUS_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OWNING_BUSINESS_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADJUSTMENT_STATUS: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_PROPOSAL_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_LINE_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_TYPE: EnumField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      ProjBillingType,
      true,
      true
    >;
    MATCHED_VENDOR_INVOICE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNDING_SOURCE: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_INVOICE_LINE_PROJ_TRANS_ID: OrderableEdmTypeField<
      ProjActualsImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjActualsImports<DeSerializers>>;
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
         * Static representation of the {@link actualsImportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUALS_IMPORT_ID: fieldBuilder.buildEdmTypeField(
          'ActualsImportId',
          'Edm.Guid',
          false
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.Int64', false),
        /**
         * Static representation of the {@link externalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ExternalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ExternalReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resourcingCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCING_COMPANY: fieldBuilder.buildEdmTypeField(
          'ResourcingCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statusReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_REASON: fieldBuilder.buildEdmTypeField(
          'StatusReason',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link owningUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNING_USER: fieldBuilder.buildEdmTypeField(
          'OwningUser',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link projectDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ProjectDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          ProjCdsTransType,
          true
        ),
        /**
         * Static representation of the {@link externalOriginReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ORIGIN_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ExternalOriginReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_ID: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subcontractLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACT_LINE: fieldBuilder.buildEdmTypeField(
          'SubcontractLine',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_NUMBER: fieldBuilder.buildEdmTypeField(
          'VoucherNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitPriceMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE_MST: fieldBuilder.buildEdmTypeField(
          'UnitPriceMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'TransactionClassification',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link bookableResourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOKABLE_RESOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'BookableResourceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_ID: fieldBuilder.buildEdmTypeField(
          'ActualId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link contractingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACTING_UNIT: fieldBuilder.buildEdmTypeField(
          'ContractingUnit',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link subConInvoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'SubConInvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isJournalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JOURNALIZED: fieldBuilder.buildEnumField(
          'IsJournalized',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.Guid',
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
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link resourceOperationUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_OPERATION_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'ResourceOperationUnitId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINE: fieldBuilder.buildEdmTypeField(
          'ContractLine',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link exchangeRateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_DATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
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
         * Static representation of the {@link transactionCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'TransactionCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link projActualsImportSync} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ACTUALS_IMPORT_SYNC: fieldBuilder.buildEnumField(
          'ProjActualsImportSync',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taskNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_NUMBER: fieldBuilder.buildEdmTypeField(
          'TaskNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'BillingStatusId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link owningBusinessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNING_BUSINESS_ID: fieldBuilder.buildEdmTypeField(
          'OwningBusinessId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
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
         * Static representation of the {@link adjustmentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_STATUS: fieldBuilder.buildEdmTypeField(
          'AdjustmentStatus',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link invoiceProposalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_PROPOSAL_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceProposalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'ContractLineId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_TYPE: fieldBuilder.buildEnumField(
          'BillingType',
          ProjBillingType,
          true
        ),
        /**
         * Static representation of the {@link matchedVendorInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHED_VENDOR_INVOICE: fieldBuilder.buildEdmTypeField(
          'MatchedVendorInvoice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fundingSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDING_SOURCE: fieldBuilder.buildEdmTypeField(
          'FundingSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ContractId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendInvoiceLineProjTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_LINE_PROJ_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'VendInvoiceLineProjTransId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjActualsImports)
      };
    }

    return this._schema;
  }
}
