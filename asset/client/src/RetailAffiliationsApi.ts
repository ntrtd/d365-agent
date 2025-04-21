/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailAffiliations } from './RetailAffiliations';
import { RetailAffiliationsRequestBuilder } from './RetailAffiliationsRequestBuilder';
import { LoyaltyCardRewardPointNonTransactionalActivityV2EntityApi } from './LoyaltyCardRewardPointNonTransactionalActivityV2EntityApi';
import { RetailAffiliationPriceGroupsApi } from './RetailAffiliationPriceGroupsApi';
import { LoyaltyCardRewardPointNonTransactionalActivitiesApi } from './LoyaltyCardRewardPointNonTransactionalActivitiesApi';
import { NoYesCombo } from './NoYesCombo';
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
export class RetailAffiliationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailAffiliations<DeSerializersT>, DeSerializersT>
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
  ): RetailAffiliationsApi<DeSerializersT> {
    return new RetailAffiliationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link loyaltyCardRewardPointNonTransactionalActivityV2Entity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOYALTY_CARD_REWARD_POINT_NON_TRANSACTIONAL_ACTIVITY_V_2_ENTITY: OneToManyLink<
      RetailAffiliations<DeSerializersT>,
      DeSerializersT,
      LoyaltyCardRewardPointNonTransactionalActivityV2EntityApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailAffiliationPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_AFFILIATION_PRICE_GROUP: OneToManyLink<
      RetailAffiliations<DeSerializersT>,
      DeSerializersT,
      RetailAffiliationPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loyaltyCardRewardPointNonTransactionalActivity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOYALTY_CARD_REWARD_POINT_NON_TRANSACTIONAL_ACTIVITY: OneToManyLink<
      RetailAffiliations<DeSerializersT>,
      DeSerializersT,
      LoyaltyCardRewardPointNonTransactionalActivitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LoyaltyCardRewardPointNonTransactionalActivityV2EntityApi<DeSerializersT>,
      RetailAffiliationPriceGroupsApi<DeSerializersT>,
      LoyaltyCardRewardPointNonTransactionalActivitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LOYALTY_CARD_REWARD_POINT_NON_TRANSACTIONAL_ACTIVITY_V_2_ENTITY:
        new OneToManyLink(
          'LoyaltyCardRewardPointNonTransactionalActivityV2Entity',
          this,
          linkedApis[0]
        ),
      RETAIL_AFFILIATION_PRICE_GROUP: new OneToManyLink(
        'RetailAffiliationPriceGroup',
        this,
        linkedApis[1]
      ),
      LOYALTY_CARD_REWARD_POINT_NON_TRANSACTIONAL_ACTIVITY: new OneToManyLink(
        'LoyaltyCardRewardPointNonTransactionalActivity',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = RetailAffiliations;

  requestBuilder(): RetailAffiliationsRequestBuilder<DeSerializersT> {
    return new RetailAffiliationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailAffiliations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailAffiliations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailAffiliations<DeSerializersT>,
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
    typeof RetailAffiliations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailAffiliations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      RetailAffiliations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIDE_IN_CHANNELS: EnumField<
      RetailAffiliations<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loyaltyCardRewardPointNonTransactionalActivityV2Entity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOYALTY_CARD_REWARD_POINT_NON_TRANSACTIONAL_ACTIVITY_V_2_ENTITY: OneToManyLink<
      RetailAffiliations<DeSerializersT>,
      DeSerializersT,
      LoyaltyCardRewardPointNonTransactionalActivityV2EntityApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailAffiliationPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_AFFILIATION_PRICE_GROUP: OneToManyLink<
      RetailAffiliations<DeSerializersT>,
      DeSerializersT,
      RetailAffiliationPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loyaltyCardRewardPointNonTransactionalActivity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOYALTY_CARD_REWARD_POINT_NON_TRANSACTIONAL_ACTIVITY: OneToManyLink<
      RetailAffiliations<DeSerializersT>,
      DeSerializersT,
      LoyaltyCardRewardPointNonTransactionalActivitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailAffiliations<DeSerializers>>;
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
         * Static representation of the {@link hideInChannels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_IN_CHANNELS: fieldBuilder.buildEnumField(
          'HideInChannels',
          NoYesCombo,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailAffiliations)
      };
    }

    return this._schema;
  }
}
