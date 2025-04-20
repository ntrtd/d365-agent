/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseIndexRates } from './LeaseIndexRates';
import { LeaseIndexRatesRequestBuilder } from './LeaseIndexRatesRequestBuilder';
import { AssetLeaseIndexRateMethod } from './AssetLeaseIndexRateMethod';
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
export class LeaseIndexRatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaseIndexRates<DeSerializersT>, DeSerializersT>
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
  ): LeaseIndexRatesApi<DeSerializersT> {
    return new LeaseIndexRatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseIndexRates;

  requestBuilder(): LeaseIndexRatesRequestBuilder<DeSerializersT> {
    return new LeaseIndexRatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseIndexRates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaseIndexRates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeaseIndexRates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeaseIndexRates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseIndexRates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INDEX_RATE_TYPE_NAME: OrderableEdmTypeField<
      LeaseIndexRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeaseIndexRates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INDEX_RATE_METHOD: EnumField<
      LeaseIndexRates<DeSerializers>,
      DeSerializersT,
      AssetLeaseIndexRateMethod,
      true,
      true
    >;
    INDEX_RATE_TYPE_DESCRIPTION: OrderableEdmTypeField<
      LeaseIndexRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDEX_RATE: OrderableEdmTypeField<
      LeaseIndexRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LeaseIndexRates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link indexRateTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'IndexRateTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link indexRateMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE_METHOD: fieldBuilder.buildEnumField(
          'IndexRateMethod',
          AssetLeaseIndexRateMethod,
          true
        ),
        /**
         * Static representation of the {@link indexRateTypeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE_TYPE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'IndexRateTypeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link indexRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE: fieldBuilder.buildEdmTypeField(
          'IndexRate',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseIndexRates)
      };
    }

    return this._schema;
  }
}
