/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyCardTiers } from './RetailLoyaltyCardTiers';
import { RetailLoyaltyCardTiersRequestBuilder } from './RetailLoyaltyCardTiersRequestBuilder';
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
export class RetailLoyaltyCardTiersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailLoyaltyCardTiers<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltyCardTiersApi<DeSerializersT> {
    return new RetailLoyaltyCardTiersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltyCardTiers;

  requestBuilder(): RetailLoyaltyCardTiersRequestBuilder<DeSerializersT> {
    return new RetailLoyaltyCardTiersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyCardTiers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailLoyaltyCardTiers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyCardTiers<DeSerializersT>,
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
    typeof RetailLoyaltyCardTiers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyCardTiers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOYALTY_CARD: OrderableEdmTypeField<
      RetailLoyaltyCardTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LOYALTY_TIER: OrderableEdmTypeField<
      RetailLoyaltyCardTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      RetailLoyaltyCardTiers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      RetailLoyaltyCardTiers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOYALTY_PROGRAM_NAME: OrderableEdmTypeField<
      RetailLoyaltyCardTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_TIER_ID: OrderableEdmTypeField<
      RetailLoyaltyCardTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AFFILIATION: OrderableEdmTypeField<
      RetailLoyaltyCardTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LOYALTY_TIER_AFFILIATION_NAME: OrderableEdmTypeField<
      RetailLoyaltyCardTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOYALTY_CARD_NUMBER: OrderableEdmTypeField<
      RetailLoyaltyCardTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailLoyaltyCardTiers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link loyaltyCard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_CARD: fieldBuilder.buildEdmTypeField(
          'LoyaltyCard',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link loyaltyTier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TIER: fieldBuilder.buildEdmTypeField(
          'LoyaltyTier',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link loyaltyProgramName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_PROGRAM_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyProgramName',
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
          true
        ),
        /**
         * Static representation of the {@link affiliation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFFILIATION: fieldBuilder.buildEdmTypeField(
          'Affiliation',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link loyaltyTierAffiliationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TIER_AFFILIATION_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyTierAffiliationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loyaltyCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoyaltyCardNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltyCardTiers)
      };
    }

    return this._schema;
  }
}
