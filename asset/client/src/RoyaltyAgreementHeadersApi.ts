/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoyaltyAgreementHeaders } from './RoyaltyAgreementHeaders';
import { RoyaltyAgreementHeadersRequestBuilder } from './RoyaltyAgreementHeadersRequestBuilder';
import { RoyaltyAgreementHeaderProductSelectionsApi } from './RoyaltyAgreementHeaderProductSelectionsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { RoyaltyAgreementLinesApi } from './RoyaltyAgreementLinesApi';
import { RoyaltyAgreementHeaderProductSelectionsV2Api } from './RoyaltyAgreementHeaderProductSelectionsV2Api';
import { McrRoyaltyLineBreakType } from './McrRoyaltyLineBreakType';
import { NoYes } from './NoYes';
import { McrRoyaltyUnitType } from './McrRoyaltyUnitType';
import { McrRoyaltyUomOption } from './McrRoyaltyUomOption';
import { McrRoyaltyCumulationPeriod } from './McrRoyaltyCumulationPeriod';
import { McrTradeCustCalcDates } from './McrTradeCustCalcDates';
import { McrRoyaltyTakenFrom } from './McrRoyaltyTakenFrom';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RoyaltyAgreementHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RoyaltyAgreementHeaders<DeSerializersT>, DeSerializersT>
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
  ): RoyaltyAgreementHeadersApi<DeSerializersT> {
    return new RoyaltyAgreementHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementHeaderProductSelections} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_HEADER_PRODUCT_SELECTIONS: OneToManyLink<
      RoyaltyAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementHeaderProductSelectionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_DIMENSION_COMBINATION: OneToOneLink<
      RoyaltyAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_LINES: OneToManyLink<
      RoyaltyAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementHeaderProductSelectionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_HEADER_PRODUCT_SELECTIONS_V_2: OneToManyLink<
      RoyaltyAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementHeaderProductSelectionsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RoyaltyAgreementHeaderProductSelectionsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      RoyaltyAgreementLinesApi<DeSerializersT>,
      RoyaltyAgreementHeaderProductSelectionsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROYALTY_AGREEMENT_HEADER_PRODUCT_SELECTIONS: new OneToManyLink(
        'RoyaltyAgreementHeaderProductSelections',
        this,
        linkedApis[0]
      ),
      EXPENSE_DIMENSION_COMBINATION: new OneToOneLink(
        'ExpenseDimensionCombination',
        this,
        linkedApis[1]
      ),
      ROYALTY_AGREEMENT_LINES: new OneToManyLink(
        'RoyaltyAgreementLines',
        this,
        linkedApis[2]
      ),
      ROYALTY_AGREEMENT_HEADER_PRODUCT_SELECTIONS_V_2: new OneToManyLink(
        'RoyaltyAgreementHeaderProductSelectionsV2',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RoyaltyAgreementHeaders;

  requestBuilder(): RoyaltyAgreementHeadersRequestBuilder<DeSerializersT> {
    return new RoyaltyAgreementHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RoyaltyAgreementHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RoyaltyAgreementHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RoyaltyAgreementHeaders<DeSerializersT>,
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
    typeof RoyaltyAgreementHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RoyaltyAgreementHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROYALTY_AGREEMENT_ID: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_EFFECTIVE_DATE: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AGREEMENT_DESCRIPTION: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_SALES_UNIT_SYMBOL: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROYALTY_ACCRUAL_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CUMULATION_METHOD_CUSTOMIZED_PERIOD_TYPE: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROYALTY_BREAK_BASIS: EnumField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      McrRoyaltyLineBreakType,
      true,
      true
    >;
    DEFAULT_EXPIRATION_DATE: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_APPROVAL_REQUIRED: EnumField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AGREEMENT_NOTE: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_UNIT_SYMBOL_TYPE: EnumField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      McrRoyaltyUnitType,
      true,
      true
    >;
    IS_VALIDATED: EnumField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_UNIT_SYMBOL_OPTION: EnumField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      McrRoyaltyUomOption,
      true,
      true
    >;
    SALES_CUMULATION_METHOD: EnumField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      McrRoyaltyCumulationPeriod,
      true,
      true
    >;
    ROYALTY_EXPENSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CALCULATION_SEARCH_DATE_TYPE: EnumField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      McrTradeCustCalcDates,
      true,
      true
    >;
    LINE_AMOUNT_BASIS: EnumField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      McrRoyaltyTakenFrom,
      true,
      true
    >;
    DEFAULT_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CURRENCY_CODE: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATING_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      RoyaltyAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementHeaderProductSelections} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_HEADER_PRODUCT_SELECTIONS: OneToManyLink<
      RoyaltyAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementHeaderProductSelectionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_DIMENSION_COMBINATION: OneToOneLink<
      RoyaltyAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_LINES: OneToManyLink<
      RoyaltyAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link royaltyAgreementHeaderProductSelectionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROYALTY_AGREEMENT_HEADER_PRODUCT_SELECTIONS_V_2: OneToManyLink<
      RoyaltyAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      RoyaltyAgreementHeaderProductSelectionsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RoyaltyAgreementHeaders<DeSerializers>>;
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
         * Static representation of the {@link royaltyAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'RoyaltyAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultEffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link agreementDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AgreementDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultSalesUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SALES_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'DefaultSalesUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link royaltyAccrualMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_ACCRUAL_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'RoyaltyAccrualMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link salesCumulationMethodCustomizedPeriodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CUMULATION_METHOD_CUSTOMIZED_PERIOD_TYPE:
          fieldBuilder.buildEdmTypeField(
            'SalesCumulationMethodCustomizedPeriodType',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link royaltyBreakBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_BREAK_BASIS: fieldBuilder.buildEnumField(
          'RoyaltyBreakBasis',
          McrRoyaltyLineBreakType,
          true
        ),
        /**
         * Static representation of the {@link defaultExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isApprovalRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVAL_REQUIRED: fieldBuilder.buildEnumField(
          'IsApprovalRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link agreementNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NOTE: fieldBuilder.buildEdmTypeField(
          'AgreementNote',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesUnitSymbolType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_SYMBOL_TYPE: fieldBuilder.buildEnumField(
          'SalesUnitSymbolType',
          McrRoyaltyUnitType,
          true
        ),
        /**
         * Static representation of the {@link isValidated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VALIDATED: fieldBuilder.buildEnumField('IsValidated', NoYes, true),
        /**
         * Static representation of the {@link salesUnitSymbolOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT_SYMBOL_OPTION: fieldBuilder.buildEnumField(
          'SalesUnitSymbolOption',
          McrRoyaltyUomOption,
          true
        ),
        /**
         * Static representation of the {@link salesCumulationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CUMULATION_METHOD: fieldBuilder.buildEnumField(
          'SalesCumulationMethod',
          McrRoyaltyCumulationPeriod,
          true
        ),
        /**
         * Static representation of the {@link royaltyExpenseMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROYALTY_EXPENSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'RoyaltyExpenseMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link defaultCalculationSearchDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CALCULATION_SEARCH_DATE_TYPE: fieldBuilder.buildEnumField(
          'DefaultCalculationSearchDateType',
          McrTradeCustCalcDates,
          true
        ),
        /**
         * Static representation of the {@link lineAmountBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_BASIS: fieldBuilder.buildEnumField(
          'LineAmountBasis',
          McrRoyaltyTakenFrom,
          true
        ),
        /**
         * Static representation of the {@link defaultVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DefaultVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validatingWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATING_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValidatingWorkerPersonnelNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RoyaltyAgreementHeaders)
      };
    }

    return this._schema;
  }
}
