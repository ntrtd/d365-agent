/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustBoeProtestSetttles } from './CustBoeProtestSetttles';
import { CustBoeProtestSetttlesRequestBuilder } from './CustBoeProtestSetttlesRequestBuilder';
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
export class CustBoeProtestSetttlesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustBoeProtestSetttles<DeSerializersT>, DeSerializersT>
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
  ): CustBoeProtestSetttlesApi<DeSerializersT> {
    return new CustBoeProtestSetttlesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustBoeProtestSetttles;

  requestBuilder(): CustBoeProtestSetttlesRequestBuilder<DeSerializersT> {
    return new CustBoeProtestSetttlesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustBoeProtestSetttles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustBoeProtestSetttles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustBoeProtestSetttles<DeSerializersT>,
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
    typeof CustBoeProtestSetttles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustBoeProtestSetttles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SPEC_TABLE_ID: OrderableEdmTypeField<
      CustBoeProtestSetttles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SPEC_REC_ID: OrderableEdmTypeField<
      CustBoeProtestSetttles<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SPEC_COMPANY: OrderableEdmTypeField<
      CustBoeProtestSetttles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOE: OrderableEdmTypeField<
      CustBoeProtestSetttles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_COMPANY: OrderableEdmTypeField<
      CustBoeProtestSetttles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      CustBoeProtestSetttles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      CustBoeProtestSetttles<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustBoeProtestSetttles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link specTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPEC_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'SpecTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link specRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPEC_REC_ID: fieldBuilder.buildEdmTypeField(
          'SpecRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link specCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPEC_COMPANY: fieldBuilder.buildEdmTypeField(
          'SpecCompany',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link boe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOE: fieldBuilder.buildEdmTypeField('BOE', 'Edm.String', true),
        /**
         * Static representation of the {@link refCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_COMPANY: fieldBuilder.buildEdmTypeField(
          'RefCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link refRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'RefRecId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustBoeProtestSetttles)
      };
    }

    return this._schema;
  }
}
