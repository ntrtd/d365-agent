/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTenderDiscounts } from './RetailTenderDiscounts';
import { RetailTenderDiscountsRequestBuilder } from './RetailTenderDiscountsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { RetailDateValidationTypeBase } from './RetailDateValidationTypeBase';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTenderDiscountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTenderDiscounts<DeSerializersT>, DeSerializersT>
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
  ): RetailTenderDiscountsApi<DeSerializersT> {
    return new RetailTenderDiscountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RetailTenderDiscounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailTenderDiscounts;

  requestBuilder(): RetailTenderDiscountsRequestBuilder<DeSerializersT> {
    return new RetailTenderDiscountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTenderDiscounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailTenderDiscounts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTenderDiscounts<DeSerializersT>,
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
    typeof RetailTenderDiscounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTenderDiscounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TENDER_TYPE_ID: OrderableEdmTypeField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CARD_TYPE_ID: OrderableEdmTypeField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_VALIDATION_TYPE: EnumField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      RetailDateValidationTypeBase,
      true,
      true
    >;
    VALIDATION_PERIOD_ID: OrderableEdmTypeField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      RetailTenderDiscounts<DeSerializers>,
      DeSerializersT,
      RetailDisabledEnabled,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RetailTenderDiscounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTenderDiscounts<DeSerializers>>;
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
         * Static representation of the {@link tenderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TenderTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link discountLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DiscountLedgerDimensionDisplayValue',
          'Edm.String',
          true
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
         * Static representation of the {@link cardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CardTypeId',
          'Edm.String',
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
         * Static representation of the {@link validationPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATION_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'ValidationPeriodId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailDisabledEnabled,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTenderDiscounts)
      };
    }

    return this._schema;
  }
}
