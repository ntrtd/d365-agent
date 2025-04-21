/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailCatalogInternalOrganizations } from './RetailCatalogInternalOrganizations';
import { RetailCatalogInternalOrganizationsRequestBuilder } from './RetailCatalogInternalOrganizationsRequestBuilder';
import { RetailCatalogsApi } from './RetailCatalogsApi';
import { RetailCatalogInternalOrganizationProductAttributeValuesApi } from './RetailCatalogInternalOrganizationProductAttributeValuesApi';
import { RetailCatalogInternalOrganizationProductAttributeValues2Api } from './RetailCatalogInternalOrganizationProductAttributeValues2Api';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailCatalogInternalOrganizationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailCatalogInternalOrganizations<DeSerializersT>,
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
  ): RetailCatalogInternalOrganizationsApi<DeSerializersT> {
    return new RetailCatalogInternalOrganizationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToOneLink<
      RetailCatalogInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      RetailCatalogInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailCatalogInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailCatalogsApi<DeSerializersT>,
      RetailCatalogInternalOrganizationProductAttributeValuesApi<DeSerializersT>,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CATALOG: new OneToOneLink('RetailCatalog', this, linkedApis[0]),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE:
        new OneToManyLink(
          'RetailCatalogInternalOrganizationProductAttributeValue',
          this,
          linkedApis[1]
        ),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2:
        new OneToManyLink(
          'RetailCatalogInternalOrganizationProductAttributeValue2',
          this,
          linkedApis[2]
        )
    };
    return this;
  }

  entityConstructor = RetailCatalogInternalOrganizations;

  requestBuilder(): RetailCatalogInternalOrganizationsRequestBuilder<DeSerializersT> {
    return new RetailCatalogInternalOrganizationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailCatalogInternalOrganizations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailCatalogInternalOrganizations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailCatalogInternalOrganizations<DeSerializersT>,
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
    typeof RetailCatalogInternalOrganizations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailCatalogInternalOrganizations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATALOG_NUMBER: OrderableEdmTypeField<
      RetailCatalogInternalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      RetailCatalogInternalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToOneLink<
      RetailCatalogInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      RetailCatalogInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailCatalogInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailCatalogInternalOrganizations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link catalogNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_NUMBER: fieldBuilder.buildEdmTypeField(
          'CatalogNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailCatalogInternalOrganizations)
      };
    }

    return this._schema;
  }
}
