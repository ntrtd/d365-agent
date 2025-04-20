/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsRoundingRules } from './BenefitsRoundingRules';
import { BenefitsRoundingRulesRequestBuilder } from './BenefitsRoundingRulesRequestBuilder';
import { BenefitRoundingScenario } from './BenefitRoundingScenario';
import { RoundOffType } from './RoundOffType';
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
export class BenefitsRoundingRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsRoundingRules<DeSerializersT>, DeSerializersT>
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
  ): BenefitsRoundingRulesApi<DeSerializersT> {
    return new BenefitsRoundingRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BenefitsRoundingRules;

  requestBuilder(): BenefitsRoundingRulesRequestBuilder<DeSerializersT> {
    return new BenefitsRoundingRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsRoundingRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsRoundingRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsRoundingRules<DeSerializersT>,
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
    typeof BenefitsRoundingRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsRoundingRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BenefitsRoundingRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCENARIO: EnumField<
      BenefitsRoundingRules<DeSerializers>,
      DeSerializersT,
      BenefitRoundingScenario,
      true,
      true
    >;
    ROUND_TO_THE_NEAREST: OrderableEdmTypeField<
      BenefitsRoundingRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUNDING_FORM: EnumField<
      BenefitsRoundingRules<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BenefitsRoundingRules<DeSerializers>>;
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
         * Static representation of the {@link scenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCENARIO: fieldBuilder.buildEnumField(
          'Scenario',
          BenefitRoundingScenario,
          true
        ),
        /**
         * Static representation of the {@link roundToTheNearest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_TO_THE_NEAREST: fieldBuilder.buildEdmTypeField(
          'RoundToTheNearest',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundingForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_FORM: fieldBuilder.buildEnumField(
          'RoundingForm',
          RoundOffType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsRoundingRules)
      };
    }

    return this._schema;
  }
}
