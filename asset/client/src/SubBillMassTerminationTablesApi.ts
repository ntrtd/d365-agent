/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillMassTerminationTables } from './SubBillMassTerminationTables';
import { SubBillMassTerminationTablesRequestBuilder } from './SubBillMassTerminationTablesRequestBuilder';
import { SubBillMassTerminationLinesApi } from './SubBillMassTerminationLinesApi';
import { SubBillMassTerminationScheduleHeaderAndLinesApi } from './SubBillMassTerminationScheduleHeaderAndLinesApi';
import { NoYes } from './NoYes';
import { SubBillTerminationType } from './SubBillTerminationType';
import { SubBillCreditDeferralAdjMethod } from './SubBillCreditDeferralAdjMethod';
import { SubBillInvTransType } from './SubBillInvTransType';
import { SubBillPostSalesOrderOption } from './SubBillPostSalesOrderOption';
import { SubBillCreditOption } from './SubBillCreditOption';
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
export class SubBillMassTerminationTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillMassTerminationTables<DeSerializersT>, DeSerializersT>
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
  ): SubBillMassTerminationTablesApi<DeSerializersT> {
    return new SubBillMassTerminationTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillMassTerminationTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_MASS_TERMINATION_TABLE_ENTITY: OneToManyLink<
      SubBillMassTerminationTables<DeSerializersT>,
      DeSerializersT,
      SubBillMassTerminationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillMassTermTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_MASS_TERM_TABLE_ENTITY: OneToManyLink<
      SubBillMassTerminationTables<DeSerializersT>,
      DeSerializersT,
      SubBillMassTerminationScheduleHeaderAndLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SubBillMassTerminationLinesApi<DeSerializersT>,
      SubBillMassTerminationScheduleHeaderAndLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELATED_TO_SUB_BILL_MASS_TERMINATION_TABLE_ENTITY: new OneToManyLink(
        'RelatedToSubBillMassTerminationTableEntity',
        this,
        linkedApis[0]
      ),
      RELATED_TO_SUB_BILL_MASS_TERM_TABLE_ENTITY: new OneToManyLink(
        'RelatedToSubBillMassTermTableEntity',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SubBillMassTerminationTables;

  requestBuilder(): SubBillMassTerminationTablesRequestBuilder<DeSerializersT> {
    return new SubBillMassTerminationTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillMassTerminationTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillMassTerminationTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillMassTerminationTables<DeSerializersT>,
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
    typeof SubBillMassTerminationTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillMassTerminationTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINATION_PROCESS_ID: OrderableEdmTypeField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERM_NOTES: OrderableEdmTypeField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ISSUE_CREDIT: EnumField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSOLIDATE_BY_CUSTOMER: EnumField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TERMINATION_TYPE: EnumField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      SubBillTerminationType,
      true,
      true
    >;
    DEFERRAL_ADJUSTMENT_METHOD: EnumField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      SubBillCreditDeferralAdjMethod,
      true,
      true
    >;
    INVOICE_TRANSACTION_TYPE: EnumField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      SubBillInvTransType,
      true,
      true
    >;
    TERMINATION_DATE: OrderableEdmTypeField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRORATE_DAILY: EnumField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_OPTION: EnumField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      SubBillPostSalesOrderOption,
      true,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_OPTION: EnumField<
      SubBillMassTerminationTables<DeSerializers>,
      DeSerializersT,
      SubBillCreditOption,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillMassTerminationTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_MASS_TERMINATION_TABLE_ENTITY: OneToManyLink<
      SubBillMassTerminationTables<DeSerializersT>,
      DeSerializersT,
      SubBillMassTerminationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillMassTermTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_MASS_TERM_TABLE_ENTITY: OneToManyLink<
      SubBillMassTerminationTables<DeSerializersT>,
      DeSerializersT,
      SubBillMassTerminationScheduleHeaderAndLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillMassTerminationTables<DeSerializers>>;
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
         * Static representation of the {@link terminationProcessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINATION_PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'TerminationProcessId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link termNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERM_NOTES: fieldBuilder.buildEdmTypeField(
          'TermNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link issueCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_CREDIT: fieldBuilder.buildEnumField('IssueCredit', NoYes, true),
        /**
         * Static representation of the {@link consolidateByCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATE_BY_CUSTOMER: fieldBuilder.buildEnumField(
          'ConsolidateByCustomer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link terminationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINATION_TYPE: fieldBuilder.buildEnumField(
          'TerminationType',
          SubBillTerminationType,
          true
        ),
        /**
         * Static representation of the {@link deferralAdjustmentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_ADJUSTMENT_METHOD: fieldBuilder.buildEnumField(
          'DeferralAdjustmentMethod',
          SubBillCreditDeferralAdjMethod,
          true
        ),
        /**
         * Static representation of the {@link invoiceTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'InvoiceTransactionType',
          SubBillInvTransType,
          true
        ),
        /**
         * Static representation of the {@link terminationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINATION_DATE: fieldBuilder.buildEdmTypeField(
          'TerminationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link prorateDaily} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATE_DAILY: fieldBuilder.buildEnumField('ProrateDaily', NoYes, true),
        /**
         * Static representation of the {@link postingOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_OPTION: fieldBuilder.buildEnumField(
          'PostingOption',
          SubBillPostSalesOrderOption,
          true
        ),
        /**
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_OPTION: fieldBuilder.buildEnumField(
          'CreditOption',
          SubBillCreditOption,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillMassTerminationTables)
      };
    }

    return this._schema;
  }
}
