/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailKitReleasedComponents } from './RetailKitReleasedComponents';
import { RetailKitReleasedComponentsRequestBuilder } from './RetailKitReleasedComponentsRequestBuilder';
import { RetailKitComponentsApi } from './RetailKitComponentsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailKitReleasedComponentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailKitReleasedComponents<DeSerializersT>, DeSerializersT>
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
  ): RetailKitReleasedComponentsApi<DeSerializersT> {
    return new RetailKitReleasedComponentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailKitComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT: OneToOneLink<
      RetailKitReleasedComponents<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailKitComponentsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_KIT_COMPONENT: new OneToOneLink(
        'RetailKitComponent',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailKitReleasedComponents;

  requestBuilder(): RetailKitReleasedComponentsRequestBuilder<DeSerializersT> {
    return new RetailKitReleasedComponentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailKitReleasedComponents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailKitReleasedComponents<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailKitReleasedComponents<DeSerializersT>,
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
    typeof RetailKitReleasedComponents,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailKitReleasedComponents,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailKitReleasedComponents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailKitReleasedComponents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_COMPONENT_LINE_NUMBER: OrderableEdmTypeField<
      RetailKitReleasedComponents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_PRICE: OrderableEdmTypeField<
      RetailKitReleasedComponents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    KIT_PRICE: OrderableEdmTypeField<
      RetailKitReleasedComponents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailKitComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT: OneToOneLink<
      RetailKitReleasedComponents<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailKitReleasedComponents<DeSerializers>>;
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
         * Static representation of the {@link kitProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'KitProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link kitComponentLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_COMPONENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'KitComponentLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link basePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_PRICE: fieldBuilder.buildEdmTypeField(
          'BasePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link kitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_PRICE: fieldBuilder.buildEdmTypeField(
          'KitPrice',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailKitReleasedComponents)
      };
    }

    return this._schema;
  }
}
