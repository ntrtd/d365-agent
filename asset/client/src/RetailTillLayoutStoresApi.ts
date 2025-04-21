/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTillLayoutStores } from './RetailTillLayoutStores';
import { RetailTillLayoutStoresRequestBuilder } from './RetailTillLayoutStoresRequestBuilder';
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
export class RetailTillLayoutStoresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTillLayoutStores<DeSerializersT>, DeSerializersT>
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
  ): RetailTillLayoutStoresApi<DeSerializersT> {
    return new RetailTillLayoutStoresApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTillLayoutStores;

  requestBuilder(): RetailTillLayoutStoresRequestBuilder<DeSerializersT> {
    return new RetailTillLayoutStoresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTillLayoutStores<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTillLayoutStores<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTillLayoutStores<DeSerializersT>,
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
    typeof RetailTillLayoutStores,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTillLayoutStores,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_ID: OrderableEdmTypeField<
      RetailTillLayoutStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTillLayoutStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTillLayoutStores<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link layoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'LayoutId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTillLayoutStores)
      };
    }

    return this._schema;
  }
}
