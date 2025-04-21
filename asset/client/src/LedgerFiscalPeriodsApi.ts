/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerFiscalPeriods } from './LedgerFiscalPeriods';
import { LedgerFiscalPeriodsRequestBuilder } from './LedgerFiscalPeriodsRequestBuilder';
import { ModulePeriodStat } from './ModulePeriodStat';
import { FiscalPeriodStatus } from './FiscalPeriodStatus';
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
export class LedgerFiscalPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerFiscalPeriods<DeSerializersT>, DeSerializersT>
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
  ): LedgerFiscalPeriodsApi<DeSerializersT> {
    return new LedgerFiscalPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerFiscalPeriods;

  requestBuilder(): LedgerFiscalPeriodsRequestBuilder<DeSerializersT> {
    return new LedgerFiscalPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerFiscalPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LedgerFiscalPeriods<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerFiscalPeriods<DeSerializersT>,
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
    typeof LedgerFiscalPeriods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerFiscalPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEDGER_NAME: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALENDAR: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    YEAR_NAME: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_NAME: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    BANK_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    CUST_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    PROJECT_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYROLL_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    PURCH_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_STATUS: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      FiscalPeriodStatus,
      true,
      true
    >;
    FIXED_ASSETS_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROD_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_ASSETS_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    INVENT_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    EXPENSE_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    INVENT_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    PAYROLL_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    TAX_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    LEDGER_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    FIXED_ASSETS_RU_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    CUST_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    SALES_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    PROD_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    FIXED_ASSETS_RU_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITM_ACCESS_LEVEL: EnumField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      ModulePeriodStat,
      true,
      true
    >;
    ITM_USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerFiscalPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LedgerFiscalPeriods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ledgerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_NAME: fieldBuilder.buildEdmTypeField(
          'LedgerName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link calendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR: fieldBuilder.buildEdmTypeField(
          'Calendar',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link yearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'YearName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'PeriodName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link expenseUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'ExpenseUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'VendAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link bankAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'BankAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link custAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'CustAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link projectUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'ProjectUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'LedgerUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payrollUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'PayrollUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'RetailUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'RetailAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link purchUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'PurchUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_STATUS: fieldBuilder.buildEnumField(
          'PeriodStatus',
          FiscalPeriodStatus,
          true
        ),
        /**
         * Static representation of the {@link fixedAssetsUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSETS_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'FixedAssetsUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prodUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'ProdUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedAssetsAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSETS_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'FixedAssetsAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link inventUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'InventUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'PurchAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link expenseAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'ExpenseAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link inventAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'InventAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link payrollAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYROLL_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'PayrollAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link taxUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'TaxUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'VendUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'BankUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'SalesAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link ledgerAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'LedgerAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link fixedAssetsRuAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSETS_RU_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'FixedAssets_RUAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link custUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'CustUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'TaxAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link salesUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'SalesUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'ProjectAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link prodAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'ProdAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link fixedAssetsRuUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSETS_RU_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'FixedAssets_RUUserGroupInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itmAccessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_ACCESS_LEVEL: fieldBuilder.buildEnumField(
          'ITMAccessLevel',
          ModulePeriodStat,
          true
        ),
        /**
         * Static representation of the {@link itmUserGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'ITMUserGroupInfo',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerFiscalPeriods)
      };
    }

    return this._schema;
  }
}
