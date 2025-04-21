/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustTaxesAreaV2 } from './CustTaxesAreaV2';
import { CustTaxesAreaV2RequestBuilder } from './CustTaxesAreaV2RequestBuilder';
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
export class CustTaxesAreaV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustTaxesAreaV2<DeSerializersT>, DeSerializersT>
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
  ): CustTaxesAreaV2Api<DeSerializersT> {
    return new CustTaxesAreaV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustTaxesAreaV2;

  requestBuilder(): CustTaxesAreaV2RequestBuilder<DeSerializersT> {
    return new CustTaxesAreaV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustTaxesAreaV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustTaxesAreaV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustTaxesAreaV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustTaxesAreaV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustTaxesAreaV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustTaxesAreaV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      CustTaxesAreaV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      CustTaxesAreaV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      CustTaxesAreaV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTY_ID: OrderableEdmTypeField<
      CustTaxesAreaV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      CustTaxesAreaV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_FREE_ZONE: EnumField<
      CustTaxesAreaV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustTaxesAreaV2<DeSerializers>>;
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
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
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
         * Static representation of the {@link countyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'CountyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField(
          'StateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxFreeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_FREE_ZONE: fieldBuilder.buildEnumField('TaxFreeZone', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustTaxesAreaV2)
      };
    }

    return this._schema;
  }
}
