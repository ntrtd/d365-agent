/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LoyaltyCardRewardPointAdjustments } from './LoyaltyCardRewardPointAdjustments';
import { LoyaltyCardRewardPointAdjustmentsRequestBuilder } from './LoyaltyCardRewardPointAdjustmentsRequestBuilder';
import { RetailLoyaltyAdjustmentStatusBase } from './RetailLoyaltyAdjustmentStatusBase';
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
export class LoyaltyCardRewardPointAdjustmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LoyaltyCardRewardPointAdjustments<DeSerializersT>, DeSerializersT>
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
  ): LoyaltyCardRewardPointAdjustmentsApi<DeSerializersT> {
    return new LoyaltyCardRewardPointAdjustmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LoyaltyCardRewardPointAdjustments;

  requestBuilder(): LoyaltyCardRewardPointAdjustmentsRequestBuilder<DeSerializersT> {
    return new LoyaltyCardRewardPointAdjustmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LoyaltyCardRewardPointAdjustments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LoyaltyCardRewardPointAdjustments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LoyaltyCardRewardPointAdjustments<DeSerializersT>,
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
    typeof LoyaltyCardRewardPointAdjustments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LoyaltyCardRewardPointAdjustments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADJUSTMENT_ID: OrderableEdmTypeField<
      LoyaltyCardRewardPointAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADJUSTMENT_STATUS: EnumField<
      LoyaltyCardRewardPointAdjustments<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyAdjustmentStatusBase,
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      LoyaltyCardRewardPointAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETAIL_AFFILIATION_NAME: OrderableEdmTypeField<
      LoyaltyCardRewardPointAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      LoyaltyCardRewardPointAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_LOYALTY_REWARD_POINT_REWARD_POINT_ID: OrderableEdmTypeField<
      LoyaltyCardRewardPointAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REWARD_POINT_AMOUNT_QTY: OrderableEdmTypeField<
      LoyaltyCardRewardPointAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETAIL_LOYALTY_CARD_CARD_NUMBER: OrderableEdmTypeField<
      LoyaltyCardRewardPointAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LoyaltyCardRewardPointAdjustments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link adjustmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_ID: fieldBuilder.buildEdmTypeField(
          'AdjustmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link adjustmentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_STATUS: fieldBuilder.buildEnumField(
          'AdjustmentStatus',
          RetailLoyaltyAdjustmentStatusBase,
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retailAffiliationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_AFFILIATION_NAME: fieldBuilder.buildEdmTypeField(
          'RetailAffiliation_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link retailLoyaltyRewardPointRewardPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_LOYALTY_REWARD_POINT_REWARD_POINT_ID:
          fieldBuilder.buildEdmTypeField(
            'RetailLoyaltyRewardPoint_RewardPointId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link rewardPointAmountQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REWARD_POINT_AMOUNT_QTY: fieldBuilder.buildEdmTypeField(
          'RewardPointAmountQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link retailLoyaltyCardCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_LOYALTY_CARD_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'RetailLoyaltyCard_CardNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LoyaltyCardRewardPointAdjustments)
      };
    }

    return this._schema;
  }
}
