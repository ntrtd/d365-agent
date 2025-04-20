/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MarginComponentPriceAdjustmentTierLines } from './MarginComponentPriceAdjustmentTierLines';
import { MarginComponentPriceAdjustmentTierLinesRequestBuilder } from './MarginComponentPriceAdjustmentTierLinesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class MarginComponentPriceAdjustmentTierLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MarginComponentPriceAdjustmentTierLines<DeSerializersT>,
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
  ): MarginComponentPriceAdjustmentTierLinesApi<DeSerializersT> {
    return new MarginComponentPriceAdjustmentTierLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MarginComponentPriceAdjustmentTierLines;

  requestBuilder(): MarginComponentPriceAdjustmentTierLinesRequestBuilder<DeSerializersT> {
    return new MarginComponentPriceAdjustmentTierLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MarginComponentPriceAdjustmentTierLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MarginComponentPriceAdjustmentTierLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MarginComponentPriceAdjustmentTierLines<DeSerializersT>,
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
    typeof MarginComponentPriceAdjustmentTierLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MarginComponentPriceAdjustmentTierLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentTierLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentTierLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QTY_LOWEST: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentTierLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRICE_DISC_PCT: OrderableEdmTypeField<
      MarginComponentPriceAdjustmentTierLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      MarginComponentPriceAdjustmentTierLines<DeSerializers>
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
         * Static representation of the {@link offerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_ID: fieldBuilder.buildEdmTypeField(
          'OfferId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link qtyLowest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_LOWEST: fieldBuilder.buildEdmTypeField(
          'QtyLowest',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link priceDiscPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DISC_PCT: fieldBuilder.buildEdmTypeField(
          'PriceDiscPct',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MarginComponentPriceAdjustmentTierLines)
      };
    }

    return this._schema;
  }
}
