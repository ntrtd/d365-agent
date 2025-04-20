/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailRoundingMethods } from './RetailRoundingMethods';
import { RetailRoundingMethodsRequestBuilder } from './RetailRoundingMethodsRequestBuilder';
import { RetailRoundingTypeBase } from './RetailRoundingTypeBase';
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
export class RetailRoundingMethodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailRoundingMethods<DeSerializersT>, DeSerializersT>
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
  ): RetailRoundingMethodsApi<DeSerializersT> {
    return new RetailRoundingMethodsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailRoundingMethods;

  requestBuilder(): RetailRoundingMethodsRequestBuilder<DeSerializersT> {
    return new RetailRoundingMethodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailRoundingMethods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailRoundingMethods<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailRoundingMethods<DeSerializersT>,
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
    typeof RetailRoundingMethods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailRoundingMethods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailRoundingMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUNDING_METHOD_ID: OrderableEdmTypeField<
      RetailRoundingMethods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MINIMUM: OrderableEdmTypeField<
      RetailRoundingMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_ADDED_AFTER: OrderableEdmTypeField<
      RetailRoundingMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_TYPE: EnumField<
      RetailRoundingMethods<DeSerializers>,
      DeSerializersT,
      RetailRoundingTypeBase,
      true,
      true
    >;
    PRECISION: OrderableEdmTypeField<
      RetailRoundingMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_ADDED_BEFORE: OrderableEdmTypeField<
      RetailRoundingMethods<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailRoundingMethods<DeSerializers>>;
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
         * Static representation of the {@link roundingMethodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD_ID: fieldBuilder.buildEdmTypeField(
          'RoundingMethodId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link minimum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM: fieldBuilder.buildEdmTypeField(
          'Minimum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountAddedAfter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_ADDED_AFTER: fieldBuilder.buildEdmTypeField(
          'AmountAddedAfter',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_TYPE: fieldBuilder.buildEnumField(
          'RoundingType',
          RetailRoundingTypeBase,
          true
        ),
        /**
         * Static representation of the {@link precision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRECISION: fieldBuilder.buildEdmTypeField(
          'Precision',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountAddedBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_ADDED_BEFORE: fieldBuilder.buildEdmTypeField(
          'AmountAddedBefore',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailRoundingMethods)
      };
    }

    return this._schema;
  }
}
