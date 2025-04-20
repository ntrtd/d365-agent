/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerIntervals } from './LedgerIntervals';
import { LedgerIntervalsRequestBuilder } from './LedgerIntervalsRequestBuilder';
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
export class LedgerIntervalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerIntervals<DeSerializersT>, DeSerializersT>
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
  ): LedgerIntervalsApi<DeSerializersT> {
    return new LedgerIntervalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerIntervals;

  requestBuilder(): LedgerIntervalsRequestBuilder<DeSerializersT> {
    return new LedgerIntervalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerIntervals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LedgerIntervals<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LedgerIntervals<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LedgerIntervals, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerIntervals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERVAL_GROUP: OrderableEdmTypeField<
      LedgerIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_ACCOUNT: OrderableEdmTypeField<
      LedgerIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_ACCOUNT: OrderableEdmTypeField<
      LedgerIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_LEDGER_CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      LedgerIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_LEDGER_CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      LedgerIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LedgerIntervals<DeSerializers>>;
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
         * Static representation of the {@link intervalGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL_GROUP: fieldBuilder.buildEdmTypeField(
          'IntervalGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'FromAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ToAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromLedgerChartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_LEDGER_CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'FromLedgerChartOfAccounts',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toLedgerChartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_LEDGER_CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'ToLedgerChartOfAccounts',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerIntervals)
      };
    }

    return this._schema;
  }
}
