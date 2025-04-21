/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitCalculationRates } from './BenefitCalculationRates';
import { BenefitCalculationRatesRequestBuilder } from './BenefitCalculationRatesRequestBuilder';
import { BenefitCalculationRateDetailsDualWriteApi } from './BenefitCalculationRateDetailsDualWriteApi';
import { BenefitCalculationRateDetailsApi } from './BenefitCalculationRateDetailsApi';
import { PayrollTierType } from './PayrollTierType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitCalculationRatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitCalculationRates<DeSerializersT>, DeSerializersT>
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
  ): BenefitCalculationRatesApi<DeSerializersT> {
    return new BenefitCalculationRatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitCalculationRateDetailDualWrite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_CALCULATION_RATE_DETAIL_DUAL_WRITE: OneToManyLink<
      BenefitCalculationRates<DeSerializersT>,
      DeSerializersT,
      BenefitCalculationRateDetailsDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitCalculationRateDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_CALCULATION_RATE_DETAIL: OneToManyLink<
      BenefitCalculationRates<DeSerializersT>,
      DeSerializersT,
      BenefitCalculationRateDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitCalculationRateDetailsDualWriteApi<DeSerializersT>,
      BenefitCalculationRateDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_CALCULATION_RATE_DETAIL_DUAL_WRITE: new OneToManyLink(
        'BenefitCalculationRateDetailDualWrite',
        this,
        linkedApis[0]
      ),
      BENEFIT_CALCULATION_RATE_DETAIL: new OneToManyLink(
        'BenefitCalculationRateDetail',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitCalculationRates;

  requestBuilder(): BenefitCalculationRatesRequestBuilder<DeSerializersT> {
    return new BenefitCalculationRatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitCalculationRates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitCalculationRates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitCalculationRates<DeSerializersT>,
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
    typeof BenefitCalculationRates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitCalculationRates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      BenefitCalculationRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIER_TYPE: EnumField<
      BenefitCalculationRates<DeSerializers>,
      DeSerializersT,
      PayrollTierType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitCalculationRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitCalculationRateDetailDualWrite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_CALCULATION_RATE_DETAIL_DUAL_WRITE: OneToManyLink<
      BenefitCalculationRates<DeSerializersT>,
      DeSerializersT,
      BenefitCalculationRateDetailsDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitCalculationRateDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_CALCULATION_RATE_DETAIL: OneToManyLink<
      BenefitCalculationRates<DeSerializersT>,
      DeSerializersT,
      BenefitCalculationRateDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitCalculationRates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link tierType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIER_TYPE: fieldBuilder.buildEnumField(
          'TierType',
          PayrollTierType,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitCalculationRates)
      };
    }

    return this._schema;
  }
}
