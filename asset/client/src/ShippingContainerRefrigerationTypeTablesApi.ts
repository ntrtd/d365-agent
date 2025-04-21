/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShippingContainerRefrigerationTypeTables } from './ShippingContainerRefrigerationTypeTables';
import { ShippingContainerRefrigerationTypeTablesRequestBuilder } from './ShippingContainerRefrigerationTypeTablesRequestBuilder';
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
export class ShippingContainerRefrigerationTypeTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ShippingContainerRefrigerationTypeTables<DeSerializersT>,
      DeSerializersT
    >
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
  ): ShippingContainerRefrigerationTypeTablesApi<DeSerializersT> {
    return new ShippingContainerRefrigerationTypeTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShippingContainerRefrigerationTypeTables;

  requestBuilder(): ShippingContainerRefrigerationTypeTablesRequestBuilder<DeSerializersT> {
    return new ShippingContainerRefrigerationTypeTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ShippingContainerRefrigerationTypeTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShippingContainerRefrigerationTypeTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShippingContainerRefrigerationTypeTables<DeSerializersT>,
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
    typeof ShippingContainerRefrigerationTypeTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShippingContainerRefrigerationTypeTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShippingContainerRefrigerationTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFRIGERATION_TYPE_ID: OrderableEdmTypeField<
      ShippingContainerRefrigerationTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFRIGERATION_TYPE_DESCRIPTION: OrderableEdmTypeField<
      ShippingContainerRefrigerationTypeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      ShippingContainerRefrigerationTypeTables<DeSerializers>
    >;
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
         * Static representation of the {@link refrigerationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFRIGERATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'RefrigerationTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link refrigerationTypeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFRIGERATION_TYPE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RefrigerationTypeDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShippingContainerRefrigerationTypeTables)
      };
    }

    return this._schema;
  }
}
