/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayStatementHeaders } from './PayStatementHeaders';
import { PayStatementHeadersRequestBuilder } from './PayStatementHeadersRequestBuilder';
import { PayrollUsTaxTransactionSummariesApi } from './PayrollUsTaxTransactionSummariesApi';
import { PayStatementTaxLinesApi } from './PayStatementTaxLinesApi';
import { PayStatementBenefitLinesApi } from './PayStatementBenefitLinesApi';
import { WorkersApi } from './WorkersApi';
import { PayCyclesApi } from './PayCyclesApi';
import { PayStatementAccrualBalancesApi } from './PayStatementAccrualBalancesApi';
import { DeductionArrearRecoveriesApi } from './DeductionArrearRecoveriesApi';
import { PayStatementEarningLineInquiriesApi } from './PayStatementEarningLineInquiriesApi';
import { UsTaxTransactionHistoriesApi } from './UsTaxTransactionHistoriesApi';
import { PayStatementBenefitLineInquiriesApi } from './PayStatementBenefitLineInquiriesApi';
import { PayStatementEarningLinesApi } from './PayStatementEarningLinesApi';
import { DeductionArrearsApi } from './DeductionArrearsApi';
import { UsTaxTransactionHistoryDetailsApi } from './UsTaxTransactionHistoryDetailsApi';
import { PayrollPaymentMethodType } from './PayrollPaymentMethodType';
import { PayrollPaymentType } from './PayrollPaymentType';
import { PayrollPayStatementCreationType } from './PayrollPayStatementCreationType';
import { NoYes } from './NoYes';
import { PayrollPaymentStatus } from './PayrollPaymentStatus';
import { PayrollPayStatementPostedStatus } from './PayrollPayStatementPostedStatus';
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
export class PayStatementHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayStatementHeaders<DeSerializersT>, DeSerializersT>
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
  ): PayStatementHeadersApi<DeSerializersT> {
    return new PayStatementHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payrollUsTaxTransactionSummary} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_US_TAX_TRANSACTION_SUMMARY: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayrollUsTaxTransactionSummariesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementTaxLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_TAX_LINE: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementTaxLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementBenefitLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_BENEFIT_LINE: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementBenefitLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_CYCLE: OneToOneLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementAccrualBalance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_ACCRUAL_BALANCE: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementAccrualBalancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deductionArrearRecovery} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_ARREAR_RECOVERY: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      DeductionArrearRecoveriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementEarningLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_EARNING_LINES: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementEarningLineInquiriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_TRANSACTIONS: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      UsTaxTransactionHistoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementBenefitLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_BENEFIT_LINES: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementBenefitLineInquiriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementEarningLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_EARNING_LINE: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementEarningLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deductionArrear} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_ARREAR: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      DeductionArrearsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link usTaxTransactionHistoryDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    US_TAX_TRANSACTION_HISTORY_DETAIL: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      UsTaxTransactionHistoryDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollUsTaxTransactionSummariesApi<DeSerializersT>,
      PayStatementTaxLinesApi<DeSerializersT>,
      PayStatementBenefitLinesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      PayCyclesApi<DeSerializersT>,
      PayStatementAccrualBalancesApi<DeSerializersT>,
      DeductionArrearRecoveriesApi<DeSerializersT>,
      PayStatementEarningLineInquiriesApi<DeSerializersT>,
      UsTaxTransactionHistoriesApi<DeSerializersT>,
      PayStatementBenefitLineInquiriesApi<DeSerializersT>,
      PayStatementEarningLinesApi<DeSerializersT>,
      DeductionArrearsApi<DeSerializersT>,
      UsTaxTransactionHistoryDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_US_TAX_TRANSACTION_SUMMARY: new OneToManyLink(
        'PayrollUSTaxTransactionSummary',
        this,
        linkedApis[0]
      ),
      PAY_STATEMENT_TAX_LINE: new OneToManyLink(
        'PayStatementTaxLine',
        this,
        linkedApis[1]
      ),
      PAY_STATEMENT_BENEFIT_LINE: new OneToManyLink(
        'PayStatementBenefitLine',
        this,
        linkedApis[2]
      ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[3]),
      PAY_CYCLE: new OneToOneLink('PayCycle', this, linkedApis[4]),
      PAY_STATEMENT_ACCRUAL_BALANCE: new OneToManyLink(
        'PayStatementAccrualBalance',
        this,
        linkedApis[5]
      ),
      DEDUCTION_ARREAR_RECOVERY: new OneToManyLink(
        'DeductionArrearRecovery',
        this,
        linkedApis[6]
      ),
      PAY_STATEMENT_EARNING_LINES: new OneToManyLink(
        'PayStatementEarningLines',
        this,
        linkedApis[7]
      ),
      TAX_TRANSACTIONS: new OneToManyLink(
        'TaxTransactions',
        this,
        linkedApis[8]
      ),
      PAY_STATEMENT_BENEFIT_LINES: new OneToManyLink(
        'PayStatementBenefitLines',
        this,
        linkedApis[9]
      ),
      PAY_STATEMENT_EARNING_LINE: new OneToManyLink(
        'PayStatementEarningLine',
        this,
        linkedApis[10]
      ),
      DEDUCTION_ARREAR: new OneToManyLink(
        'DeductionArrear',
        this,
        linkedApis[11]
      ),
      US_TAX_TRANSACTION_HISTORY_DETAIL: new OneToManyLink(
        'USTaxTransactionHistoryDetail',
        this,
        linkedApis[12]
      )
    };
    return this;
  }

  entityConstructor = PayStatementHeaders;

  requestBuilder(): PayStatementHeadersRequestBuilder<DeSerializersT> {
    return new PayStatementHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayStatementHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayStatementHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayStatementHeaders<DeSerializersT>,
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
    typeof PayStatementHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayStatementHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_DATE: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GROSS_PAY: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISBURSEMENT_FORMAT: EnumField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      PayrollPaymentMethodType,
      true,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_RUN_TYPE: EnumField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      PayrollPaymentType,
      true,
      true
    >;
    CREATION_TYPE: EnumField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      PayrollPayStatementCreationType,
      true,
      true
    >;
    PAYMENT_JOURNAL: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BATCH_NUMBER: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISABLE_ACCOUNTING: EnumField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVERSED_PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_STATEMENT_REVERSED: EnumField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAY_STATEMENT_STATUS: EnumField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      PayrollPaymentStatus,
      true,
      true
    >;
    POSTED: EnumField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      PayrollPayStatementPostedStatus,
      true,
      true
    >;
    NET_PAY: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      PayStatementHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollUsTaxTransactionSummary} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_US_TAX_TRANSACTION_SUMMARY: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayrollUsTaxTransactionSummariesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementTaxLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_TAX_LINE: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementTaxLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementBenefitLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_BENEFIT_LINE: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementBenefitLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_CYCLE: OneToOneLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementAccrualBalance} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_ACCRUAL_BALANCE: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementAccrualBalancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deductionArrearRecovery} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_ARREAR_RECOVERY: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      DeductionArrearRecoveriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementEarningLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_EARNING_LINES: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementEarningLineInquiriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_TRANSACTIONS: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      UsTaxTransactionHistoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementBenefitLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_BENEFIT_LINES: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementBenefitLineInquiriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementEarningLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_EARNING_LINE: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      PayStatementEarningLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deductionArrear} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEDUCTION_ARREAR: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      DeductionArrearsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link usTaxTransactionHistoryDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    US_TAX_TRANSACTION_HISTORY_DETAIL: OneToManyLink<
      PayStatementHeaders<DeSerializersT>,
      DeSerializersT,
      UsTaxTransactionHistoryDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayStatementHeaders<DeSerializers>>;
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
         * Static representation of the {@link paymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link grossPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_PAY: fieldBuilder.buildEdmTypeField(
          'GrossPay',
          'Edm.Decimal',
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
         * Static representation of the {@link disbursementFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISBURSEMENT_FORMAT: fieldBuilder.buildEnumField(
          'DisbursementFormat',
          PayrollPaymentMethodType,
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
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link paymentRunType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_RUN_TYPE: fieldBuilder.buildEnumField(
          'PaymentRunType',
          PayrollPaymentType,
          true
        ),
        /**
         * Static representation of the {@link creationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_TYPE: fieldBuilder.buildEnumField(
          'CreationType',
          PayrollPayStatementCreationType,
          true
        ),
        /**
         * Static representation of the {@link paymentJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_JOURNAL: fieldBuilder.buildEdmTypeField(
          'PaymentJournal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link batchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'BatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link disableAccounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLE_ACCOUNTING: fieldBuilder.buildEnumField(
          'DisableAccounting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reversedPayStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED_PAY_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReversedPayStatementNumber',
          'Edm.String',
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
         * Static representation of the {@link payStatementReversed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_STATEMENT_REVERSED: fieldBuilder.buildEnumField(
          'PayStatementReversed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link payStatementStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_STATEMENT_STATUS: fieldBuilder.buildEnumField(
          'PayStatementStatus',
          PayrollPaymentStatus,
          true
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField(
          'Posted',
          PayrollPayStatementPostedStatus,
          true
        ),
        /**
         * Static representation of the {@link netPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_PAY: fieldBuilder.buildEdmTypeField('NetPay', 'Edm.Decimal', false),
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
        ALL_FIELDS: new AllFields('*', PayStatementHeaders)
      };
    }

    return this._schema;
  }
}
