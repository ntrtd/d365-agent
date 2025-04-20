/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PeriodChargeRuleLineCustomers } from './PeriodChargeRuleLineCustomers';
import { PeriodChargeRuleLineCustomersRequestBuilder } from './PeriodChargeRuleLineCustomersRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { PeriodChargeRuleCustomersApi } from './PeriodChargeRuleCustomersApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { SalesChargeApi } from './SalesChargeApi';
import { NoYes } from './NoYes';
import { MarkupPeriodChargeRuleLineType } from './MarkupPeriodChargeRuleLineType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PeriodChargeRuleLineCustomersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PeriodChargeRuleLineCustomers<DeSerializersT>, DeSerializersT>
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
  ): PeriodChargeRuleLineCustomersApi<DeSerializersT> {
    return new PeriodChargeRuleLineCustomersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chargeRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHARGE_RULE: OneToOneLink<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link revenueAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REVENUE_ACCOUNT: OneToOneLink<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesCharge} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE: OneToOneLink<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT,
      SalesChargeApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      PeriodChargeRuleCustomersApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      SalesChargeApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[0]),
      UNIT_OF_MEASURE: new OneToOneLink('UnitOfMeasure', this, linkedApis[1]),
      CHARGE_RULE: new OneToOneLink('ChargeRule', this, linkedApis[2]),
      REVENUE_ACCOUNT: new OneToOneLink('RevenueAccount', this, linkedApis[3]),
      SALES_CHARGE: new OneToOneLink('SalesCharge', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = PeriodChargeRuleLineCustomers;

  requestBuilder(): PeriodChargeRuleLineCustomersRequestBuilder<DeSerializersT> {
    return new PeriodChargeRuleLineCustomersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PeriodChargeRuleLineCustomers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PeriodChargeRuleLineCustomers<DeSerializersT>,
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
    typeof PeriodChargeRuleLineCustomers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PeriodChargeRuleLineCustomers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_NAME: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEBIT_CHARGE_AMOUNT_ONLY: EnumField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RULE_LINE_TYPE: EnumField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      MarkupPeriodChargeRuleLineType,
      true,
      true
    >;
    DEFAULT_REVENUE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CHARGE_CODE: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_THRESHOLD: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHARGE_AMOUNT: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RULE_LINE_DESCRIPTION: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_QUANTITY_ONLY: EnumField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_CURRENCY_CODE: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_AMOUNT_CURRENCY_CODE: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONETARY_THRESHOLD: OrderableEdmTypeField<
      PeriodChargeRuleLineCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASURE: OneToOneLink<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link chargeRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHARGE_RULE: OneToOneLink<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT,
      PeriodChargeRuleCustomersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link revenueAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REVENUE_ACCOUNT: OneToOneLink<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesCharge} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_CHARGE: OneToOneLink<
      PeriodChargeRuleLineCustomers<DeSerializersT>,
      DeSerializersT,
      SalesChargeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PeriodChargeRuleLineCustomers<DeSerializers>>;
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
         * Static representation of the {@link ruleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_NAME: fieldBuilder.buildEdmTypeField(
          'RuleName',
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
         * Static representation of the {@link debitChargeAmountOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_CHARGE_AMOUNT_ONLY: fieldBuilder.buildEnumField(
          'DebitChargeAmountOnly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link ruleLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_LINE_TYPE: fieldBuilder.buildEnumField(
          'RuleLineType',
          MarkupPeriodChargeRuleLineType,
          true
        ),
        /**
         * Static representation of the {@link defaultRevenueAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_REVENUE_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultRevenueAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'SalesChargeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantityThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'QuantityThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link chargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ChargeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ruleLineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RuleLineDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link debitQuantityOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_QUANTITY_ONLY: fieldBuilder.buildEnumField(
          'DebitQuantityOnly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'SalesCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargeAmountCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_AMOUNT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'ChargeAmountCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link monetaryThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONETARY_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'MonetaryThreshold',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PeriodChargeRuleLineCustomers)
      };
    }

    return this._schema;
  }
}
