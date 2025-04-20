/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BasePriceVersions } from './BasePriceVersions';
import { BasePriceVersionsRequestBuilder } from './BasePriceVersionsRequestBuilder';
import { NoYesCombo } from './NoYesCombo';
import { GupBasePriceVersionPriceBasis } from './GupBasePriceVersionPriceBasis';
import { NoYes } from './NoYes';
import { GupBasePriceVersionPriceRule } from './GupBasePriceVersionPriceRule';
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
export class BasePriceVersionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BasePriceVersions<DeSerializersT>, DeSerializersT>
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
  ): BasePriceVersionsApi<DeSerializersT> {
    return new BasePriceVersionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BasePriceVersions;

  requestBuilder(): BasePriceVersionsRequestBuilder<DeSerializersT> {
    return new BasePriceVersionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BasePriceVersions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BasePriceVersions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BasePriceVersions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BasePriceVersions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BasePriceVersions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VERSION_ID: OrderableEdmTypeField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BLOCK_CHANGE: EnumField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    DEFAULT_DATE: OrderableEdmTypeField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_BASIS: EnumField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      GupBasePriceVersionPriceBasis,
      true,
      true
    >;
    ALLOW_SALES: EnumField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_RULE: EnumField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      GupBasePriceVersionPriceRule,
      true,
      true
    >;
    LAST_ACTIVATION: OrderableEdmTypeField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALLOW_INVENTORY_COST: EnumField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_PURCH: EnumField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_UPDATE: OrderableEdmTypeField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCK_ACTIVATION: EnumField<
      BasePriceVersions<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BasePriceVersions<DeSerializers>>;
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
         * Static representation of the {@link versionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_ID: fieldBuilder.buildEdmTypeField(
          'VersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link blockChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_CHANGE: fieldBuilder.buildEnumField(
          'BlockChange',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link defaultDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link priceBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_BASIS: fieldBuilder.buildEnumField(
          'PriceBasis',
          GupBasePriceVersionPriceBasis,
          true
        ),
        /**
         * Static representation of the {@link allowSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SALES: fieldBuilder.buildEnumField('AllowSales', NoYes, true),
        /**
         * Static representation of the {@link priceRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_RULE: fieldBuilder.buildEnumField(
          'PriceRule',
          GupBasePriceVersionPriceRule,
          true
        ),
        /**
         * Static representation of the {@link lastActivation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_ACTIVATION: fieldBuilder.buildEdmTypeField(
          'LastActivation',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link allowInventoryCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_INVENTORY_COST: fieldBuilder.buildEnumField(
          'AllowInventoryCost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowPurch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_PURCH: fieldBuilder.buildEnumField('AllowPurch', NoYes, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link lastUpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_UPDATE: fieldBuilder.buildEdmTypeField(
          'LastUpdate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockActivation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_ACTIVATION: fieldBuilder.buildEnumField(
          'BlockActivation',
          NoYesCombo,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BasePriceVersions)
      };
    }

    return this._schema;
  }
}
