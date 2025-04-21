/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalAccountingDistributions } from './ApprovalAccountingDistributions';
import { ApprovalAccountingDistributionsRequestBuilder } from './ApprovalAccountingDistributionsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ApprovalAccountingDistributionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ApprovalAccountingDistributions<DeSerializersT>, DeSerializersT>
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
  ): ApprovalAccountingDistributionsApi<DeSerializersT> {
    return new ApprovalAccountingDistributionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApprovalAccountingDistributions;

  requestBuilder(): ApprovalAccountingDistributionsRequestBuilder<DeSerializersT> {
    return new ApprovalAccountingDistributionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ApprovalAccountingDistributions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ApprovalAccountingDistributions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApprovalAccountingDistributions<DeSerializersT>,
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
    typeof ApprovalAccountingDistributions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApprovalAccountingDistributions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISTRIBUTION_NUMBER: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WORK_ITEM_REC_ID: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_USER: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_ACCOUNT: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ApprovalAccountingDistributions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ApprovalAccountingDistributions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link distributionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'DistributionNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link workItemRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ITEM_REC_ID: fieldBuilder.buildEdmTypeField(
          'WorkItemRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransactionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_USER: fieldBuilder.buildEdmTypeField(
          'ApprovalUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'LedgerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApprovalAccountingDistributions)
      };
    }

    return this._schema;
  }
}
