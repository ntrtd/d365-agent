/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PostdatedChecks } from './PostdatedChecks';
import { PostdatedChecksRequestBuilder } from './PostdatedChecksRequestBuilder';
import { NoYes } from './NoYes';
import { PostDatedCheckStatus } from './PostDatedCheckStatus';
import { CustVendAcType } from './CustVendAcType';
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
export class PostdatedChecksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PostdatedChecks<DeSerializersT>, DeSerializersT>
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
  ): PostdatedChecksApi<DeSerializersT> {
    return new PostdatedChecksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PostdatedChecks;

  requestBuilder(): PostdatedChecksRequestBuilder<DeSerializersT> {
    return new PostdatedChecksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PostdatedChecks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PostdatedChecks<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PostdatedChecks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PostdatedChecks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PostdatedChecks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREDIT_AMOUNT: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PAYMENT_STOPPED: EnumField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POST_DATED_CHECK_STATUS: EnumField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      PostDatedCheckStatus,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_COLLECTION_AGENT: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NAME: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_SALES_PERSON: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REPLACEMENT_CHECK: EnumField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEBIT_AMOUNT: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      CustVendAcType,
      true,
      true
    >;
    CHECK_NUMBER: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATURITY_DATE: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGINAL_CHECK_NUMBER: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_BRANCH: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_FOR_STOP: OrderableEdmTypeField<
      PostdatedChecks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PostdatedChecks<DeSerializers>>;
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
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPaymentStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PAYMENT_STOPPED: fieldBuilder.buildEnumField(
          'IsPaymentStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postDatedCheckStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_DATED_CHECK_STATUS: fieldBuilder.buildEnumField(
          'PostDatedCheckStatus',
          PostDatedCheckStatus,
          true
        ),
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
         * Static representation of the {@link workerCollectionAgent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_COLLECTION_AGENT: fieldBuilder.buildEdmTypeField(
          'WorkerCollectionAgent',
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
         * Static representation of the {@link workerSalesPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_SALES_PERSON: fieldBuilder.buildEdmTypeField(
          'WorkerSalesPerson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReplacementCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REPLACEMENT_CHECK: fieldBuilder.buildEnumField(
          'IsReplacementCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          CustVendAcType,
          true
        ),
        /**
         * Static representation of the {@link checkNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_NUMBER: fieldBuilder.buildEdmTypeField(
          'CheckNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maturityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATURITY_DATE: fieldBuilder.buildEdmTypeField(
          'MaturityDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link originalCheckNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_CHECK_NUMBER: fieldBuilder.buildEdmTypeField(
          'OriginalCheckNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankBranch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_BRANCH: fieldBuilder.buildEdmTypeField(
          'BankBranch',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonForStop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_FOR_STOP: fieldBuilder.buildEdmTypeField(
          'ReasonForStop',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PostdatedChecks)
      };
    }

    return this._schema;
  }
}
