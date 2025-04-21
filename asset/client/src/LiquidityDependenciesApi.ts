/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LiquidityDependencies } from './LiquidityDependencies';
import { LiquidityDependenciesRequestBuilder } from './LiquidityDependenciesRequestBuilder';
import { TransBudget } from './TransBudget';
import { LedgerPostingType } from './LedgerPostingType';
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
export class LiquidityDependenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LiquidityDependencies<DeSerializersT>, DeSerializersT>
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
  ): LiquidityDependenciesApi<DeSerializersT> {
    return new LiquidityDependenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LiquidityDependencies;

  requestBuilder(): LiquidityDependenciesRequestBuilder<DeSerializersT> {
    return new LiquidityDependenciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LiquidityDependencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LiquidityDependencies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LiquidityDependencies<DeSerializersT>,
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
    typeof LiquidityDependencies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LiquidityDependencies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CHART_OF_ACCOUNTS_NAME: OrderableEdmTypeField<
      LiquidityDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_OR_BUDGET: EnumField<
      LiquidityDependencies<DeSerializers>,
      DeSerializersT,
      TransBudget,
      true,
      true
    >;
    FROM_MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      LiquidityDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      LiquidityDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMS_OF_PAYMENT: OrderableEdmTypeField<
      LiquidityDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_TYPE: EnumField<
      LiquidityDependencies<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      LiquidityDependencies<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LiquidityDependencies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link chartOfAccountsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS_NAME: fieldBuilder.buildEdmTypeField(
          'ChartOfAccountsName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionOrBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_OR_BUDGET: fieldBuilder.buildEnumField(
          'TransactionOrBudget',
          TransBudget,
          true
        ),
        /**
         * Static representation of the {@link fromMainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'FromMainAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toMainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'ToMainAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link termsOfPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_PAYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfPayment',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link postingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_TYPE: fieldBuilder.buildEnumField(
          'PostingType',
          LedgerPostingType,
          true
        ),
        /**
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LiquidityDependencies)
      };
    }

    return this._schema;
  }
}
