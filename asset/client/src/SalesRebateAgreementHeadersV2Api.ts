/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesRebateAgreementHeadersV2 } from './SalesRebateAgreementHeadersV2';
import { SalesRebateAgreementHeadersV2RequestBuilder } from './SalesRebateAgreementHeadersV2RequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { PdsRebateLineBreakType } from './PdsRebateLineBreakType';
import { PdsCumulationPeriod } from './PdsCumulationPeriod';
import { PdsPaymtType } from './PdsPaymtType';
import { PdsRebateCalcDateType } from './PdsRebateCalcDateType';
import { PdsRebateTakenFrom } from './PdsRebateTakenFrom';
import { TamCustRebateApprovalStatus } from './TamCustRebateApprovalStatus';
import { PdsUnitType } from './PdsUnitType';
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
export class SalesRebateAgreementHeadersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesRebateAgreementHeadersV2<DeSerializersT>, DeSerializersT>
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
  ): SalesRebateAgreementHeadersV2Api<DeSerializersT> {
    return new SalesRebateAgreementHeadersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      SalesRebateAgreementHeadersV2<DeSerializersT>,
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

  entityConstructor = SalesRebateAgreementHeadersV2;

  requestBuilder(): SalesRebateAgreementHeadersV2RequestBuilder<DeSerializersT> {
    return new SalesRebateAgreementHeadersV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesRebateAgreementHeadersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesRebateAgreementHeadersV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesRebateAgreementHeadersV2<DeSerializersT>,
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
    typeof SalesRebateAgreementHeadersV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesRebateAgreementHeadersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REBATE_AGREEMENT_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_GENERIC_CURRENCY_SEARCH_ENABLED: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REBATE_BREAK_BASIS: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      PdsRebateLineBreakType,
      true,
      true
    >;
    ACCRUAL_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_SELECTION_USED: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_REBATE_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CUMULATION_METHOD: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      PdsCumulationPeriod,
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TAXABLE: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALIDATING_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CUMULATION_METHOD_CUSTOMIZED_PERIOD_TYPE: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_UNIT_SYMBOL_EXACT: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_TYPE: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      PdsPaymtType,
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CALCULATION_SEARCH_DATE_TYPE: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      PdsRebateCalcDateType,
      true,
      true
    >;
    PRODUCT_UNIT_SYMBOL: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_VALIDATED: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_AMOUNT_BASIS: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      PdsRebateTakenFrom,
      true,
      true
    >;
    MINIMUM_SALES_QUANTITY_QUALIFYING_REBATE: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_REBATE_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUALIFYING_SITE_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVAL_REQUIRED: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_SALES_AMOUNT_QUALIFYING_REBATE: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_PROGRAM_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_STATUS: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      TamCustRebateApprovalStatus,
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_UNIT_SYMBOL_TYPE: EnumField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      PdsUnitType,
      true,
      true
    >;
    QUALIFYING_WAREHOUSE_ID: OrderableEdmTypeField<
      SalesRebateAgreementHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      SalesRebateAgreementHeadersV2<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesRebateAgreementHeadersV2<DeSerializers>>;
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
         * Static representation of the {@link rebateAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'RebateAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isGenericCurrencySearchEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_GENERIC_CURRENCY_SEARCH_ENABLED: fieldBuilder.buildEnumField(
          'IsGenericCurrencySearchEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rebateBreakBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_BREAK_BASIS: fieldBuilder.buildEnumField(
          'RebateBreakBasis',
          PdsRebateLineBreakType,
          true
        ),
        /**
         * Static representation of the {@link accrualMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccrualMainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isProductSelectionUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_SELECTION_USED: fieldBuilder.buildEnumField(
          'IsProductSelectionUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesRebateProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REBATE_PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesRebateProductGroupId',
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
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCumulationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CUMULATION_METHOD: fieldBuilder.buildEnumField(
          'SalesCumulationMethod',
          PdsCumulationPeriod,
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTaxable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAXABLE: fieldBuilder.buildEnumField('IsTaxable', NoYes, true),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
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
        /**
         * Static representation of the {@link expenseMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ExpenseMainAccountIdDisplayValue',
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
         * Static representation of the {@link isProductUnitSymbolExact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_UNIT_SYMBOL_EXACT: fieldBuilder.buildEnumField(
          'IsProductUnitSymbolExact',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'PaymentType',
          PdsPaymtType,
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link calculationSearchDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_SEARCH_DATE_TYPE: fieldBuilder.buildEnumField(
          'CalculationSearchDateType',
          PdsRebateCalcDateType,
          true
        ),
        /**
         * Static representation of the {@link productUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ProductUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isValidated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VALIDATED: fieldBuilder.buildEnumField('IsValidated', NoYes, true),
        /**
         * Static representation of the {@link lineAmountBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_BASIS: fieldBuilder.buildEnumField(
          'LineAmountBasis',
          PdsRebateTakenFrom,
          true
        ),
        /**
         * Static representation of the {@link minimumSalesQuantityQualifyingRebate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_SALES_QUANTITY_QUALIFYING_REBATE:
          fieldBuilder.buildEdmTypeField(
            'MinimumSalesQuantityQualifyingRebate',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link salesRebateCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_REBATE_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'SalesRebateCustomerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qualifyingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALIFYING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'QualifyingSiteId',
          'Edm.String',
          true
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
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumSalesAmountQualifyingRebate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_SALES_AMOUNT_QUALIFYING_REBATE: fieldBuilder.buildEdmTypeField(
          'MinimumSalesAmountQualifyingRebate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rebateProgramId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_PROGRAM_ID: fieldBuilder.buildEdmTypeField(
          'RebateProgramId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'ApprovalStatus',
          TamCustRebateApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productUnitSymbolType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_UNIT_SYMBOL_TYPE: fieldBuilder.buildEnumField(
          'ProductUnitSymbolType',
          PdsUnitType,
          true
        ),
        /**
         * Static representation of the {@link qualifyingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALIFYING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'QualifyingWarehouseId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesRebateAgreementHeadersV2)
      };
    }

    return this._schema;
  }
}
