/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailKitComponents } from './RetailKitComponents';
import { RetailKitComponentsRequestBuilder } from './RetailKitComponentsRequestBuilder';
import { RetailKitComponentSubstitutesApi } from './RetailKitComponentSubstitutesApi';
import { RetailKitReleasedComponentsApi } from './RetailKitReleasedComponentsApi';
import { ProductVariantsApi } from './ProductVariantsApi';
import { RetailKitsApi } from './RetailKitsApi';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailKitComponentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailKitComponents<DeSerializersT>, DeSerializersT>
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
  ): RetailKitComponentsApi<DeSerializersT> {
    return new RetailKitComponentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailKitComponentSubstitute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT_SUBSTITUTE: OneToManyLink<
      RetailKitComponents<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentSubstitutesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitReleasedComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_RELEASED_COMPONENT: OneToManyLink<
      RetailKitComponents<DeSerializersT>,
      DeSerializersT,
      RetailKitReleasedComponentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToOneLink<
      RetailKitComponents<DeSerializersT>,
      DeSerializersT,
      ProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailKit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT: OneToOneLink<
      RetailKitComponents<DeSerializersT>,
      DeSerializersT,
      RetailKitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailKitComponentSubstitutesApi<DeSerializersT>,
      RetailKitReleasedComponentsApi<DeSerializersT>,
      ProductVariantsApi<DeSerializersT>,
      RetailKitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_KIT_COMPONENT_SUBSTITUTE: new OneToManyLink(
        'RetailKitComponentSubstitute',
        this,
        linkedApis[0]
      ),
      RETAIL_KIT_RELEASED_COMPONENT: new OneToManyLink(
        'RetailKitReleasedComponent',
        this,
        linkedApis[1]
      ),
      PRODUCT_VARIANT: new OneToOneLink('ProductVariant', this, linkedApis[2]),
      RETAIL_KIT: new OneToOneLink('RetailKit', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = RetailKitComponents;

  requestBuilder(): RetailKitComponentsRequestBuilder<DeSerializersT> {
    return new RetailKitComponentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailKitComponents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailKitComponents<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailKitComponents<DeSerializersT>,
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
    typeof RetailKitComponents,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailKitComponents,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KIT_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailKitComponents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailKitComponents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailKitComponents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      RetailKitComponents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMPONENT_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailKitComponents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DO_NOT_SHOW_AT_REGISTER: EnumField<
      RetailKitComponents<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitComponentSubstitute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT_SUBSTITUTE: OneToManyLink<
      RetailKitComponents<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentSubstitutesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitReleasedComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_RELEASED_COMPONENT: OneToManyLink<
      RetailKitComponents<DeSerializersT>,
      DeSerializersT,
      RetailKitReleasedComponentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToOneLink<
      RetailKitComponents<DeSerializersT>,
      DeSerializersT,
      ProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailKit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT: OneToOneLink<
      RetailKitComponents<DeSerializersT>,
      DeSerializersT,
      RetailKitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailKitComponents<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitOfMeasureSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasureSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link componentProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ComponentProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link doNotShowAtRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_NOT_SHOW_AT_REGISTER: fieldBuilder.buildEnumField(
          'DoNotShowAtRegister',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailKitComponents)
      };
    }

    return this._schema;
  }
}
