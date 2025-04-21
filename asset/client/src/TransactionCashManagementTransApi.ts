/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionCashManagementTrans } from './TransactionCashManagementTrans';
import { TransactionCashManagementTransRequestBuilder } from './TransactionCashManagementTransRequestBuilder';
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
export class TransactionCashManagementTransApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TransactionCashManagementTrans<DeSerializersT>, DeSerializersT>
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
  ): TransactionCashManagementTransApi<DeSerializersT> {
    return new TransactionCashManagementTransApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionCashManagementTrans;

  requestBuilder(): TransactionCashManagementTransRequestBuilder<DeSerializersT> {
    return new TransactionCashManagementTransRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransactionCashManagementTrans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionCashManagementTrans<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionCashManagementTrans<DeSerializersT>,
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
    typeof TransactionCashManagementTrans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionCashManagementTrans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionCashManagementTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      TransactionCashManagementTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      TransactionCashManagementTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      TransactionCashManagementTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_SAFE: OrderableEdmTypeField<
      TransactionCashManagementTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_SHIFT_TERMINAL_ID: OrderableEdmTypeField<
      TransactionCashManagementTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_SHIFT_ID: OrderableEdmTypeField<
      TransactionCashManagementTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_SHIFT_ID: OrderableEdmTypeField<
      TransactionCashManagementTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_SHIFT_TERMINAL_ID: OrderableEdmTypeField<
      TransactionCashManagementTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_SAFE: OrderableEdmTypeField<
      TransactionCashManagementTrans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TransactionCashManagementTrans<DeSerializers>>;
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
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromSafe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_SAFE: fieldBuilder.buildEdmTypeField(
          'FromSafe',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromShiftTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_SHIFT_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'FromShiftTerminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromShiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_SHIFT_ID: fieldBuilder.buildEdmTypeField(
          'FromShiftId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toShiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SHIFT_ID: fieldBuilder.buildEdmTypeField(
          'ToShiftId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toShiftTerminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SHIFT_TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'ToShiftTerminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toSafe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SAFE: fieldBuilder.buildEdmTypeField('ToSafe', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransactionCashManagementTrans)
      };
    }

    return this._schema;
  }
}
