/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GupRebateAndDeductionsAgreementHeaders } from './GupRebateAndDeductionsAgreementHeaders';
import { GupRebateAndDeductionsAgreementHeadersRequestBuilder } from './GupRebateAndDeductionsAgreementHeadersRequestBuilder';
import { GupRebateAndDeductionsPostingProfilesApi } from './GupRebateAndDeductionsPostingProfilesApi';
import { TamRebateCalcMethod } from './TamRebateCalcMethod';
import { NoYes } from './NoYes';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { TamRebateType } from './TamRebateType';
import { TamRebateBasis } from './TamRebateBasis';
import { TamRebateSourceType } from './TamRebateSourceType';
import { TamRebatePriceBasis } from './TamRebatePriceBasis';
import { GupPricingRuleExclusionType } from './GupPricingRuleExclusionType';
import { TamRebateBasisVend } from './TamRebateBasisVend';
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
  EdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class GupRebateAndDeductionsAgreementHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      GupRebateAndDeductionsAgreementHeaders<DeSerializersT>,
      DeSerializersT
    >
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
  ): GupRebateAndDeductionsAgreementHeadersApi<DeSerializersT> {
    return new GupRebateAndDeductionsAgreementHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      GupRebateAndDeductionsAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link guaranteeRebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUARANTEE_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      GupRebateAndDeductionsAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REBATE_AND_DEDUCTIONS_POSTING_PROFILE: new OneToOneLink(
        'RebateAndDeductionsPostingProfile',
        this,
        linkedApis[0]
      ),
      GUARANTEE_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: new OneToOneLink(
        'GuaranteeRebateAndDeductionsPostingProfile',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = GupRebateAndDeductionsAgreementHeaders;

  requestBuilder(): GupRebateAndDeductionsAgreementHeadersRequestBuilder<DeSerializersT> {
    return new GupRebateAndDeductionsAgreementHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GupRebateAndDeductionsAgreementHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GupRebateAndDeductionsAgreementHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GupRebateAndDeductionsAgreementHeaders<DeSerializersT>,
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
    typeof GupRebateAndDeductionsAgreementHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GupRebateAndDeductionsAgreementHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AGREEMENT_NUMBER: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALCULATION_METHOD: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateCalcMethod,
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_AGREEMENT_TYPE: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORT_NEGATIVE_TIER: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_CREDIT_NOTE: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REBATE_AND_DEDUCTIONS_POSTING_PROFILE_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKED_QUERY: EdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_PAID_INVOICES_ONLY: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER_1: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_3: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_2: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_5: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_4: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_DESCRIPTION: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_7: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_6: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_MODULE: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      ModuleInventCustVend,
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_TAX: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_FREE_TEXT: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_AMOUNT: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_EXCLUSION: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_AND_DEDUCTIONS_TYPE: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateType,
      true,
      true
    >;
    PRICE_COMPONENT_CODE_NAME: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REBATE_REDUCTION_PRINCIPLE_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_7: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_6: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_5: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_4: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_3: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_2: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_1: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_AND_DEDUCTIONS_DEAL_NUMBER: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_DISCOUNTED_AMOUNT: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REBATE_CALCULATION_BASIS: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateBasis,
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMBINATION_HEADER_STRUCTURE: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMBINATION_LINE_STRUCTURE: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_NOTES: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUARANTEE_POSTING_PROFILE_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REBATE_AND_DEDUCTIONS_GROUP_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_TYPE: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateSourceType,
      true,
      true
    >;
    AVERAGE_PURCHASE_PRICE_BASIS_CALCULATION_MONTH_RANGE: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REBATE_PRICE_BASIS: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebatePriceBasis,
      true,
      true
    >;
    PRICE_COMPONENT_COMBINATION_NAME: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_REBATE_AND_DEDUCTIONS_GROUP_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCHED_BY_ORDER_ACCOUNT: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_EXCLUSION_TYPE: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      GupPricingRuleExclusionType,
      true,
      true
    >;
    RETAIL_PRODUCT_VARIANT_NUMBER: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REBATE_AND_DEDUCTIONS_STATUS_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_SETTLEMENT_DISCOUNT: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OPERATIONAL_SITE_ID: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REBATE_CALCULATION_TRANSACTION_BASIS: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      TamRebateBasisVend,
      true,
      true
    >;
    PRODUCT_UNIT_SYMBOL_TYPE: EnumField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      PdsUnitType,
      true,
      true
    >;
    LINE_EXCLUSION: OrderableEdmTypeField<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      GupRebateAndDeductionsAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link guaranteeRebateAndDeductionsPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUARANTEE_REBATE_AND_DEDUCTIONS_POSTING_PROFILE: OneToOneLink<
      GupRebateAndDeductionsAgreementHeaders<DeSerializersT>,
      DeSerializersT,
      GupRebateAndDeductionsPostingProfilesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      GupRebateAndDeductionsAgreementHeaders<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link agreementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgreementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link calculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'CalculationMethod',
          TamRebateCalcMethod,
          true
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
         * Static representation of the {@link rebateAgreementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AGREEMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'RebateAgreementType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supportNegativeTier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_NEGATIVE_TIER: fieldBuilder.buildEnumField(
          'SupportNegativeTier',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willRebateProcessingCalculationIncludeCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_CREDIT_NOTE:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludeCreditNote',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link rebateAndDeductionsPostingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AND_DEDUCTIONS_POSTING_PROFILE_ID:
          fieldBuilder.buildEdmTypeField(
            'RebateAndDeductionsPostingProfileId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link packedQuery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_QUERY: fieldBuilder.buildEdmTypeField(
          'PackedQuery',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link warehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
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
         * Static representation of the {@link willRebateProcessingCalculationIncludePaidInvoicesOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_PAID_INVOICES_ONLY:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludePaidInvoicesOnly',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link header1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_1: fieldBuilder.buildEdmTypeField('Header1', 'Edm.String', true),
        /**
         * Static representation of the {@link header3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_3: fieldBuilder.buildEdmTypeField('Header3', 'Edm.String', true),
        /**
         * Static representation of the {@link header2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_2: fieldBuilder.buildEdmTypeField('Header2', 'Edm.String', true),
        /**
         * Static representation of the {@link header5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_5: fieldBuilder.buildEdmTypeField('Header5', 'Edm.String', true),
        /**
         * Static representation of the {@link header4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_4: fieldBuilder.buildEdmTypeField('Header4', 'Edm.String', true),
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
         * Static representation of the {@link header7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_7: fieldBuilder.buildEdmTypeField('Header7', 'Edm.String', true),
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
         * Static representation of the {@link header6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_6: fieldBuilder.buildEdmTypeField('Header6', 'Edm.String', true),
        /**
         * Static representation of the {@link agreementModule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_MODULE: fieldBuilder.buildEnumField(
          'AgreementModule',
          ModuleInventCustVend,
          true
        ),
        /**
         * Static representation of the {@link willRebateProcessingCalculationIncludeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_TAX:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludeTax',
            NoYes,
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
         * Static representation of the {@link willRebateProcessingCalculationIncludeFreeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_FREE_TEXT:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludeFreeText',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link minimumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link headerExclusion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_EXCLUSION: fieldBuilder.buildEdmTypeField(
          'HeaderExclusion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateAndDeductionsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AND_DEDUCTIONS_TYPE: fieldBuilder.buildEnumField(
          'RebateAndDeductionsType',
          TamRebateType,
          true
        ),
        /**
         * Static representation of the {@link priceComponentCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'PriceComponentCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerRebateReductionPrincipleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REBATE_REDUCTION_PRINCIPLE_ID: fieldBuilder.buildEdmTypeField(
          'CustomerRebateReductionPrincipleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link line7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_7: fieldBuilder.buildEdmTypeField('Line7', 'Edm.String', true),
        /**
         * Static representation of the {@link line6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_6: fieldBuilder.buildEdmTypeField('Line6', 'Edm.String', true),
        /**
         * Static representation of the {@link line5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_5: fieldBuilder.buildEdmTypeField('Line5', 'Edm.String', true),
        /**
         * Static representation of the {@link line4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_4: fieldBuilder.buildEdmTypeField('Line4', 'Edm.String', true),
        /**
         * Static representation of the {@link line3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_3: fieldBuilder.buildEdmTypeField('Line3', 'Edm.String', true),
        /**
         * Static representation of the {@link line2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_2: fieldBuilder.buildEdmTypeField('Line2', 'Edm.String', true),
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
         * Static representation of the {@link line1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_1: fieldBuilder.buildEdmTypeField('Line1', 'Edm.String', true),
        /**
         * Static representation of the {@link rebateAndDeductionsDealNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AND_DEDUCTIONS_DEAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'RebateAndDeductionsDealNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willRebateProcessingCalculationIncludeDiscountedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_DISCOUNTED_AMOUNT:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludeDiscountedAmount',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link rebateCalculationBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_CALCULATION_BASIS: fieldBuilder.buildEnumField(
          'RebateCalculationBasis',
          TamRebateBasis,
          true
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link combinationHeaderStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINATION_HEADER_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'CombinationHeaderStructure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerRebateAndDeductionsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REBATE_AND_DEDUCTIONS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerRebateAndDeductionsGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link combinationLineStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINATION_LINE_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'CombinationLineStructure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NOTES: fieldBuilder.buildEdmTypeField(
          'DocumentNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link guaranteePostingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUARANTEE_POSTING_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'GuaranteePostingProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorRebateAndDeductionsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REBATE_AND_DEDUCTIONS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorRebateAndDeductionsGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'SourceDocumentType',
          TamRebateSourceType,
          true
        ),
        /**
         * Static representation of the {@link averagePurchasePriceBasisCalculationMonthRange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE_PURCHASE_PRICE_BASIS_CALCULATION_MONTH_RANGE:
          fieldBuilder.buildEdmTypeField(
            'AveragePurchasePriceBasisCalculationMonthRange',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link rebatePriceBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_PRICE_BASIS: fieldBuilder.buildEnumField(
          'RebatePriceBasis',
          TamRebatePriceBasis,
          true
        ),
        /**
         * Static representation of the {@link priceComponentCombinationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT_COMBINATION_NAME: fieldBuilder.buildEdmTypeField(
          'PriceComponentCombinationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productRebateAndDeductionsGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_REBATE_AND_DEDUCTIONS_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductRebateAndDeductionsGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
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
         * Static representation of the {@link matchedByOrderAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHED_BY_ORDER_ACCOUNT: fieldBuilder.buildEnumField(
          'MatchedByOrderAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineExclusionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_EXCLUSION_TYPE: fieldBuilder.buildEnumField(
          'LineExclusionType',
          GupPricingRuleExclusionType,
          true
        ),
        /**
         * Static representation of the {@link retailProductVariantNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRODUCT_VARIANT_NUMBER: fieldBuilder.buildEdmTypeField(
          'RetailProductVariantNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rebateAndDeductionsStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_AND_DEDUCTIONS_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'RebateAndDeductionsStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willRebateProcessingCalculationIncludeSettlementDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_PROCESSING_CALCULATION_INCLUDE_SETTLEMENT_DISCOUNT:
          fieldBuilder.buildEnumField(
            'WillRebateProcessingCalculationIncludeSettlementDiscount',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link operationalSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONAL_SITE_ID: fieldBuilder.buildEdmTypeField(
          'OperationalSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorRebateCalculationTransactionBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REBATE_CALCULATION_TRANSACTION_BASIS:
          fieldBuilder.buildEnumField(
            'VendorRebateCalculationTransactionBasis',
            TamRebateBasisVend,
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
         * Static representation of the {@link lineExclusion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_EXCLUSION: fieldBuilder.buildEdmTypeField(
          'LineExclusion',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GupRebateAndDeductionsAgreementHeaders)
      };
    }

    return this._schema;
  }
}
