/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailRecoListElements } from './RetailRecoListElements';
import { RetailRecoListElementsRequestBuilder } from './RetailRecoListElementsRequestBuilder';
import { RetailRecoListElementTypeBase } from './RetailRecoListElementTypeBase';
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
export class RetailRecoListElementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailRecoListElements<DeSerializersT>, DeSerializersT>
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
  ): RetailRecoListElementsApi<DeSerializersT> {
    return new RetailRecoListElementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailRecoListElements;

  requestBuilder(): RetailRecoListElementsRequestBuilder<DeSerializersT> {
    return new RetailRecoListElementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailRecoListElements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailRecoListElements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailRecoListElements<DeSerializersT>,
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
    typeof RetailRecoListElements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailRecoListElements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LIST_ID: OrderableEdmTypeField<
      RetailRecoListElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELEMENT_TYPE: EnumField<
      RetailRecoListElements<DeSerializers>,
      DeSerializersT,
      RetailRecoListElementTypeBase,
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailRecoListElements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      RetailRecoListElements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailRecoListElements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link listId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_ID: fieldBuilder.buildEdmTypeField('ListId', 'Edm.String', false),
        /**
         * Static representation of the {@link elementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELEMENT_TYPE: fieldBuilder.buildEnumField(
          'ElementType',
          RetailRecoListElementTypeBase,
          true
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailRecoListElements)
      };
    }

    return this._schema;
  }
}
