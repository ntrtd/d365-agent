/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EarningStatementLines } from './EarningStatementLines';
import { EarningStatementLinesRequestBuilder } from './EarningStatementLinesRequestBuilder';
import { EarningStatementsApi } from './EarningStatementsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { PayrollPaymentProcessingStatus } from './PayrollPaymentProcessingStatus';
import { NoYes } from './NoYes';
import { PayrollGenerationSource } from './PayrollGenerationSource';
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
export class EarningStatementLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EarningStatementLines<DeSerializersT>, DeSerializersT>
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
  ): EarningStatementLinesApi<DeSerializersT> {
    return new EarningStatementLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link earningStatement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_STATEMENT: OneToOneLink<
      EarningStatementLines<DeSerializersT>,
      DeSerializersT,
      EarningStatementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      EarningStatementLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EarningStatementsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EARNING_STATEMENT: new OneToOneLink(
        'EarningStatement',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = EarningStatementLines;

  requestBuilder(): EarningStatementLinesRequestBuilder<DeSerializersT> {
    return new EarningStatementLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EarningStatementLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EarningStatementLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EarningStatementLines<DeSerializersT>,
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
    typeof EarningStatementLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EarningStatementLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMPANY: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EARNINGS_STATEMENT_NUMBER: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_RETROACTIVE_RATE: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_GENERAL_LIABILITY_INSURANCE_BENEFIT_ID: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_STATUS: EnumField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      PayrollPaymentProcessingStatus,
      true,
      true
    >;
    EARNING_RATE: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_TAX_REGION_LOCATION_ID: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_LINE_PROPERTY: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MANUAL: EnumField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EARNING_CODE_ID: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINATING_EARNING_STATEMENT_LINE_NUMBER: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EARNINGS_DATE: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERATION_SOURCE: EnumField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      PayrollGenerationSource,
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_MODIFIED: EnumField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINATING_EARNING_STATEMENT_NUMBER: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CATEGORY: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_COMPENSATION_BENEFIT_ID: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREMIUM_EARNING_CODE: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      EarningStatementLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link earningStatement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_STATEMENT: OneToOneLink<
      EarningStatementLines<DeSerializersT>,
      DeSerializersT,
      EarningStatementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      EarningStatementLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EarningStatementLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
        /**
         * Static representation of the {@link earningsStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNINGS_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'EarningsStatementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalRetroactiveRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_RETROACTIVE_RATE: fieldBuilder.buildEdmTypeField(
          'OriginalRetroactiveRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerGeneralLiabilityInsuranceBenefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_GENERAL_LIABILITY_INSURANCE_BENEFIT_ID:
          fieldBuilder.buildEdmTypeField(
            'WorkerGeneralLiabilityInsuranceBenefitId',
            'Edm.String',
            true
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
         * Static representation of the {@link workerTaxRegionLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_TAX_REGION_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WorkerTaxRegionLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectLineProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_LINE_PROPERTY: fieldBuilder.buildEdmTypeField(
          'ProjectLineProperty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingDistributionTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isManual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MANUAL: fieldBuilder.buildEnumField('IsManual', NoYes, true),
        /**
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originatingEarningStatementLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINATING_EARNING_STATEMENT_LINE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'OriginatingEarningStatementLineNumber',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link earningsDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNINGS_DATE: fieldBuilder.buildEdmTypeField(
          'EarningsDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link generationSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATION_SOURCE: fieldBuilder.buildEnumField(
          'GenerationSource',
          PayrollGenerationSource,
          true
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_MODIFIED: fieldBuilder.buildEnumField('LineModified', NoYes, true),
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
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link originatingEarningStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINATING_EARNING_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OriginatingEarningStatementNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProjectCategory',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link premiumEarningCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREMIUM_EARNING_CODE: fieldBuilder.buildEdmTypeField(
          'PremiumEarningCode',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', EarningStatementLines)
      };
    }

    return this._schema;
  }
}
