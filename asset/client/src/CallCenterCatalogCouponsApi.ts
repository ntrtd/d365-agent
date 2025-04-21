/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallCenterCatalogCoupons } from './CallCenterCatalogCoupons';
import { CallCenterCatalogCouponsRequestBuilder } from './CallCenterCatalogCouponsRequestBuilder';
import { RetailCatalogsApi } from './RetailCatalogsApi';
import { McrTableAll } from './McrTableAll';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CallCenterCatalogCouponsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CallCenterCatalogCoupons<DeSerializersT>, DeSerializersT>
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
  ): CallCenterCatalogCouponsApi<DeSerializersT> {
    return new CallCenterCatalogCouponsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToOneLink<
      CallCenterCatalogCoupons<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailCatalogsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CATALOG: new OneToOneLink('RetailCatalog', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CallCenterCatalogCoupons;

  requestBuilder(): CallCenterCatalogCouponsRequestBuilder<DeSerializersT> {
    return new CallCenterCatalogCouponsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CallCenterCatalogCoupons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CallCenterCatalogCoupons<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CallCenterCatalogCoupons<DeSerializersT>,
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
    typeof CallCenterCatalogCoupons,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CallCenterCatalogCoupons,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CallCenterCatalogCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATALOG_CODE: EnumField<
      CallCenterCatalogCoupons<DeSerializers>,
      DeSerializersT,
      McrTableAll,
      true,
      true
    >;
    COUPON_ID: OrderableEdmTypeField<
      CallCenterCatalogCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATALOG_NUMBER: OrderableEdmTypeField<
      CallCenterCatalogCoupons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CATALOG: OneToOneLink<
      CallCenterCatalogCoupons<DeSerializersT>,
      DeSerializersT,
      RetailCatalogsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CallCenterCatalogCoupons<DeSerializers>>;
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
         * Static representation of the {@link catalogCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_CODE: fieldBuilder.buildEnumField(
          'CatalogCode',
          McrTableAll,
          true
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
         * Static representation of the {@link catalogNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_NUMBER: fieldBuilder.buildEdmTypeField(
          'CatalogNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CallCenterCatalogCoupons)
      };
    }

    return this._schema;
  }
}
