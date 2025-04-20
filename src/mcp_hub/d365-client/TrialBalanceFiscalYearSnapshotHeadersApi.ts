/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrialBalanceFiscalYearSnapshotHeaders } from './TrialBalanceFiscalYearSnapshotHeaders';
import { TrialBalanceFiscalYearSnapshotHeadersRequestBuilder } from './TrialBalanceFiscalYearSnapshotHeadersRequestBuilder';
import { LedgerTrialBalanceSnapshotYearsToProcess } from './LedgerTrialBalanceSnapshotYearsToProcess';
import { LedgerTrialBalanceSnapshotStatus } from './LedgerTrialBalanceSnapshotStatus';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class TrialBalanceFiscalYearSnapshotHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializersT>,
      DeSerializersT
    >
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
  ): TrialBalanceFiscalYearSnapshotHeadersApi<DeSerializersT> {
    return new TrialBalanceFiscalYearSnapshotHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TrialBalanceFiscalYearSnapshotHeaders;

  requestBuilder(): TrialBalanceFiscalYearSnapshotHeadersRequestBuilder<DeSerializersT> {
    return new TrialBalanceFiscalYearSnapshotHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TrialBalanceFiscalYearSnapshotHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TrialBalanceFiscalYearSnapshotHeaders<DeSerializersT>,
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
    typeof TrialBalanceFiscalYearSnapshotHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TrialBalanceFiscalYearSnapshotHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EXTERNAL_TRACKING_ID: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DIM_NAME_4: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIM_NAME_1: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIM_NAME_9: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOCUS_DIMENSION_HIERARCHY: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_LAST_RAN: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DIM_NAME_10: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIM_NAME_11: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEAR_NAME: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIM_NAME_6: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIM_NAME_3: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEARS_TO_PROCESS: EnumField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      LedgerTrialBalanceSnapshotYearsToProcess,
      true,
      true
    >;
    DIM_NAME_8: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIM_NAME_5: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_NAME: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      LedgerTrialBalanceSnapshotStatus,
      true,
      true
    >;
    DIM_NAME_2: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_LAYER: EnumField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    DIM_NAME_7: OrderableEdmTypeField<
      TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TrialBalanceFiscalYearSnapshotHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link dimName4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_4: fieldBuilder.buildEdmTypeField(
          'DimName4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_1: fieldBuilder.buildEdmTypeField(
          'DimName1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimName9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_9: fieldBuilder.buildEdmTypeField(
          'DimName9',
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
         * Static representation of the {@link dateLastRan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_LAST_RAN: fieldBuilder.buildEdmTypeField(
          'DateLastRan',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dimName10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_10: fieldBuilder.buildEdmTypeField(
          'DimName10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimName11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_11: fieldBuilder.buildEdmTypeField(
          'DimName11',
          'Edm.String',
          true
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
         * Static representation of the {@link dimName6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_6: fieldBuilder.buildEdmTypeField(
          'DimName6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimName3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_3: fieldBuilder.buildEdmTypeField(
          'DimName3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link yearsToProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEARS_TO_PROCESS: fieldBuilder.buildEnumField(
          'YearsToProcess',
          LedgerTrialBalanceSnapshotYearsToProcess,
          true
        ),
        /**
         * Static representation of the {@link dimName8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_8: fieldBuilder.buildEdmTypeField(
          'DimName8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimName5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_5: fieldBuilder.buildEdmTypeField(
          'DimName5',
          'Edm.String',
          true
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          LedgerTrialBalanceSnapshotStatus,
          true
        ),
        /**
         * Static representation of the {@link dimName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_2: fieldBuilder.buildEdmTypeField(
          'DimName2',
          'Edm.String',
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
        /**
         * Static representation of the {@link dimName7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_NAME_7: fieldBuilder.buildEdmTypeField(
          'DimName7',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TrialBalanceFiscalYearSnapshotHeaders)
      };
    }

    return this._schema;
  }
}
