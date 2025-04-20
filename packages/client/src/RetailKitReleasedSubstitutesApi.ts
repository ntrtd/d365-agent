/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailKitReleasedSubstitutes } from './RetailKitReleasedSubstitutes';
import { RetailKitReleasedSubstitutesRequestBuilder } from './RetailKitReleasedSubstitutesRequestBuilder';
import { RetailKitComponentSubstitutesApi } from './RetailKitComponentSubstitutesApi';
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
export class RetailKitReleasedSubstitutesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailKitReleasedSubstitutes<DeSerializersT>, DeSerializersT>
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
  ): RetailKitReleasedSubstitutesApi<DeSerializersT> {
    return new RetailKitReleasedSubstitutesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailKitComponentSubstitute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT_SUBSTITUTE: OneToOneLink<
      RetailKitReleasedSubstitutes<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentSubstitutesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailKitComponentSubstitutesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_KIT_COMPONENT_SUBSTITUTE: new OneToOneLink(
        'RetailKitComponentSubstitute',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailKitReleasedSubstitutes;

  requestBuilder(): RetailKitReleasedSubstitutesRequestBuilder<DeSerializersT> {
    return new RetailKitReleasedSubstitutesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailKitReleasedSubstitutes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailKitReleasedSubstitutes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailKitReleasedSubstitutes<DeSerializersT>,
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
    typeof RetailKitReleasedSubstitutes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailKitReleasedSubstitutes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailKitReleasedSubstitutes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailKitReleasedSubstitutes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_COMPONENT_LINE_NUMBER: OrderableEdmTypeField<
      RetailKitReleasedSubstitutes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBSTITUTE_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailKitReleasedSubstitutes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBSTITUTE_CHARGE: OrderableEdmTypeField<
      RetailKitReleasedSubstitutes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailKitComponentSubstitute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_COMPONENT_SUBSTITUTE: OneToOneLink<
      RetailKitReleasedSubstitutes<DeSerializersT>,
      DeSerializersT,
      RetailKitComponentSubstitutesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailKitReleasedSubstitutes<DeSerializers>>;
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
         * Static representation of the {@link substituteProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSTITUTE_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubstituteProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link substituteCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSTITUTE_CHARGE: fieldBuilder.buildEdmTypeField(
          'SubstituteCharge',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailKitReleasedSubstitutes)
      };
    }

    return this._schema;
  }
}
