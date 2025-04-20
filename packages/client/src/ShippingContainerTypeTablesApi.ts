/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShippingContainerTypeTables } from './ShippingContainerTypeTables';
import { ShippingContainerTypeTablesRequestBuilder } from './ShippingContainerTypeTablesRequestBuilder';
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
export class ShippingContainerTypeTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShippingContainerTypeTables<DeSerializersT>, DeSerializersT>
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
  ): ShippingContainerTypeTablesApi<DeSerializersT> {
    return new ShippingContainerTypeTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShippingContainerTypeTables;

  requestBuilder(): ShippingContainerTypeTablesRequestBuilder<DeSerializersT> {
    return new ShippingContainerTypeTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShippingContainerTypeTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShippingContainerTypeTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShippingContainerTypeTables<DeSerializersT>,
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
    typeof ShippingContainerTypeTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShippingContainerTypeTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShippingContainerTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_CONTAINER_TYPE_ID: OrderableEdmTypeField<
      ShippingContainerTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPPING_CONTAINER_TYPE_DESCRIPTION: OrderableEdmTypeField<
      ShippingContainerTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_SHIPPING_CONTAINER_VOLUME: OrderableEdmTypeField<
      ShippingContainerTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_SHIPPING_CONTAINER_WEIGHT: OrderableEdmTypeField<
      ShippingContainerTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SHIPPING_CONTAINER_RETURNABLE: EnumField<
      ShippingContainerTypeTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ShippingContainerTypeTables<DeSerializers>>;
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
         * Static representation of the {@link shippingContainerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CONTAINER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingContainerTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shippingContainerTypeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CONTAINER_TYPE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ShippingContainerTypeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumShippingContainerVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_SHIPPING_CONTAINER_VOLUME: fieldBuilder.buildEdmTypeField(
          'MaximumShippingContainerVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumShippingContainerWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_SHIPPING_CONTAINER_WEIGHT: fieldBuilder.buildEdmTypeField(
          'MaximumShippingContainerWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isShippingContainerReturnable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHIPPING_CONTAINER_RETURNABLE: fieldBuilder.buildEnumField(
          'IsShippingContainerReturnable',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShippingContainerTypeTables)
      };
    }

    return this._schema;
  }
}
