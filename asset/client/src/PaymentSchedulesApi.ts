/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentSchedules } from './PaymentSchedules';
import { PaymentSchedulesRequestBuilder } from './PaymentSchedulesRequestBuilder';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { SalesAgreementConfirmationsApi } from './SalesAgreementConfirmationsApi';
import { PaymentTermsApi } from './PaymentTermsApi';
import { SalesAgreementsApi } from './SalesAgreementsApi';
import { FreeTextInvoiceHeadersApi } from './FreeTextInvoiceHeadersApi';
import { PaymentScheduleLinesApi } from './PaymentScheduleLinesApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { PaymSchedBy } from './PaymSchedBy';
import { PeriodUnit } from './PeriodUnit';
import { PaymSchedTaxDistribution } from './PaymSchedTaxDistribution';
import { McrPaymSchedMiscChargeDist } from './McrPaymSchedMiscChargeDist';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PaymentSchedulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentSchedules<DeSerializersT>, DeSerializersT>
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
  ): PaymentSchedulesApi<DeSerializersT> {
    return new PaymentSchedulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERM: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderPaymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_PAYMENT_SCHEDULE: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentScheduleLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE_LINES: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      PaymentScheduleLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementsApi<DeSerializersT>,
      SalesAgreementConfirmationsApi<DeSerializersT>,
      PaymentTermsApi<DeSerializersT>,
      SalesAgreementsApi<DeSerializersT>,
      FreeTextInvoiceHeadersApi<DeSerializersT>,
      PaymentScheduleLinesApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[0]
      ),
      SALES_AGREEMENT_CONFIRMATION_HEADERS: new OneToManyLink(
        'SalesAgreementConfirmationHeaders',
        this,
        linkedApis[1]
      ),
      PAYMENT_TERM: new OneToManyLink('PaymentTerm', this, linkedApis[2]),
      SALES_AGREEMENT_HEADERS: new OneToManyLink(
        'SalesAgreementHeaders',
        this,
        linkedApis[3]
      ),
      FREE_TEXT_INVOICE_HEADER_PAYMENT_SCHEDULE: new OneToManyLink(
        'FreeTextInvoiceHeaderPaymentSchedule',
        this,
        linkedApis[4]
      ),
      PAYMENT_SCHEDULE_LINES: new OneToManyLink(
        'PaymentScheduleLines',
        this,
        linkedApis[5]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = PaymentSchedules;

  requestBuilder(): PaymentSchedulesRequestBuilder<DeSerializersT> {
    return new PaymentSchedulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentSchedules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentSchedules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PaymentSchedules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PaymentSchedules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymentSchedules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOCATION_METHOD: EnumField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      PaymSchedBy,
      true,
      true
    >;
    PAYMENT_FREQUENCY_UNITS: EnumField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    NUMBER_OF_PAYMENTS: OrderableEdmTypeField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_TAX_ALLOCATION_METHOD: EnumField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      PaymSchedTaxDistribution,
      true,
      true
    >;
    CHARGE_ALLOCATION_METHOD: EnumField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      McrPaymSchedMiscChargeDist,
      true,
      true
    >;
    INSTALLMENT_MINIMUM_ORDER_AMOUNT: OrderableEdmTypeField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_PAYMENT_AMOUNT: OrderableEdmTypeField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NOTES: OrderableEdmTypeField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTALLMENT_MAXIMUM_ORDER_AMOUNT: OrderableEdmTypeField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_FREQUENCY: OrderableEdmTypeField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_FLEXIBLE_INSTALLMENT_PLAN: EnumField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIXED_PAYMENT_AMOUNT: OrderableEdmTypeField<
      PaymentSchedules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_HEADERS: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERM: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      PaymentTermsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_HEADERS: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      SalesAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freeTextInvoiceHeaderPaymentSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREE_TEXT_INVOICE_HEADER_PAYMENT_SCHEDULE: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      FreeTextInvoiceHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link paymentScheduleLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_SCHEDULE_LINES: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      PaymentScheduleLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      PaymentSchedules<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PaymentSchedules<DeSerializers>>;
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
         * Static representation of the {@link allocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'AllocationMethod',
          PaymSchedBy,
          true
        ),
        /**
         * Static representation of the {@link paymentFrequencyUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FREQUENCY_UNITS: fieldBuilder.buildEnumField(
          'PaymentFrequencyUnits',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link numberOfPayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_PAYMENTS: fieldBuilder.buildEdmTypeField(
          'NumberOfPayments',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesTaxAllocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'SalesTaxAllocationMethod',
          PaymSchedTaxDistribution,
          true
        ),
        /**
         * Static representation of the {@link chargeAllocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'ChargeAllocationMethod',
          McrPaymSchedMiscChargeDist,
          true
        ),
        /**
         * Static representation of the {@link installmentMinimumOrderAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALLMENT_MINIMUM_ORDER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InstallmentMinimumOrderAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumPaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
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
         * Static representation of the {@link installmentMaximumOrderAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALLMENT_MAXIMUM_ORDER_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InstallmentMaximumOrderAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymentFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FREQUENCY: fieldBuilder.buildEdmTypeField(
          'PaymentFrequency',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isFlexibleInstallmentPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FLEXIBLE_INSTALLMENT_PLAN: fieldBuilder.buildEnumField(
          'IsFlexibleInstallmentPlan',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link fixedPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FixedPaymentAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentSchedules)
      };
    }

    return this._schema;
  }
}
