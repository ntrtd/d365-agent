/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStoreWorkShifts } from './RetailStoreWorkShifts';
import { RetailStoreWorkShiftsRequestBuilder } from './RetailStoreWorkShiftsRequestBuilder';
import { RetailWorkShiftStatus } from './RetailWorkShiftStatus';
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
export class RetailStoreWorkShiftsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailStoreWorkShifts<DeSerializersT>, DeSerializersT>
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
  ): RetailStoreWorkShiftsApi<DeSerializersT> {
    return new RetailStoreWorkShiftsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailStoreWorkShifts;

  requestBuilder(): RetailStoreWorkShiftsRequestBuilder<DeSerializersT> {
    return new RetailStoreWorkShiftsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailStoreWorkShifts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailStoreWorkShifts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStoreWorkShifts<DeSerializersT>,
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
    typeof RetailStoreWorkShifts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStoreWorkShifts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIFT_DATE: OrderableEdmTypeField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIFT_ID: OrderableEdmTypeField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENDING_DATE: OrderableEdmTypeField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STARTING_DATE: OrderableEdmTypeField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPLICATION_COUNTER: OrderableEdmTypeField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORK_SHIFT_STATUS: EnumField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      RetailWorkShiftStatus,
      true,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTING_TIME: OrderableEdmTypeField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENDING_TIME: OrderableEdmTypeField<
      RetailStoreWorkShifts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailStoreWorkShifts<DeSerializers>>;
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
         * Static representation of the {@link shiftDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_DATE: fieldBuilder.buildEdmTypeField(
          'ShiftDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_ID: fieldBuilder.buildEdmTypeField(
          'ShiftId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link endingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDING_DATE: fieldBuilder.buildEdmTypeField(
          'EndingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link startingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTING_DATE: fieldBuilder.buildEdmTypeField(
          'StartingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link replicationCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATION_COUNTER: fieldBuilder.buildEdmTypeField(
          'ReplicationCounter',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workShiftStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_SHIFT_STATUS: fieldBuilder.buildEnumField(
          'WorkShiftStatus',
          RetailWorkShiftStatus,
          true
        ),
        /**
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'StatementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTING_TIME: fieldBuilder.buildEdmTypeField(
          'StartingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link endingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDING_TIME: fieldBuilder.buildEdmTypeField(
          'EndingTime',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStoreWorkShifts)
      };
    }

    return this._schema;
  }
}
