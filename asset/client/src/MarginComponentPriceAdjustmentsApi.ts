/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MarginComponentPriceAdjustments } from './MarginComponentPriceAdjustments';
import { MarginComponentPriceAdjustmentsRequestBuilder } from './MarginComponentPriceAdjustmentsRequestBuilder';
import { RetailDiscountConcurrency } from './RetailDiscountConcurrency';
import { NoYes } from './NoYes';
import { RetailDateValidationTypeBase } from './RetailDateValidationTypeBase';
import { GupGroupAll } from './GupGroupAll';
import { GupPriceTermCalculateMethod } from './GupPriceTermCalculateMethod';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';
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
export class MarginComponentPriceAdjustmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MarginComponentPriceAdjustments<DeSerializersT>, DeSerializersT>
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
  ): MarginComponentPriceAdjustmentsApi<DeSerializersT> {
    return new MarginComponentPriceAdjustmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MarginComponentPriceAdjustments;

  requestBuilder(): MarginComponentPriceAdjustmentsRequestBuilder<DeSerializersT> {
    return new MarginComponentPriceAdjustmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MarginComponentPriceAdjustments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MarginComponentPriceAdjustments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MarginComponentPriceAdjustments<DeSerializersT>,
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
    typeof MarginComponentPriceAdjustments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MarginComponentPriceAdjustments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCURRENCY_MODE: EnumField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailDiscountConcurrency,
      true,
      true
    >;
    HEADER_15: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_10: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_PERCENT_VALUE: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    HEADER_12: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT_CODE_NAME: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TIER_CONFIGURATION_ENABLED: EnumField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_VALIDATION_TYPE: EnumField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailDateValidationTypeBase,
      true,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_TYPE: EnumField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      GupGroupAll,
      true,
      true
    >;
    COMBINATION_HEADER_STRUCTURE: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_9: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_8: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_11: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIER_PRICE_ADJUSTMENT_METHOD: EnumField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      GupPriceTermCalculateMethod,
      true,
      true
    >;
    DISCLAIMER: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_1: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATION_PERIOD_ID: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_3: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_14: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_2: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_5: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_4: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_13: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_7: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_6: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISCOUNT_CODE_REQUIRED: EnumField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATUS: EnumField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      RetailDisabledEnabled,
      true,
      true
    >;
    PRINT_DESCRIPTION_ON_FISCAL_RECEIPT: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_EXCLUSION: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_ATTRIBUTE_GROUP_NAME: OrderableEdmTypeField<
      MarginComponentPriceAdjustments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MarginComponentPriceAdjustments<DeSerializers>>;
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
         * Static representation of the {@link offerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_ID: fieldBuilder.buildEdmTypeField(
          'OfferId',
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
         * Static representation of the {@link header15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_15: fieldBuilder.buildEdmTypeField(
          'Header15',
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
         * Static representation of the {@link discountPercentValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_PERCENT_VALUE: fieldBuilder.buildEdmTypeField(
          'DiscountPercentValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
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
         * Static representation of the {@link isTierConfigurationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TIER_CONFIGURATION_ENABLED: fieldBuilder.buildEnumField(
          'IsTierConfigurationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dateValidationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_VALIDATION_TYPE: fieldBuilder.buildEnumField(
          'DateValidationType',
          RetailDateValidationTypeBase,
          true
        ),
        /**
         * Static representation of the {@link priceAttributeGroupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_TYPE: fieldBuilder.buildEnumField(
          'PriceAttributeGroupType',
          GupGroupAll,
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
        /**
         * Static representation of the {@link header9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_9: fieldBuilder.buildEdmTypeField('Header9', 'Edm.String', true),
        /**
         * Static representation of the {@link header8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_8: fieldBuilder.buildEdmTypeField('Header8', 'Edm.String', true),
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
         * Static representation of the {@link tierPriceAdjustmentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIER_PRICE_ADJUSTMENT_METHOD: fieldBuilder.buildEnumField(
          'TierPriceAdjustmentMethod',
          GupPriceTermCalculateMethod,
          true
        ),
        /**
         * Static representation of the {@link disclaimer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCLAIMER: fieldBuilder.buildEdmTypeField(
          'Disclaimer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_1: fieldBuilder.buildEdmTypeField('Header1', 'Edm.String', true),
        /**
         * Static representation of the {@link validationPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'ValidationPeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link header3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_3: fieldBuilder.buildEdmTypeField('Header3', 'Edm.String', true),
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
         * Static representation of the {@link header2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_2: fieldBuilder.buildEdmTypeField('Header2', 'Edm.String', true),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link header5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_5: fieldBuilder.buildEdmTypeField('Header5', 'Edm.String', true),
        /**
         * Static representation of the {@link header4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_4: fieldBuilder.buildEdmTypeField('Header4', 'Edm.String', true),
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
         * Static representation of the {@link isDiscountCodeRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISCOUNT_CODE_REQUIRED: fieldBuilder.buildEnumField(
          'IsDiscountCodeRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailDisabledEnabled,
          true
        ),
        /**
         * Static representation of the {@link printDescriptionOnFiscalReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_DESCRIPTION_ON_FISCAL_RECEIPT: fieldBuilder.buildEdmTypeField(
          'PrintDescriptionOnFiscalReceipt',
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
         * Static representation of the {@link priceAttributeGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ATTRIBUTE_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'PriceAttributeGroupName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MarginComponentPriceAdjustments)
      };
    }

    return this._schema;
  }
}
