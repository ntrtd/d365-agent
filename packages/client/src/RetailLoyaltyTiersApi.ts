/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailLoyaltyTiers } from './RetailLoyaltyTiers';
import { RetailLoyaltyTiersRequestBuilder } from './RetailLoyaltyTiersRequestBuilder';
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
export class RetailLoyaltyTiersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailLoyaltyTiers<DeSerializersT>, DeSerializersT>
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
  ): RetailLoyaltyTiersApi<DeSerializersT> {
    return new RetailLoyaltyTiersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailLoyaltyTiers;

  requestBuilder(): RetailLoyaltyTiersRequestBuilder<DeSerializersT> {
    return new RetailLoyaltyTiersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailLoyaltyTiers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailLoyaltyTiers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailLoyaltyTiers<DeSerializersT>,
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
    typeof RetailLoyaltyTiers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailLoyaltyTiers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOYALTY_NAME: OrderableEdmTypeField<
      RetailLoyaltyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIER_ID: OrderableEdmTypeField<
      RetailLoyaltyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_DATE_INTERVAL: OrderableEdmTypeField<
      RetailLoyaltyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIER_LEVEL: OrderableEdmTypeField<
      RetailLoyaltyTiers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailLoyaltyTiers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link tierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIER_ID: fieldBuilder.buildEdmTypeField('TierId', 'Edm.String', false),
        /**
         * Static representation of the {@link validDateInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_DATE_INTERVAL: fieldBuilder.buildEdmTypeField(
          'ValidDateInterval',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tierLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIER_LEVEL: fieldBuilder.buildEdmTypeField(
          'TierLevel',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailLoyaltyTiers)
      };
    }

    return this._schema;
  }
}
