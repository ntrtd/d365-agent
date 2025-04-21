/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailInternalOrganizationProducts } from './RetailInternalOrganizationProducts';
import { RetailInternalOrganizationProductsRequestBuilder } from './RetailInternalOrganizationProductsRequestBuilder';
import { RetailInternalOrganizationProductAttributeValues2Api } from './RetailInternalOrganizationProductAttributeValues2Api';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailInternalOrganizationProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailInternalOrganizationProducts<DeSerializersT>,
      DeSerializersT
    >
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
  ): RetailInternalOrganizationProductsApi<DeSerializersT> {
    return new RetailInternalOrganizationProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailInternalOrganizationProducts<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: new OneToManyLink(
        'RetailInternalOrganizationProductAttributeValue2',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailInternalOrganizationProducts;

  requestBuilder(): RetailInternalOrganizationProductsRequestBuilder<DeSerializersT> {
    return new RetailInternalOrganizationProductsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailInternalOrganizationProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailInternalOrganizationProducts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailInternalOrganizationProducts<DeSerializersT>,
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
    typeof RetailInternalOrganizationProducts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailInternalOrganizationProducts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      RetailInternalOrganizationProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailInternalOrganizationProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailInternalOrganizationProducts<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailInternalOrganizationProducts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailInternalOrganizationProducts)
      };
    }

    return this._schema;
  }
}
