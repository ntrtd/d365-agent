/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EarningStatements } from './EarningStatements';
import { EarningStatementsRequestBuilder } from './EarningStatementsRequestBuilder';
import { EarningStatementLinesApi } from './EarningStatementLinesApi';
import { EarningStatementLineInquiriesApi } from './EarningStatementLineInquiriesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EarningStatementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EarningStatements<DeSerializersT>, DeSerializersT>
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
  ): EarningStatementsApi<DeSerializersT> {
    return new EarningStatementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link earningStatementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_STATEMENT_LINE: OneToManyLink<
      EarningStatements<DeSerializersT>,
      DeSerializersT,
      EarningStatementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollEarningStatementLineInquiry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EARNING_STATEMENT_LINE_INQUIRY: OneToManyLink<
      EarningStatements<DeSerializersT>,
      DeSerializersT,
      EarningStatementLineInquiriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EarningStatementLinesApi<DeSerializersT>,
      EarningStatementLineInquiriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EARNING_STATEMENT_LINE: new OneToManyLink(
        'EarningStatementLine',
        this,
        linkedApis[0]
      ),
      PAYROLL_EARNING_STATEMENT_LINE_INQUIRY: new OneToManyLink(
        'PayrollEarningStatementLineInquiry',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = EarningStatements;

  requestBuilder(): EarningStatementsRequestBuilder<DeSerializersT> {
    return new EarningStatementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EarningStatements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EarningStatements<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EarningStatements<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof EarningStatements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EarningStatements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMPANY: OrderableEdmTypeField<
      EarningStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EARNINGS_STATEMENT_NUMBER: OrderableEdmTypeField<
      EarningStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EarningStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      EarningStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_PERIOD_END_DATE: OrderableEdmTypeField<
      EarningStatements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      EarningStatements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link earningStatementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EARNING_STATEMENT_LINE: OneToManyLink<
      EarningStatements<DeSerializersT>,
      DeSerializersT,
      EarningStatementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollEarningStatementLineInquiry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EARNING_STATEMENT_LINE_INQUIRY: OneToManyLink<
      EarningStatements<DeSerializersT>,
      DeSerializersT,
      EarningStatementLineInquiriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EarningStatements<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
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
         * Static representation of the {@link payPeriodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PayPeriodEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EarningStatements)
      };
    }

    return this._schema;
  }
}
