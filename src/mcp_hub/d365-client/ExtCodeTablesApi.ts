/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtCodeTables } from './ExtCodeTables';
import { ExtCodeTablesRequestBuilder } from './ExtCodeTablesRequestBuilder';
import { EInvoiceExtCodeTypeMx } from './EInvoiceExtCodeTypeMx';
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
export class ExtCodeTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExtCodeTables<DeSerializersT>, DeSerializersT>
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
  ): ExtCodeTablesApi<DeSerializersT> {
    return new ExtCodeTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExtCodeTables;

  requestBuilder(): ExtCodeTablesRequestBuilder<DeSerializersT> {
    return new ExtCodeTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExtCodeTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExtCodeTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExtCodeTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExtCodeTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ExtCodeTables, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExtCodeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE_TYPE: EnumField<
      ExtCodeTables<DeSerializers>,
      DeSerializersT,
      EInvoiceExtCodeTypeMx,
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      ExtCodeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE_ID: OrderableEdmTypeField<
      ExtCodeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ExtCodeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      ExtCodeTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ExtCodeTables<DeSerializers>>;
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
         * Static representation of the {@link codeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE_TYPE: fieldBuilder.buildEnumField(
          'CodeType',
          EInvoiceExtCodeTypeMx,
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', false),
        /**
         * Static representation of the {@link codeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE_ID: fieldBuilder.buildEdmTypeField('CodeId', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExtCodeTables)
      };
    }

    return this._schema;
  }
}
