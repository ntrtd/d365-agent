/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AttributeGroups } from './AttributeGroups';
import { AttributeGroupsRequestBuilder } from './AttributeGroupsRequestBuilder';
import { RetailInternalOrganizationAttributeGroupsApi } from './RetailInternalOrganizationAttributeGroupsApi';
import { RetailInternalOrganizationProductAttributeValuesApi } from './RetailInternalOrganizationProductAttributeValuesApi';
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
export class AttributeGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AttributeGroups<DeSerializersT>, DeSerializersT>
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
  ): AttributeGroupsApi<DeSerializersT> {
    return new AttributeGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationAttributeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_ATTRIBUTE_GROUP: OneToManyLink<
      AttributeGroups<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationAttributeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      AttributeGroups<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailInternalOrganizationAttributeGroupsApi<DeSerializersT>,
      RetailInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_INTERNAL_ORGANIZATION_ATTRIBUTE_GROUP: new OneToManyLink(
        'RetailInternalOrganizationAttributeGroup',
        this,
        linkedApis[0]
      ),
      RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: new OneToManyLink(
        'RetailInternalOrganizationProductAttributeValue',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AttributeGroups;

  requestBuilder(): AttributeGroupsRequestBuilder<DeSerializersT> {
    return new AttributeGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AttributeGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AttributeGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AttributeGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AttributeGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AttributeGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_NAME: OrderableEdmTypeField<
      AttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationAttributeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_ATTRIBUTE_GROUP: OneToManyLink<
      AttributeGroups<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationAttributeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailInternalOrganizationProductAttributeValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION_PRODUCT_ATTRIBUTE_VALUE: OneToManyLink<
      AttributeGroups<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationProductAttributeValuesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AttributeGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AttributeGroups)
      };
    }

    return this._schema;
  }
}
