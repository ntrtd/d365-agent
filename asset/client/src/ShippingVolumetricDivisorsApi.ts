/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShippingVolumetricDivisors } from './ShippingVolumetricDivisors';
import { ShippingVolumetricDivisorsRequestBuilder } from './ShippingVolumetricDivisorsRequestBuilder';
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
export class ShippingVolumetricDivisorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShippingVolumetricDivisors<DeSerializersT>, DeSerializersT>
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
  ): ShippingVolumetricDivisorsApi<DeSerializersT> {
    return new ShippingVolumetricDivisorsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShippingVolumetricDivisors;

  requestBuilder(): ShippingVolumetricDivisorsRequestBuilder<DeSerializersT> {
    return new ShippingVolumetricDivisorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShippingVolumetricDivisors<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShippingVolumetricDivisors<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShippingVolumetricDivisors<DeSerializersT>,
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
    typeof ShippingVolumetricDivisors,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShippingVolumetricDivisors,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShippingVolumetricDivisors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ShippingVolumetricDivisors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANDED_COST_TYPE_CODE: OrderableEdmTypeField<
      ShippingVolumetricDivisors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_SHIPPING_PORT_CODE: OrderableEdmTypeField<
      ShippingVolumetricDivisors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOLUMETRIC_DIVISOR: OrderableEdmTypeField<
      ShippingVolumetricDivisors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ShippingVolumetricDivisors<DeSerializers>>;
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
         * Static representation of the {@link shippingVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingVendorAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link landedCostTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANDED_COST_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'LandedCostTypeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromShippingPortCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_SHIPPING_PORT_CODE: fieldBuilder.buildEdmTypeField(
          'FromShippingPortCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link volumetricDivisor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUMETRIC_DIVISOR: fieldBuilder.buildEdmTypeField(
          'VolumetricDivisor',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShippingVolumetricDivisors)
      };
    }

    return this._schema;
  }
}
