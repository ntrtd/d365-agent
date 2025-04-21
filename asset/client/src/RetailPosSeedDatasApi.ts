/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailPosSeedDatas } from './RetailPosSeedDatas';
import { RetailPosSeedDatasRequestBuilder } from './RetailPosSeedDatasRequestBuilder';
import { RetailPosSeedDataType } from './RetailPosSeedDataType';
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
export class RetailPosSeedDatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailPosSeedDatas<DeSerializersT>, DeSerializersT>
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
  ): RetailPosSeedDatasApi<DeSerializersT> {
    return new RetailPosSeedDatasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailPosSeedDatas;

  requestBuilder(): RetailPosSeedDatasRequestBuilder<DeSerializersT> {
    return new RetailPosSeedDatasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailPosSeedDatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailPosSeedDatas<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailPosSeedDatas<DeSerializersT>,
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
    typeof RetailPosSeedDatas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailPosSeedDatas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailPosSeedDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_TYPE: EnumField<
      RetailPosSeedDatas<DeSerializers>,
      DeSerializersT,
      RetailPosSeedDataType,
      true,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      RetailPosSeedDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailPosSeedDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_VALUE: OrderableEdmTypeField<
      RetailPosSeedDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailPosSeedDatas<DeSerializers>>;
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
         * Static representation of the {@link dataType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_TYPE: fieldBuilder.buildEnumField(
          'DataType',
          RetailPosSeedDataType,
          true
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
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'TerminalID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dataValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_VALUE: fieldBuilder.buildEdmTypeField(
          'DataValue',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailPosSeedDatas)
      };
    }

    return this._schema;
  }
}
