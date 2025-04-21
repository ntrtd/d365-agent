/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseUpdateFieldSelections } from './LeaseUpdateFieldSelections';
import { LeaseUpdateFieldSelectionsRequestBuilder } from './LeaseUpdateFieldSelectionsRequestBuilder';
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
export class LeaseUpdateFieldSelectionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LeaseUpdateFieldSelections<DeSerializersT>, DeSerializersT>
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
  ): LeaseUpdateFieldSelectionsApi<DeSerializersT> {
    return new LeaseUpdateFieldSelectionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseUpdateFieldSelections;

  requestBuilder(): LeaseUpdateFieldSelectionsRequestBuilder<DeSerializersT> {
    return new LeaseUpdateFieldSelectionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseUpdateFieldSelections<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeaseUpdateFieldSelections<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeaseUpdateFieldSelections<DeSerializersT>,
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
    typeof LeaseUpdateFieldSelections,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseUpdateFieldSelections,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FIELD_ID: OrderableEdmTypeField<
      LeaseUpdateFieldSelections<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      LeaseUpdateFieldSelections<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIELD_TYPE: OrderableEdmTypeField<
      LeaseUpdateFieldSelections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      LeaseUpdateFieldSelections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORT_TABLE_NAME: OrderableEdmTypeField<
      LeaseUpdateFieldSelections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_REC_ID: OrderableEdmTypeField<
      LeaseUpdateFieldSelections<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SELECT_FOR_UPDATE: EnumField<
      LeaseUpdateFieldSelections<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LeaseUpdateFieldSelections<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_ID: fieldBuilder.buildEdmTypeField('FieldId', 'Edm.Int32', false),
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
         * Static representation of the {@link fieldType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_TYPE: fieldBuilder.buildEdmTypeField(
          'FieldType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'FieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link importTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'ImportTableName',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link selectForUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELECT_FOR_UPDATE: fieldBuilder.buildEnumField(
          'SelectForUpdate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseUpdateFieldSelections)
      };
    }

    return this._schema;
  }
}
