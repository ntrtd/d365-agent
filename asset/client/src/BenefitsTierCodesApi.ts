/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsTierCodes } from './BenefitsTierCodes';
import { BenefitsTierCodesRequestBuilder } from './BenefitsTierCodesRequestBuilder';
import { BenefitsRateTiersApi } from './BenefitsRateTiersApi';
import { BenefitsRateDoubleTiersApi } from './BenefitsRateDoubleTiersApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsTierCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsTierCodes<DeSerializersT>, DeSerializersT>
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
  ): BenefitsTierCodesApi<DeSerializersT> {
    return new BenefitsTierCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_TIERS: OneToManyLink<
      BenefitsTierCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateDoubleTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_DOUBLE_TIERS: OneToManyLink<
      BenefitsTierCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsRateDoubleTiersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsRateTiersApi<DeSerializersT>,
      BenefitsRateDoubleTiersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_RATE_TIERS: new OneToManyLink(
        'BenefitRateTiers',
        this,
        linkedApis[0]
      ),
      BENEFIT_RATE_DOUBLE_TIERS: new OneToManyLink(
        'BenefitRateDoubleTiers',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BenefitsTierCodes;

  requestBuilder(): BenefitsTierCodesRequestBuilder<DeSerializersT> {
    return new BenefitsTierCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsTierCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsTierCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BenefitsTierCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BenefitsTierCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsTierCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TIER_CODE: OrderableEdmTypeField<
      BenefitsTierCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsTierCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_TIERS: OneToManyLink<
      BenefitsTierCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsRateTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitRateDoubleTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_RATE_DOUBLE_TIERS: OneToManyLink<
      BenefitsTierCodes<DeSerializersT>,
      DeSerializersT,
      BenefitsRateDoubleTiersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsTierCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link tierCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIER_CODE: fieldBuilder.buildEdmTypeField(
          'TierCode',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsTierCodes)
      };
    }

    return this._schema;
  }
}
