/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessVerticals } from './BusinessVerticals';
import { BusinessVerticalsRequestBuilder } from './BusinessVerticalsRequestBuilder';
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
export class BusinessVerticalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessVerticals<DeSerializersT>, DeSerializersT>
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
  ): BusinessVerticalsApi<DeSerializersT> {
    return new BusinessVerticalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BusinessVerticals;

  requestBuilder(): BusinessVerticalsRequestBuilder<DeSerializersT> {
    return new BusinessVerticalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessVerticals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BusinessVerticals<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BusinessVerticals<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BusinessVerticals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessVerticals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BUSINESS_VERTICALS: OrderableEdmTypeField<
      BusinessVerticals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITY_CODE: OrderableEdmTypeField<
      BusinessVerticals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BusinessVerticals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BusinessVerticals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link businessVerticals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_VERTICALS: fieldBuilder.buildEdmTypeField(
          'BusinessVerticals',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link entityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_CODE: fieldBuilder.buildEdmTypeField(
          'EntityCode',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessVerticals)
      };
    }

    return this._schema;
  }
}
