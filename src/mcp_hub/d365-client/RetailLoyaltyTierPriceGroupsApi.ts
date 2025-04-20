/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyTierPriceGroups } from './RetailLoyaltyTierPriceGroups';
import { RetailLoyaltyTierPriceGroupsRequestBuilder } from './RetailLoyaltyTierPriceGroupsRequestBuilder';
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
export class RetailLoyaltyTierPriceGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailLoyaltyTierPriceGroups<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltyTierPriceGroupsApi<DeSerializersT> {
    return new RetailLoyaltyTierPriceGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltyTierPriceGroups;

  requestBuilder(): RetailLoyaltyTierPriceGroupsRequestBuilder<DeSerializersT> {
    return new RetailLoyaltyTierPriceGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyTierPriceGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailLoyaltyTierPriceGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyTierPriceGroups<DeSerializersT>,
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
    typeof RetailLoyaltyTierPriceGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyTierPriceGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRICE_GROUP_ID: OrderableEdmTypeField<
      RetailLoyaltyTierPriceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_TIER_ID: OrderableEdmTypeField<
      RetailLoyaltyTierPriceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_GROUP_COMPANY: OrderableEdmTypeField<
      RetailLoyaltyTierPriceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_NAME: OrderableEdmTypeField<
      RetailLoyaltyTierPriceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailLoyaltyTierPriceGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link priceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PriceGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link loyaltyTierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TIER_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltyTierId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceGroupCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_GROUP_COMPANY: fieldBuilder.buildEdmTypeField(
          'PriceGroupCompany',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link loyaltyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltyTierPriceGroups)
      };
    }

    return this._schema;
  }
}
