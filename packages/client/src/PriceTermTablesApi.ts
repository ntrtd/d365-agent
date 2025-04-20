/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceTermTables } from './PriceTermTables';
import { PriceTermTablesRequestBuilder } from './PriceTermTablesRequestBuilder';
import { GupCalculationBasis } from './GupCalculationBasis';
import { NoYes } from './NoYes';
import { GupPriceTermCalculateMethod } from './GupPriceTermCalculateMethod';
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
export class PriceTermTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PriceTermTables<DeSerializersT>, DeSerializersT>
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
  ): PriceTermTablesApi<DeSerializersT> {
    return new PriceTermTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PriceTermTables;

  requestBuilder(): PriceTermTablesRequestBuilder<DeSerializersT> {
    return new PriceTermTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PriceTermTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PriceTermTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PriceTermTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PriceTermTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PriceTermTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PriceTermTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      PriceTermTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CALCULATION_BASIS: EnumField<
      PriceTermTables<DeSerializers>,
      DeSerializersT,
      GupCalculationBasis,
      true,
      true
    >;
    CALCULATE_BASE_PRICE_PURCHASE: EnumField<
      PriceTermTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_CODE: OrderableEdmTypeField<
      PriceTermTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATE_METHOD: EnumField<
      PriceTermTables<DeSerializers>,
      DeSerializersT,
      GupPriceTermCalculateMethod,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PriceTermTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATE_BASE_PRICE_INVENTORY: EnumField<
      PriceTermTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATION_SEQUENCE: OrderableEdmTypeField<
      PriceTermTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATE_BASE_PRICE_SALES: EnumField<
      PriceTermTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PriceTermTables<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link calculationBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_BASIS: fieldBuilder.buildEnumField(
          'CalculationBasis',
          GupCalculationBasis,
          true
        ),
        /**
         * Static representation of the {@link calculateBasePricePurchase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_BASE_PRICE_PURCHASE: fieldBuilder.buildEnumField(
          'CalculateBasePricePurchase',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link chargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'ChargeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculateMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_METHOD: fieldBuilder.buildEnumField(
          'CalculateMethod',
          GupPriceTermCalculateMethod,
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
        /**
         * Static representation of the {@link calculateBasePriceInventory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_BASE_PRICE_INVENTORY: fieldBuilder.buildEnumField(
          'CalculateBasePriceInventory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calculationSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'CalculationSequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calculateBasePriceSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_BASE_PRICE_SALES: fieldBuilder.buildEnumField(
          'CalculateBasePriceSales',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PriceTermTables)
      };
    }

    return this._schema;
  }
}
