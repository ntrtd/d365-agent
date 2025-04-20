/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyPriceGroups } from './RetailLoyaltyPriceGroups';
import { RetailLoyaltyPriceGroupsRequestBuilder } from './RetailLoyaltyPriceGroupsRequestBuilder';
import { PriceCustomerGroupsApi } from './PriceCustomerGroupsApi';
import { RetailLoyaltiesApi } from './RetailLoyaltiesApi';
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
export class RetailLoyaltyPriceGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailLoyaltyPriceGroups<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltyPriceGroupsApi<DeSerializersT> {
    return new RetailLoyaltyPriceGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link priceCustomerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_CUSTOMER_GROUP: OneToOneLink<
      RetailLoyaltyPriceGroups<DeSerializersT>,
      DeSerializersT,
      PriceCustomerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailLoyalty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_LOYALTY: OneToOneLink<
      RetailLoyaltyPriceGroups<DeSerializersT>,
      DeSerializersT,
      RetailLoyaltiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PriceCustomerGroupsApi<DeSerializersT>,
      RetailLoyaltiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRICE_CUSTOMER_GROUP: new OneToOneLink(
        'PriceCustomerGroup',
        this,
        linkedApis[0]
      ),
      RETAIL_LOYALTY: new OneToOneLink('RetailLoyalty', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RetailLoyaltyPriceGroups;

  requestBuilder(): RetailLoyaltyPriceGroupsRequestBuilder<DeSerializersT> {
    return new RetailLoyaltyPriceGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyPriceGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailLoyaltyPriceGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyPriceGroups<DeSerializersT>,
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
    typeof RetailLoyaltyPriceGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyPriceGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailLoyaltyPriceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_NAME: OrderableEdmTypeField<
      RetailLoyaltyPriceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      RetailLoyaltyPriceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceCustomerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_CUSTOMER_GROUP: OneToOneLink<
      RetailLoyaltyPriceGroups<DeSerializersT>,
      DeSerializersT,
      PriceCustomerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailLoyalty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_LOYALTY: OneToOneLink<
      RetailLoyaltyPriceGroups<DeSerializersT>,
      DeSerializersT,
      RetailLoyaltiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailLoyaltyPriceGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
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
        /**
         * Static representation of the {@link priceCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PriceCustomerGroupCode',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltyPriceGroups)
      };
    }

    return this._schema;
  }
}
