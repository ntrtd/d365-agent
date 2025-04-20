/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerFinancialReasons } from './LedgerFinancialReasons';
import { LedgerFinancialReasonsRequestBuilder } from './LedgerFinancialReasonsRequestBuilder';
import { BudgetCodesApi } from './BudgetCodesApi';
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
export class LedgerFinancialReasonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerFinancialReasons<DeSerializersT>, DeSerializersT>
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
  ): LedgerFinancialReasonsApi<DeSerializersT> {
    return new LedgerFinancialReasonsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link budgetCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CODE: OneToManyLink<
      LedgerFinancialReasons<DeSerializersT>,
      DeSerializersT,
      BudgetCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [BudgetCodesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      BUDGET_CODE: new OneToManyLink('BudgetCode', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = LedgerFinancialReasons;

  requestBuilder(): LedgerFinancialReasonsRequestBuilder<DeSerializersT> {
    return new LedgerFinancialReasonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerFinancialReasons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerFinancialReasons<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerFinancialReasons<DeSerializersT>,
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
    typeof LedgerFinancialReasons,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerFinancialReasons,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FOR_LEDGER_TRANSACTION_TYPE: EnumField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOR_R_CASH_TRANSACTION_TYPE: EnumField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOR_CUSTOMER_TRANSACTION_TYPE: EnumField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOR_BANK_TRANSACTION_TYPE: EnumField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOR_ASSET_TRANSACTION_TYPE: EnumField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CANCELLATION_REASON: EnumField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_COMMENT: OrderableEdmTypeField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOR_R_ASSET_TRANSACTION_TYPE: EnumField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOR_VENDOR_TRANSACTION_TYPE: EnumField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURPOSE_CODE: EnumField<
      LedgerFinancialReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CODE: OneToManyLink<
      LedgerFinancialReasons<DeSerializersT>,
      DeSerializersT,
      BudgetCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerFinancialReasons<DeSerializers>>;
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
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link forLedgerTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOR_LEDGER_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'ForLedgerTransactionType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link forRCashTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOR_R_CASH_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'ForRCashTransactionType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link forCustomerTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOR_CUSTOMER_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'ForCustomerTransactionType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link forBankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOR_BANK_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'ForBankTransactionType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link forAssetTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOR_ASSET_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'ForAssetTransactionType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cancellationReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_REASON: fieldBuilder.buildEnumField(
          'CancellationReason',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COMMENT: fieldBuilder.buildEdmTypeField(
          'DefaultComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forRAssetTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOR_R_ASSET_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'ForRAssetTransactionType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link forVendorTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOR_VENDOR_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'ForVendorTransactionType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE_CODE: fieldBuilder.buildEnumField('PurposeCode', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerFinancialReasons)
      };
    }

    return this._schema;
  }
}
