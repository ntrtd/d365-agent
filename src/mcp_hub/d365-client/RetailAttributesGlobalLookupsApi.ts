/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailAttributesGlobalLookups } from './RetailAttributesGlobalLookups';
import { RetailAttributesGlobalLookupsRequestBuilder } from './RetailAttributesGlobalLookupsRequestBuilder';
import { NoYes } from './NoYes';
import { RetailPriceKeyingRequirement } from './RetailPriceKeyingRequirement';
import { RetailQtyKeyingRequirement } from './RetailQtyKeyingRequirement';
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
export class RetailAttributesGlobalLookupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailAttributesGlobalLookups<DeSerializersT>, DeSerializersT>
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
  ): RetailAttributesGlobalLookupsApi<DeSerializersT> {
    return new RetailAttributesGlobalLookupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailAttributesGlobalLookups;

  requestBuilder(): RetailAttributesGlobalLookupsRequestBuilder<DeSerializersT> {
    return new RetailAttributesGlobalLookupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailAttributesGlobalLookups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailAttributesGlobalLookups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailAttributesGlobalLookups<DeSerializersT>,
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
    typeof RetailAttributesGlobalLookups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailAttributesGlobalLookups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POS_ALLOW_NEGATIVE_QUANTITY: EnumField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VARIANT_SIZE_GROUP: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_TRACKING_DIMENSION: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BAR_CODE_USE_EAN_STANDARD: EnumField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_TO_BE_BLOCKED: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POS_IS_SCALE_ITEM: EnumField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POS_IS_ZERO_PRICE_VALID: EnumField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_TO_ACTIVATE_ITEM: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VARIANT_COLOR_GROUP: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_STORAGE_DIMENSION: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_STYLE_GROUP: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POS_MUST_KEY_IN_COMMENT: EnumField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROUP_PRODUCT_DIMENSION: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCKED_AT_REGISTER: EnumField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POS_KEYING_IN_PRICE: EnumField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      RetailPriceKeyingRequirement,
      true,
      true
    >;
    DATE_BLOCKED: OrderableEdmTypeField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POS_KEYING_IN_QUANTITY: EnumField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      RetailQtyKeyingRequirement,
      true,
      true
    >;
    POS_DISALLOW_DISCOUNT: EnumField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POS_DISALLOW_MANUAL_DISCOUNT: EnumField<
      RetailAttributesGlobalLookups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailAttributesGlobalLookups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductCategoryHierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductCategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link posAllowNegativeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_ALLOW_NEGATIVE_QUANTITY: fieldBuilder.buildEnumField(
          'POSAllowNegativeQuantity',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link variantSizeGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_SIZE_GROUP: fieldBuilder.buildEdmTypeField(
          'VariantSizeGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupTrackingDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_TRACKING_DIMENSION: fieldBuilder.buildEdmTypeField(
          'GroupTrackingDimension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barCodeUseEanStandard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE_USE_EAN_STANDARD: fieldBuilder.buildEnumField(
          'BarCodeUseEANStandard',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dateToBeBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TO_BE_BLOCKED: fieldBuilder.buildEdmTypeField(
          'DateToBeBlocked',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link posIsScaleItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_IS_SCALE_ITEM: fieldBuilder.buildEnumField(
          'POSIsScaleItem',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link posIsZeroPriceValid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_IS_ZERO_PRICE_VALID: fieldBuilder.buildEnumField(
          'POSIsZeroPriceValid',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dateToActivateItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_TO_ACTIVATE_ITEM: fieldBuilder.buildEdmTypeField(
          'DateToActivateItem',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link variantColorGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_COLOR_GROUP: fieldBuilder.buildEdmTypeField(
          'VariantColorGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupStorageDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_STORAGE_DIMENSION: fieldBuilder.buildEdmTypeField(
          'GroupStorageDimension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variantStyleGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_STYLE_GROUP: fieldBuilder.buildEdmTypeField(
          'VariantStyleGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posMustKeyInComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_MUST_KEY_IN_COMMENT: fieldBuilder.buildEnumField(
          'POSMustKeyInComment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link groupProductDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_PRODUCT_DIMENSION: fieldBuilder.buildEdmTypeField(
          'GroupProductDimension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockedAtRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCKED_AT_REGISTER: fieldBuilder.buildEnumField(
          'BlockedAtRegister',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link posKeyingInPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_KEYING_IN_PRICE: fieldBuilder.buildEnumField(
          'POSKeyingInPrice',
          RetailPriceKeyingRequirement,
          true
        ),
        /**
         * Static representation of the {@link dateBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_BLOCKED: fieldBuilder.buildEdmTypeField(
          'DateBlocked',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link posKeyingInQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_KEYING_IN_QUANTITY: fieldBuilder.buildEnumField(
          'POSKeyingInQuantity',
          RetailQtyKeyingRequirement,
          true
        ),
        /**
         * Static representation of the {@link posDisallowDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_DISALLOW_DISCOUNT: fieldBuilder.buildEnumField(
          'POSDisallowDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link posDisallowManualDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_DISALLOW_MANUAL_DISCOUNT: fieldBuilder.buildEnumField(
          'POSDisallowManualDiscount',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailAttributesGlobalLookups)
      };
    }

    return this._schema;
  }
}
