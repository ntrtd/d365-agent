/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CodaParameters } from './CodaParameters';
import { CodaParametersRequestBuilder } from './CodaParametersRequestBuilder';
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
export class CodaParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CodaParameters<DeSerializersT>, DeSerializersT>
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
  ): CodaParametersApi<DeSerializersT> {
    return new CodaParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CodaParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CodaParameters;

  requestBuilder(): CodaParametersRequestBuilder<DeSerializersT> {
    return new CodaParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CodaParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CodaParameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CodaParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CodaParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CodaParameters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_AUTO_CREATE_NEW_BANK_ACCOUNTS: EnumField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NUMBER_DISPLAY_VALUE: OrderableEdmTypeField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFIX_NEW_BANK_ACCOUNTS: OrderableEdmTypeField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IGNORE_CASH_DISCOUNT: EnumField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_OVERRIDE_STATEMENT_IN_CASE_OF_NO_MATCHING: EnumField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CODA_DEVIATION: OrderableEdmTypeField<
      CodaParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CodaParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CodaParameters<DeSerializers>>;
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
         * Static representation of the {@link isAutoCreateNewBankAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTO_CREATE_NEW_BANK_ACCOUNTS: fieldBuilder.buildEnumField(
          'IsAutoCreateNewBankAccounts',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountNumberDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountNumberDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenueAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RevenueAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'CostAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prefixNewBankAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFIX_NEW_BANK_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'PrefixNewBankAccounts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ignoreCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IGNORE_CASH_DISCOUNT: fieldBuilder.buildEnumField(
          'IgnoreCashDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isOverrideStatementInCaseOfNoMatching} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OVERRIDE_STATEMENT_IN_CASE_OF_NO_MATCHING:
          fieldBuilder.buildEnumField(
            'IsOverrideStatementInCaseOfNoMatching',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link codaDeviation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODA_DEVIATION: fieldBuilder.buildEdmTypeField(
          'CodaDeviation',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CodaParameters)
      };
    }

    return this._schema;
  }
}
