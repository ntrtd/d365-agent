/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailKitComponentSubstitutes } from './RetailKitComponentSubstitutes';
import { RetailKitComponentSubstitutesRequestBuilder } from './RetailKitComponentSubstitutesRequestBuilder';
import { RetailKitReleasedSubstitutesApi } from './RetailKitReleasedSubstitutesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailKitComponentSubstitutesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailKitComponentSubstitutes<DeSerializersT>, DeSerializersT>
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
  ): RetailKitComponentSubstitutesApi<DeSerializersT> {
    return new RetailKitComponentSubstitutesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailKitReleasedSubstitute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_RELEASED_SUBSTITUTE: OneToManyLink<
      RetailKitComponentSubstitutes<DeSerializersT>,
      DeSerializersT,
      RetailKitReleasedSubstitutesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailKitComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT: OneToOneLink<
      RetailKitComponentSubstitutes<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailKitReleasedSubstitutesApi<DeSerializersT>,
      RetailKitComponentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_KIT_RELEASED_SUBSTITUTE: new OneToManyLink(
        'RetailKitReleasedSubstitute',
        this,
        linkedApis[0]
      ),
      RETAIL_KIT_COMPONENT: new OneToOneLink(
        'RetailKitComponent',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailKitComponentSubstitutes;

  requestBuilder(): RetailKitComponentSubstitutesRequestBuilder<DeSerializersT> {
    return new RetailKitComponentSubstitutesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailKitComponentSubstitutes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailKitComponentSubstitutes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailKitComponentSubstitutes<DeSerializersT>,
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
    typeof RetailKitComponentSubstitutes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailKitComponentSubstitutes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KIT_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailKitComponentSubstitutes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_COMPONENT_LINE_NUMBER: OrderableEdmTypeField<
      RetailKitComponentSubstitutes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBSTITUTE_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailKitComponentSubstitutes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_OF_MEASURE_SYMBOL: OrderableEdmTypeField<
      RetailKitComponentSubstitutes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      RetailKitComponentSubstitutes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitReleasedSubstitute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_RELEASED_SUBSTITUTE: OneToManyLink<
      RetailKitComponentSubstitutes<DeSerializersT>,
      DeSerializersT,
      RetailKitReleasedSubstitutesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailKitComponent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT: OneToOneLink<
      RetailKitComponentSubstitutes<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailKitComponentSubstitutes<DeSerializers>>;
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
         * Static representation of the {@link kitComponentLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_COMPONENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'KitComponentLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link substituteProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSTITUTE_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubstituteProductNumber',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailKitComponentSubstitutes)
      };
    }

    return this._schema;
  }
}
