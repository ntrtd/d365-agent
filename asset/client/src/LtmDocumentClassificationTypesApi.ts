/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmDocumentClassificationTypes } from './LtmDocumentClassificationTypes';
import { LtmDocumentClassificationTypesRequestBuilder } from './LtmDocumentClassificationTypesRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LtmDocumentClassificationTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LtmDocumentClassificationTypes<DeSerializersT>, DeSerializersT>
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
  ): LtmDocumentClassificationTypesApi<DeSerializersT> {
    return new LtmDocumentClassificationTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmDocumentClassificationTypes;

  requestBuilder(): LtmDocumentClassificationTypesRequestBuilder<DeSerializersT> {
    return new LtmDocumentClassificationTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LtmDocumentClassificationTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmDocumentClassificationTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmDocumentClassificationTypes<DeSerializersT>,
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
    typeof LtmDocumentClassificationTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmDocumentClassificationTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_CLASSIFICATION_TYPE_ID: OrderableEdmTypeField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_CUST_LINE_DEBIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_CREDIT_NOTE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FREE_TEXT_INV_INVOICE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_GL_LINE_DEBIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FREE_TEXT_INV_CREDIT_NOTE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_TYPE_NAME: OrderableEdmTypeField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_INVOICE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_VEND_LINE_DEBIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_BANK_LINE_CREDIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_PACKING_SLIP: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_REV_BANK_LINE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_TRANSFER_PACKING_SLIP: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_INVOICE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACKING_SLIP: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_CREDIT_NOTE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_REV_VEND_LINE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_PROJ_LINE_CREDIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CASH_BOX_CONTROL: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_BANK_LINE_DEBIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_TYPE_PREFIX: OrderableEdmTypeField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CREDIT_NOTE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SINGLE_DOCUMENT_PER_VOUCHER: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_INVOICE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INHERITS_HEADER_NUMBER: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_REV_FA_LINE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_VEND_LINE_CREDIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETURN_PACKING_SLIP: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_REV_GL_LINE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_RETURNDELIVERYNOTE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_FA_LINE_CREDIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_CUST_LINE_CREDIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SINGLE_COLL_PAY_DOC_PER_VOUCHER: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_REV_PROJ_LINE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_GL_LINE_CREDIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_FA_LINE_DEBIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PAYMENT_MEDIA: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_PROJ_LINE_DEBIT: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECEIPT_REV_CUST_LINE: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SINGLE_ACCOUNT_PER_VOUCHER: EnumField<
      LtmDocumentClassificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmDocumentClassificationTypes<DeSerializers>>;
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
         * Static representation of the {@link documentClassificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalCustLineDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_CUST_LINE_DEBIT: fieldBuilder.buildEnumField(
          'JournalCustLineDebit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CREDIT_NOTE: fieldBuilder.buildEnumField(
          'PurchaseCreditNote',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link freeTextInvInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INV_INVOICE: fieldBuilder.buildEnumField(
          'FreeTextInvInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalGlLineDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_GL_LINE_DEBIT: fieldBuilder.buildEnumField(
          'JournalGLLineDebit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link freeTextInvCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT_INV_CREDIT_NOTE: fieldBuilder.buildEnumField(
          'FreeTextInvCreditNote',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link documentClassificationTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_INVOICE: fieldBuilder.buildEnumField(
          'PurchaseInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalVendLineDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_VEND_LINE_DEBIT: fieldBuilder.buildEnumField(
          'JournalVendLineDebit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalBankLineCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BANK_LINE_CREDIT: fieldBuilder.buildEnumField(
          'JournalBankLineCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectPackingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_PACKING_SLIP: fieldBuilder.buildEnumField(
          'ProjectPackingSlip',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptRevBankLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_REV_BANK_LINE: fieldBuilder.buildEnumField(
          'ReceiptRevBankLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventTransferPackingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANSFER_PACKING_SLIP: fieldBuilder.buildEnumField(
          'InventTransferPackingSlip',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_INVOICE: fieldBuilder.buildEnumField('SalesInvoice', NoYes, true),
        /**
         * Static representation of the {@link packingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP: fieldBuilder.buildEnumField('PackingSlip', NoYes, true),
        /**
         * Static representation of the {@link projectCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CREDIT_NOTE: fieldBuilder.buildEnumField(
          'ProjectCreditNote',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptRevVendLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_REV_VEND_LINE: fieldBuilder.buildEnumField(
          'ReceiptRevVendLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalProjLineCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_PROJ_LINE_CREDIT: fieldBuilder.buildEnumField(
          'JournalProjLineCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cashBoxControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_BOX_CONTROL: fieldBuilder.buildEnumField(
          'CashBoxControl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalBankLineDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BANK_LINE_DEBIT: fieldBuilder.buildEnumField(
          'JournalBankLineDebit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link documentClassificationTypePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_TYPE_PREFIX: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationTypePrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CREDIT_NOTE: fieldBuilder.buildEnumField(
          'SalesCreditNote',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link singleDocumentPerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGLE_DOCUMENT_PER_VOUCHER: fieldBuilder.buildEnumField(
          'SingleDocumentPerVoucher',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_INVOICE: fieldBuilder.buildEnumField(
          'ProjectInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inheritsHeaderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INHERITS_HEADER_NUMBER: fieldBuilder.buildEnumField(
          'InheritsHeaderNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptRevFaLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_REV_FA_LINE: fieldBuilder.buildEnumField(
          'ReceiptRevFALine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalVendLineCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_VEND_LINE_CREDIT: fieldBuilder.buildEnumField(
          'JournalVendLineCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link returnPackingSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_PACKING_SLIP: fieldBuilder.buildEnumField(
          'ReturnPackingSlip',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptRevGlLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_REV_GL_LINE: fieldBuilder.buildEnumField(
          'ReceiptRevGLLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectReturndeliverynote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_RETURNDELIVERYNOTE: fieldBuilder.buildEnumField(
          'ProjectReturndeliverynote',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalFaLineCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_FA_LINE_CREDIT: fieldBuilder.buildEnumField(
          'JournalFALineCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalCustLineCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_CUST_LINE_CREDIT: fieldBuilder.buildEnumField(
          'JournalCustLineCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link singleCollPayDocPerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGLE_COLL_PAY_DOC_PER_VOUCHER: fieldBuilder.buildEnumField(
          'SingleCollPayDocPerVoucher',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptRevProjLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_REV_PROJ_LINE: fieldBuilder.buildEnumField(
          'ReceiptRevProjLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalGlLineCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_GL_LINE_CREDIT: fieldBuilder.buildEnumField(
          'JournalGLLineCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalFaLineDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_FA_LINE_DEBIT: fieldBuilder.buildEnumField(
          'JournalFALineDebit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPaymentMedia} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAYMENT_MEDIA: fieldBuilder.buildEnumField(
          'IsPaymentMedia',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalProjLineDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_PROJ_LINE_DEBIT: fieldBuilder.buildEnumField(
          'JournalProjLineDebit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link receiptRevCustLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_REV_CUST_LINE: fieldBuilder.buildEnumField(
          'ReceiptRevCustLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link singleAccountPerVoucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGLE_ACCOUNT_PER_VOUCHER: fieldBuilder.buildEnumField(
          'SingleAccountPerVoucher',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmDocumentClassificationTypes)
      };
    }

    return this._schema;
  }
}
