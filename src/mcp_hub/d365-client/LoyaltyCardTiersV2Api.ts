/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LoyaltyCardTiersV2 } from './LoyaltyCardTiersV2';
import { LoyaltyCardTiersV2RequestBuilder } from './LoyaltyCardTiersV2RequestBuilder';
import { RetailAffiliationType } from './RetailAffiliationType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LoyaltyCardTiersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LoyaltyCardTiersV2<DeSerializersT>, DeSerializersT>
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
  ): LoyaltyCardTiersV2Api<DeSerializersT> {
    return new LoyaltyCardTiersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LoyaltyCardTiersV2;

  requestBuilder(): LoyaltyCardTiersV2RequestBuilder<DeSerializersT> {
    return new LoyaltyCardTiersV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LoyaltyCardTiersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LoyaltyCardTiersV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LoyaltyCardTiersV2<DeSerializersT>,
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
    typeof LoyaltyCardTiersV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LoyaltyCardTiersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOYALTY_PROGRAM_NAME: OrderableEdmTypeField<
      LoyaltyCardTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_TIER_AFFILIATION_NAME: OrderableEdmTypeField<
      LoyaltyCardTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_TIER_ID: OrderableEdmTypeField<
      LoyaltyCardTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOYALTY_CARD_NUMBER: OrderableEdmTypeField<
      LoyaltyCardTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      LoyaltyCardTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      LoyaltyCardTiersV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AFFILIATION_TYPE: EnumField<
      LoyaltyCardTiersV2<DeSerializers>,
      DeSerializersT,
      RetailAffiliationType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LoyaltyCardTiersV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link loyaltyTierAffiliationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_TIER_AFFILIATION_NAME: fieldBuilder.buildEdmTypeField(
          'LoyaltyTierAffiliationName',
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
         * Static representation of the {@link loyaltyCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'LoyaltyCardNumber',
          'Edm.String',
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
         * Static representation of the {@link affiliationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFFILIATION_TYPE: fieldBuilder.buildEnumField(
          'AffiliationType',
          RetailAffiliationType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LoyaltyCardTiersV2)
      };
    }

    return this._schema;
  }
}
