/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentTerms } from './PaymentTerms';
import { PaymentTermsRequestBuilder } from './PaymentTermsRequestBuilder';
import { VendorGroupsApi } from './VendorGroupsApi';
import { OnlineChannelV2SApi } from './OnlineChannelV2SApi';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { PaymentSchedulesApi } from './PaymentSchedulesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { PaymentDaysApi } from './PaymentDaysApi';
import { FreeTextInvoiceHeadersApi } from './FreeTextInvoiceHeadersApi';
import { OnlineChannelsApi } from './OnlineChannelsApi';
import { CdsFreeTextInvoiceHeadersApi } from './CdsFreeTextInvoiceHeadersApi';
import { RetailStoresApi } from './RetailStoresApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { CreditCardCreditCheck } from './CreditCardCreditCheck';
import { NoYes } from './NoYes';
import { CreditCardPaymentType } from './CreditCardPaymentType';
import { PaymentDueDateUpdatePolicy } from './PaymentDueDateUpdatePolicy';
import { NetCurrent } from './NetCurrent';
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
export class PaymentTermsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentTerms<DeSerializersT>, DeSerializersT>
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
  ): PaymentTermsApi<DeSerializersT> {
    return new PaymentTermsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link clearingPeriodAssignedVendorGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLEARING_PERIOD_ASSIGNED_VENDOR_GROUPS: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link defaultAssignedVendorGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_ASSIGNED_VENDOR_GROUPS: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_V_2: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      OnlineChannelV2SApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE: OneToOneLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentDay} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DAY: OneToOneLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      PaymentDaysApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderPaymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_PAYMENT_TERM: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_HEADERS: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorGroupsApi<DeSerializersT>,
      VendorGroupsApi<DeSerializersT>,
      OnlineChannelV2SApi<DeSerializersT>,
      PurchaseAgreementsApi<DeSerializersT>,
      PaymentSchedulesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      PaymentDaysApi<DeSerializersT>,
      FreeTextInvoiceHeadersApi<DeSerializersT>,
      OnlineChannelsApi<DeSerializersT>,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>,
      RetailStoresApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CLEARING_PERIOD_ASSIGNED_VENDOR_GROUPS: new OneToManyLink(
        'ClearingPeriodAssignedVendorGroups',
        this,
        linkedApis[0]
      ),
      DEFAULT_ASSIGNED_VENDOR_GROUPS: new OneToManyLink(
        'DefaultAssignedVendorGroups',
        this,
        linkedApis[1]
      ),
      ONLINE_CHANNEL_V_2: new OneToManyLink(
        'OnlineChannelV2',
        this,
        linkedApis[2]
      ),
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[3]
      ),
      PAYMENT_SCHEDULE: new OneToOneLink(
        'PaymentSchedule',
        this,
        linkedApis[4]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[5]
      ),
      PAYMENT_DAY: new OneToOneLink('PaymentDay', this, linkedApis[6]),
      FREE_TEXT_INVOICE_HEADER_PAYMENT_TERM: new OneToManyLink(
        'FreeTextInvoiceHeaderPaymentTerm',
        this,
        linkedApis[7]
      ),
      ONLINE_CHANNEL: new OneToManyLink('OnlineChannel', this, linkedApis[8]),
      CDS_FREE_TEXT_INVOICE_HEADERS: new OneToManyLink(
        'CDSFreeTextInvoiceHeaders',
        this,
        linkedApis[9]
      ),
      RETAIL_STORE: new OneToManyLink('RetailStore', this, linkedApis[10]),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[11]
      )
    };
    return this;
  }

  entityConstructor = PaymentTerms;

  requestBuilder(): PaymentTermsRequestBuilder<DeSerializersT> {
    return new PaymentTermsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentTerms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentTerms<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PaymentTerms<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PaymentTerms, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PaymentTerms, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_MONTHS: OrderableEdmTypeField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUTOFF_DAY_OF_MONTH: OrderableEdmTypeField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREDIT_CARD_CREDIT_CHECK_TYPE: EnumField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      CreditCardCreditCheck,
      true,
      true
    >;
    PAYMENT_SCHEDULE_NAME: OrderableEdmTypeField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_PAYMENT_TERM: EnumField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREDIT_CARD_PAYMENT_TYPE: EnumField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      CreditCardPaymentType,
      true,
      true
    >;
    IS_CASH_PAYMENT: EnumField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_OF_DAYS: OrderableEdmTypeField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_DUE_DATE_UPDATE_POLICY: EnumField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      PaymentDueDateUpdatePolicy,
      true,
      true
    >;
    PAYMENT_DAY_NAME: OrderableEdmTypeField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_DUE_DATE_UPDATE_POLICY: EnumField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      PaymentDueDateUpdatePolicy,
      true,
      true
    >;
    POST_OFFSETTING_AR: EnumField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAYMENT_METHOD_TYPE: EnumField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      NetCurrent,
      true,
      true
    >;
    CASH_PAYMENT_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CERTIFIED_COMPANY_CHECK: EnumField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADDITIONAL_MONTHS_FOR_CUTOFF_DATE: OrderableEdmTypeField<
      PaymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clearingPeriodAssignedVendorGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLEARING_PERIOD_ASSIGNED_VENDOR_GROUPS: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link defaultAssignedVendorGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_ASSIGNED_VENDOR_GROUPS: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_V_2: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      OnlineChannelV2SApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE: OneToOneLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      PaymentSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentDay} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_DAY: OneToOneLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      PaymentDaysApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderPaymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_PAYMENT_TERM: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cdsFreeTextInvoiceHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_FREE_TEXT_INVOICE_HEADERS: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      CdsFreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      PaymentTerms<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PaymentTerms<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
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
         * Static representation of the {@link numberOfMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_MONTHS: fieldBuilder.buildEdmTypeField(
          'NumberOfMonths',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link cutoffDayOfMonth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUTOFF_DAY_OF_MONTH: fieldBuilder.buildEdmTypeField(
          'CutoffDayOfMonth',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link creditCardCreditCheckType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_CREDIT_CHECK_TYPE: fieldBuilder.buildEnumField(
          'CreditCardCreditCheckType',
          CreditCardCreditCheck,
          true
        ),
        /**
         * Static representation of the {@link paymentScheduleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_SCHEDULE_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentScheduleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultPaymentTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_PAYMENT_TERM: fieldBuilder.buildEnumField(
          'IsDefaultPaymentTerm',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creditCardPaymentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_CARD_PAYMENT_TYPE: fieldBuilder.buildEnumField(
          'CreditCardPaymentType',
          CreditCardPaymentType,
          true
        ),
        /**
         * Static representation of the {@link isCashPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CASH_PAYMENT: fieldBuilder.buildEnumField(
          'IsCashPayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberOfDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_DAYS: fieldBuilder.buildEdmTypeField(
          'NumberOfDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link customerDueDateUpdatePolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_DUE_DATE_UPDATE_POLICY: fieldBuilder.buildEnumField(
          'CustomerDueDateUpdatePolicy',
          PaymentDueDateUpdatePolicy,
          true
        ),
        /**
         * Static representation of the {@link paymentDayName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DAY_NAME: fieldBuilder.buildEdmTypeField(
          'PaymentDayName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorDueDateUpdatePolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_DUE_DATE_UPDATE_POLICY: fieldBuilder.buildEnumField(
          'VendorDueDateUpdatePolicy',
          PaymentDueDateUpdatePolicy,
          true
        ),
        /**
         * Static representation of the {@link postOffsettingAr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_OFFSETTING_AR: fieldBuilder.buildEnumField(
          'PostOffsettingAR',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paymentMethodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD_TYPE: fieldBuilder.buildEnumField(
          'PaymentMethodType',
          NetCurrent,
          true
        ),
        /**
         * Static representation of the {@link cashPaymentMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_PAYMENT_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CashPaymentMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isCertifiedCompanyCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CERTIFIED_COMPANY_CHECK: fieldBuilder.buildEnumField(
          'IsCertifiedCompanyCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link additionalMonthsForCutoffDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_MONTHS_FOR_CUTOFF_DATE: fieldBuilder.buildEdmTypeField(
          'AdditionalMonthsForCutoffDate',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentTerms)
      };
    }

    return this._schema;
  }
}
