/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UsTaxTransactionHistoryDetails } from './UsTaxTransactionHistoryDetails';
import { UsTaxTransactionHistoryDetailsRequestBuilder } from './UsTaxTransactionHistoryDetailsRequestBuilder';
import { PayStatementHeadersApi } from './PayStatementHeadersApi';
import { PayrollUsState } from './PayrollUsState';
import { PayrollTaxCodeType } from './PayrollTaxCodeType';
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
export class UsTaxTransactionHistoryDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<UsTaxTransactionHistoryDetails<DeSerializersT>, DeSerializersT>
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
  ): UsTaxTransactionHistoryDetailsApi<DeSerializersT> {
    return new UsTaxTransactionHistoryDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      UsTaxTransactionHistoryDetails<DeSerializersT>,
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

  entityConstructor = UsTaxTransactionHistoryDetails;

  requestBuilder(): UsTaxTransactionHistoryDetailsRequestBuilder<DeSerializersT> {
    return new UsTaxTransactionHistoryDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    UsTaxTransactionHistoryDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      UsTaxTransactionHistoryDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UsTaxTransactionHistoryDetails<DeSerializersT>,
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
    typeof UsTaxTransactionHistoryDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UsTaxTransactionHistoryDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_SUBJECT_WAGES: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RATE: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIOR_STATE_WAGE_AMOUNT: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRIOR_STATE: EnumField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      PayrollUsState,
      true,
      true
    >;
    SUBJECT_WAGES: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAGE_BASE: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOURS: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GROSS_WAGES: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TYPE: EnumField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      PayrollTaxCodeType,
      true,
      true
    >;
    CALCULATED_TAX_AMOUNT: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCESS_WAGES: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKER: OrderableEdmTypeField<
      UsTaxTransactionHistoryDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      UsTaxTransactionHistoryDetails<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UsTaxTransactionHistoryDetails<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
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
         * Static representation of the {@link payStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayStatementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
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
         * Static representation of the {@link grossWages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_WAGES: fieldBuilder.buildEdmTypeField(
          'GrossWages',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', PayrollTaxCodeType, true),
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
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
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
         * Static representation of the {@link worker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER: fieldBuilder.buildEdmTypeField('Worker', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UsTaxTransactionHistoryDetails)
      };
    }

    return this._schema;
  }
}
