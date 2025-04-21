/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TableBlockReasons } from './TableBlockReasons';
import { TableBlockReasonsRequestBuilder } from './TableBlockReasonsRequestBuilder';
import { CredManReason } from './CredManReason';
import { NoYes } from './NoYes';
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
export class TableBlockReasonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TableBlockReasons<DeSerializersT>, DeSerializersT>
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
  ): TableBlockReasonsApi<DeSerializersT> {
    return new TableBlockReasonsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TableBlockReasons;

  requestBuilder(): TableBlockReasonsRequestBuilder<DeSerializersT> {
    return new TableBlockReasonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TableBlockReasons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TableBlockReasons<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TableBlockReasons<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof TableBlockReasons,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TableBlockReasons,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CRED_MAN_ID: OrderableEdmTypeField<
      TableBlockReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      TableBlockReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REASON: EnumField<
      TableBlockReasons<DeSerializers>,
      DeSerializersT,
      CredManReason,
      true,
      true
    >;
    ACTIVE: EnumField<
      TableBlockReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TableBlockReasons<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link credManId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_ID: fieldBuilder.buildEdmTypeField(
          'CredManId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
        /**
         * Static representation of the {@link reason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON: fieldBuilder.buildEnumField('Reason', CredManReason, true),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TableBlockReasons)
      };
    }

    return this._schema;
  }
}
