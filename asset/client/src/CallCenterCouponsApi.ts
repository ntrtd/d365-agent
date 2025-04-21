/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallCenterCoupons } from './CallCenterCoupons';
import { CallCenterCouponsRequestBuilder } from './CallCenterCouponsRequestBuilder';
import { McrCouponInclude } from './McrCouponInclude';
import { NoYes } from './NoYes';
import { McrCouponOrign } from './McrCouponOrign';
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
export class CallCenterCouponsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CallCenterCoupons<DeSerializersT>, DeSerializersT>
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
  ): CallCenterCouponsApi<DeSerializersT> {
    return new CallCenterCouponsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CallCenterCoupons;

  requestBuilder(): CallCenterCouponsRequestBuilder<DeSerializersT> {
    return new CallCenterCouponsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CallCenterCoupons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CallCenterCoupons<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CallCenterCoupons<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CallCenterCoupons,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CallCenterCoupons,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUPON_ID: OrderableEdmTypeField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INCLUDE_EXCLUDE_ITEM: EnumField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      McrCouponInclude,
      true,
      true
    >;
    IS_MANUFACTURER_COUPON: EnumField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ENABLED: EnumField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REISSUE: EnumField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EXCLUSIVE: EnumField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUPON_ORIGINATION: EnumField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      McrCouponOrign,
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INCLUDE_EXCLUDE_CATALOG: EnumField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      McrCouponInclude,
      true,
      true
    >;
    IS_COUPON_VOIDED: EnumField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUPON_NUMBER: OrderableEdmTypeField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUPON_EXPIRE_DATE: OrderableEdmTypeField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_ONE_TIME_USE: EnumField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUPON_REDEMPTION_RATE: OrderableEdmTypeField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUPON_DESCRIPTION: OrderableEdmTypeField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CUSTOMER_SPECIFIC: EnumField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_COUPON_ID: OrderableEdmTypeField<
      CallCenterCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CallCenterCoupons<DeSerializers>>;
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
         * Static representation of the {@link couponId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_ID: fieldBuilder.buildEdmTypeField(
          'CouponId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link includeExcludeItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_EXCLUDE_ITEM: fieldBuilder.buildEnumField(
          'IncludeExcludeItem',
          McrCouponInclude,
          true
        ),
        /**
         * Static representation of the {@link isManufacturerCoupon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MANUFACTURER_COUPON: fieldBuilder.buildEnumField(
          'IsManufacturerCoupon',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENABLED: fieldBuilder.buildEnumField('IsEnabled', NoYes, true),
        /**
         * Static representation of the {@link isReissue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REISSUE: fieldBuilder.buildEnumField('IsReissue', NoYes, true),
        /**
         * Static representation of the {@link isExclusive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXCLUSIVE: fieldBuilder.buildEnumField('IsExclusive', NoYes, true),
        /**
         * Static representation of the {@link couponOrigination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_ORIGINATION: fieldBuilder.buildEnumField(
          'CouponOrigination',
          McrCouponOrign,
          true
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link includeExcludeCatalog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_EXCLUDE_CATALOG: fieldBuilder.buildEnumField(
          'IncludeExcludeCatalog',
          McrCouponInclude,
          true
        ),
        /**
         * Static representation of the {@link isCouponVoided} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COUPON_VOIDED: fieldBuilder.buildEnumField(
          'IsCouponVoided',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link couponNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_NUMBER: fieldBuilder.buildEdmTypeField(
          'CouponNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link couponExpireDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_EXPIRE_DATE: fieldBuilder.buildEdmTypeField(
          'CouponExpireDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isOneTimeUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_USE: fieldBuilder.buildEnumField(
          'IsOneTimeUse',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link couponRedemptionRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_REDEMPTION_RATE: fieldBuilder.buildEdmTypeField(
          'CouponRedemptionRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link couponDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CouponDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCustomerSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CUSTOMER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsCustomerSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link parentCouponId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COUPON_ID: fieldBuilder.buildEdmTypeField(
          'ParentCouponId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CallCenterCoupons)
      };
    }

    return this._schema;
  }
}
