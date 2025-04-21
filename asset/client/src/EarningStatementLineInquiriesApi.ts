/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EarningStatementLineInquiries } from './EarningStatementLineInquiries';
import { EarningStatementLineInquiriesRequestBuilder } from './EarningStatementLineInquiriesRequestBuilder';
import { PositionsV2Api } from './PositionsV2Api';
import { PremiumEarningCodesApi } from './PremiumEarningCodesApi';
import { EarningStatementsApi } from './EarningStatementsApi';
import { PayPeriodsApi } from './PayPeriodsApi';
import { PayrollPaymentProcessingStatus } from './PayrollPaymentProcessingStatus';
import { PayrollQuantityUnit } from './PayrollQuantityUnit';
import { PayrollGenerationSource } from './PayrollGenerationSource';
import { NoYes } from './NoYes';
import { PayrollFringeBenefitType } from './PayrollFringeBenefitType';
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
export class EarningStatementLineInquiriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EarningStatementLineInquiries<DeSerializersT>, DeSerializersT>
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
  ): EarningStatementLineInquiriesApi<DeSerializersT> {
    return new EarningStatementLineInquiriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      EarningStatementLineInquiries<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link premiumEarningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PREMIUM_EARNING_CODE: OneToOneLink<
      EarningStatementLineInquiries<DeSerializersT>,
      DeSerializersT,
      PremiumEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEarningStatement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EARNING_STATEMENT: OneToOneLink<
      EarningStatementLineInquiries<DeSerializersT>,
      DeSerializersT,
      EarningStatementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPayPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_PAY_PERIOD: OneToOneLink<
      EarningStatementLineInquiries<DeSerializersT>,
      DeSerializersT,
      PayPeriodsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PositionsV2Api<DeSerializersT>,
      PremiumEarningCodesApi<DeSerializersT>,
      EarningStatementsApi<DeSerializersT>,
      PayPeriodsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      POSITION_V_2: new OneToOneLink('PositionV2', this, linkedApis[0]),
      PREMIUM_EARNING_CODE: new OneToOneLink(
        'PremiumEarningCode',
        this,
        linkedApis[1]
      ),
      PAYROLL_EARNING_STATEMENT: new OneToOneLink(
        'PayrollEarningStatement',
        this,
        linkedApis[2]
      ),
      PAYROLL_PAY_PERIOD: new OneToOneLink(
        'PayrollPayPeriod',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = EarningStatementLineInquiries;

  requestBuilder(): EarningStatementLineInquiriesRequestBuilder<DeSerializersT> {
    return new EarningStatementLineInquiriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EarningStatementLineInquiries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EarningStatementLineInquiries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EarningStatementLineInquiries<DeSerializersT>,
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
    typeof EarningStatementLineInquiries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EarningStatementLineInquiries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_STATUS: EnumField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      PayrollPaymentProcessingStatus,
      true,
      true
    >;
    EARNING_RATE: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EARNING_CODE: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETROACTIVE_PRIOR_RATE: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_UNIT: EnumField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      PayrollQuantityUnit,
      true,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERATION_SOURCE: EnumField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      PayrollGenerationSource,
      true,
      true
    >;
    IS_PRODUCTIVE: EnumField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EARNING_CODE_DESCRIPTION: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_CURRENCY_AMOUNT: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREMIUM_CODE: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FRINGE_BENEFIT_TYPE: EnumField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      PayrollFringeBenefitType,
      true,
      true
    >;
    WORKER: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_COMPENSATION_BENEFIT_ID: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_GLI_BENEFIT_ID: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_REGION: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EARNING_DATE: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      EarningStatementLineInquiries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      EarningStatementLineInquiries<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link premiumEarningCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PREMIUM_EARNING_CODE: OneToOneLink<
      EarningStatementLineInquiries<DeSerializersT>,
      DeSerializersT,
      PremiumEarningCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEarningStatement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EARNING_STATEMENT: OneToOneLink<
      EarningStatementLineInquiries<DeSerializersT>,
      DeSerializersT,
      EarningStatementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPayPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_PAY_PERIOD: OneToOneLink<
      EarningStatementLineInquiries<DeSerializersT>,
      DeSerializersT,
      PayPeriodsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EarningStatementLineInquiries<DeSerializers>>;
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
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_STATUS: fieldBuilder.buildEnumField(
          'PaymentStatus',
          PayrollPaymentProcessingStatus,
          true
        ),
        /**
         * Static representation of the {@link earningRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_RATE: fieldBuilder.buildEdmTypeField(
          'EarningRate',
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
         * Static representation of the {@link earningCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE: fieldBuilder.buildEdmTypeField(
          'EarningCode',
          'Edm.String',
          true
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
         * Static representation of the {@link retroactivePriorRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETROACTIVE_PRIOR_RATE: fieldBuilder.buildEdmTypeField(
          'RetroactivePriorRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_UNIT: fieldBuilder.buildEnumField(
          'QuantityUnit',
          PayrollQuantityUnit,
          true
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
         * Static representation of the {@link generationSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATION_SOURCE: fieldBuilder.buildEnumField(
          'GenerationSource',
          PayrollGenerationSource,
          true
        ),
        /**
         * Static representation of the {@link isProductive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCTIVE: fieldBuilder.buildEnumField('IsProductive', NoYes, true),
        /**
         * Static representation of the {@link earningCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EarningCodeDescription',
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
         * Static representation of the {@link accountingCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AccountingCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link premiumCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREMIUM_CODE: fieldBuilder.buildEdmTypeField(
          'PremiumCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fringeBenefitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRINGE_BENEFIT_TYPE: fieldBuilder.buildEnumField(
          'FringeBenefitType',
          PayrollFringeBenefitType,
          true
        ),
        /**
         * Static representation of the {@link worker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER: fieldBuilder.buildEdmTypeField('Worker', 'Edm.String', true),
        /**
         * Static representation of the {@link workerCompensationBenefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_COMPENSATION_BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'WorkerCompensationBenefitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerGliBenefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_GLI_BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'WorkerGLIBenefitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGION: fieldBuilder.buildEdmTypeField(
          'TaxRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link earningDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_DATE: fieldBuilder.buildEdmTypeField(
          'EarningDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EarningStatementLineInquiries)
      };
    }

    return this._schema;
  }
}
