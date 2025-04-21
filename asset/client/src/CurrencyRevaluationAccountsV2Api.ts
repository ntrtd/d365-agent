/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CurrencyRevaluationAccountsV2 } from './CurrencyRevaluationAccountsV2';
import { CurrencyRevaluationAccountsV2RequestBuilder } from './CurrencyRevaluationAccountsV2RequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CurrenciesApi } from './CurrenciesApi';
import { CurrencyGainLossAccountType } from './CurrencyGainLossAccountType';
import { ExchAdjTaxableTypeW } from './ExchAdjTaxableTypeW';
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
export class CurrencyRevaluationAccountsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CurrencyRevaluationAccountsV2<DeSerializersT>, DeSerializersT>
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
  ): CurrencyRevaluationAccountsV2Api<DeSerializersT> {
    return new CurrencyRevaluationAccountsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CurrencyRevaluationAccountsV2<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCIES: OneToOneLink<
      CurrencyRevaluationAccountsV2<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      CURRENCIES: new OneToOneLink('Currencies', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CurrencyRevaluationAccountsV2;

  requestBuilder(): CurrencyRevaluationAccountsV2RequestBuilder<DeSerializersT> {
    return new CurrencyRevaluationAccountsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CurrencyRevaluationAccountsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CurrencyRevaluationAccountsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CurrencyRevaluationAccountsV2<DeSerializersT>,
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
    typeof CurrencyRevaluationAccountsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CurrencyRevaluationAccountsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CURRENCY_CODE: OrderableEdmTypeField<
      CurrencyRevaluationAccountsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      CurrencyRevaluationAccountsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING: EnumField<
      CurrencyRevaluationAccountsV2<DeSerializers>,
      DeSerializersT,
      CurrencyGainLossAccountType,
      true,
      true
    >;
    MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CurrencyRevaluationAccountsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REALIZED_TAX_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CurrencyRevaluationAccountsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCH_ADJ_TAXABLE_TYPE: EnumField<
      CurrencyRevaluationAccountsV2<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CurrencyRevaluationAccountsV2<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCIES: OneToOneLink<
      CurrencyRevaluationAccountsV2<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CurrencyRevaluationAccountsV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link posting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING: fieldBuilder.buildEnumField(
          'Posting',
          CurrencyGainLossAccountType,
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link realizedTaxMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REALIZED_TAX_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'RealizedTaxMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link exchAdjTaxableType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_ADJ_TAXABLE_TYPE: fieldBuilder.buildEnumField(
          'ExchAdjTaxableType',
          ExchAdjTaxableTypeW,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CurrencyRevaluationAccountsV2)
      };
    }

    return this._schema;
  }
}
