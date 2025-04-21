/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReportExtraFields } from './ReportExtraFields';
import { ReportExtraFieldsRequestBuilder } from './ReportExtraFieldsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ReportExtraFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReportExtraFields<DeSerializersT>, DeSerializersT>
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
  ): ReportExtraFieldsApi<DeSerializersT> {
    return new ReportExtraFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReportExtraFields;

  requestBuilder(): ReportExtraFieldsRequestBuilder<DeSerializersT> {
    return new ReportExtraFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReportExtraFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReportExtraFields<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ReportExtraFields<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ReportExtraFields,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReportExtraFields,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SETTLEMENT_PERIOD: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WHOLESALE_CREDIT: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FUEL_TAX_CREDIT_OVER_CLAIM: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIED_FRINGE_BENEFITS_TAX: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATO_FRINGE_BENEFIT: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FRINGE_CREDIT: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYG_CREDIT: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFERRED_INSTALMENT: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_PAYROLL: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WITHHELD_FROM_INVOICES_WHERE_NO_ABN: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEW_VARIED_INSTALLMENT_RATE: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRED_GST_ON_IMPORT: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FUEL_TAX_CREDIT: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INSTALLMENT_INCOME: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYG_WITHHELD_SALARY: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYG_REASON_FOR_VARIATION: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHELD_FROM_INVESTMENT_WHERE_NO_TFN: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INSTALLMENT_RATE: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_TOTAL_FRINGE_BENEFITS: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FRINGE_REASON_FOR_VARIATION: OrderableEdmTypeField<
      ReportExtraFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ReportExtraFields<DeSerializers>>;
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
         * Static representation of the {@link settlementPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'SettlementPeriod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link wholesaleCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHOLESALE_CREDIT: fieldBuilder.buildEdmTypeField(
          'WholesaleCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fuelTaxCreditOverClaim} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_TAX_CREDIT_OVER_CLAIM: fieldBuilder.buildEdmTypeField(
          'FuelTaxCreditOverClaim',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link variedFringeBenefitsTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIED_FRINGE_BENEFITS_TAX: fieldBuilder.buildEdmTypeField(
          'VariedFringeBenefitsTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link atoFringeBenefit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATO_FRINGE_BENEFIT: fieldBuilder.buildEdmTypeField(
          'ATOFringeBenefit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fringeCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRINGE_CREDIT: fieldBuilder.buildEdmTypeField(
          'fringeCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paygCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYG_CREDIT: fieldBuilder.buildEdmTypeField(
          'paygCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deferredInstalment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_INSTALMENT: fieldBuilder.buildEdmTypeField(
          'DeferredInstalment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalPayroll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PAYROLL: fieldBuilder.buildEdmTypeField(
          'TotalPayroll',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link withheldFromInvoicesWhereNoAbn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHELD_FROM_INVOICES_WHERE_NO_ABN: fieldBuilder.buildEdmTypeField(
          'WithheldFromInvoicesWhereNoABN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link newVariedInstallmentRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_VARIED_INSTALLMENT_RATE: fieldBuilder.buildEdmTypeField(
          'NewVariedInstallmentRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link documentIdentificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentIdentificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferredGstOnImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_GST_ON_IMPORT: fieldBuilder.buildEdmTypeField(
          'deferredGSTOnImport',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fuelTaxCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_TAX_CREDIT: fieldBuilder.buildEdmTypeField(
          'FuelTaxCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link installmentIncome} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALLMENT_INCOME: fieldBuilder.buildEdmTypeField(
          'InstallmentIncome',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paygWithheldSalary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYG_WITHHELD_SALARY: fieldBuilder.buildEdmTypeField(
          'paygWithheldSalary',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paygReasonForVariation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYG_REASON_FOR_VARIATION: fieldBuilder.buildEdmTypeField(
          'PAYGReasonForVariation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withheldFromInvestmentWhereNoTfn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHELD_FROM_INVESTMENT_WHERE_NO_TFN: fieldBuilder.buildEdmTypeField(
          'WithheldFromInvestmentWhereNoTFN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link installmentRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALLMENT_RATE: fieldBuilder.buildEdmTypeField(
          'InstallmentRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link estimatedTotalFringeBenefits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_TOTAL_FRINGE_BENEFITS: fieldBuilder.buildEdmTypeField(
          'EstimatedTotalFringeBenefits',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fringeReasonForVariation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRINGE_REASON_FOR_VARIATION: fieldBuilder.buildEdmTypeField(
          'FringeReasonForVariation',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReportExtraFields)
      };
    }

    return this._schema;
  }
}
