/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GupPriceMarginComponentSetups } from './GupPriceMarginComponentSetups';
import { GupPriceMarginComponentSetupsRequestBuilder } from './GupPriceMarginComponentSetupsRequestBuilder';
import { NoYes } from './NoYes';
import { GupPriceComponent } from './GupPriceComponent';
import { GupDiscountConcurrencyModeAcrossPriority } from './GupDiscountConcurrencyModeAcrossPriority';
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
export class GupPriceMarginComponentSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<GupPriceMarginComponentSetups<DeSerializersT>, DeSerializersT>
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
  ): GupPriceMarginComponentSetupsApi<DeSerializersT> {
    return new GupPriceMarginComponentSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GupPriceMarginComponentSetups;

  requestBuilder(): GupPriceMarginComponentSetupsRequestBuilder<DeSerializersT> {
    return new GupPriceMarginComponentSetupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    GupPriceMarginComponentSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GupPriceMarginComponentSetups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GupPriceMarginComponentSetups<DeSerializersT>,
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
    typeof GupPriceMarginComponentSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GupPriceMarginComponentSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_TREE_NAME: OrderableEdmTypeField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_COMPONENT_CODE_NAME: OrderableEdmTypeField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POST_IN_LEDGER: EnumField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_NAME: OrderableEdmTypeField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_COMPONENT: EnumField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      GupPriceComponent,
      true,
      true
    >;
    FLEXIBLE: EnumField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COMPOUNDCALCULATION_BASIS: EnumField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONCURRENCY_MODE_ACROSS_PRIORITY: EnumField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      GupDiscountConcurrencyModeAcrossPriority,
      true,
      true
    >;
    CALCULATION_SEQUENCE: OrderableEdmTypeField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_MANDATORY: EnumField<
      GupPriceMarginComponentSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<GupPriceMarginComponentSetups<DeSerializers>>;
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
         * Static representation of the {@link priceTreeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TREE_NAME: fieldBuilder.buildEdmTypeField(
          'PriceTreeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceComponentCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_COMPONENT_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'PriceComponentCodeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link postInLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_IN_LEDGER: fieldBuilder.buildEnumField(
          'PostInLedger',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingProfileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_NAME: fieldBuilder.buildEdmTypeField(
          'PostingProfileName',
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
         * Static representation of the {@link flexible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLEXIBLE: fieldBuilder.buildEnumField('Flexible', NoYes, true),
        /**
         * Static representation of the {@link compoundcalculationBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPOUNDCALCULATION_BASIS: fieldBuilder.buildEnumField(
          'CompoundcalculationBasis',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link concurrencyModeAcrossPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCURRENCY_MODE_ACROSS_PRIORITY: fieldBuilder.buildEnumField(
          'ConcurrencyModeAcrossPriority',
          GupDiscountConcurrencyModeAcrossPriority,
          true
        ),
        /**
         * Static representation of the {@link calculationSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'CalculationSequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MANDATORY: fieldBuilder.buildEnumField('IsMandatory', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GupPriceMarginComponentSetups)
      };
    }

    return this._schema;
  }
}
