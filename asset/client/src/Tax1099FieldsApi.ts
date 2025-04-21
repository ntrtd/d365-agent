/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Tax1099Fields } from './Tax1099Fields';
import { Tax1099FieldsRequestBuilder } from './Tax1099FieldsRequestBuilder';
import { Tax1099Type } from './Tax1099Type';
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
export class Tax1099FieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Tax1099Fields<DeSerializersT>, DeSerializersT>
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
  ): Tax1099FieldsApi<DeSerializersT> {
    return new Tax1099FieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Tax1099Fields;

  requestBuilder(): Tax1099FieldsRequestBuilder<DeSerializersT> {
    return new Tax1099FieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Tax1099Fields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Tax1099Fields<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Tax1099Fields<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Tax1099Fields, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Tax1099Fields, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Tax1099Fields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_OF_TAX_1099_FORM: EnumField<
      Tax1099Fields<DeSerializers>,
      DeSerializersT,
      Tax1099Type,
      true,
      true
    >;
    TAX_1099_BOX: OrderableEdmTypeField<
      Tax1099Fields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOX_NUMBER: OrderableEdmTypeField<
      Tax1099Fields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Tax1099Fields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_AMOUNT: OrderableEdmTypeField<
      Tax1099Fields<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORM: OrderableEdmTypeField<
      Tax1099Fields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Tax1099Fields<DeSerializers>>;
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
         * Static representation of the {@link typeOfTax1099Form} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_OF_TAX_1099_FORM: fieldBuilder.buildEnumField(
          'TypeOfTax1099Form',
          Tax1099Type,
          true
        ),
        /**
         * Static representation of the {@link tax1099Box} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_1099_BOX: fieldBuilder.buildEdmTypeField(
          'Tax1099Box',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link boxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOX_NUMBER: fieldBuilder.buildEdmTypeField(
          'BoxNumber',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link minimumAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link form} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM: fieldBuilder.buildEdmTypeField('Form', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Tax1099Fields)
      };
    }

    return this._schema;
  }
}
