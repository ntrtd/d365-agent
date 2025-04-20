/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxPeriods } from './TaxPeriods';
import { TaxPeriodsRequestBuilder } from './TaxPeriodsRequestBuilder';
import { TaxAuthoritiesApi } from './TaxAuthoritiesApi';
import { TaxCodesApi } from './TaxCodesApi';
import { PeriodUnit } from './PeriodUnit';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TaxPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxPeriods<DeSerializersT>, DeSerializersT>
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
  ): TaxPeriodsApi<DeSerializersT> {
    return new TaxPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link taxAuthority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_AUTHORITY: OneToOneLink<
      TaxPeriods<DeSerializersT>,
      DeSerializersT,
      TaxAuthoritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE: OneToManyLink<
      TaxPeriods<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TaxAuthoritiesApi<DeSerializersT>, TaxCodesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TAX_AUTHORITY: new OneToOneLink('TaxAuthority', this, linkedApis[0]),
      TAX_CODE: new OneToManyLink('TaxCode', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = TaxPeriods;

  requestBuilder(): TaxPeriodsRequestBuilder<DeSerializersT> {
    return new TaxPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxPeriods<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxPeriods<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxPeriods, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxPeriods, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_PERIOD_ID: OrderableEdmTypeField<
      TaxPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      TaxPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      TaxPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PAYMENT_VERSION: OrderableEdmTypeField<
      TaxPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD_INTERVAL: EnumField<
      TaxPeriods<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    NUMBER_OF_UNIT: OrderableEdmTypeField<
      TaxPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_AUTHORITY_ID: OrderableEdmTypeField<
      TaxPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERM_ID: OrderableEdmTypeField<
      TaxPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxAuthority} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_AUTHORITY: OneToOneLink<
      TaxPeriods<DeSerializersT>,
      DeSerializersT,
      TaxAuthoritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE: OneToManyLink<
      TaxPeriods<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxPeriods<DeSerializers>>;
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
         * Static representation of the {@link taxPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'TaxPeriodId',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxPaymentVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PAYMENT_VERSION: fieldBuilder.buildEdmTypeField(
          'TaxPaymentVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link periodInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_INTERVAL: fieldBuilder.buildEnumField(
          'PeriodInterval',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link numberOfUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_UNIT: fieldBuilder.buildEdmTypeField(
          'NumberOfUnit',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxAuthorityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTHORITY_ID: fieldBuilder.buildEdmTypeField(
          'TaxAuthorityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERM_ID: fieldBuilder.buildEdmTypeField(
          'PaymentTermId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxPeriods)
      };
    }

    return this._schema;
  }
}
