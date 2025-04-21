/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailInternalOrganizations } from './RetailInternalOrganizations';
import { RetailInternalOrganizationsRequestBuilder } from './RetailInternalOrganizationsRequestBuilder';
import { RetailInternalOrganizationProductAttributeValues2Api } from './RetailInternalOrganizationProductAttributeValues2Api';
import { RetailCatalogInternalOrganizationProductAttributeValues2Api } from './RetailCatalogInternalOrganizationProductAttributeValues2Api';
import { RetailInternalOrganizationAttributeGroupsApi } from './RetailInternalOrganizationAttributeGroupsApi';
import { RetailInternalOrganizationProductAttributeValuesApi } from './RetailInternalOrganizationProductAttributeValuesApi';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailInternalOrganizationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailInternalOrganizations<DeSerializersT>, DeSerializersT>
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
  ): RetailInternalOrganizationsApi<DeSerializersT> {
    return new RetailInternalOrganizationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationAttributeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_ATTRIBUTE_GROUP: OneToManyLink<
      RetailInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationAttributeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      RetailInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>,
      RetailInternalOrganizationAttributeGroupsApi<DeSerializersT>,
      RetailInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: new OneToManyLink(
        'RetailInternalOrganizationProductAttributeValue2',
        this,
        linkedApis[0]
      ),
      RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2:
        new OneToManyLink(
          'RetailCatalogInternalOrganizationProductAttributeValue2',
          this,
          linkedApis[1]
        ),
      RETAIL_INTERNAL_ORGANIZATION_ATTRIBUTE_GROUP: new OneToManyLink(
        'RetailInternalOrganizationAttributeGroup',
        this,
        linkedApis[2]
      ),
      RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: new OneToManyLink(
        'RetailInternalOrganizationProductAttributeValue',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RetailInternalOrganizations;

  requestBuilder(): RetailInternalOrganizationsRequestBuilder<DeSerializersT> {
    return new RetailInternalOrganizationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailInternalOrganizations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailInternalOrganizations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailInternalOrganizations<DeSerializersT>,
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
    typeof RetailInternalOrganizations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailInternalOrganizations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      RetailInternalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INHERIT_ENABLED: EnumField<
      RetailInternalOrganizations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORGANIZATION_NAME: OrderableEdmTypeField<
      RetailInternalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailInternalOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCatalogInternalOrganizationProductAttributeValue2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE_2: OneToManyLink<
      RetailInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailCatalogInternalOrganizationProductAttributeValues2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationAttributeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_ATTRIBUTE_GROUP: OneToManyLink<
      RetailInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationAttributeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      RetailInternalOrganizations<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailInternalOrganizations<DeSerializers>>;
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
         * Static representation of the {@link inheritEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INHERIT_ENABLED: fieldBuilder.buildEnumField(
          'InheritEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link organizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailInternalOrganizations)
      };
    }

    return this._schema;
  }
}
