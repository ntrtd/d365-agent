/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltySchemeChannels } from './RetailLoyaltySchemeChannels';
import { RetailLoyaltySchemeChannelsRequestBuilder } from './RetailLoyaltySchemeChannelsRequestBuilder';
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
export class RetailLoyaltySchemeChannelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailLoyaltySchemeChannels<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltySchemeChannelsApi<DeSerializersT> {
    return new RetailLoyaltySchemeChannelsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltySchemeChannels;

  requestBuilder(): RetailLoyaltySchemeChannelsRequestBuilder<DeSerializersT> {
    return new RetailLoyaltySchemeChannelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltySchemeChannels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailLoyaltySchemeChannels<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltySchemeChannels<DeSerializersT>,
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
    typeof RetailLoyaltySchemeChannels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltySchemeChannels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOYALTY_SCHEME_ID: OrderableEdmTypeField<
      RetailLoyaltySchemeChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      RetailLoyaltySchemeChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_HIERARCHY_TYPE_NAME: OrderableEdmTypeField<
      RetailLoyaltySchemeChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailLoyaltySchemeChannels<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link loyaltySchemeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_SCHEME_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltySchemeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omHierarchyTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_HIERARCHY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'OMHierarchyTypeName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltySchemeChannels)
      };
    }

    return this._schema;
  }
}
