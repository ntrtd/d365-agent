/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VatNumTables } from './VatNumTables';
import { VatNumTablesRequestBuilder } from './VatNumTablesRequestBuilder';
import { LegalEntitiesApi } from './LegalEntitiesApi';
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
export class VatNumTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VatNumTables<DeSerializersT>, DeSerializersT>
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
  ): VatNumTablesApi<DeSerializersT> {
    return new VatNumTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link legalEntityImportVatNumTaxVatNum} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY_IMPORT_VAT_NUM_TAX_VAT_NUM: OneToManyLink<
      VatNumTables<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link legalEntityVatNumTaxVatNum} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY_VAT_NUM_TAX_VAT_NUM: OneToManyLink<
      VatNumTables<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LegalEntitiesApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEGAL_ENTITY_IMPORT_VAT_NUM_TAX_VAT_NUM: new OneToManyLink(
        'LegalEntityImportVATNumTaxVATNum',
        this,
        linkedApis[0]
      ),
      LEGAL_ENTITY_VAT_NUM_TAX_VAT_NUM: new OneToManyLink(
        'LegalEntityVATNumTaxVATNum',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = VatNumTables;

  requestBuilder(): VatNumTablesRequestBuilder<DeSerializersT> {
    return new VatNumTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VatNumTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VatNumTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VatNumTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VatNumTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VatNumTables, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VatNumTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAT_NUM: OrderableEdmTypeField<
      VatNumTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      VatNumTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      VatNumTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link legalEntityImportVatNumTaxVatNum} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY_IMPORT_VAT_NUM_TAX_VAT_NUM: OneToManyLink<
      VatNumTables<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link legalEntityVatNumTaxVatNum} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY_VAT_NUM_TAX_VAT_NUM: OneToManyLink<
      VatNumTables<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VatNumTables<DeSerializers>>;
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
         * Static representation of the {@link vatNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_NUM: fieldBuilder.buildEdmTypeField('VATNum', 'Edm.String', false),
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VatNumTables)
      };
    }

    return this._schema;
  }
}
