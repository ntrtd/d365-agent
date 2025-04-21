/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesAutomaticSalesDocumentHeaderChargeTables } from './SalesAutomaticSalesDocumentHeaderChargeTables';
import { SalesAutomaticSalesDocumentHeaderChargeTablesRequestBuilder } from './SalesAutomaticSalesDocumentHeaderChargeTablesRequestBuilder';
import { NoYes } from './NoYes';
import { GupGroupAll } from './GupGroupAll';
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
export class SalesAutomaticSalesDocumentHeaderChargeTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializersT>,
      DeSerializersT
    >
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
  ): SalesAutomaticSalesDocumentHeaderChargeTablesApi<DeSerializersT> {
    return new SalesAutomaticSalesDocumentHeaderChargeTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesAutomaticSalesDocumentHeaderChargeTables;

  requestBuilder(): SalesAutomaticSalesDocumentHeaderChargeTablesRequestBuilder<DeSerializersT> {
    return new SalesAutomaticSalesDocumentHeaderChargeTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializersT>,
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
    typeof SalesAutomaticSalesDocumentHeaderChargeTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesAutomaticSalesDocumentHeaderChargeTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_14: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT_CODE_NAME: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_10: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_EXCLUSION: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_NAME_HEADER: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_9: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_ADVANCED_CHARGES_DELIVERY_PRORATE: EnumField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER_8: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_TYPE_HEADER: EnumField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      GupGroupAll,
      true,
      true
    >;
    HEADER_13: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_1: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_3: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_2: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_5: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_12: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_4: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_7: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_6: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_15: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_11: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMBINATION_HEADER_STRUCTURE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      SalesAutomaticSalesDocumentHeaderChargeTables<DeSerializers>
    >;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link header14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_14: fieldBuilder.buildEdmTypeField(
          'Header14',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceComponentCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'PriceComponentCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_10: fieldBuilder.buildEdmTypeField(
          'Header10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerExclusion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_EXCLUSION: fieldBuilder.buildEdmTypeField(
          'HeaderExclusion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceAttributeGroupNameHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_NAME_HEADER: fieldBuilder.buildEdmTypeField(
          'PriceAttributeGroupNameHeader',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_9: fieldBuilder.buildEdmTypeField('Header9', 'Edm.String', true),
        /**
         * Static representation of the {@link retailAdvancedChargesDeliveryProrate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_ADVANCED_CHARGES_DELIVERY_PRORATE: fieldBuilder.buildEnumField(
          'RetailAdvancedChargesDeliveryProrate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link header8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_8: fieldBuilder.buildEdmTypeField('Header8', 'Edm.String', true),
        /**
         * Static representation of the {@link priceAttributeGroupTypeHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_TYPE_HEADER: fieldBuilder.buildEnumField(
          'PriceAttributeGroupTypeHeader',
          GupGroupAll,
          true
        ),
        /**
         * Static representation of the {@link header13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_13: fieldBuilder.buildEdmTypeField(
          'Header13',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_1: fieldBuilder.buildEdmTypeField('Header1', 'Edm.String', true),
        /**
         * Static representation of the {@link header3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_3: fieldBuilder.buildEdmTypeField('Header3', 'Edm.String', true),
        /**
         * Static representation of the {@link header2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_2: fieldBuilder.buildEdmTypeField('Header2', 'Edm.String', true),
        /**
         * Static representation of the {@link header5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_5: fieldBuilder.buildEdmTypeField('Header5', 'Edm.String', true),
        /**
         * Static representation of the {@link header12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_12: fieldBuilder.buildEdmTypeField(
          'Header12',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_4: fieldBuilder.buildEdmTypeField('Header4', 'Edm.String', true),
        /**
         * Static representation of the {@link header7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_7: fieldBuilder.buildEdmTypeField('Header7', 'Edm.String', true),
        /**
         * Static representation of the {@link header6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_6: fieldBuilder.buildEdmTypeField('Header6', 'Edm.String', true),
        /**
         * Static representation of the {@link header15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_15: fieldBuilder.buildEdmTypeField(
          'Header15',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_11: fieldBuilder.buildEdmTypeField(
          'Header11',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link combinationHeaderStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINATION_HEADER_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'CombinationHeaderStructure',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          SalesAutomaticSalesDocumentHeaderChargeTables
        )
      };
    }

    return this._schema;
  }
}
