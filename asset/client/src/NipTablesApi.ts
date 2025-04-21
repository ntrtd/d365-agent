/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NipTables } from './NipTables';
import { NipTablesRequestBuilder } from './NipTablesRequestBuilder';
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
export class NipTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NipTables<DeSerializersT>, DeSerializersT>
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
  ): NipTablesApi<DeSerializersT> {
    return new NipTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = NipTables;

  requestBuilder(): NipTablesRequestBuilder<DeSerializersT> {
    return new NipTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NipTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NipTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NipTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NipTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(NipTables, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      NipTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      NipTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NIP_NUMBER: OrderableEdmTypeField<
      NipTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESSING: OrderableEdmTypeField<
      NipTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_NAME: OrderableEdmTypeField<
      NipTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<NipTables<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link nipNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NIP_NUMBER: fieldBuilder.buildEdmTypeField(
          'NIPNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESSING: fieldBuilder.buildEdmTypeField(
          'Addressing',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'AccountName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NipTables)
      };
    }

    return this._schema;
  }
}
