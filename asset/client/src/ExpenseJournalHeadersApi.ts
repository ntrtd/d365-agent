/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseJournalHeaders } from './ExpenseJournalHeaders';
import { ExpenseJournalHeadersRequestBuilder } from './ExpenseJournalHeadersRequestBuilder';
import { ExpenseJournalLinesApi } from './ExpenseJournalLinesApi';
import { NoYes } from './NoYes';
import { TaxObligationCompany } from './TaxObligationCompany';
import { CurrentOperationsTax } from './CurrentOperationsTax';
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
export class ExpenseJournalHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseJournalHeaders<DeSerializersT>, DeSerializersT>
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
  ): ExpenseJournalHeadersApi<DeSerializersT> {
    return new ExpenseJournalHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link expenseJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_LINE: OneToManyLink<
      ExpenseJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ExpenseJournalLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EXPENSE_JOURNAL_LINE: new OneToManyLink(
        'ExpenseJournalLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ExpenseJournalHeaders;

  requestBuilder(): ExpenseJournalHeadersRequestBuilder<DeSerializersT> {
    return new ExpenseJournalHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseJournalHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseJournalHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpenseJournalHeaders<DeSerializersT>,
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
    typeof ExpenseJournalHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseJournalHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_POSTED: EnumField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_FOR_INTERCOMPANY_TAX: EnumField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      TaxObligationCompany,
      true,
      true
    >;
    REJECTED_BY: OrderableEdmTypeField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTED_AS_READY_BY: OrderableEdmTypeField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSING_DATE: OrderableEdmTypeField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    APPROVED_BY: OrderableEdmTypeField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REVERSING_ENTRY: EnumField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      ExpenseJournalHeaders<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link expenseJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXPENSE_JOURNAL_LINE: OneToManyLink<
      ExpenseJournalHeaders<DeSerializersT>,
      DeSerializersT,
      ExpenseJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExpenseJournalHeaders<DeSerializers>>;
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
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTED: fieldBuilder.buildEnumField('IsPosted', NoYes, true),
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
         * Static representation of the {@link legalEntityForIntercompanyTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_FOR_INTERCOMPANY_TAX: fieldBuilder.buildEnumField(
          'LegalEntityForIntercompanyTax',
          TaxObligationCompany,
          true
        ),
        /**
         * Static representation of the {@link rejectedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REJECTED_BY: fieldBuilder.buildEdmTypeField(
          'RejectedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportedAsReadyBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_AS_READY_BY: fieldBuilder.buildEdmTypeField(
          'ReportedAsReadyBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'JournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reversingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSING_DATE: fieldBuilder.buildEdmTypeField(
          'ReversingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link approvedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_BY: fieldBuilder.buildEdmTypeField(
          'ApprovedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReversingEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVERSING_ENTRY: fieldBuilder.buildEnumField(
          'IsReversingEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseJournalHeaders)
      };
    }

    return this._schema;
  }
}
