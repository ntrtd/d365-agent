/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallCenterCouponDiscounts } from './CallCenterCouponDiscounts';
import { CallCenterCouponDiscountsRequestBuilder } from './CallCenterCouponDiscountsRequestBuilder';
import { McrCouponDiscAttr } from './McrCouponDiscAttr';
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
export class CallCenterCouponDiscountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CallCenterCouponDiscounts<DeSerializersT>, DeSerializersT>
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
  ): CallCenterCouponDiscountsApi<DeSerializersT> {
    return new CallCenterCouponDiscountsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CallCenterCouponDiscounts;

  requestBuilder(): CallCenterCouponDiscountsRequestBuilder<DeSerializersT> {
    return new CallCenterCouponDiscountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CallCenterCouponDiscounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CallCenterCouponDiscounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CallCenterCouponDiscounts<DeSerializersT>,
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
    typeof CallCenterCouponDiscounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CallCenterCouponDiscounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CallCenterCouponDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUPON_ID: OrderableEdmTypeField<
      CallCenterCouponDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUPON_AMOUNT: OrderableEdmTypeField<
      CallCenterCouponDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUPON_VALUE: OrderableEdmTypeField<
      CallCenterCouponDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUPON_DISCOUNT_TYPE: EnumField<
      CallCenterCouponDiscounts<DeSerializers>,
      DeSerializersT,
      McrCouponDiscAttr,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CallCenterCouponDiscounts<DeSerializers>>;
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
         * Static representation of the {@link couponAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CouponAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link couponValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_VALUE: fieldBuilder.buildEdmTypeField(
          'CouponValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link couponDiscountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_DISCOUNT_TYPE: fieldBuilder.buildEnumField(
          'CouponDiscountType',
          McrCouponDiscAttr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CallCenterCouponDiscounts)
      };
    }

    return this._schema;
  }
}
