/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GroupRetailTaxFilters } from './GroupRetailTaxFilters';
import { GroupRetailTaxFiltersRequestBuilder } from './GroupRetailTaxFiltersRequestBuilder';
import { TaxGroupsApi } from './TaxGroupsApi';
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
export class GroupRetailTaxFiltersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GroupRetailTaxFilters<DeSerializersT>, DeSerializersT>
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
  ): GroupRetailTaxFiltersApi<DeSerializersT> {
    return new GroupRetailTaxFiltersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      GroupRetailTaxFilters<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [TaxGroupsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TAX_GROUP: new OneToOneLink('TaxGroup', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = GroupRetailTaxFilters;

  requestBuilder(): GroupRetailTaxFiltersRequestBuilder<DeSerializersT> {
    return new GroupRetailTaxFiltersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GroupRetailTaxFilters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<GroupRetailTaxFilters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GroupRetailTaxFilters<DeSerializersT>,
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
    typeof GroupRetailTaxFilters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GroupRetailTaxFilters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      GroupRetailTaxFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_GROUP_ID: OrderableEdmTypeField<
      GroupRetailTaxFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CITY: OrderableEdmTypeField<
      GroupRetailTaxFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      GroupRetailTaxFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      GroupRetailTaxFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISTRICT: OrderableEdmTypeField<
      GroupRetailTaxFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      GroupRetailTaxFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      GroupRetailTaxFilters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISTRICT_ID: OrderableEdmTypeField<
      GroupRetailTaxFilters<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      GroupRetailTaxFilters<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GroupRetailTaxFilters<DeSerializers>>;
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
         * Static representation of the {@link taxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TaxGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', false),
        /**
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CountryRegion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', false),
        /**
         * Static representation of the {@link district} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT: fieldBuilder.buildEdmTypeField(
          'District',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', false),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ZipCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link districtId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT_ID: fieldBuilder.buildEdmTypeField(
          'DistrictId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GroupRetailTaxFilters)
      };
    }

    return this._schema;
  }
}
