/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UsTaxTransactionHistories } from './UsTaxTransactionHistories';
import { UsTaxTransactionHistoriesRequestBuilder } from './UsTaxTransactionHistoriesRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { PayStatementHeadersApi } from './PayStatementHeadersApi';
import { PayrollTaxResidency } from './PayrollTaxResidency';
import { PayrollUsState } from './PayrollUsState';
import { PrlTaxPayType } from './PrlTaxPayType';
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
export class UsTaxTransactionHistoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<UsTaxTransactionHistories<DeSerializersT>, DeSerializersT>
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
  ): UsTaxTransactionHistoriesApi<DeSerializersT> {
    return new UsTaxTransactionHistoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      UsTaxTransactionHistories<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      UsTaxTransactionHistories<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      PayStatementHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      PAY_STATEMENT_HEADER: new OneToOneLink(
        'PayStatementHeader',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = UsTaxTransactionHistories;

  requestBuilder(): UsTaxTransactionHistoriesRequestBuilder<DeSerializersT> {
    return new UsTaxTransactionHistoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UsTaxTransactionHistories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      UsTaxTransactionHistories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UsTaxTransactionHistories<DeSerializersT>,
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
    typeof UsTaxTransactionHistories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UsTaxTransactionHistories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE_ID: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RESIDENCY: EnumField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      PayrollTaxResidency,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_SUBJECT_WAGES: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATE: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIOR_STATE_WAGE_AMOUNT: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIOR_STATE: EnumField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      PayrollUsState,
      true,
      true
    >;
    SUBJECT_WAGES: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POLITICAL_SUB_DIVISION_ID: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAGE_BASE: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOURS: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_PAY_TYPE: EnumField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      PrlTaxPayType,
      true,
      true
    >;
    UNIQUE_TAX_ID: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_WAGES: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAXATION_STATE: EnumField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      PayrollUsState,
      true,
      true
    >;
    CALCULATED_TAX_AMOUNT: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCESS_WAGES: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      UsTaxTransactionHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      UsTaxTransactionHistories<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      UsTaxTransactionHistories<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UsTaxTransactionHistories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link taxCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_ID: fieldBuilder.buildEdmTypeField(
          'TaxCodeId',
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
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayStatementNumber',
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
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('Rate', 'Edm.Decimal', false),
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
         * Static representation of the {@link priorState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIOR_STATE: fieldBuilder.buildEnumField(
          'PriorState',
          PayrollUsState,
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
         * Static representation of the {@link politicalSubDivisionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLITICAL_SUB_DIVISION_ID: fieldBuilder.buildEdmTypeField(
          'PoliticalSubDivisionId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link hours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURS: fieldBuilder.buildEdmTypeField('Hours', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link taxPayType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PAY_TYPE: fieldBuilder.buildEnumField(
          'TaxPayType',
          PrlTaxPayType,
          true
        ),
        /**
         * Static representation of the {@link uniqueTaxId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_TAX_ID: fieldBuilder.buildEdmTypeField(
          'UniqueTaxId',
          'Edm.String',
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
         * Static representation of the {@link taxationState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_STATE: fieldBuilder.buildEnumField(
          'TaxationState',
          PayrollUsState,
          true
        ),
        /**
         * Static representation of the {@link calculatedTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CalculatedTaxAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UsTaxTransactionHistories)
      };
    }

    return this._schema;
  }
}
