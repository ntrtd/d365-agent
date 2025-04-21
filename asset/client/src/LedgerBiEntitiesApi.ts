/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerBiEntities } from './LedgerBiEntities';
import { LedgerBiEntitiesRequestBuilder } from './LedgerBiEntitiesRequestBuilder';
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
export class LedgerBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerBiEntities<DeSerializersT>, DeSerializersT>
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
  ): LedgerBiEntitiesApi<DeSerializersT> {
    return new LedgerBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerBiEntities;

  requestBuilder(): LedgerBiEntitiesRequestBuilder<DeSerializersT> {
    return new LedgerBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LedgerBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LedgerBiEntities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LedgerBiEntities, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORTING_CURRENCY: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CALENDAR: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACCOUNTING_CURRENCY: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_BUDGET_CONTROL_ENABLED: EnumField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRIMARY_FOR_LEGAL_ENTITY: OrderableEdmTypeField<
      LedgerBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LedgerBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link reportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ReportingCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR: fieldBuilder.buildEdmTypeField(
          'FiscalCalendar',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link accountingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AccountingCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'BudgetExchangeRateType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isBudgetControlEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BUDGET_CONTROL_ENABLED: fieldBuilder.buildEnumField(
          'IsBudgetControlEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link chartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'ChartOfAccounts',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'DefaultExchangeRateType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reportingCurrencyExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CURRENCY_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ReportingCurrencyExchangeRateType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link primaryForLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_FOR_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'PrimaryForLegalEntity',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerBiEntities)
      };
    }

    return this._schema;
  }
}
