/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmAddressCountryRegionTaxPays } from './LtmAddressCountryRegionTaxPays';
import { LtmAddressCountryRegionTaxPaysRequestBuilder } from './LtmAddressCountryRegionTaxPaysRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class LtmAddressCountryRegionTaxPaysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LtmAddressCountryRegionTaxPays<DeSerializersT>, DeSerializersT>
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
  ): LtmAddressCountryRegionTaxPaysApi<DeSerializersT> {
    return new LtmAddressCountryRegionTaxPaysApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmAddressCountryRegionTaxPays;

  requestBuilder(): LtmAddressCountryRegionTaxPaysRequestBuilder<DeSerializersT> {
    return new LtmAddressCountryRegionTaxPaysRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LtmAddressCountryRegionTaxPays<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmAddressCountryRegionTaxPays<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmAddressCountryRegionTaxPays<DeSerializersT>,
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
    typeof LtmAddressCountryRegionTaxPays,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmAddressCountryRegionTaxPays,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmAddressCountryRegionTaxPays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      LtmAddressCountryRegionTaxPays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_PAYER_TYPE_ID: OrderableEdmTypeField<
      LtmAddressCountryRegionTaxPays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_APPLICATION_ID: OrderableEdmTypeField<
      LtmAddressCountryRegionTaxPays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_DOC_TYPE_ID: OrderableEdmTypeField<
      LtmAddressCountryRegionTaxPays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_DOC_NUM: OrderableEdmTypeField<
      LtmAddressCountryRegionTaxPays<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmAddressCountryRegionTaxPays<DeSerializers>>;
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
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxPayerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PAYER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TaxPayerTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxApplicationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_APPLICATION_ID: fieldBuilder.buildEdmTypeField(
          'TaxApplicationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryDocTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_DOC_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CountryDocTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'CountryDocNum',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmAddressCountryRegionTaxPays)
      };
    }

    return this._schema;
  }
}
