/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillAllocParameters } from './SubBillAllocParameters';
import { SubBillAllocParametersRequestBuilder } from './SubBillAllocParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { SubBillAllocStandaloneSellingPriceOrigin } from './SubBillAllocStandaloneSellingPriceOrigin';
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
export class SubBillAllocParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubBillAllocParameters<DeSerializersT>, DeSerializersT>
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
  ): SubBillAllocParametersApi<DeSerializersT> {
    return new SubBillAllocParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link subBillAllocDeferralRoundingAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_ALLOC_DEFERRAL_ROUNDING_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillAllocParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SUB_BILL_ALLOC_DEFERRAL_ROUNDING_ACCOUNT_COMBINATION: new OneToOneLink(
        'SubBillAllocDeferralRoundingAccountCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillAllocParameters;

  requestBuilder(): SubBillAllocParametersRequestBuilder<DeSerializersT> {
    return new SubBillAllocParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillAllocParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillAllocParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillAllocParameters<DeSerializersT>,
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
    typeof SubBillAllocParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillAllocParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillAllocParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STANDALONE_SELLING_PRICE_ORIGIN: EnumField<
      SubBillAllocParameters<DeSerializers>,
      DeSerializersT,
      SubBillAllocStandaloneSellingPriceOrigin,
      true,
      true
    >;
    DEFERRAL_ROUNDING_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillAllocParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillAllocDeferralRoundingAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_ALLOC_DEFERRAL_ROUNDING_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillAllocParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillAllocParameters<DeSerializers>>;
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
         * Static representation of the {@link standaloneSellingPriceOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDALONE_SELLING_PRICE_ORIGIN: fieldBuilder.buildEnumField(
          'StandaloneSellingPriceOrigin',
          SubBillAllocStandaloneSellingPriceOrigin,
          true
        ),
        /**
         * Static representation of the {@link deferralRoundingAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_ROUNDING_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DeferralRoundingAccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillAllocParameters)
      };
    }

    return this._schema;
  }
}
