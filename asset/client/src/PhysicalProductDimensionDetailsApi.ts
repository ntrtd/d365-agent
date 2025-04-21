/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PhysicalProductDimensionDetails } from './PhysicalProductDimensionDetails';
import { PhysicalProductDimensionDetailsRequestBuilder } from './PhysicalProductDimensionDetailsRequestBuilder';
import { ProductsV2Api } from './ProductsV2Api';
import { UnitsOfMeasureApi } from './UnitsOfMeasureApi';
import { EcoResPhysicalDimensionType } from './EcoResPhysicalDimensionType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PhysicalProductDimensionDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PhysicalProductDimensionDetails<DeSerializersT>, DeSerializersT>
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
  ): PhysicalProductDimensionDetailsApi<DeSerializersT> {
    return new PhysicalProductDimensionDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_V_2: OneToOneLink<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link physicalUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHYSICAL_UNIT_OF_MEASURE: OneToOneLink<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link volumeUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOLUME_UNIT_OF_MEASURE: OneToOneLink<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link massDefinedUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MASS_DEFINED_UNIT_OF_MEASURE: OneToOneLink<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lengthUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LENGTH_UNIT_OF_MEASURE: OneToOneLink<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductsV2Api<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>,
      UnitsOfMeasureApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_V_2: new OneToOneLink('ProductV2', this, linkedApis[0]),
      PHYSICAL_UNIT_OF_MEASURE: new OneToOneLink(
        'PhysicalUnitOfMeasure',
        this,
        linkedApis[1]
      ),
      VOLUME_UNIT_OF_MEASURE: new OneToOneLink(
        'VolumeUnitOfMeasure',
        this,
        linkedApis[2]
      ),
      MASS_DEFINED_UNIT_OF_MEASURE: new OneToOneLink(
        'MassDefinedUnitOfMeasure',
        this,
        linkedApis[3]
      ),
      LENGTH_UNIT_OF_MEASURE: new OneToOneLink(
        'LengthUnitOfMeasure',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = PhysicalProductDimensionDetails;

  requestBuilder(): PhysicalProductDimensionDetailsRequestBuilder<DeSerializersT> {
    return new PhysicalProductDimensionDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PhysicalProductDimensionDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PhysicalProductDimensionDetails<DeSerializersT>,
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
    typeof PhysicalProductDimensionDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PhysicalProductDimensionDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      PhysicalProductDimensionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_TYPE: EnumField<
      PhysicalProductDimensionDetails<DeSerializers>,
      DeSerializersT,
      EcoResPhysicalDimensionType,
      true,
      true
    >;
    PHYSICAL_UNIT_SYMBOL: OrderableEdmTypeField<
      PhysicalProductDimensionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PHYSICAL_DEPTH: OrderableEdmTypeField<
      PhysicalProductDimensionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MASS_UNIT_SYMBOL: OrderableEdmTypeField<
      PhysicalProductDimensionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LENGTH_UNIT_SYMBOL: OrderableEdmTypeField<
      PhysicalProductDimensionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_WIDTH: OrderableEdmTypeField<
      PhysicalProductDimensionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_WEIGHT: OrderableEdmTypeField<
      PhysicalProductDimensionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_HEIGHT: OrderableEdmTypeField<
      PhysicalProductDimensionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOLUME_UNIT_SYMBOL: OrderableEdmTypeField<
      PhysicalProductDimensionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_V_2: OneToOneLink<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link physicalUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHYSICAL_UNIT_OF_MEASURE: OneToOneLink<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link volumeUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VOLUME_UNIT_OF_MEASURE: OneToOneLink<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link massDefinedUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MASS_DEFINED_UNIT_OF_MEASURE: OneToOneLink<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link lengthUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LENGTH_UNIT_OF_MEASURE: OneToOneLink<
      PhysicalProductDimensionDetails<DeSerializersT>,
      DeSerializersT,
      UnitsOfMeasureApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PhysicalProductDimensionDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dimensionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_TYPE: fieldBuilder.buildEnumField(
          'DimensionType',
          EcoResPhysicalDimensionType,
          true
        ),
        /**
         * Static representation of the {@link physicalUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PhysicalUnitSymbol',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link physicalDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_DEPTH: fieldBuilder.buildEdmTypeField(
          'PhysicalDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link massUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASS_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'MassUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lengthUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'LengthUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_WIDTH: fieldBuilder.buildEdmTypeField(
          'PhysicalWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link physicalWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_WEIGHT: fieldBuilder.buildEdmTypeField(
          'PhysicalWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link physicalHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_HEIGHT: fieldBuilder.buildEdmTypeField(
          'PhysicalHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link volumeUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'VolumeUnitSymbol',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PhysicalProductDimensionDetails)
      };
    }

    return this._schema;
  }
}
