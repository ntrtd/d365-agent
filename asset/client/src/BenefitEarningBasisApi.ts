/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitEarningBasis } from './BenefitEarningBasis';
import { BenefitEarningBasisRequestBuilder } from './BenefitEarningBasisRequestBuilder';
import { BenefitsApi } from './BenefitsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BenefitEarningBasisApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitEarningBasis<DeSerializersT>, DeSerializersT>
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
  ): BenefitEarningBasisApi<DeSerializersT> {
    return new BenefitEarningBasisApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      BenefitEarningBasis<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [BenefitsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BenefitEarningBasis;

  requestBuilder(): BenefitEarningBasisRequestBuilder<DeSerializersT> {
    return new BenefitEarningBasisRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitEarningBasis<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitEarningBasis<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitEarningBasis<DeSerializersT>,
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
    typeof BenefitEarningBasis,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitEarningBasis,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EARNING_CODE_ID: OrderableEdmTypeField<
      BenefitEarningBasis<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BENEFIT_PLAN_ID: OrderableEdmTypeField<
      BenefitEarningBasis<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BENEFIT_OPTION_ID: OrderableEdmTypeField<
      BenefitEarningBasis<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      BenefitEarningBasis<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      BenefitEarningBasis<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      BenefitEarningBasis<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      BenefitEarningBasis<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitEarningBasis<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link benefitPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'BenefitPlanId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link benefitOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_OPTION_ID: fieldBuilder.buildEdmTypeField(
          'BenefitOptionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link effective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'Effective',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitEarningBasis)
      };
    }

    return this._schema;
  }
}
