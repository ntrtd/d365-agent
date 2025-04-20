/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsSalesCharges } from './CdsSalesCharges';
import { CdsSalesChargesRequestBuilder } from './CdsSalesChargesRequestBuilder';
import { MarkupClassificationBr } from './MarkupClassificationBr';
import { MarkupType } from './MarkupType';
import { NoYes } from './NoYes';
import { LedgerPostingType } from './LedgerPostingType';
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
export class CdsSalesChargesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsSalesCharges<DeSerializersT>, DeSerializersT>
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
  ): CdsSalesChargesApi<DeSerializersT> {
    return new CdsSalesChargesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CdsSalesCharges;

  requestBuilder(): CdsSalesChargesRequestBuilder<DeSerializersT> {
    return new CdsSalesChargesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsSalesCharges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CdsSalesCharges<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CdsSalesCharges<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CdsSalesCharges, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsSalesCharges,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGE_CODE: OrderableEdmTypeField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGE_CLASSIFICATION: EnumField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      MarkupClassificationBr,
      true,
      true
    >;
    CREDIT_POSTING_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_POSTING_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_POSTING_METHOD: EnumField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      MarkupType,
      true,
      true
    >;
    CHARGE_DESCRIPTION: OrderableEdmTypeField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_INTRASTAT_INVOICE_VALUE_INCLUDE_CHARGE_AMOUNTS: EnumField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEDGER_NAME: OrderableEdmTypeField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_POSTING_TYPE: EnumField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    WILL_INTRASTAT_STATISTICAL_VALUE_INCLUDE_CHARGE_AMOUNTS: EnumField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_SALES_INVOICING_PRORATE_CHARGE_AMOUNTS: EnumField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_POSTING_METHOD: EnumField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      MarkupType,
      true,
      true
    >;
    CHART_OF_ACCOUNTS_NAME: OrderableEdmTypeField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_POSTING_TYPE: EnumField<
      CdsSalesCharges<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CdsSalesCharges<DeSerializers>>;
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
         * Static representation of the {@link chargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'ChargeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargeClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CLASSIFICATION: fieldBuilder.buildEnumField(
          'ChargeClassification',
          MarkupClassificationBr,
          true
        ),
        /**
         * Static representation of the {@link creditPostingMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_POSTING_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CreditPostingMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link debitPostingMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_POSTING_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DebitPostingMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link debitPostingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_POSTING_METHOD: fieldBuilder.buildEnumField(
          'DebitPostingMethod',
          MarkupType,
          true
        ),
        /**
         * Static representation of the {@link chargeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ChargeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willIntrastatInvoiceValueIncludeChargeAmounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INTRASTAT_INVOICE_VALUE_INCLUDE_CHARGE_AMOUNTS:
          fieldBuilder.buildEnumField(
            'WillIntrastatInvoiceValueIncludeChargeAmounts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link ledgerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_NAME: fieldBuilder.buildEdmTypeField(
          'LedgerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link debitPostingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_POSTING_TYPE: fieldBuilder.buildEnumField(
          'DebitPostingType',
          LedgerPostingType,
          true
        ),
        /**
         * Static representation of the {@link willIntrastatStatisticalValueIncludeChargeAmounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INTRASTAT_STATISTICAL_VALUE_INCLUDE_CHARGE_AMOUNTS:
          fieldBuilder.buildEnumField(
            'WillIntrastatStatisticalValueIncludeChargeAmounts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link salesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willSalesInvoicingProrateChargeAmounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_SALES_INVOICING_PRORATE_CHARGE_AMOUNTS:
          fieldBuilder.buildEnumField(
            'WillSalesInvoicingProrateChargeAmounts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link creditPostingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_POSTING_METHOD: fieldBuilder.buildEnumField(
          'CreditPostingMethod',
          MarkupType,
          true
        ),
        /**
         * Static representation of the {@link chartOfAccountsName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS_NAME: fieldBuilder.buildEdmTypeField(
          'ChartOfAccountsName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditPostingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_POSTING_TYPE: fieldBuilder.buildEnumField(
          'CreditPostingType',
          LedgerPostingType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsSalesCharges)
      };
    }

    return this._schema;
  }
}
