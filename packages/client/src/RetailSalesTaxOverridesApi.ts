/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailSalesTaxOverrides } from './RetailSalesTaxOverrides';
import { RetailSalesTaxOverridesRequestBuilder } from './RetailSalesTaxOverridesRequestBuilder';
import { RetailTaxOverrideType } from './RetailTaxOverrideType';
import { RetailOverrideFrom } from './RetailOverrideFrom';
import { RetailTaxOverrideBy } from './RetailTaxOverrideBy';
import { RetailOverrideTo } from './RetailOverrideTo';
import { EnableDisable } from './EnableDisable';
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
export class RetailSalesTaxOverridesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailSalesTaxOverrides<DeSerializersT>, DeSerializersT>
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
  ): RetailSalesTaxOverridesApi<DeSerializersT> {
    return new RetailSalesTaxOverridesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailSalesTaxOverrides;

  requestBuilder(): RetailSalesTaxOverridesRequestBuilder<DeSerializersT> {
    return new RetailSalesTaxOverridesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailSalesTaxOverrides<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailSalesTaxOverrides<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailSalesTaxOverrides<DeSerializersT>,
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
    typeof RetailSalesTaxOverrides,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailSalesTaxOverrides,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_TAX_GROUP: OrderableEdmTypeField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TAX_GROUP: OrderableEdmTypeField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERRIDE_TYPE: EnumField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      RetailTaxOverrideType,
      true,
      true
    >;
    OVERRIDE_FROM: EnumField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      RetailOverrideFrom,
      true,
      true
    >;
    OVERRIDE_BY: EnumField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      RetailTaxOverrideBy,
      true,
      true
    >;
    OVERRIDE_TO: EnumField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      RetailOverrideTo,
      true,
      true
    >;
    ADDITIONAL_DESCRIPTION: OrderableEdmTypeField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      EnableDisable,
      true,
      true
    >;
    SOURCE_ITEM_TAX_GROUP: OrderableEdmTypeField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_ITEM_TAX_GROUP: OrderableEdmTypeField<
      RetailSalesTaxOverrides<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailSalesTaxOverrides<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'DestinationTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SourceTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overrideType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_TYPE: fieldBuilder.buildEnumField(
          'OverrideType',
          RetailTaxOverrideType,
          true
        ),
        /**
         * Static representation of the {@link overrideFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_FROM: fieldBuilder.buildEnumField(
          'OverrideFrom',
          RetailOverrideFrom,
          true
        ),
        /**
         * Static representation of the {@link overrideBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_BY: fieldBuilder.buildEnumField(
          'OverrideBy',
          RetailTaxOverrideBy,
          true
        ),
        /**
         * Static representation of the {@link overrideTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_TO: fieldBuilder.buildEnumField(
          'OverrideTo',
          RetailOverrideTo,
          true
        ),
        /**
         * Static representation of the {@link additionalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AdditionalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', EnableDisable, true),
        /**
         * Static representation of the {@link sourceItemTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ITEM_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SourceItemTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationItemTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_ITEM_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'DestinationItemTaxGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailSalesTaxOverrides)
      };
    }

    return this._schema;
  }
}
