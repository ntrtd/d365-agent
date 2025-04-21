/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollUsTaxTransactionSummaries } from './PayrollUsTaxTransactionSummaries';
import { PayrollUsTaxTransactionSummariesRequestBuilder } from './PayrollUsTaxTransactionSummariesRequestBuilder';
import { PayStatementHeadersApi } from './PayStatementHeadersApi';
import { PayrollTaxResidency } from './PayrollTaxResidency';
import { PayrollTaxCodeType } from './PayrollTaxCodeType';
import { PayrollUsState } from './PayrollUsState';
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
export class PayrollUsTaxTransactionSummariesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayrollUsTaxTransactionSummaries<DeSerializersT>, DeSerializersT>
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
  ): PayrollUsTaxTransactionSummariesApi<DeSerializersT> {
    return new PayrollUsTaxTransactionSummariesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      PayrollUsTaxTransactionSummaries<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PayStatementHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PAY_STATEMENT_HEADER: new OneToOneLink(
        'PayStatementHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PayrollUsTaxTransactionSummaries;

  requestBuilder(): PayrollUsTaxTransactionSummariesRequestBuilder<DeSerializersT> {
    return new PayrollUsTaxTransactionSummariesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PayrollUsTaxTransactionSummaries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayrollUsTaxTransactionSummaries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayrollUsTaxTransactionSummaries<DeSerializersT>,
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
    typeof PayrollUsTaxTransactionSummaries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollUsTaxTransactionSummaries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_CODE: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBJECT_WAGES: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTUAL_COMBINED_TAX: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POLITICAL_SUB_DIVISION_ID: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_SUBJECT_WAGES: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_INVOICE: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCESS_WAGES: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RESIDENCY: EnumField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      PayrollTaxResidency,
      true,
      true
    >;
    TAX_CODE_TYPE: EnumField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      PayrollTaxCodeType,
      true,
      true
    >;
    GROSS_WAGES: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATE: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAGE_BASE: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIOR_STATE_WAGE_AMOUNT: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAXATION_STATE: EnumField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      PayrollUsState,
      true,
      true
    >;
    HOURS: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIOR_STATE: EnumField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      PayrollUsState,
      true,
      true
    >;
    SYSTEM_CALCULATED_TAX: OrderableEdmTypeField<
      PayrollUsTaxTransactionSummaries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      PayrollUsTaxTransactionSummaries<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollUsTaxTransactionSummaries<DeSerializers>>;
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
         * Static representation of the {@link worker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER: fieldBuilder.buildEdmTypeField('Worker', 'Edm.String', false),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subjectWages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT_WAGES: fieldBuilder.buildEdmTypeField(
          'SubjectWages',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link actualCombinedTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_COMBINED_TAX: fieldBuilder.buildEdmTypeField(
          'ActualCombinedTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link politicalSubDivisionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLITICAL_SUB_DIVISION_ID: fieldBuilder.buildEdmTypeField(
          'PoliticalSubDivisionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossSubjectWages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_SUBJECT_WAGES: fieldBuilder.buildEdmTypeField(
          'GrossSubjectWages',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE: fieldBuilder.buildEdmTypeField(
          'VendInvoice',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link excessWages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCESS_WAGES: fieldBuilder.buildEdmTypeField(
          'ExcessWages',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link residency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESIDENCY: fieldBuilder.buildEnumField(
          'Residency',
          PayrollTaxResidency,
          true
        ),
        /**
         * Static representation of the {@link taxCodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_TYPE: fieldBuilder.buildEnumField(
          'TaxCodeType',
          PayrollTaxCodeType,
          true
        ),
        /**
         * Static representation of the {@link grossWages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_WAGES: fieldBuilder.buildEdmTypeField(
          'GrossWages',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('Rate', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link wageBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAGE_BASE: fieldBuilder.buildEdmTypeField(
          'WageBase',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priorStateWageAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIOR_STATE_WAGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PriorStateWageAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxationState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_STATE: fieldBuilder.buildEnumField(
          'TaxationState',
          PayrollUsState,
          true
        ),
        /**
         * Static representation of the {@link hours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURS: fieldBuilder.buildEdmTypeField('Hours', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link priorState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIOR_STATE: fieldBuilder.buildEnumField(
          'PriorState',
          PayrollUsState,
          true
        ),
        /**
         * Static representation of the {@link systemCalculatedTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_CALCULATED_TAX: fieldBuilder.buildEdmTypeField(
          'SystemCalculatedTax',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayrollUsTaxTransactionSummaries)
      };
    }

    return this._schema;
  }
}
