/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JournalTables } from './JournalTables';
import { JournalTablesRequestBuilder } from './JournalTablesRequestBuilder';
import { JournalTransApi } from './JournalTransApi';
import { BeginningBalanceCostSaleTransactionsApi } from './BeginningBalanceCostSaleTransactionsApi';
import { ProjJournalVoucherChange } from './ProjJournalVoucherChange';
import { NoYes } from './NoYes';
import { ProjJournalType } from './ProjJournalType';
import { ProjJournalVoucherDateChange } from './ProjJournalVoucherDateChange';
import { JournalVoucherDraw } from './JournalVoucherDraw';
import { DetailSummary } from './DetailSummary';
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
export class JournalTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JournalTables<DeSerializersT>, DeSerializersT>
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
  ): JournalTablesApi<DeSerializersT> {
    return new JournalTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToManyLink<
      JournalTables<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link journalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_LINES: OneToManyLink<
      JournalTables<DeSerializersT>,
      DeSerializersT,
      BeginningBalanceCostSaleTransactionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalTransApi<DeSerializersT>,
      BeginningBalanceCostSaleTransactionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_TRANS: new OneToManyLink('JournalTrans', this, linkedApis[0]),
      JOURNAL_LINES: new OneToManyLink('JournalLines', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JournalTables;

  requestBuilder(): JournalTablesRequestBuilder<DeSerializersT> {
    return new JournalTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JournalTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JournalTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JournalTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JournalTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(JournalTables, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_VOUCHER_BY: EnumField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      ProjJournalVoucherChange,
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELETE_LINES_AFTER_POSTING: EnumField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOURNAL_TYPE: EnumField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      ProjJournalType,
      true,
      true
    >;
    SET_VOUCHER_DATE_TO: EnumField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      ProjJournalVoucherDateChange,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TXT: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_COMPANY_ID: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_LINE_PROPERTY: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_CATEGORY: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_DATE: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTED: EnumField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SELECTION_BY: EnumField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      JournalVoucherDraw,
      true,
      true
    >;
    DETAIL_SUMMARY: EnumField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    APPROVE: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED_USER_ID: OrderableEdmTypeField<
      JournalTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToManyLink<
      JournalTables<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link journalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_LINES: OneToManyLink<
      JournalTables<DeSerializersT>,
      DeSerializersT,
      BeginningBalanceCostSaleTransactionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JournalTables<DeSerializers>>;
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newVoucherBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_VOUCHER_BY: fieldBuilder.buildEnumField(
          'NewVoucherBy',
          ProjJournalVoucherChange,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
        /**
         * Static representation of the {@link deleteLinesAfterPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_LINES_AFTER_POSTING: fieldBuilder.buildEnumField(
          'DeleteLinesAfterPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          ProjJournalType,
          true
        ),
        /**
         * Static representation of the {@link setVoucherDateTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_VOUCHER_DATE_TO: fieldBuilder.buildEnumField(
          'SetVoucherDateTo',
          ProjJournalVoucherDateChange,
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
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link resourceCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'ResourceCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projLineProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LINE_PROPERTY: fieldBuilder.buildEdmTypeField(
          'ProjLineProperty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_CODE: fieldBuilder.buildEdmTypeField(
          'NumberSequenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProjCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_DATE: fieldBuilder.buildEdmTypeField(
          'ProjectDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link selectionBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELECTION_BY: fieldBuilder.buildEnumField(
          'SelectionBy',
          JournalVoucherDraw,
          true
        ),
        /**
         * Static representation of the {@link detailSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_SUMMARY: fieldBuilder.buildEnumField(
          'DetailSummary',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link approve} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVE: fieldBuilder.buildEdmTypeField('Approve', 'Edm.String', true),
        /**
         * Static representation of the {@link postedUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_USER_ID: fieldBuilder.buildEdmTypeField(
          'PostedUserId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JournalTables)
      };
    }

    return this._schema;
  }
}
