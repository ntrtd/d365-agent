/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UnitOfMeasureConversions } from './UnitOfMeasureConversions';
import { UnitOfMeasureConversionsRequestBuilder } from './UnitOfMeasureConversionsRequestBuilder';
import { UnitOfMeasureConversionRounding } from './UnitOfMeasureConversionRounding';
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
export class UnitOfMeasureConversionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UnitOfMeasureConversions<DeSerializersT>, DeSerializersT>
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
  ): UnitOfMeasureConversionsApi<DeSerializersT> {
    return new UnitOfMeasureConversionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UnitOfMeasureConversions;

  requestBuilder(): UnitOfMeasureConversionsRequestBuilder<DeSerializersT> {
    return new UnitOfMeasureConversionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UnitOfMeasureConversions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      UnitOfMeasureConversions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UnitOfMeasureConversions<DeSerializersT>,
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
    typeof UnitOfMeasureConversions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UnitOfMeasureConversions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FROM_UNIT_SYMBOL: OrderableEdmTypeField<
      UnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_UNIT_SYMBOL: OrderableEdmTypeField<
      UnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INNER_OFFSET: OrderableEdmTypeField<
      UnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OUTER_OFFSET: OrderableEdmTypeField<
      UnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING: EnumField<
      UnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      UnitOfMeasureConversionRounding,
      true,
      true
    >;
    NUMERATOR: OrderableEdmTypeField<
      UnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FACTOR: OrderableEdmTypeField<
      UnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DENOMINATOR: OrderableEdmTypeField<
      UnitOfMeasureConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<UnitOfMeasureConversions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fromUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'FromUnitSymbol',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ToUnitSymbol',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link innerOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INNER_OFFSET: fieldBuilder.buildEdmTypeField(
          'InnerOffset',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link outerOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTER_OFFSET: fieldBuilder.buildEdmTypeField(
          'OuterOffset',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rounding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING: fieldBuilder.buildEnumField(
          'Rounding',
          UnitOfMeasureConversionRounding,
          true
        ),
        /**
         * Static representation of the {@link numerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMERATOR: fieldBuilder.buildEdmTypeField(
          'Numerator',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link factor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR: fieldBuilder.buildEdmTypeField('Factor', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link denominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'Denominator',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UnitOfMeasureConversions)
      };
    }

    return this._schema;
  }
}
