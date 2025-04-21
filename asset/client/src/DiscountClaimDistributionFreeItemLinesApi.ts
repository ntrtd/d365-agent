/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountClaimDistributionFreeItemLines } from './DiscountClaimDistributionFreeItemLines';
import { DiscountClaimDistributionFreeItemLinesRequestBuilder } from './DiscountClaimDistributionFreeItemLinesRequestBuilder';
import { GupDiscountClaimCalcType } from './GupDiscountClaimCalcType';
import { GupDiscountClaimPostingProfileType } from './GupDiscountClaimPostingProfileType';
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
export class DiscountClaimDistributionFreeItemLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DiscountClaimDistributionFreeItemLines<DeSerializersT>,
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
  ): DiscountClaimDistributionFreeItemLinesApi<DeSerializersT> {
    return new DiscountClaimDistributionFreeItemLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DiscountClaimDistributionFreeItemLines;

  requestBuilder(): DiscountClaimDistributionFreeItemLinesRequestBuilder<DeSerializersT> {
    return new DiscountClaimDistributionFreeItemLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DiscountClaimDistributionFreeItemLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscountClaimDistributionFreeItemLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscountClaimDistributionFreeItemLines<DeSerializersT>,
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
    typeof DiscountClaimDistributionFreeItemLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscountClaimDistributionFreeItemLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FREE_ITEM_ID: OrderableEdmTypeField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FREE_ITEM_GROUP: OrderableEdmTypeField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT: OrderableEdmTypeField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VARIANT: OrderableEdmTypeField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALC_TYPE: EnumField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      GupDiscountClaimCalcType,
      true,
      true
    >;
    POSTING_PROFILE_TYPE: EnumField<
      DiscountClaimDistributionFreeItemLines<DeSerializers>,
      DeSerializersT,
      GupDiscountClaimPostingProfileType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      DiscountClaimDistributionFreeItemLines<DeSerializers>
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
         * Static representation of the {@link freeItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'FreeItemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link freeItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'FreeItemGroup',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link product} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT: fieldBuilder.buildEdmTypeField('Product', 'Edm.String', false),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link variant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT: fieldBuilder.buildEdmTypeField('Variant', 'Edm.String', false),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link calcType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALC_TYPE: fieldBuilder.buildEnumField(
          'CalcType',
          GupDiscountClaimCalcType,
          true
        ),
        /**
         * Static representation of the {@link postingProfileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_TYPE: fieldBuilder.buildEnumField(
          'PostingProfileType',
          GupDiscountClaimPostingProfileType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscountClaimDistributionFreeItemLines)
      };
    }

    return this._schema;
  }
}
