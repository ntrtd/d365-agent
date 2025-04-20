/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeValuesV2 } from './TaxCodeValuesV2';
import { TaxCodeValuesV2RequestBuilder } from './TaxCodeValuesV2RequestBuilder';
import { TaxCodesApi } from './TaxCodesApi';
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
export class TaxCodeValuesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxCodeValuesV2<DeSerializersT>, DeSerializersT>
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
  ): TaxCodeValuesV2Api<DeSerializersT> {
    return new TaxCodeValuesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link taxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE: OneToOneLink<
      TaxCodeValuesV2<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [TaxCodesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TAX_CODE: new OneToOneLink('TaxCode', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = TaxCodeValuesV2;

  requestBuilder(): TaxCodeValuesV2RequestBuilder<DeSerializersT> {
    return new TaxCodeValuesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxCodeValuesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxCodeValuesV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxCodeValuesV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxCodeValuesV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxCodeValuesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE_ID: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MINIMUM_LIMIT: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_LIMIT: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUBSTITUTION_MARKUP_PERCENTAGE: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DUTY: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NON_DEDUCTIBLE_PERCENTAGE: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REDUCTION_PERCENTAGE: OrderableEdmTypeField<
      TaxCodeValuesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE: OneToOneLink<
      TaxCodeValuesV2<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxCodeValuesV2<DeSerializers>>;
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
         * Static representation of the {@link taxCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_ID: fieldBuilder.buildEdmTypeField(
          'TaxCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link minimumLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_LIMIT: fieldBuilder.buildEdmTypeField(
          'MinimumLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LIMIT: fieldBuilder.buildEdmTypeField(
          'MaximumLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link substitutionMarkupPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSTITUTION_MARKUP_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'SubstitutionMarkupPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link duty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUTY: fieldBuilder.buildEdmTypeField('Duty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link nonDeductiblePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_DEDUCTIBLE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'NonDeductiblePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reductionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCTION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ReductionPercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxCodeValuesV2)
      };
    }

    return this._schema;
  }
}
