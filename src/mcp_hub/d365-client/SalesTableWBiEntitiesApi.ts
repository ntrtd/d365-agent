/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTableWBiEntities } from './SalesTableWBiEntities';
import { SalesTableWBiEntitiesRequestBuilder } from './SalesTableWBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { InvoiceTypeMy } from './InvoiceTypeMy';
import { PlFiscalDocType } from './PlFiscalDocType';
import { NatureOfAssesseeIn } from './NatureOfAssesseeIn';
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
export class SalesTableWBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesTableWBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SalesTableWBiEntitiesApi<DeSerializersT> {
    return new SalesTableWBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesTableWBiEntities;

  requestBuilder(): SalesTableWBiEntitiesRequestBuilder<DeSerializersT> {
    return new SalesTableWBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesTableWBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesTableWBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesTableWBiEntities<DeSerializersT>,
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
    typeof SalesTableWBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesTableWBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUSTOMS_EXPORT_ORDER_IN: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENTRY_CERTIFICATE_REQUIRED_W: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMS_SHIPPING_BILL_IN: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_ADD_VALUE_LV: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUR_BANK_ACCOUNT_LV: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITH_IGST_PAYMENT_IN: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNITED_VAT_INVOICE_LT: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_TYPE_MY: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      InvoiceTypeMy,
      true,
      true
    >;
    FISCAL_DOC_TYPE_PL: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      PlFiscalDocType,
      true,
      true
    >;
    PROVISIONAL_ASSESSMENT_IN: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_BANK_ACCOUNT_LV: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_LV: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONS_TARGET_JP: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TCS_GROUP_IN: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_COMMERCE_OPERATOR_IN: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATURE_OF_ASSESSEE_IN: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NatureOfAssesseeIn,
      true,
      true
    >;
    TAX_PERIOD_PAYMENT_CODE_PL: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_COMMERCE_SALE_IN: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MERCHANT_ID_IN: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_OWN_ENTRY_CERTIFICATE_W: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TDS_GROUP_IN: OrderableEdmTypeField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WOULD_YOU_CLAIM_REFUND_IN: EnumField<
      SalesTableWBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesTableWBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link customsExportOrderIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_EXPORT_ORDER_IN: fieldBuilder.buildEnumField(
          'CustomsExportOrder_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link entryCertificateRequiredW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_CERTIFICATE_REQUIRED_W: fieldBuilder.buildEnumField(
          'EntryCertificateRequired_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customsShippingBillIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_SHIPPING_BILL_IN: fieldBuilder.buildEnumField(
          'CustomsShippingBill_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatAddValueLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_ADD_VALUE_LV: fieldBuilder.buildEdmTypeField(
          'IntrastatAddValue_LV',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link curBankAccountLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUR_BANK_ACCOUNT_LV: fieldBuilder.buildEdmTypeField(
          'CurBankAccount_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withIgstPaymentIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITH_IGST_PAYMENT_IN: fieldBuilder.buildEnumField(
          'WithIGSTPayment_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link unitedVatInvoiceLt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNITED_VAT_INVOICE_LT: fieldBuilder.buildEnumField(
          'UnitedVATInvoice_LT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link invoiceTypeMy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TYPE_MY: fieldBuilder.buildEnumField(
          'InvoiceType_MY',
          InvoiceTypeMy,
          true
        ),
        /**
         * Static representation of the {@link fiscalDocTypePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOC_TYPE_PL: fieldBuilder.buildEnumField(
          'FiscalDocType_PL',
          PlFiscalDocType,
          true
        ),
        /**
         * Static representation of the {@link provisionalAssessmentIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISIONAL_ASSESSMENT_IN: fieldBuilder.buildEnumField(
          'ProvisionalAssessment_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custBankAccountLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_BANK_ACCOUNT_LV: fieldBuilder.buildEdmTypeField(
          'CustBankAccount_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountLv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_LV: fieldBuilder.buildEdmTypeField(
          'BankAccount_LV',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consTargetJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONS_TARGET_JP: fieldBuilder.buildEnumField(
          'ConsTarget_JP',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tcsGroupIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_GROUP_IN: fieldBuilder.buildEdmTypeField(
          'TCSGroup_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eCommerceOperatorIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_COMMERCE_OPERATOR_IN: fieldBuilder.buildEdmTypeField(
          'ECommerceOperator_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link natureOfAssesseeIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURE_OF_ASSESSEE_IN: fieldBuilder.buildEnumField(
          'NatureOfAssessee_IN',
          NatureOfAssesseeIn,
          true
        ),
        /**
         * Static representation of the {@link taxPeriodPaymentCodePl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD_PAYMENT_CODE_PL: fieldBuilder.buildEdmTypeField(
          'TaxPeriodPaymentCode_PL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eCommerceSaleIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_COMMERCE_SALE_IN: fieldBuilder.buildEnumField(
          'ECommerceSale_IN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link merchantIdIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT_ID_IN: fieldBuilder.buildEdmTypeField(
          'MerchantID_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issueOwnEntryCertificateW} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_OWN_ENTRY_CERTIFICATE_W: fieldBuilder.buildEnumField(
          'IssueOwnEntryCertificate_W',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tdsGroupIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_GROUP_IN: fieldBuilder.buildEdmTypeField(
          'TDSGroup_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wouldYouClaimRefundIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WOULD_YOU_CLAIM_REFUND_IN: fieldBuilder.buildEnumField(
          'WouldYouClaimRefund_IN',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTableWBiEntities)
      };
    }

    return this._schema;
  }
}
