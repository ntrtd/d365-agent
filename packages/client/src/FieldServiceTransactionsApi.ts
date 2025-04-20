/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FieldServiceTransactions } from './FieldServiceTransactions';
import { FieldServiceTransactionsRequestBuilder } from './FieldServiceTransactionsRequestBuilder';
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
export class FieldServiceTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FieldServiceTransactions<DeSerializersT>, DeSerializersT>
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
  ): FieldServiceTransactionsApi<DeSerializersT> {
    return new FieldServiceTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FieldServiceTransactions;

  requestBuilder(): FieldServiceTransactionsRequestBuilder<DeSerializersT> {
    return new FieldServiceTransactionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FieldServiceTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FieldServiceTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FieldServiceTransactions<DeSerializersT>,
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
    typeof FieldServiceTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FieldServiceTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FieldServiceTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROW_ID: OrderableEdmTypeField<
      FieldServiceTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ROW_NAME: OrderableEdmTypeField<
      FieldServiceTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROW_VALUE: OrderableEdmTypeField<
      FieldServiceTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<FieldServiceTransactions<DeSerializers>>;
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
         * Static representation of the {@link rowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_ID: fieldBuilder.buildEdmTypeField('RowId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link rowName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_NAME: fieldBuilder.buildEdmTypeField('RowName', 'Edm.String', true),
        /**
         * Static representation of the {@link rowValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROW_VALUE: fieldBuilder.buildEdmTypeField(
          'RowValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FieldServiceTransactions)
      };
    }

    return this._schema;
  }
}
