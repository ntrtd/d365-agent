/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostConfigurationInputMeasurementBasisRules } from './CostConfigurationInputMeasurementBasisRules';
import { CostConfigurationInputMeasurementBasisRulesRequestBuilder } from './CostConfigurationInputMeasurementBasisRulesRequestBuilder';
import { CostConfigurationInputMeasurementBasis } from './CostConfigurationInputMeasurementBasis';
import { CostConfigurationInputMeasurementBasisExchangeRate } from './CostConfigurationInputMeasurementBasisExchangeRate';
import { NoYes } from './NoYes';
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
export class CostConfigurationInputMeasurementBasisRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostConfigurationInputMeasurementBasisRules<DeSerializersT>,
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
  ): CostConfigurationInputMeasurementBasisRulesApi<DeSerializersT> {
    return new CostConfigurationInputMeasurementBasisRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostConfigurationInputMeasurementBasisRules;

  requestBuilder(): CostConfigurationInputMeasurementBasisRulesRequestBuilder<DeSerializersT> {
    return new CostConfigurationInputMeasurementBasisRulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostConfigurationInputMeasurementBasisRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostConfigurationInputMeasurementBasisRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostConfigurationInputMeasurementBasisRules<DeSerializersT>,
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
    typeof CostConfigurationInputMeasurementBasisRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostConfigurationInputMeasurementBasisRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VALID_FROM: OrderableEdmTypeField<
      CostConfigurationInputMeasurementBasisRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INPUT_MEASUREMENT_BASIS_POLICY_NAME: OrderableEdmTypeField<
      CostConfigurationInputMeasurementBasisRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INPUT_MEASUREMENT_BASIS: EnumField<
      CostConfigurationInputMeasurementBasisRules<DeSerializers>,
      DeSerializersT,
      CostConfigurationInputMeasurementBasis,
      true,
      true
    >;
    EXCHANGE_RATE: EnumField<
      CostConfigurationInputMeasurementBasisRules<DeSerializers>,
      DeSerializersT,
      CostConfigurationInputMeasurementBasisExchangeRate,
      true,
      true
    >;
    PRICE_PER_MANUFACTURING_UNIT: EnumField<
      CostConfigurationInputMeasurementBasisRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      CostConfigurationInputMeasurementBasisRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_LIST_NAME: OrderableEdmTypeField<
      CostConfigurationInputMeasurementBasisRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      CostConfigurationInputMeasurementBasisRules<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link inputMeasurementBasisPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_MEASUREMENT_BASIS_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'InputMeasurementBasisPolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inputMeasurementBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_MEASUREMENT_BASIS: fieldBuilder.buildEnumField(
          'InputMeasurementBasis',
          CostConfigurationInputMeasurementBasis,
          true
        ),
        /**
         * Static representation of the {@link exchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE: fieldBuilder.buildEnumField(
          'ExchangeRate',
          CostConfigurationInputMeasurementBasisExchangeRate,
          true
        ),
        /**
         * Static representation of the {@link pricePerManufacturingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_PER_MANUFACTURING_UNIT: fieldBuilder.buildEnumField(
          'PricePerManufacturingUnit',
          NoYes,
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
         * Static representation of the {@link priceListName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_LIST_NAME: fieldBuilder.buildEdmTypeField(
          'PriceListName',
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
          CostConfigurationInputMeasurementBasisRules
        )
      };
    }

    return this._schema;
  }
}
