/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodes } from './TaxCodes';
import { TaxCodesRequestBuilder } from './TaxCodesRequestBuilder';
import { SalesAutomaticSalesDocumentHeaderTaxChargesApi } from './SalesAutomaticSalesDocumentHeaderTaxChargesApi';
import { TaxCodeLimitsApi } from './TaxCodeLimitsApi';
import { TaxReportingCodeEntitiesApi } from './TaxReportingCodeEntitiesApi';
import { TaxPostingGroupsApi } from './TaxPostingGroupsApi';
import { TaxPeriodsApi } from './TaxPeriodsApi';
import { TaxCodeValuesV2Api } from './TaxCodeValuesV2Api';
import { TaxItemGroupsApi } from './TaxItemGroupsApi';
import { TaxGroupDatasApi } from './TaxGroupDatasApi';
import { TaxTypeJp } from './TaxTypeJp';
import { NoYes } from './NoYes';
import { TaxSubstitutionEnumBr } from './TaxSubstitutionEnumBr';
import { TaxSubstitutionBaseRedCalculationModeBr } from './TaxSubstitutionBaseRedCalculationModeBr';
import { TaxCalcMode } from './TaxCalcMode';
import { TaxTypeSg } from './TaxTypeSg';
import { TaxWriteSelection } from './TaxWriteSelection';
import { RoundOffType } from './RoundOffType';
import { TaxLimitBase } from './TaxLimitBase';
import { CountryRegionType } from './CountryRegionType';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';
import { TaxBaseType } from './TaxBaseType';
import { VatChargeSourceRu } from './VatChargeSourceRu';
import { TaxTypeTh } from './TaxTypeTh';
import { TaxTypeBr } from './TaxTypeBr';
import { TaxTypeMx } from './TaxTypeMx';
import { TaxTypeW } from './TaxTypeW';
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
export class TaxCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxCodes<DeSerializersT>, DeSerializersT>
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
  ): TaxCodesApi<DeSerializersT> {
    return new TaxCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxCodeCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE_CHARGES: OneToManyLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxCodeLimit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE_LIMIT: OneToManyLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxCodeLimitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxReportingCodeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_REPORTING_CODE_ENTITY: OneToOneLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxReportingCodeEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxPostingGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_POSTING_GROUP: OneToOneLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxPostingGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_PERIOD: OneToOneLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxCodeValueV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE_VALUE_V_2: OneToManyLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxCodeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxItemGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_ITEM_GROUP: OneToManyLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxGroupData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP_DATA: OneToManyLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxGroupDatasApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>,
      TaxCodeLimitsApi<DeSerializersT>,
      TaxReportingCodeEntitiesApi<DeSerializersT>,
      TaxPostingGroupsApi<DeSerializersT>,
      TaxPeriodsApi<DeSerializersT>,
      TaxCodeValuesV2Api<DeSerializersT>,
      TaxItemGroupsApi<DeSerializersT>,
      TaxGroupDatasApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_TAX_CODE_CHARGES: new OneToManyLink(
        'SalesTaxCodeCharges',
        this,
        linkedApis[0]
      ),
      TAX_CODE_LIMIT: new OneToManyLink('TaxCodeLimit', this, linkedApis[1]),
      TAX_REPORTING_CODE_ENTITY: new OneToOneLink(
        'TaxReportingCodeEntity',
        this,
        linkedApis[2]
      ),
      TAX_POSTING_GROUP: new OneToOneLink(
        'TaxPostingGroup',
        this,
        linkedApis[3]
      ),
      TAX_PERIOD: new OneToOneLink('TaxPeriod', this, linkedApis[4]),
      TAX_CODE_VALUE_V_2: new OneToManyLink(
        'TaxCodeValueV2',
        this,
        linkedApis[5]
      ),
      TAX_ITEM_GROUP: new OneToManyLink('TaxItemGroup', this, linkedApis[6]),
      TAX_GROUP_DATA: new OneToManyLink('TaxGroupData', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = TaxCodes;

  requestBuilder(): TaxCodesRequestBuilder<DeSerializersT> {
    return new TaxCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<TaxCodes<DeSerializersT>, DeSerializersT> {
    return entityBuilder<TaxCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JAPAN_TAX_TYPE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxTypeJp,
      true,
      true
    >;
    REPORTING_CODE_TAXABLE_PURCHASES_CREDIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAINED_TAX: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CODE_TAXABLE_IMPORT: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_SUBSTITUTION_METHOD: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxSubstitutionEnumBr,
      true,
      true
    >;
    NOT_EU_SALES_LIST: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CODE_USE_TAX_OFFSET_CREDIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DOMESTIC_CUSTOMS_PRACTICE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CODE_TAX_FREE_SALES_DEBIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_SUBSTITUTION_CALCULATION_METHOD: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxSubstitutionBaseRedCalculationModeBr,
      true,
      true
    >;
    TAX_ON_TAX: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_DUTY: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CODE_TAX_FREE_SALE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAXATION_CODE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CODE_TAX_FREE_PURCHASE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCLUDE_FROM_INVOICE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_CODE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TAX_CODE_ID: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUE_CODE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CODE_USE_TAX_CREDIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPORTING_CODE_SALES_TAX_PAYABLE_CREDIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPORTING_CODE_SALES_TAX_RECEIVABLE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_CALCULATION_METHOD: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxCalcMode,
      true,
      true
    >;
    SINGAPORE_TAX_TYPE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxTypeSg,
      true,
      true
    >;
    REPORTING_CODE_USE_TAX_OFFSET: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRINT_CODE_TYPE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxWriteSelection,
      true,
      true
    >;
    REPORTING_CODE_USE_TAX: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_ROUND_OFF_TYPE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    TAX_VAT_REPORT_CATEGORY_CODE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_LIMIT_BASE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxLimitBase,
      true,
      true
    >;
    REPORTING_CODE_SALES_TAX_PAYABLE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_COUNTRY_REGION_TYPE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      CountryRegionType,
      true,
      true
    >;
    IS_GST: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FISCAL_VALUE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxFiscalValueBr,
      true,
      true
    >;
    REPORTING_CODE_TAX_OUTGOING_DEBIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPORTING_CODE_SALES_TAX_RECEIVABLE_CREDIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPORTING_CODE_TAX_FREE_SALE_CREDIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_BASE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxBaseType,
      true,
      true
    >;
    REPORTING_CODE_TAX_INCOMING_DEBIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INCLUDED_TAX: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CODE_TAX_FREE_BUY_DEBIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIOT_ADD_INFO: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CODE_TAXABLE_IMPORT_OFFSET: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PACKING_DUTY_SORT_CODE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_CHARGE_SOURCE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      VatChargeSourceRu,
      true,
      true
    >;
    TAX_PERIOD_ID: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CODE_TAXABLE_IMPORT_OFFSET_CREDIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_TYPE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxTypeTh,
      true,
      true
    >;
    IS_INVESTMENT: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATE_UNIT_TAX_BEFORE_SALES_TAX: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CODE_TAX_FREE_PURCHASE_CREDIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_CURRENCY_CODE_ID: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CODE_TAXABLE_SALES: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPORTING_CODE_TAXABLE_IMPORT_CREDIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UNREALIZED_TAX: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BRAZIL_TAX_TYPE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxTypeBr,
      true,
      true
    >;
    MEXICO_TAX_TYPE: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxTypeMx,
      true,
      true
    >;
    TAX_NAME: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CODE_TAXABLE_PURCHASES: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NEGATIVE_TAX: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORTING_CODE_TAXABLE_SALES_CREDIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_POSTING_GROUP_ID: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_OF_TAX: EnumField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      TaxTypeW,
      true,
      true
    >;
    REPORTING_CODE_BASE_OUTGOING_DEBIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_UNIT_ID: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTING_CODE_BASE_INCOMING_DEBIT_NOTE: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_ROUND_OFF: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION_QR_BILL: OrderableEdmTypeField<
      TaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxCodeCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE_CHARGES: OneToManyLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      SalesAutomaticSalesDocumentHeaderTaxChargesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxCodeLimit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE_LIMIT: OneToManyLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxCodeLimitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxReportingCodeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_REPORTING_CODE_ENTITY: OneToOneLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxReportingCodeEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxPostingGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_POSTING_GROUP: OneToOneLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxPostingGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_PERIOD: OneToOneLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxCodeValueV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE_VALUE_V_2: OneToManyLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxCodeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxItemGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_ITEM_GROUP: OneToManyLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxGroupData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP_DATA: OneToManyLink<
      TaxCodes<DeSerializersT>,
      DeSerializersT,
      TaxGroupDatasApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxCodes<DeSerializers>>;
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
         * Static representation of the {@link taxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE: fieldBuilder.buildEdmTypeField(
          'TaxCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link japanTaxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JAPAN_TAX_TYPE: fieldBuilder.buildEnumField(
          'JapanTaxType',
          TaxTypeJp,
          true
        ),
        /**
         * Static representation of the {@link reportingCodeTaxablePurchasesCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAXABLE_PURCHASES_CREDIT_NOTE:
          fieldBuilder.buildEdmTypeField(
            'ReportingCodeTaxablePurchasesCreditNote',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link retainedTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAINED_TAX: fieldBuilder.buildEnumField('RetainedTax', NoYes, true),
        /**
         * Static representation of the {@link reportingCodeTaxableImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAXABLE_IMPORT: fieldBuilder.buildEdmTypeField(
          'ReportingCodeTaxableImport',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxSubstitutionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SUBSTITUTION_METHOD: fieldBuilder.buildEnumField(
          'TaxSubstitutionMethod',
          TaxSubstitutionEnumBr,
          true
        ),
        /**
         * Static representation of the {@link notEuSalesList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOT_EU_SALES_LIST: fieldBuilder.buildEnumField(
          'NotEUSalesList',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportingCodeUseTaxOffsetCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_USE_TAX_OFFSET_CREDIT_NOTE:
          fieldBuilder.buildEdmTypeField(
            'ReportingCodeUseTaxOffsetCreditNote',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link domesticCustomsPractice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOMESTIC_CUSTOMS_PRACTICE: fieldBuilder.buildEnumField(
          'DomesticCustomsPractice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportingCodeTaxFreeSalesDebitNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAX_FREE_SALES_DEBIT_NOTE:
          fieldBuilder.buildEdmTypeField(
            'ReportingCodeTaxFreeSalesDebitNote',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link taxSubstitutionCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_SUBSTITUTION_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'TaxSubstitutionCalculationMethod',
          TaxSubstitutionBaseRedCalculationModeBr,
          true
        ),
        /**
         * Static representation of the {@link taxOnTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ON_TAX: fieldBuilder.buildEdmTypeField(
          'TaxOnTax',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingDuty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_DUTY: fieldBuilder.buildEnumField('PackingDuty', NoYes, true),
        /**
         * Static representation of the {@link reportingCodeTaxFreeSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAX_FREE_SALE: fieldBuilder.buildEdmTypeField(
          'ReportingCodeTaxFreeSale',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_CODE: fieldBuilder.buildEdmTypeField(
          'TaxationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCodeTaxFreePurchase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAX_FREE_PURCHASE: fieldBuilder.buildEdmTypeField(
          'ReportingCodeTaxFreePurchase',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link excludeFromInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_FROM_INVOICE: fieldBuilder.buildEnumField(
          'ExcludeFromInvoice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CODE: fieldBuilder.buildEdmTypeField(
          'PrintCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentTaxCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TAX_CODE_ID: fieldBuilder.buildEdmTypeField(
          'PaymentTaxCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_CODE: fieldBuilder.buildEdmTypeField(
          'RevenueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCodeUseTaxCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_USE_TAX_CREDIT_NOTE: fieldBuilder.buildEdmTypeField(
          'ReportingCodeUseTaxCreditNote',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reportingCodeSalesTaxPayableCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_SALES_TAX_PAYABLE_CREDIT_NOTE:
          fieldBuilder.buildEdmTypeField(
            'ReportingCodeSalesTaxPayableCreditNote',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link reportingCodeSalesTaxReceivable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_SALES_TAX_RECEIVABLE: fieldBuilder.buildEdmTypeField(
          'ReportingCodeSalesTaxReceivable',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'TaxCalculationMethod',
          TaxCalcMode,
          true
        ),
        /**
         * Static representation of the {@link singaporeTaxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGAPORE_TAX_TYPE: fieldBuilder.buildEnumField(
          'SingaporeTaxType',
          TaxTypeSg,
          true
        ),
        /**
         * Static representation of the {@link reportingCodeUseTaxOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_USE_TAX_OFFSET: fieldBuilder.buildEdmTypeField(
          'ReportingCodeUseTaxOffset',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link printCodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CODE_TYPE: fieldBuilder.buildEnumField(
          'PrintCodeType',
          TaxWriteSelection,
          true
        ),
        /**
         * Static representation of the {@link reportingCodeUseTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_USE_TAX: fieldBuilder.buildEdmTypeField(
          'ReportingCodeUseTax',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxRoundOffType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ROUND_OFF_TYPE: fieldBuilder.buildEnumField(
          'TaxRoundOffType',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link taxVatReportCategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_VAT_REPORT_CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'TaxVatReportCategoryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxLimitBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_LIMIT_BASE: fieldBuilder.buildEnumField(
          'TaxLimitBase',
          TaxLimitBase,
          true
        ),
        /**
         * Static representation of the {@link reportingCodeSalesTaxPayable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_SALES_TAX_PAYABLE: fieldBuilder.buildEdmTypeField(
          'ReportingCodeSalesTaxPayable',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxCountryRegionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COUNTRY_REGION_TYPE: fieldBuilder.buildEnumField(
          'TaxCountryRegionType',
          CountryRegionType,
          true
        ),
        /**
         * Static representation of the {@link isGst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_GST: fieldBuilder.buildEnumField('IsGST', NoYes, true),
        /**
         * Static representation of the {@link fiscalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_VALUE: fieldBuilder.buildEnumField(
          'FiscalValue',
          TaxFiscalValueBr,
          true
        ),
        /**
         * Static representation of the {@link reportingCodeTaxOutgoingDebitNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAX_OUTGOING_DEBIT_NOTE: fieldBuilder.buildEdmTypeField(
          'ReportingCodeTaxOutgoingDebitNote',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reportingCodeSalesTaxReceivableCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_SALES_TAX_RECEIVABLE_CREDIT_NOTE:
          fieldBuilder.buildEdmTypeField(
            'ReportingCodeSalesTaxReceivableCreditNote',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link reportingCodeTaxFreeSaleCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAX_FREE_SALE_CREDIT_NOTE:
          fieldBuilder.buildEdmTypeField(
            'ReportingCodeTaxFreeSaleCreditNote',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link taxBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASE: fieldBuilder.buildEnumField('TaxBase', TaxBaseType, true),
        /**
         * Static representation of the {@link reportingCodeTaxIncomingDebitNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAX_INCOMING_DEBIT_NOTE: fieldBuilder.buildEdmTypeField(
          'ReportingCodeTaxIncomingDebitNote',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link includedTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDED_TAX: fieldBuilder.buildEnumField('IncludedTax', NoYes, true),
        /**
         * Static representation of the {@link reportingCodeTaxFreeBuyDebitNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAX_FREE_BUY_DEBIT_NOTE: fieldBuilder.buildEdmTypeField(
          'ReportingCodeTaxFreeBuyDebitNote',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link diotAddInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIOT_ADD_INFO: fieldBuilder.buildEnumField('DiotAddInfo', NoYes, true),
        /**
         * Static representation of the {@link reportingCodeTaxableImportOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAXABLE_IMPORT_OFFSET: fieldBuilder.buildEdmTypeField(
          'ReportingCodeTaxableImportOffset',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link packingDutySortCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_DUTY_SORT_CODE: fieldBuilder.buildEdmTypeField(
          'PackingDutySortCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vatChargeSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_CHARGE_SOURCE: fieldBuilder.buildEnumField(
          'VATChargeSource',
          VatChargeSourceRu,
          true
        ),
        /**
         * Static representation of the {@link taxPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'TaxPeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCodeTaxableImportOffsetCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAXABLE_IMPORT_OFFSET_CREDIT_NOTE:
          fieldBuilder.buildEdmTypeField(
            'ReportingCodeTaxableImportOffsetCreditNote',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField('TaxType', TaxTypeTh, true),
        /**
         * Static representation of the {@link isInvestment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVESTMENT: fieldBuilder.buildEnumField('IsInvestment', NoYes, true),
        /**
         * Static representation of the {@link calculateUnitTaxBeforeSalesTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_UNIT_TAX_BEFORE_SALES_TAX: fieldBuilder.buildEnumField(
          'CalculateUnitTaxBeforeSalesTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportingCodeTaxFreePurchaseCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAX_FREE_PURCHASE_CREDIT_NOTE:
          fieldBuilder.buildEdmTypeField(
            'ReportingCodeTaxFreePurchaseCreditNote',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link taxCurrencyCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CURRENCY_CODE_ID: fieldBuilder.buildEdmTypeField(
          'TaxCurrencyCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCodeTaxableSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAXABLE_SALES: fieldBuilder.buildEdmTypeField(
          'ReportingCodeTaxableSales',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reportingCodeTaxableImportCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAXABLE_IMPORT_CREDIT_NOTE:
          fieldBuilder.buildEdmTypeField(
            'ReportingCodeTaxableImportCreditNote',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link unrealizedTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNREALIZED_TAX: fieldBuilder.buildEnumField(
          'UnrealizedTax',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link brazilTaxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZIL_TAX_TYPE: fieldBuilder.buildEnumField(
          'BrazilTaxType',
          TaxTypeBr,
          true
        ),
        /**
         * Static representation of the {@link mexicoTaxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEXICO_TAX_TYPE: fieldBuilder.buildEnumField(
          'MexicoTaxType',
          TaxTypeMx,
          true
        ),
        /**
         * Static representation of the {@link taxName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_NAME: fieldBuilder.buildEdmTypeField('TaxName', 'Edm.String', true),
        /**
         * Static representation of the {@link reportingCodeTaxablePurchases} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAXABLE_PURCHASES: fieldBuilder.buildEdmTypeField(
          'ReportingCodeTaxablePurchases',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link negativeTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_TAX: fieldBuilder.buildEnumField('NegativeTax', NoYes, true),
        /**
         * Static representation of the {@link reportingCodeTaxableSalesCreditNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_TAXABLE_SALES_CREDIT_NOTE:
          fieldBuilder.buildEdmTypeField(
            'ReportingCodeTaxableSalesCreditNote',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link taxPostingGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_POSTING_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TaxPostingGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link typeOfTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_TAX: fieldBuilder.buildEnumField('TypeOfTax', TaxTypeW, true),
        /**
         * Static representation of the {@link reportingCodeBaseOutgoingDebitNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_BASE_OUTGOING_DEBIT_NOTE: fieldBuilder.buildEdmTypeField(
          'ReportingCodeBaseOutgoingDebitNote',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'TaxUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportingCodeBaseIncomingDebitNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE_BASE_INCOMING_DEBIT_NOTE: fieldBuilder.buildEdmTypeField(
          'ReportingCodeBaseIncomingDebitNote',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxRoundOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ROUND_OFF: fieldBuilder.buildEdmTypeField(
          'TaxRoundOff',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link descriptionQrBill} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_QR_BILL: fieldBuilder.buildEdmTypeField(
          'DescriptionQRBill',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxCodes)
      };
    }

    return this._schema;
  }
}
