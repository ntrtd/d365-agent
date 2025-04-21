/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallCenterSalesOrderCoupons } from './CallCenterSalesOrderCoupons';
import { CallCenterSalesOrderCouponsRequestBuilder } from './CallCenterSalesOrderCouponsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CallCenterSalesOrderCouponsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CallCenterSalesOrderCoupons<DeSerializersT>, DeSerializersT>
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
  ): CallCenterSalesOrderCouponsApi<DeSerializersT> {
    return new CallCenterSalesOrderCouponsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CallCenterSalesOrderCoupons;

  requestBuilder(): CallCenterSalesOrderCouponsRequestBuilder<DeSerializersT> {
    return new CallCenterSalesOrderCouponsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CallCenterSalesOrderCoupons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CallCenterSalesOrderCoupons<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CallCenterSalesOrderCoupons<DeSerializersT>,
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
    typeof CallCenterSalesOrderCoupons,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CallCenterSalesOrderCoupons,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CallCenterSalesOrderCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUPON_ID: OrderableEdmTypeField<
      CallCenterSalesOrderCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      CallCenterSalesOrderCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      CallCenterSalesOrderCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LIABILITY_DEDUCTED: EnumField<
      CallCenterSalesOrderCoupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REISSUE: EnumField<
      CallCenterSalesOrderCoupons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CallCenterSalesOrderCoupons<DeSerializers>>;
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
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField(
          'SalesId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isLiabilityDeducted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LIABILITY_DEDUCTED: fieldBuilder.buildEnumField(
          'IsLiabilityDeducted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isReissue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REISSUE: fieldBuilder.buildEnumField('IsReissue', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CallCenterSalesOrderCoupons)
      };
    }

    return this._schema;
  }
}
