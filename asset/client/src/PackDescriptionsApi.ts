/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PackDescriptions } from './PackDescriptions';
import { PackDescriptionsRequestBuilder } from './PackDescriptionsRequestBuilder';
import { HmimPackCalculation } from './HmimPackCalculation';
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
export class PackDescriptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PackDescriptions<DeSerializersT>, DeSerializersT>
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
  ): PackDescriptionsApi<DeSerializersT> {
    return new PackDescriptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PackDescriptions;

  requestBuilder(): PackDescriptionsRequestBuilder<DeSerializersT> {
    return new PackDescriptionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PackDescriptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PackDescriptions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PackDescriptions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PackDescriptions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PackDescriptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PACK_CODE: OrderableEdmTypeField<
      PackDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALCULATION_UOM: OrderableEdmTypeField<
      PackDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION: EnumField<
      PackDescriptions<DeSerializers>,
      DeSerializersT,
      HmimPackCalculation,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PackDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PackDescriptions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link packCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_CODE: fieldBuilder.buildEdmTypeField(
          'PackCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link calculationUom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_UOM: fieldBuilder.buildEdmTypeField(
          'CalculationUOM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION: fieldBuilder.buildEnumField(
          'Calculation',
          HmimPackCalculation,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PackDescriptions)
      };
    }

    return this._schema;
  }
}
