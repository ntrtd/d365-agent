/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailInternalOrganizationAttributeGroups } from './RetailInternalOrganizationAttributeGroups';
import { RetailInternalOrganizationAttributeGroupsRequestBuilder } from './RetailInternalOrganizationAttributeGroupsRequestBuilder';
import { AttributeGroupsApi } from './AttributeGroupsApi';
import { RetailInternalOrganizationsApi } from './RetailInternalOrganizationsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailInternalOrganizationAttributeGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailInternalOrganizationAttributeGroups<DeSerializersT>,
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
  ): RetailInternalOrganizationAttributeGroupsApi<DeSerializersT> {
    return new RetailInternalOrganizationAttributeGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link attributeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTRIBUTE_GROUP: OneToOneLink<
      RetailInternalOrganizationAttributeGroups<DeSerializersT>,
      DeSerializersT,
      AttributeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailInternalOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION: OneToOneLink<
      RetailInternalOrganizationAttributeGroups<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AttributeGroupsApi<DeSerializersT>,
      RetailInternalOrganizationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ATTRIBUTE_GROUP: new OneToOneLink('AttributeGroup', this, linkedApis[0]),
      RETAIL_INTERNAL_ORGANIZATION: new OneToOneLink(
        'RetailInternalOrganization',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailInternalOrganizationAttributeGroups;

  requestBuilder(): RetailInternalOrganizationAttributeGroupsRequestBuilder<DeSerializersT> {
    return new RetailInternalOrganizationAttributeGroupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailInternalOrganizationAttributeGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailInternalOrganizationAttributeGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailInternalOrganizationAttributeGroups<DeSerializersT>,
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
    typeof RetailInternalOrganizationAttributeGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailInternalOrganizationAttributeGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      RetailInternalOrganizationAttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      RetailInternalOrganizationAttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_GROUP_DISPLAY_ORDER: OrderableEdmTypeField<
      RetailInternalOrganizationAttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link attributeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTRIBUTE_GROUP: OneToOneLink<
      RetailInternalOrganizationAttributeGroups<DeSerializersT>,
      DeSerializersT,
      AttributeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailInternalOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_INTERNAL_ORGANIZATION: OneToOneLink<
      RetailInternalOrganizationAttributeGroups<DeSerializersT>,
      DeSerializersT,
      RetailInternalOrganizationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      RetailInternalOrganizationAttributeGroups<DeSerializers>
    >;
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
         * Static representation of the {@link attributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'AttributeGroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link attributeGroupDisplayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_GROUP_DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'AttributeGroupDisplayOrder',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          RetailInternalOrganizationAttributeGroups
        )
      };
    }

    return this._schema;
  }
}
