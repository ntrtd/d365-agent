/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Coupons } from './Coupons';
import { CouponsRequestBuilder } from './CouponsRequestBuilder';
import { NoYes } from './NoYes';
import { RetailCouponStatus } from './RetailCouponStatus';
import { RetailCouponUsageLimitType } from './RetailCouponUsageLimitType';
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
export class CouponsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Coupons<DeSerializersT>, DeSerializersT>
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
  ): CouponsApi<DeSerializersT> {
    return new CouponsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Coupons;

  requestBuilder(): CouponsRequestBuilder<DeSerializersT> {
    return new CouponsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Coupons<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Coupons<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Coupons<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Coupons, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Coupons, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Coupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUPON_NUMBER: OrderableEdmTypeField<
      Coupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLY_WITHOUT_COUPON_CODE: EnumField<
      Coupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATUS: EnumField<
      Coupons<DeSerializers>,
      DeSerializersT,
      RetailCouponStatus,
      true,
      true
    >;
    IS_EXCLUSIVE: EnumField<
      Coupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      Coupons<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    USAGE_LIMIT_TYPE: EnumField<
      Coupons<DeSerializers>,
      DeSerializersT,
      RetailCouponUsageLimitType,
      true,
      true
    >;
    IS_CUSTOMER_REQUIRED: EnumField<
      Coupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Coupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_LIMIT: OrderableEdmTypeField<
      Coupons<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DISCOUNT_OFFER_ID: OrderableEdmTypeField<
      Coupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_COUPON_NUMBER: OrderableEdmTypeField<
      Coupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      Coupons<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Coupons<DeSerializers>>;
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
         * Static representation of the {@link couponNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_NUMBER: fieldBuilder.buildEdmTypeField(
          'CouponNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link applyWithoutCouponCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_WITHOUT_COUPON_CODE: fieldBuilder.buildEnumField(
          'ApplyWithoutCouponCode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', RetailCouponStatus, true),
        /**
         * Static representation of the {@link isExclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXCLUSIVE: fieldBuilder.buildEnumField('IsExclusive', NoYes, true),
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
         * Static representation of the {@link usageLimitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_LIMIT_TYPE: fieldBuilder.buildEnumField(
          'UsageLimitType',
          RetailCouponUsageLimitType,
          true
        ),
        /**
         * Static representation of the {@link isCustomerRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CUSTOMER_REQUIRED: fieldBuilder.buildEnumField(
          'IsCustomerRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usageLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_LIMIT: fieldBuilder.buildEdmTypeField(
          'UsageLimit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link discountOfferId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_OFFER_ID: fieldBuilder.buildEdmTypeField(
          'DiscountOfferId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentCouponNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COUPON_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParentCouponNumber',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Coupons)
      };
    }

    return this._schema;
  }
}
