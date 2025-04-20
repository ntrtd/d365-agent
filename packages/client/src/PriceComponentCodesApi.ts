/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceComponentCodes } from './PriceComponentCodes';
import { PriceComponentCodesRequestBuilder } from './PriceComponentCodesRequestBuilder';
import { GupPricingAttributeSourceLevel } from './GupPricingAttributeSourceLevel';
import { GupPriceComponent } from './GupPriceComponent';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';
import { NoYes } from './NoYes';
import { GupAutoChargeConcurrency } from './GupAutoChargeConcurrency';
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
export class PriceComponentCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PriceComponentCodes<DeSerializersT>, DeSerializersT>
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
  ): PriceComponentCodesApi<DeSerializersT> {
    return new PriceComponentCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PriceComponentCodes;

  requestBuilder(): PriceComponentCodesRequestBuilder<DeSerializersT> {
    return new PriceComponentCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PriceComponentCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PriceComponentCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PriceComponentCodes<DeSerializersT>,
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
    typeof PriceComponentCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PriceComponentCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_ATTRIBUTE_GROUP: OrderableEdmTypeField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_LEVEL: EnumField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      GupPricingAttributeSourceLevel,
      true,
      true
    >;
    PRICE_COMPONENT_CODE_GROUP: OrderableEdmTypeField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT: EnumField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      GupPriceComponent,
      true,
      true
    >;
    CONCURRENCY_MODE: EnumField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      RetailDiscountConcurrency,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HEADER_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: EnumField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_CHARGES_CONCURRENCY_MODE: EnumField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      GupAutoChargeConcurrency,
      true,
      true
    >;
    LINE_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: EnumField<
      PriceComponentCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PriceComponentCodes<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link priceAttributeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceAttributeGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_LEVEL: fieldBuilder.buildEnumField(
          'SourceLevel',
          GupPricingAttributeSourceLevel,
          true
        ),
        /**
         * Static representation of the {@link priceComponentCodeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT_CODE_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceComponentCodeGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT: fieldBuilder.buildEnumField(
          'PriceComponent',
          GupPriceComponent,
          true
        ),
        /**
         * Static representation of the {@link concurrencyMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCURRENCY_MODE: fieldBuilder.buildEnumField(
          'ConcurrencyMode',
          RetailDiscountConcurrency,
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
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link headerPriceAttributeGroupAllEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: fieldBuilder.buildEnumField(
          'HeaderPriceAttributeGroupAllEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link autoChargesConcurrencyMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_CHARGES_CONCURRENCY_MODE: fieldBuilder.buildEnumField(
          'AutoChargesConcurrencyMode',
          GupAutoChargeConcurrency,
          true
        ),
        /**
         * Static representation of the {@link linePriceAttributeGroupAllEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRICE_ATTRIBUTE_GROUP_ALL_ENABLED: fieldBuilder.buildEnumField(
          'LinePriceAttributeGroupAllEnabled',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PriceComponentCodes)
      };
    }

    return this._schema;
  }
}
