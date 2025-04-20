/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailChannelAttributeGroups } from './RetailChannelAttributeGroups';
import { RetailChannelAttributeGroupsRequestBuilder } from './RetailChannelAttributeGroupsRequestBuilder';
import { OnlineChannelsApi } from './OnlineChannelsApi';
import { RetailChannelAttributeModifier } from './RetailChannelAttributeModifier';
import { RetailAttributeAppliesToModifier } from './RetailAttributeAppliesToModifier';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailChannelAttributeGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailChannelAttributeGroups<DeSerializersT>, DeSerializersT>
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
  ): RetailChannelAttributeGroupsApi<DeSerializersT> {
    return new RetailChannelAttributeGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToOneLink<
      RetailChannelAttributeGroups<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OnlineChannelsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ONLINE_CHANNEL: new OneToOneLink('OnlineChannel', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetailChannelAttributeGroups;

  requestBuilder(): RetailChannelAttributeGroupsRequestBuilder<DeSerializersT> {
    return new RetailChannelAttributeGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailChannelAttributeGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailChannelAttributeGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailChannelAttributeGroups<DeSerializersT>,
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
    typeof RetailChannelAttributeGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailChannelAttributeGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailChannelAttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      RetailChannelAttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_MODIFIER: EnumField<
      RetailChannelAttributeGroups<DeSerializers>,
      DeSerializersT,
      RetailChannelAttributeModifier,
      true,
      true
    >;
    ATTRIBUTE_APPLIES_TO_MODIFIER: EnumField<
      RetailChannelAttributeGroups<DeSerializers>,
      DeSerializersT,
      RetailAttributeAppliesToModifier,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToOneLink<
      RetailChannelAttributeGroups<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailChannelAttributeGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link omOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitNumber',
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
         * Static representation of the {@link attributeModifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_MODIFIER: fieldBuilder.buildEnumField(
          'AttributeModifier',
          RetailChannelAttributeModifier,
          true
        ),
        /**
         * Static representation of the {@link attributeAppliesToModifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_APPLIES_TO_MODIFIER: fieldBuilder.buildEnumField(
          'AttributeAppliesToModifier',
          RetailAttributeAppliesToModifier,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailChannelAttributeGroups)
      };
    }

    return this._schema;
  }
}
