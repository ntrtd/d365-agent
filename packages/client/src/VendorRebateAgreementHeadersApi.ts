/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorRebateAgreementHeaders } from './VendorRebateAgreementHeaders';
import { VendorRebateAgreementHeadersRequestBuilder } from './VendorRebateAgreementHeadersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { TamRebateLineBreakType } from './TamRebateLineBreakType';
import { NoYes } from './NoYes';
import { TamVendRebateApprovalStatus } from './TamVendRebateApprovalStatus';
import { TamCumulationPeriod } from './TamCumulationPeriod';
import { TamVendRebateCalcDateType } from './TamVendRebateCalcDateType';
import { TamVendRebateTakenFrom } from './TamVendRebateTakenFrom';
import { TamRebateUnitType } from './TamRebateUnitType';
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
export class VendorRebateAgreementHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorRebateAgreementHeaders<DeSerializersT>, DeSerializersT>
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
  ): VendorRebateAgreementHeadersApi<DeSerializersT> {
    return new VendorRebateAgreementHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link accrualMainAccountIdCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_MAIN_ACCOUNT_ID_COMBINATION: OneToOneLink<
      VendorRebateAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseMainAccountIdCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_MAIN_ACCOUNT_ID_COMBINATION: OneToOneLink<
      VendorRebateAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ACCRUAL_MAIN_ACCOUNT_ID_COMBINATION: new OneToOneLink(
        'AccrualMainAccountIdCombination',
        this,
        linkedApis[0]
      ),
      EXPENSE_MAIN_ACCOUNT_ID_COMBINATION: new OneToOneLink(
        'ExpenseMainAccountIdCombination',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = VendorRebateAgreementHeaders;

  requestBuilder(): VendorRebateAgreementHeadersRequestBuilder<DeSerializersT> {
    return new VendorRebateAgreementHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorRebateAgreementHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorRebateAgreementHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorRebateAgreementHeaders<DeSerializersT>,
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
    typeof VendorRebateAgreementHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorRebateAgreementHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REBATE_AGREEMENT_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_BREAK_BASIS: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateLineBreakType,
      true,
      true
    >;
    ACCRUAL_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_SELECTION_USED: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TAXABLE: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATING_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXPENSE_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REBATE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_UNIT_SYMBOL_EXACT: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REBATE_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_APPROVAL_STATUS: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamVendRebateApprovalStatus,
      true,
      true
    >;
    PURCHASE_CUMULATION_METHOD: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamCumulationPeriod,
      true,
      true
    >;
    IS_AGREEMENT_VALIDATED: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATION_SEARCH_DATE_TYPE: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamVendRebateCalcDateType,
      true,
      true
    >;
    PRODUCT_UNIT_SYMBOL: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_CUMULATION_METHOD_CUSTOMIZED_PERIOD_TYPE: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_AMOUNT_BASIS: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamVendRebateTakenFrom,
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUALIFYING_SITE_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVAL_REQUIRED: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_PURCHASE_AMOUNT_QUALIFYING_REBATE: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REBATE_PROGRAM_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_NOTE: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_UNIT_SYMBOL_TYPE: EnumField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateUnitType,
      true,
      true
    >;
    MINIMUM_PURCHASE_QUANTITY_QUALIFYING_REBATE: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUALIFYING_WAREHOUSE_ID: OrderableEdmTypeField<
      VendorRebateAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accrualMainAccountIdCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_MAIN_ACCOUNT_ID_COMBINATION: OneToOneLink<
      VendorRebateAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link expenseMainAccountIdCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_MAIN_ACCOUNT_ID_COMBINATION: OneToOneLink<
      VendorRebateAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorRebateAgreementHeaders<DeSerializers>>;
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
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link rebateBreakBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_BREAK_BASIS: fieldBuilder.buildEnumField(
          'RebateBreakBasis',
          TamRebateLineBreakType,
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
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
         * Static representation of the {@link validatingWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATING_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValidatingWorkerPersonnelNumber',
          'Edm.Int64',
          false
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
         * Static representation of the {@link vendorRebateVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REBATE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorRebateVendorGroupId',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorRebateProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REBATE_PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorRebateProductGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workflowApprovalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'WorkflowApprovalStatus',
          TamVendRebateApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link purchaseCumulationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CUMULATION_METHOD: fieldBuilder.buildEnumField(
          'PurchaseCumulationMethod',
          TamCumulationPeriod,
          true
        ),
        /**
         * Static representation of the {@link isAgreementValidated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AGREEMENT_VALIDATED: fieldBuilder.buildEnumField(
          'isAgreementValidated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calculationSearchDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_SEARCH_DATE_TYPE: fieldBuilder.buildEnumField(
          'CalculationSearchDateType',
          TamVendRebateCalcDateType,
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
         * Static representation of the {@link purchaseCumulationMethodCustomizedPeriodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CUMULATION_METHOD_CUSTOMIZED_PERIOD_TYPE:
          fieldBuilder.buildEdmTypeField(
            'PurchaseCumulationMethodCustomizedPeriodType',
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
         * Static representation of the {@link lineAmountBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT_BASIS: fieldBuilder.buildEnumField(
          'LineAmountBasis',
          TamVendRebateTakenFrom,
          true
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumPurchaseAmountQualifyingRebate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_PURCHASE_AMOUNT_QUALIFYING_REBATE:
          fieldBuilder.buildEdmTypeField(
            'MinimumPurchaseAmountQualifyingRebate',
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
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
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productUnitSymbolType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_UNIT_SYMBOL_TYPE: fieldBuilder.buildEnumField(
          'ProductUnitSymbolType',
          TamRebateUnitType,
          true
        ),
        /**
         * Static representation of the {@link minimumPurchaseQuantityQualifyingRebate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_PURCHASE_QUANTITY_QUALIFYING_REBATE:
          fieldBuilder.buildEdmTypeField(
            'MinimumPurchaseQuantityQualifyingRebate',
            'Edm.Int32',
            false
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
        ALL_FIELDS: new AllFields('*', VendorRebateAgreementHeaders)
      };
    }

    return this._schema;
  }
}
