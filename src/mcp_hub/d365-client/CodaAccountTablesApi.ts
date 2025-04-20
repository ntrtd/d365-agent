/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CodaAccountTables } from './CodaAccountTables';
import { CodaAccountTablesRequestBuilder } from './CodaAccountTablesRequestBuilder';
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
export class CodaAccountTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CodaAccountTables<DeSerializersT>, DeSerializersT>
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
  ): CodaAccountTablesApi<DeSerializersT> {
    return new CodaAccountTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CodaAccountTables;

  requestBuilder(): CodaAccountTablesRequestBuilder<DeSerializersT> {
    return new CodaAccountTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CodaAccountTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CodaAccountTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CodaAccountTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CodaAccountTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CodaAccountTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CodaAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_ID: OrderableEdmTypeField<
      CodaAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODA_VERSION: OrderableEdmTypeField<
      CodaAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODA_JOURNAL_NAME: OrderableEdmTypeField<
      CodaAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODA_PROTOCOL: OrderableEdmTypeField<
      CodaAccountTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CodaAccountTables<DeSerializers>>;
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
         * Static representation of the {@link accountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'AccountID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link codaVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODA_VERSION: fieldBuilder.buildEdmTypeField(
          'CodaVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link codaJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODA_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'CodaJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link codaProtocol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODA_PROTOCOL: fieldBuilder.buildEdmTypeField(
          'CodaProtocol',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CodaAccountTables)
      };
    }

    return this._schema;
  }
}
