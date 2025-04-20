/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseRates } from './ExpenseRates';
import { ExpenseRatesRequestBuilder } from './ExpenseRatesRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ExpenseRatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseRates<DeSerializersT>, DeSerializersT>
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
  ): ExpenseRatesApi<DeSerializersT> {
    return new ExpenseRatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ExpenseRates<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ExpenseRates<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionSetsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ExpenseRates;

  requestBuilder(): ExpenseRatesRequestBuilder<DeSerializersT> {
    return new ExpenseRatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseRates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseRates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExpenseRates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExpenseRates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ExpenseRates, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OVER_RATE_PAYROLL_IS_TRANSFER_TO_TAX_BASE: EnumField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OVER_RATE_PAYROLL_INCOME: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_I_AMOUNTS_INCLUDE_SALES_TAX: EnumField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RATE_SALES_TAX_GROUP: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVER_RATE_ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVER_RATE_MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVER_RATE_DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_OPERATION_CODE: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE_DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVER_RATE_PAYROLL_RETENTION: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATE: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVER_RATE_IS_AMOUNTS_INCLUDE_SALES_TAX: EnumField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OVER_RATE_SALES_TAX_GROUP: OrderableEdmTypeField<
      ExpenseRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ExpenseRates<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ExpenseRates<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpenseRates<DeSerializers>>;
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
         * Static representation of the {@link expense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE: fieldBuilder.buildEdmTypeField('Expense', 'Edm.String', false),
        /**
         * Static representation of the {@link overRatePayrollIsTransferToTaxBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_RATE_PAYROLL_IS_TRANSFER_TO_TAX_BASE: fieldBuilder.buildEnumField(
          'OverRatePayrollIsTransferToTaxBase',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link overRatePayrollIncome} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_RATE_PAYROLL_INCOME: fieldBuilder.buildEdmTypeField(
          'OverRatePayrollIncome',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateItemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'RateItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateIAmountsIncludeSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_I_AMOUNTS_INCLUDE_SALES_TAX: fieldBuilder.buildEnumField(
          'RateIAmountsIncludeSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rateSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'RateSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateMainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_MAIN_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RateMainAccountDisplayValue',
          'Edm.String',
          true
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
         * Static representation of the {@link overRateItemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_RATE_ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'OverRateItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overRateMainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_RATE_MAIN_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OverRateMainAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overRateDefaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_RATE_DEFAULT_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'OverRateDefaultDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vatOperationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_OPERATION_CODE: fieldBuilder.buildEdmTypeField(
          'VATOperationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rateDefaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RateDefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overRatePayrollRetention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_RATE_PAYROLL_RETENTION: fieldBuilder.buildEdmTypeField(
          'OverRatePayrollRetention',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('Rate', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link overRateIsAmountsIncludeSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_RATE_IS_AMOUNTS_INCLUDE_SALES_TAX: fieldBuilder.buildEnumField(
          'OverRateIsAmountsIncludeSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link overRateSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_RATE_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'OverRateSalesTaxGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseRates)
      };
    }

    return this._schema;
  }
}
