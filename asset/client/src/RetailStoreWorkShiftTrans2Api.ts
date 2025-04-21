/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStoreWorkShiftTrans2 } from './RetailStoreWorkShiftTrans2';
import { RetailStoreWorkShiftTrans2RequestBuilder } from './RetailStoreWorkShiftTrans2RequestBuilder';
import { RetailWorkShiftStatus } from './RetailWorkShiftStatus';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';
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
export class RetailStoreWorkShiftTrans2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailStoreWorkShiftTrans2<DeSerializersT>, DeSerializersT>
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
  ): RetailStoreWorkShiftTrans2Api<DeSerializersT> {
    return new RetailStoreWorkShiftTrans2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailStoreWorkShiftTrans2;

  requestBuilder(): RetailStoreWorkShiftTrans2RequestBuilder<DeSerializersT> {
    return new RetailStoreWorkShiftTrans2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailStoreWorkShiftTrans2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailStoreWorkShiftTrans2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStoreWorkShiftTrans2<DeSerializersT>,
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
    typeof RetailStoreWorkShiftTrans2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStoreWorkShiftTrans2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIFT_ID: OrderableEdmTypeField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIFT_DATE: OrderableEdmTypeField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      RetailWorkShiftStatus,
      true,
      true
    >;
    STATEMENT_METHOD: EnumField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      RetailStaffTerminalTotal,
      true,
      true
    >;
    OPENING_DATE: OrderableEdmTypeField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OPENING_TIME: OrderableEdmTypeField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSING_DATE: OrderableEdmTypeField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CLOSING_TIME: OrderableEdmTypeField<
      RetailStoreWorkShiftTrans2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailStoreWorkShiftTrans2<DeSerializers>>;
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
         * Static representation of the {@link shiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIFT_ID: fieldBuilder.buildEdmTypeField(
          'ShiftId',
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
         * Static representation of the {@link statementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'StatementCode',
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailWorkShiftStatus,
          true
        ),
        /**
         * Static representation of the {@link statementMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_METHOD: fieldBuilder.buildEnumField(
          'StatementMethod',
          RetailStaffTerminalTotal,
          true
        ),
        /**
         * Static representation of the {@link openingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPENING_DATE: fieldBuilder.buildEdmTypeField(
          'OpeningDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link openingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPENING_TIME: fieldBuilder.buildEdmTypeField(
          'OpeningTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link closingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_DATE: fieldBuilder.buildEdmTypeField(
          'ClosingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link closingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_TIME: fieldBuilder.buildEdmTypeField(
          'ClosingTime',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStoreWorkShiftTrans2)
      };
    }

    return this._schema;
  }
}
