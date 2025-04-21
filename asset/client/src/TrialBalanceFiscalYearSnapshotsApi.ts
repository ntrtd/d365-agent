/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrialBalanceFiscalYearSnapshots } from './TrialBalanceFiscalYearSnapshots';
import { TrialBalanceFiscalYearSnapshotsRequestBuilder } from './TrialBalanceFiscalYearSnapshotsRequestBuilder';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { LedgerTrialBalanceSnapshotStatus } from './LedgerTrialBalanceSnapshotStatus';
import { FiscalPeriodType } from './FiscalPeriodType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class TrialBalanceFiscalYearSnapshotsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TrialBalanceFiscalYearSnapshots<DeSerializersT>, DeSerializersT>
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
  ): TrialBalanceFiscalYearSnapshotsApi<DeSerializersT> {
    return new TrialBalanceFiscalYearSnapshotsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TrialBalanceFiscalYearSnapshots;

  requestBuilder(): TrialBalanceFiscalYearSnapshotsRequestBuilder<DeSerializersT> {
    return new TrialBalanceFiscalYearSnapshotsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TrialBalanceFiscalYearSnapshots<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TrialBalanceFiscalYearSnapshots<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TrialBalanceFiscalYearSnapshots<DeSerializersT>,
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
    typeof TrialBalanceFiscalYearSnapshots,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TrialBalanceFiscalYearSnapshots,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SNAPSHOT_HEADER: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DIMENSION_HIERARCHY_ID: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FISCAL_CALENDAR_YEAR_REC_ID: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEDGER_REC_ID: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    POSTING_LAYER: EnumField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    DIMENSION_VALUE_1: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_3: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_2: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_5: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_4: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_7: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_NAME: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_6: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_9: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_8: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOCUS_DIMENSION_HIERARCHY: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      LedgerTrialBalanceSnapshotStatus,
      true,
      true
    >;
    PERIOD_START_DATE: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXTERNAL_TRACKING_ID: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DIMENSION_VALUE_10: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPENING_BALANCE: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_NAME: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CREDIT: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    YEAR_NAME: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_DEBIT: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERIOD_TYPE: EnumField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      FiscalPeriodType,
      true,
      true
    >;
    DIMENSION_VALUE_11: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TrialBalanceFiscalYearSnapshots<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link snapshotHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SNAPSHOT_HEADER: fieldBuilder.buildEdmTypeField(
          'SnapshotHeader',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link dimensionHierarchyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_HIERARCHY_ID: fieldBuilder.buildEdmTypeField(
          'DimensionHierarchyId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link fiscalCalendarYearRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_YEAR_REC_ID: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarYearRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link ledgerRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_REC_ID: fieldBuilder.buildEdmTypeField(
          'LedgerRecId',
          'Edm.Int64',
          false
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
        /**
         * Static representation of the {@link dimensionValue1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_1: fieldBuilder.buildEdmTypeField(
          'DimensionValue1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_3: fieldBuilder.buildEdmTypeField(
          'DimensionValue3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_2: fieldBuilder.buildEdmTypeField(
          'DimensionValue2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_5: fieldBuilder.buildEdmTypeField(
          'DimensionValue5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_4: fieldBuilder.buildEdmTypeField(
          'DimensionValue4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_7: fieldBuilder.buildEdmTypeField(
          'DimensionValue7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'PeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_6: fieldBuilder.buildEdmTypeField(
          'DimensionValue6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_9: fieldBuilder.buildEdmTypeField(
          'DimensionValue9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValue8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_8: fieldBuilder.buildEdmTypeField(
          'DimensionValue8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link focusDimensionHierarchy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOCUS_DIMENSION_HIERARCHY: fieldBuilder.buildEdmTypeField(
          'FocusDimensionHierarchy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          LedgerTrialBalanceSnapshotStatus,
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
         * Static representation of the {@link externalTrackingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_TRACKING_ID: fieldBuilder.buildEdmTypeField(
          'ExternalTrackingId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link dimensionValue10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_10: fieldBuilder.buildEdmTypeField(
          'DimensionValue10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link openingBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPENING_BALANCE: fieldBuilder.buildEdmTypeField(
          'OpeningBalance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_NAME: fieldBuilder.buildEdmTypeField(
          'LedgerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CREDIT: fieldBuilder.buildEdmTypeField(
          'AmountCredit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link yearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'YearName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DEBIT: fieldBuilder.buildEdmTypeField(
          'AmountDebit',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link periodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_TYPE: fieldBuilder.buildEnumField(
          'PeriodType',
          FiscalPeriodType,
          true
        ),
        /**
         * Static representation of the {@link dimensionValue11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_11: fieldBuilder.buildEdmTypeField(
          'DimensionValue11',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TrialBalanceFiscalYearSnapshots)
      };
    }

    return this._schema;
  }
}
