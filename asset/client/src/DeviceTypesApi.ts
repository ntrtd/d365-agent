/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeviceTypes } from './DeviceTypes';
import { DeviceTypesRequestBuilder } from './DeviceTypesRequestBuilder';
import { RetailTillLayoutZonesApi } from './RetailTillLayoutZonesApi';
import { RetailDesignerFormEnum } from './RetailDesignerFormEnum';
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
export class DeviceTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeviceTypes<DeSerializersT>, DeSerializersT>
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
  ): DeviceTypesApi<DeSerializersT> {
    return new DeviceTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link deviceTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEVICE_TYPES: OneToManyLink<
      DeviceTypes<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutZonesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailTillLayoutZonesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DEVICE_TYPES: new OneToManyLink('DeviceTypes', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = DeviceTypes;

  requestBuilder(): DeviceTypesRequestBuilder<DeSerializersT> {
    return new DeviceTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeviceTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DeviceTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DeviceTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DeviceTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DeviceTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TYPE: OrderableEdmTypeField<
      DeviceTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DeviceTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESIGNER_FORM: EnumField<
      DeviceTypes<DeSerializers>,
      DeSerializersT,
      RetailDesignerFormEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link deviceTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEVICE_TYPES: OneToManyLink<
      DeviceTypes<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutZonesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DeviceTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.Int32', false),
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
         * Static representation of the {@link designerForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESIGNER_FORM: fieldBuilder.buildEnumField(
          'DesignerForm',
          RetailDesignerFormEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeviceTypes)
      };
    }

    return this._schema;
  }
}
