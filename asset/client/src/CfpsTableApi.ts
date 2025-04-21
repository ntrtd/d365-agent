/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CfpsTable } from './CfpsTable';
import { CfpsTableRequestBuilder } from './CfpsTableRequestBuilder';
import { SalesPurchBothBr } from './SalesPurchBothBr';
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
export class CfpsTableApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CfpsTable<DeSerializersT>, DeSerializersT>
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
  ): CfpsTableApi<DeSerializersT> {
    return new CfpsTableApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CfpsTable;

  requestBuilder(): CfpsTableRequestBuilder<DeSerializersT> {
    return new CfpsTableRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CfpsTable<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CfpsTable<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CfpsTable<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CfpsTable, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CfpsTable, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CfpsTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      CfpsTable<DeSerializers>,
      DeSerializersT,
      SalesPurchBothBr,
      true,
      true
    >;
    CFPS_CODE: OrderableEdmTypeField<
      CfpsTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CfpsTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      CfpsTable<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CfpsTable<DeSerializers>>;
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
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          SalesPurchBothBr,
          true
        ),
        /**
         * Static representation of the {@link cfpsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFPS_CODE: fieldBuilder.buildEdmTypeField(
          'CFPSCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CfpsTable)
      };
    }

    return this._schema;
  }
}
