/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VoucherTypes } from './VoucherTypes';
import { VoucherTypesRequestBuilder } from './VoucherTypesRequestBuilder';
import { GeneralLedgerCustInvoiceJournalLinesApi } from './GeneralLedgerCustInvoiceJournalLinesApi';
import { VendInvoiceJournalLinesApi } from './VendInvoiceJournalLinesApi';
import { AssetLeaseLedgerJournalLinesApi } from './AssetLeaseLedgerJournalLinesApi';
import { CustomerPaymentJournalLinesApi } from './CustomerPaymentJournalLinesApi';
import { VendorPaymentJournalLinesApi } from './VendorPaymentJournalLinesApi';
import { VendInvoiceRegisterLinesApi } from './VendInvoiceRegisterLinesApi';
import { LedgerJournalLinesApi } from './LedgerJournalLinesApi';
import { ExpenseJournalLinesApi } from './ExpenseJournalLinesApi';
import { AssetJournalV2Api } from './AssetJournalV2Api';
import { AssetJournalLinesApi } from './AssetJournalLinesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class VoucherTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VoucherTypes<DeSerializersT>, DeSerializersT>
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
  ): VoucherTypesApi<DeSerializersT> {
    return new VoucherTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link generalLedgerCustInvoiceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GENERAL_LEDGER_CUST_INVOICE_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerVoucherTypeEntityVoucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_VOUCHER_TYPE_ENTITY_VOUCHER_TYPE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineLedgerVoucherTypeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_LEDGER_VOUCHER_TYPE_ENTITY: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceRegisterLedgerVoucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LEDGER_VOUCHER_TYPE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      VendInvoiceRegisterLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link expenseJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetJournalV2Entity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_V_2_ENTITY: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      AssetJournalV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      AssetJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>,
      VendInvoiceJournalLinesApi<DeSerializersT>,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>,
      CustomerPaymentJournalLinesApi<DeSerializersT>,
      VendorPaymentJournalLinesApi<DeSerializersT>,
      VendInvoiceRegisterLinesApi<DeSerializersT>,
      LedgerJournalLinesApi<DeSerializersT>,
      ExpenseJournalLinesApi<DeSerializersT>,
      AssetJournalV2Api<DeSerializersT>,
      AssetJournalLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      GENERAL_LEDGER_CUST_INVOICE_JOURNAL_LINE: new OneToManyLink(
        'GeneralLedgerCustInvoiceJournalLine',
        this,
        linkedApis[0]
      ),
      VEND_INVOICE_JOURNAL_LINE: new OneToManyLink(
        'VendInvoiceJournalLine',
        this,
        linkedApis[1]
      ),
      LEDGER_VOUCHER_TYPE_ENTITY_VOUCHER_TYPE: new OneToManyLink(
        'LedgerVoucherTypeEntityVoucherType',
        this,
        linkedApis[2]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE_LEDGER_VOUCHER_TYPE_ENTITY:
        new OneToManyLink(
          'CustomerPaymentJournalLineLedgerVoucherTypeEntity',
          this,
          linkedApis[3]
        ),
      VENDOR_PAYMENT_JOURNAL_LINE: new OneToManyLink(
        'VendorPaymentJournalLine',
        this,
        linkedApis[4]
      ),
      VEND_INVOICE_REGISTER_LEDGER_VOUCHER_TYPE: new OneToManyLink(
        'VendInvoiceRegisterLedgerVoucherType',
        this,
        linkedApis[5]
      ),
      LEDGER_JOURNAL_LINE: new OneToManyLink(
        'LedgerJournalLine',
        this,
        linkedApis[6]
      ),
      EXPENSE_JOURNAL_LINE: new OneToManyLink(
        'ExpenseJournalLine',
        this,
        linkedApis[7]
      ),
      ASSET_JOURNAL_V_2_ENTITY: new OneToManyLink(
        'AssetJournalV2Entity',
        this,
        linkedApis[8]
      ),
      ASSET_JOURNAL_LINE: new OneToManyLink(
        'AssetJournalLine',
        this,
        linkedApis[9]
      )
    };
    return this;
  }

  entityConstructor = VoucherTypes;

  requestBuilder(): VoucherTypesRequestBuilder<DeSerializersT> {
    return new VoucherTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VoucherTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VoucherTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VoucherTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VoucherTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VoucherTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOUCHER_TYPE: OrderableEdmTypeField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_APPROVED_BY: OrderableEdmTypeField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_TYPE_NUMBER: OrderableEdmTypeField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_PRINT_LAYOUT_GROUP: OrderableEdmTypeField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULTED_PREPARED_BY: OrderableEdmTypeField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_DEFAULT_TYPE: EnumField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      VoucherTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link generalLedgerCustInvoiceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GENERAL_LEDGER_CUST_INVOICE_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      GeneralLedgerCustInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      VendInvoiceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerVoucherTypeEntityVoucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_VOUCHER_TYPE_ENTITY_VOUCHER_TYPE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      AssetLeaseLedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalLineLedgerVoucherTypeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE_LEDGER_VOUCHER_TYPE_ENTITY: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendorPaymentJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_PAYMENT_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      VendorPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link vendInvoiceRegisterLedgerVoucherType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VEND_INVOICE_REGISTER_LEDGER_VOUCHER_TYPE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      VendInvoiceRegisterLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      LedgerJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link expenseJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetJournalV2Entity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_V_2_ENTITY: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      AssetJournalV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_LINE: OneToManyLink<
      VoucherTypes<DeSerializersT>,
      DeSerializersT,
      AssetJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VoucherTypes<DeSerializers>>;
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
         * Static representation of the {@link voucherType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_TYPE: fieldBuilder.buildEdmTypeField(
          'VoucherType',
          'Edm.String',
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
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultApprovedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_APPROVED_BY: fieldBuilder.buildEdmTypeField(
          'DefaultApprovedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherTypeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_TYPE_NUMBER: fieldBuilder.buildEdmTypeField(
          'VoucherTypeNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerPrintLayoutGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_PRINT_LAYOUT_GROUP: fieldBuilder.buildEdmTypeField(
          'LedgerPrintLayoutGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultedPreparedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULTED_PREPARED_BY: fieldBuilder.buildEdmTypeField(
          'DefaultedPreparedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isDefaultType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_TYPE: fieldBuilder.buildEnumField(
          'IsDefaultType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VoucherTypes)
      };
    }

    return this._schema;
  }
}
