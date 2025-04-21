/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KittingParameters } from './KittingParameters';
import { KittingParametersRequestBuilder } from './KittingParametersRequestBuilder';
import { TableGroupAll } from './TableGroupAll';
import { NoYes } from './NoYes';
import { KittingCheckLoad } from './KittingCheckLoad';
import { KittingCheckPickingListRegistration } from './KittingCheckPickingListRegistration';
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
export class KittingParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KittingParameters<DeSerializersT>, DeSerializersT>
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
  ): KittingParametersApi<DeSerializersT> {
    return new KittingParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = KittingParameters;

  requestBuilder(): KittingParametersRequestBuilder<DeSerializersT> {
    return new KittingParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KittingParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<KittingParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<KittingParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof KittingParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KittingParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FOR: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USE_KIT_TRADE_AGREEMENT: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARTIAL_DELIVERY: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_KIT_FINANCIAL_DIMENSIONS: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WHS_COMPLETE_KIT_CHECK: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      KittingCheckLoad,
      true,
      true
    >;
    SHOW_KIT_PRICE_ON_KIT: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESERVE_ITEMS_AUTOMATICALLY: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PART_PRICE: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANUAL_POSTING: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPLETE_KIT_CHECK: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      KittingCheckPickingListRegistration,
      true,
      true
    >;
    PARTIAL_RETURN: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESERVE_COMPLETE_KITS: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SET_UP_PRODUCT_DIMENSIONS: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SET_UP_STORAGE_DIMENSIONS: EnumField<
      KittingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<KittingParameters<DeSerializers>>;
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
         * Static representation of the {@link validFor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FOR: fieldBuilder.buildEnumField('ValidFor', TableGroupAll, true),
        /**
         * Static representation of the {@link itemRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_RELATION: fieldBuilder.buildEdmTypeField(
          'ItemRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link useKitTradeAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_KIT_TRADE_AGREEMENT: fieldBuilder.buildEnumField(
          'UseKitTradeAgreement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link partialDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTIAL_DELIVERY: fieldBuilder.buildEnumField(
          'PartialDelivery',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useKitFinancialDimensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_KIT_FINANCIAL_DIMENSIONS: fieldBuilder.buildEnumField(
          'UseKitFinancialDimensions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link whsCompleteKitCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHS_COMPLETE_KIT_CHECK: fieldBuilder.buildEnumField(
          'WHSCompleteKitCheck',
          KittingCheckLoad,
          true
        ),
        /**
         * Static representation of the {@link showKitPriceOnKit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_KIT_PRICE_ON_KIT: fieldBuilder.buildEnumField(
          'ShowKitPriceOnKit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reserveItemsAutomatically} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVE_ITEMS_AUTOMATICALLY: fieldBuilder.buildEnumField(
          'ReserveItemsAutomatically',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link partPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PART_PRICE: fieldBuilder.buildEnumField('PartPrice', NoYes, true),
        /**
         * Static representation of the {@link manualPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_POSTING: fieldBuilder.buildEnumField(
          'ManualPosting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link completeKitCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETE_KIT_CHECK: fieldBuilder.buildEnumField(
          'CompleteKitCheck',
          KittingCheckPickingListRegistration,
          true
        ),
        /**
         * Static representation of the {@link partialReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTIAL_RETURN: fieldBuilder.buildEnumField(
          'PartialReturn',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reserveCompleteKits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVE_COMPLETE_KITS: fieldBuilder.buildEnumField(
          'ReserveCompleteKits',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link setUpProductDimensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_UP_PRODUCT_DIMENSIONS: fieldBuilder.buildEnumField(
          'SetUpProductDimensions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link setUpStorageDimensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SET_UP_STORAGE_DIMENSIONS: fieldBuilder.buildEnumField(
          'SetUpStorageDimensions',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KittingParameters)
      };
    }

    return this._schema;
  }
}
