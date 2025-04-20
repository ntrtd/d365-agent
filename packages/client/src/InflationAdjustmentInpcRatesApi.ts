/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InflationAdjustmentInpcRates } from './InflationAdjustmentInpcRates';
import { InflationAdjustmentInpcRatesRequestBuilder } from './InflationAdjustmentInpcRatesRequestBuilder';
import { MonthsOfYear } from './MonthsOfYear';
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
export class InflationAdjustmentInpcRatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InflationAdjustmentInpcRates<DeSerializersT>, DeSerializersT>
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
  ): InflationAdjustmentInpcRatesApi<DeSerializersT> {
    return new InflationAdjustmentInpcRatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InflationAdjustmentInpcRates;

  requestBuilder(): InflationAdjustmentInpcRatesRequestBuilder<DeSerializersT> {
    return new InflationAdjustmentInpcRatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InflationAdjustmentInpcRates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InflationAdjustmentInpcRates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InflationAdjustmentInpcRates<DeSerializersT>,
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
    typeof InflationAdjustmentInpcRates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InflationAdjustmentInpcRates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InflationAdjustmentInpcRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    YEAR: OrderableEdmTypeField<
      InflationAdjustmentInpcRates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONTH: EnumField<
      InflationAdjustmentInpcRates<DeSerializers>,
      DeSerializersT,
      MonthsOfYear,
      true,
      true
    >;
    INFLATION_RATE: OrderableEdmTypeField<
      InflationAdjustmentInpcRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<InflationAdjustmentInpcRates<DeSerializers>>;
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
         * Static representation of the {@link year} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR: fieldBuilder.buildEdmTypeField('Year', 'Edm.Int32', false),
        /**
         * Static representation of the {@link month} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH: fieldBuilder.buildEnumField('Month', MonthsOfYear, true),
        /**
         * Static representation of the {@link inflationRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFLATION_RATE: fieldBuilder.buildEdmTypeField(
          'InflationRate',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InflationAdjustmentInpcRates)
      };
    }

    return this._schema;
  }
}
