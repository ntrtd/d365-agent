/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayStatementBenefitLineInquiries } from './PayStatementBenefitLineInquiries';
import { PayStatementBenefitLineInquiriesRequestBuilder } from './PayStatementBenefitLineInquiriesRequestBuilder';
import { PayStatementHeadersApi } from './PayStatementHeadersApi';
import { BenefitsApi } from './BenefitsApi';
import { PayrollPayStatementLineSource } from './PayrollPayStatementLineSource';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PayStatementBenefitLineInquiriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayStatementBenefitLineInquiries<DeSerializersT>, DeSerializersT>
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
  ): PayStatementBenefitLineInquiriesApi<DeSerializersT> {
    return new PayStatementBenefitLineInquiriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      PayStatementBenefitLineInquiries<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      PayStatementBenefitLineInquiries<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayStatementHeadersApi<DeSerializersT>,
      BenefitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_STATEMENT_HEADER: new OneToOneLink(
        'PayStatementHeader',
        this,
        linkedApis[0]
      ),
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PayStatementBenefitLineInquiries;

  requestBuilder(): PayStatementBenefitLineInquiriesRequestBuilder<DeSerializersT> {
    return new PayStatementBenefitLineInquiriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PayStatementBenefitLineInquiries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayStatementBenefitLineInquiries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayStatementBenefitLineInquiries<DeSerializersT>,
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
    typeof PayStatementBenefitLineInquiries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayStatementBenefitLineInquiries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREMIUM_EARNING_BASE_HOURS: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_TIME_EARNING_BASE_AMOUNT: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE: EnumField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      PayrollPayStatementLineSource,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_INVOICE: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_TIME_EARNING_BASE_HOURS: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREMIUM_EARNING_BASE_AMOUNT: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_EMPLOYER: EnumField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKER: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      PayStatementBenefitLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      PayStatementBenefitLineInquiries<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      PayStatementBenefitLineInquiries<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayStatementBenefitLineInquiries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link payStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayStatementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payCycleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_CYCLE_ID: fieldBuilder.buildEdmTypeField(
          'PayCycleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_START_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodStartDate',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link premiumEarningBaseHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREMIUM_EARNING_BASE_HOURS: fieldBuilder.buildEdmTypeField(
          'PremiumEarningBaseHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link baseTimeEarningBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_TIME_EARNING_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BaseTimeEarningBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEnumField(
          'Source',
          PayrollPayStatementLineSource,
          true
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendorInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_INVOICE: fieldBuilder.buildEdmTypeField(
          'VendorInvoice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link baseTimeEarningBaseHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_TIME_EARNING_BASE_HOURS: fieldBuilder.buildEdmTypeField(
          'BaseTimeEarningBaseHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link premiumEarningBaseAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREMIUM_EARNING_BASE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PremiumEarningBaseAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isEmployer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EMPLOYER: fieldBuilder.buildEnumField('IsEmployer', NoYes, true),
        /**
         * Static representation of the {@link worker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER: fieldBuilder.buildEdmTypeField('Worker', 'Edm.String', true),
        /**
         * Static representation of the {@link periodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayStatementBenefitLineInquiries)
      };
    }

    return this._schema;
  }
}
