/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyalties } from './RetailLoyalties';
import { RetailLoyaltiesRequestBuilder } from './RetailLoyaltiesRequestBuilder';
import { RetailLoyaltyPriceGroupsApi } from './RetailLoyaltyPriceGroupsApi';
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
export class RetailLoyaltiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailLoyalties<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltiesApi<DeSerializersT> {
    return new RetailLoyaltiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailLoyaltyPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_LOYALTY_PRICE_GROUP: OneToManyLink<
      RetailLoyalties<DeSerializersT>,
      DeSerializersT,
      RetailLoyaltyPriceGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailLoyaltyPriceGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_LOYALTY_PRICE_GROUP: new OneToManyLink(
        'RetailLoyaltyPriceGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailLoyalties;

  requestBuilder(): RetailLoyaltiesRequestBuilder<DeSerializersT> {
    return new RetailLoyaltiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyalties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailLoyalties<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailLoyalties<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailLoyalties, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyalties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      RetailLoyalties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POOL_RELATED_CARDS: EnumField<
      RetailLoyalties<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailLoyaltyPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_LOYALTY_PRICE_GROUP: OneToManyLink<
      RetailLoyalties<DeSerializersT>,
      DeSerializersT,
      RetailLoyaltyPriceGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailLoyalties<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link poolRelatedCards} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POOL_RELATED_CARDS: fieldBuilder.buildEnumField(
          'PoolRelatedCards',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyalties)
      };
    }

    return this._schema;
  }
}
